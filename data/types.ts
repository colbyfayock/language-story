import type { LANGUAGES, READING_LEVELS } from "./constants";
import type { Preferences } from "./db/schema";

export type Language = (typeof LANGUAGES)[number];

export type ReadingLevel = (typeof READING_LEVELS)[number];

export type UserPreferences = typeof Preferences.$inferSelect;
