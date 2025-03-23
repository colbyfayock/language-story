import { promises as fs } from "node:fs";
import path from "node:path";

import type { LanguageConfig } from "./config";

const STORY_FOLDER_PATH = path.join(__dirname, "../../../data/history");

export async function readStoryData({
  languageNative,
  languageTarget,
  readingLevel,
}: LanguageConfig) {
  const storyPath = path.join(
    STORY_FOLDER_PATH,
    `stories-${languageNative}-${languageTarget}-${readingLevel}.txt`,
  );
  if (await fileExists(storyPath)) {
    return await fs.readFile(storyPath, "utf8");
  }
  return "";
}

interface WriteStoryDataOptions extends LanguageConfig {
  stories: Array<string>;
}

export async function writeStoryData({
  stories,
  languageNative,
  languageTarget,
  readingLevel,
}: WriteStoryDataOptions) {
  const storyPath = path.join(
    STORY_FOLDER_PATH,
    `stories-${languageNative}-${languageTarget}-${readingLevel}.txt`,
  );
  await fs.writeFile(storyPath, stories.join("\n---\n"));
}

export function fileExists(filePath: string) {
  return new Promise((resolve) => {
    fs.access(filePath)
      .then(() => resolve(true))
      .catch(() => resolve(false));
  });
}
