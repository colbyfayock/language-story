import { LANGUAGES, READING_LEVELS } from "./constants";
import type { Preferences } from "./db/schema";

export type Language = (typeof LANGUAGES)[number];

export function isLanguage(value: string): value is Language {
  return LANGUAGES.includes(value as Language);
}

export type ReadingLevel = (typeof READING_LEVELS)[number];

export function isReadingLevel(value: string): value is ReadingLevel {
  return READING_LEVELS.includes(value as ReadingLevel);
}

export type UserPreferences = typeof Preferences.$inferSelect;
