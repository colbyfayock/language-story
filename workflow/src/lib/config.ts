import { config as storyConfig } from '../../../story.config';

export interface Config {
  language: string;
  languageNative: string;
  readingLevel: string;
  anthropicModelId: string;
  elevenlabsModelId: string;
  elevenlabsVoiceId: string;
  maxStoryHistory: number;
}

export const config: Config = storyConfig;