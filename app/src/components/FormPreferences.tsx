"use client";

import { type FormEvent, useRef } from "react";
import { toast } from "react-hot-toast";

import {
  LANGUAGES_WITH_LABELS,
  READING_LEVELS,
} from "@language-story/data/constants";
import {
  getDefaultLanguageNative,
  getDefaultLanguageTarget,
} from "@language-story/data/languages";
import type { Language, UserPreferences } from "@language-story/data/types";

interface FormPreferencesProps {
  className?: string;
  browserLanguage?: Language;
  userPreferences?: UserPreferences;
}

const FormPreferences = ({
  className,
  browserLanguage,
  userPreferences,
}: FormPreferencesProps) => {
  const formStateRef = useRef<string>("ready");

  const defaultLanguageNative =
    userPreferences?.languageNative ||
    getDefaultLanguageNative(browserLanguage);
  const defaultLanguageTarget =
    userPreferences?.languageTarget ||
    getDefaultLanguageTarget(browserLanguage);
  const defaultReadingLevel = userPreferences?.readingLevel;

  async function handleOnSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (formStateRef.current === "pending") return;

    formStateRef.current = "pending";

    const formData = new FormData(e.currentTarget);

    try {
      await fetch("/api/preferences/update", {
        method: "POST",
        body: formData,
      });
      toast.success("Success!");
    } catch (_) {
      toast.error("Something went wrong.");
    }

    formStateRef.current = "ready";
  }

  return (
    <form onSubmit={handleOnSubmit} className={className}>
      <p className="mb-4">
        <label
          htmlFor="languageNative"
          className="mb-2 block font-bold text-sm"
        >
          Native Language
        </label>
        <select
          id="languageNative"
          name="languageNative"
          className="rounded border-slate-300"
          defaultValue={defaultLanguageNative}
        >
          {LANGUAGES_WITH_LABELS.map(({ label, code }) => (
            <option key={code} value={code}>
              {label} ({code})
            </option>
          ))}
        </select>
      </p>
      <p className="mb-4">
        <label
          htmlFor="languageTarget"
          className="mb-2 block font-bold text-sm"
        >
          Target Language
        </label>
        <select
          id="languageTarget"
          name="languageTarget"
          className="rounded border-slate-300"
          defaultValue={defaultLanguageTarget}
        >
          {LANGUAGES_WITH_LABELS.map(({ label, code }) => (
            <option key={code} value={code}>
              {label} ({code})
            </option>
          ))}
        </select>
      </p>
      <p className="mb-4">
        <label htmlFor="readingLevel" className="mb-2 block font-bold text-sm">
          Target Language
        </label>
        <select
          id="readingLevel"
          name="readingLevel"
          className="rounded border-slate-300"
          defaultValue={defaultReadingLevel}
        >
          {READING_LEVELS.map((readingLevel) => (
            <option key={readingLevel} value={readingLevel}>
              {readingLevel}
            </option>
          ))}
        </select>
      </p>
      <p className="mt-6">
        <button
          type="submit"
          className="inline-block cursor-pointer rounded bg-blue-500 px-5 py-3 font-bold text-white"
        >
          {userPreferences ? "Update Story" : "Add Story"}
        </button>
      </p>
    </form>
  );
};

export default FormPreferences;
