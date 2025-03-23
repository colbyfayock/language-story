import path from "node:path";
import dotenv from "dotenv";
import locale from "locale-codes";
import type { Attachment } from "resend";

import type { LanguageConfig } from "./config";
import { resend } from "./resend";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

if (typeof process.env.MAIL_TO !== "string") {
  throw new Error("Please set MAIL_TO");
}

if (typeof process.env.MAIL_FROM !== "string") {
  throw new Error("Please set MAIL_FROM");
}

/**
 * mailStory
 */

interface MailStoryOptions {
  config: LanguageConfig;
  to: string;
  text: string;
  audio?: Buffer;
}

export async function mailStory({ config, to, text, audio }: MailStoryOptions) {
  const attachments: Array<Attachment> = [];

  if (audio) {
    attachments.push({
      content: audio,
      filename: "audio-story.mp3",
    });
  }

  const { error, data } = await resend.emails.send({
    from: `Language Story <${process.env.MAIL_FROM}>`,
    subject: `${locale.getByTag(config.languageTarget)?.name} Story of the Day`,
    to: [to],
    html: text,
    attachments,
  });

  if (error) {
    throw new Error(error?.name);
  }

  return data;
}
