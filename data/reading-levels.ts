import { READING_LEVELS } from "./constants";
import type { ReadingLevel } from "./types";

export function isReadingLevel(value: string): value is ReadingLevel {
  return READING_LEVELS.includes(value as ReadingLevel);
}
