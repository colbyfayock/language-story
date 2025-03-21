import { promises as fs } from "node:fs";
import path from "node:path";

const STORY_PATH = path.join(__dirname, "../../../data/stories.txt");

export async function readStoryData() {
  return await fs.readFile(STORY_PATH, "utf8");
}

export async function writeStoryData(stories: Array<string>) {
  await fs.writeFile(STORY_PATH, stories.join("\n---\n"));
}
