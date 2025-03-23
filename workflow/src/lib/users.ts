import path from "node:path";
import type { UserPreferences } from "@language-story/data/types";
import { getAllPreferences, getAllUsers } from "@language-story/data/users";
import dotenv from "dotenv";

import type { LanguageConfig } from "./config";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export interface UserConfig extends UserPreferences {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
}

export async function getAllUserConfigs(): Promise<Array<UserConfig>> {
  const userPreferences = await getAllPreferences();

  const userIds = Array.from(
    new Set(userPreferences.map(({ userId }) => userId)),
  );

  const users = await getAllUsers({
    userId: userIds,
  });

  return userPreferences.map((preferences) => {
    const user = users.find(({ id }) => id === preferences.userId);
    return {
      ...preferences,
      firstName: user?.firstName || null,
      lastName: user?.lastName || null,
      email: user?.primaryEmailAddress?.emailAddress || null,
    };
  });
}

export function getLanguageConfigsFromUsers(
  configs: Array<UserConfig>,
): Array<LanguageConfig> {
  const uniqueSet = new Set<string>();
  const uniqueConfigs: Array<LanguageConfig> = [];

  for (const config of configs) {
    const key = `${config.languageNative}|${config.languageTarget}|${config.readingLevel}`;
    if (!uniqueSet.has(key)) {
      const { readingLevel, languageNative, languageTarget } = config;
      uniqueSet.add(key);
      uniqueConfigs.push({
        readingLevel,
        languageNative,
        languageTarget,
      });
    }
  }

  return uniqueConfigs;
}
