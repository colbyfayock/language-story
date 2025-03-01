import dotenv from 'dotenv';
import { type Attachment } from 'resend';

import { config } from './config';
import { resend } from './resend';

dotenv.config();

if (typeof process.env.MAIL_TO !== 'string' ) {
  throw new Error('Please set MAIL_TO')
}

if (typeof process.env.MAIL_FROM !== 'string' ) {
  throw new Error('Please set MAIL_FROM')
}

/**
 * mailStory
 */

interface MailStoryOptions {
  text: string;
  audio?: Buffer<ArrayBuffer>;
}

export async function mailStory({ text, audio }: MailStoryOptions) {
  const attachments: Array<Attachment> = [];

  if ( audio ) {
    attachments.push({
      content: audio,
      filename: 'audio-story.mp3',
    });
  }

  await resend.emails.send({
    from: `Language Story <${process.env.MAIL_FROM}>`,
    to: [String(process.env.MAIL_TO)],
    subject: `${config.language} Story of the Day`,
    html: text,
    attachments,
  });
}