import { promises as fs } from 'fs';
import path from 'path';

const STORY_PATH = path.join(process.cwd(), 'data/stories.txt');

export async function readStoryData() {
  return await fs.readFile(STORY_PATH, 'utf8');
}

export async function writeStoryData(stories: Array<string>) {
  await fs.writeFile(STORY_PATH, stories.join('\n---\n'));
}