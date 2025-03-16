"use server";

import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

import { db } from "@/db";
import { Preferences } from "@/db/schema";

import type {
  Language,
  ReadingLevel,
  UserPreferences,
} from "@language-story/data/types";

interface UpdatePreferencesActionOptions {
  revalidatePath?: string;
}

export async function updatePreferencesAction(
  formData: FormData,
  options?: UpdatePreferencesActionOptions,
) {
  const { userId } = await auth();

  if (!userId) return;

  const userPreferences = await getPreferencesAction();

  const languageNative = formData.get("languageNative") as Language;
  const languageTarget = formData.get("languageTarget") as Language;
  const readingLevel = formData.get("readingLevel") as ReadingLevel;

  const preferences = {
    userId,
    languageNative: languageNative || userPreferences?.languageNative,
    languageTarget: languageTarget || userPreferences?.languageTarget,
    readingLevel: readingLevel || userPreferences?.readingLevel,
  };

  if (!userPreferences) {
    await db.insert(Preferences).values(preferences);
  } else {
    await db
      .update(Preferences)
      .set(preferences)
      .where(eq(Preferences.userId, userId));
  }

  if (options?.revalidatePath) {
    revalidatePath(options.revalidatePath);
  }
}

export async function getPreferencesAction(): Promise<UserPreferences> {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized.");
  }

  const [result] = await db
    .select()
    .from(Preferences)
    .where(eq(Preferences.userId, userId))
    .limit(1);

  return result;
}
