"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import type {
  Language,
  ReadingLevel,
  UserPreferences,
} from "@language-story/data/types";

import {
  getPreferencesByUserId,
  updateUserPreferences,
} from "@language-story/data/users";

interface UpdatePreferencesActionOptions {
  revalidatePath?: string;
}

export async function updatePreferencesAction(
  formData: FormData,
  options?: UpdatePreferencesActionOptions,
) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  const userPreferences = await getPreferencesAction();

  const languageNative = formData.get("languageNative") as Language;
  const languageTarget = formData.get("languageTarget") as Language;
  const readingLevel = formData.get("readingLevel") as ReadingLevel;

  const preferences = {
    languageNative: languageNative || userPreferences?.languageNative,
    languageTarget: languageTarget || userPreferences?.languageTarget,
    readingLevel: readingLevel || userPreferences?.readingLevel,
  };

  const results = await updateUserPreferences(userId, preferences);

  if (options?.revalidatePath) {
    revalidatePath(options.revalidatePath);
  }

  return results;
}

export async function getPreferencesAction(): Promise<UserPreferences> {
  const { userId } = await auth();

  if (typeof userId !== "string") {
    redirect("/");
  }

  const data = await getPreferencesByUserId(userId);

  return data;
}
