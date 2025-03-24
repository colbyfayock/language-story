import { auth } from "@clerk/nextjs/server";

import type { Language, ReadingLevel } from "@language-story/data/types";

import {
  getPreferencesByUserId,
  updateUserPreferences,
} from "@language-story/data/users";

export async function POST(request: Request) {
  const { userId } = await auth();

  if (!userId) {
    return new Response(
      JSON.stringify({
        status: "error",
        error: "Unauthorized",
      }),
      { status: 401 },
    );
  }

  const userPreferences = await getPreferencesByUserId(userId);
  const formData = await request.formData();

  const languageNative = formData.get("languageNative") as Language;
  const languageTarget = formData.get("languageTarget") as Language;
  const readingLevel = formData.get("readingLevel") as ReadingLevel;

  const preferences = {
    languageNative: languageNative || userPreferences?.languageNative,
    languageTarget: languageTarget || userPreferences?.languageTarget,
    readingLevel: readingLevel || userPreferences?.readingLevel,
  };

  const results = await updateUserPreferences(userId, preferences);

  return Response.json({
    status: "success",
    data: results,
  });
}
