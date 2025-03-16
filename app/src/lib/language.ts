import {
  DEFAULT_LANGUAGE_NATIVE,
  DEFAULT_LANGUAGE_TARGET,
} from "@language-story/data/constants";
import type { Language } from "@language-story/data/types";

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
