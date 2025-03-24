import { config as storyConfig } from "../../../story.config";
import { isLanguage } from "@language-story/data/languages";
import { isReadingLevel } from "@language-story/data/reading-levels";
import type { UserPreferences } from "@language-story/data/types";

export interface Config {
  anthropicModelId: string;
  elevenlabsModelId: string;
  elevenlabsVoiceId: string;
  maxStoryHistory: number;
}

export const config: Config = storyConfig;

export type LanguageConfig = Pick<
  UserPreferences,
  "languageNative" | "languageTarget" | "readingLevel"
>;

export function validateConfig(config: LanguageConfig) {
  const errors: Array<string> = [];

  if (!isLanguage(config.languageTarget)) {
    errors.push("Invalid target language.");
  }

  if (!isLanguage(config.languageNative)) {
    errors.push("Invalid native language.");
  }

  if (!isReadingLevel(config.readingLevel)) {
    errors.push("Invalid reading level.");
  }

  if (errors.length > 0) {
    throw new Error(errors.join(" "));
  }

  return true;
}
