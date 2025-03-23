import { eq } from "drizzle-orm";

import { db } from "./db";
import { Preferences } from "./db/schema";
import type { UserPreferences } from "./types";

import { createClerkClient } from "@clerk/backend";

const clerkClient = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY,
});

interface GetUsersOptions {
  userId?: Array<string>;
}

export async function getAllUsers({ userId }: GetUsersOptions = {}) {
  const options: GetUsersOptions = {};

  if (userId) {
    options.userId = userId;
  }

  const { data } = await clerkClient.users.getUserList({
    limit: 500,
    ...options,
  });

  return data;
}

export async function getAllPreferences() {
  const results = await db.select().from(Preferences);
  return results;
}

export async function updateUserPreferences(
  userId: string,
  preferences: Pick<
    UserPreferences,
    "readingLevel" | "languageNative" | "languageTarget"
  >,
) {
  if (typeof userId !== "string") {
    throw new Error("User ID required.");
  }

  const userPreferences = await getPreferencesByUserId(userId);

  const updatedPreferences = {
    userId,
    languageNative:
      preferences.languageNative || userPreferences?.languageNative,
    languageTarget:
      preferences.languageTarget || userPreferences?.languageTarget,
    readingLevel: preferences.readingLevel || userPreferences?.readingLevel,
  };

  let results;

  if (!userPreferences) {
    results = await db.insert(Preferences).values(updatedPreferences);
  } else {
    results = await db
      .update(Preferences)
      .set(updatedPreferences)
      .where(eq(Preferences.userId, userId));
  }

  console.log("results", results);

  return results;
}

export async function getPreferencesByUserId(
  userId: string,
): Promise<UserPreferences> {
  if (!userId) {
    throw new Error("User ID required.");
  }

  const [result] = await db
    .select()
    .from(Preferences)
    .where(eq(Preferences.userId, userId))
    .limit(1);

  return result;
}
