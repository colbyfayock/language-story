import {
  DEFAULT_LANGUAGE_NATIVE,
  DEFAULT_LANGUAGE_TARGET,
  LANGUAGES,
} from "./constants";
import type { Language } from "./types";

export function isLanguage(value: string): value is Language {
  return LANGUAGES.includes(value as Language);
}

export function getDefaultLanguageNative(browserLanguage?: Language): Language {
  return browserLanguage || DEFAULT_LANGUAGE_NATIVE;
}

export function getDefaultLanguageTarget(browserLanguage?: Language): Language {
  const browserIsTargetLanguage = browserLanguage === DEFAULT_LANGUAGE_TARGET;
  const browserIsNativeLanguage = browserLanguage === DEFAULT_LANGUAGE_NATIVE;

  if (browserIsTargetLanguage && !browserIsNativeLanguage) {
    return DEFAULT_LANGUAGE_NATIVE;
  }

  return DEFAULT_LANGUAGE_TARGET;
}
