import { pgEnum, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

import { LANGUAGES, READING_LEVELS } from "../constants";

export const languageEnum = pgEnum("language", LANGUAGES);

export const readingLevelsEnum = pgEnum("readingLevel", READING_LEVELS);

export const Preferences = pgTable("preferences", {
  id: serial("id").primaryKey().notNull(),
  createTs: timestamp("createTs").defaultNow().notNull(),
  userId: text("userId").notNull(),
  languageNative: languageEnum().notNull(),
  languageTarget: languageEnum().notNull(),
  readingLevel: readingLevelsEnum().notNull(),
});
