import locale from "locale-codes";

import type { Language } from "./types";

export const LANGUAGES = [
  "ar-SA",
  "de-DE",
  "en-AU",
  "en-CA",
  "en-GB",
  "en-US",
  "es-ES",
  "es-MX",
  "fr-CA",
  "fr-FR",
  "it-IT",
  "ja-JP",
  "ko-KR",
  "nl-NL",
  "pt-BR",
  "pt-PT",
  "ru-RU",
  "tr-TR",
  "zh-CN",
] as const;

export const LANGUAGES_WITH_LABELS = LANGUAGES.map((code) => {
  const language = locale.getByTag(code);
  return {
    code,
    label: language.name,
  };
});

export const DEFAULT_LANGUAGE_NATIVE = "en-US" as Language;
export const DEFAULT_LANGUAGE_TARGET = "pt-BR" as Language;

export const READING_LEVELS = [
  "Kindergarten",
  "1st Grade",
  "2nd Grade",
  "3rd Grade",
  "4th Grade",
  "5th Grade",
  "6th Grade",
  "7th Grade",
  "8th Grade",
  "9th Grade",
  "10th Grade",
  "11th Grade",
  "12th Grade",
  "College",
  "Graduate",
  "Native",
] as const;
