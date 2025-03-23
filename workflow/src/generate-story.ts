import {
  generateStory,
  getAudioStory,
  isAudioEnabled,
  resultToStorySegments,
  storySegmentsToHTML,
} from "./lib/story";
import { readStoryData, writeStoryData } from "./lib/utils";

import type { LanguageConfig } from "./lib/config";
import { mailStory } from "./lib/mail";
import { getAllUserConfigs, getLanguageConfigsFromUsers } from "./lib/users";

const MAX_STORY_HISTORY = 50;

(async function run() {
  console.log("Starting...");

  console.log("Getting all user configs...");

  const users = await getAllUserConfigs();

  console.log(`Found ${users.length} users.`);

  console.log("Getting all language configs...");

  const languageConfigs = getLanguageConfigsFromUsers(users);

  console.log(`Found ${languageConfigs.length} unique language configs.`);

  interface Story extends LanguageConfig {
    html?: string;
    audio?: Buffer;
    context?: string;
  }

  const stories: Array<Story> = [];

  console.log("Creating stories...");

  for (const config of languageConfigs) {
    const { html, audio, context } = (await createLanguageStory(config)) || {};
    const story: Story = {
      ...config,
      html,
      audio,
      context,
    };
    stories.push(story);
  }

  console.log("Sending stories...");

  for (const user of users) {
    if (!user.email) {
      console.log("No email found for user.");
      continue;
    }

    const shallowConfig = {
      languageNative: user.languageNative,
      languageTarget: user.languageTarget,
      readingLevel: user.readingLevel,
    };

    const userStory = stories.find(
      ({ languageNative, languageTarget, readingLevel }) => {
        return (
          user.languageNative === languageNative &&
          user.languageTarget === languageTarget &&
          user.readingLevel === readingLevel
        );
      },
    );

    if (!userStory?.html) {
      console.log("Failed to find story for user.", {
        config: shallowConfig,
      });
      continue;
    }

    try {
      await mailStory({
        config: shallowConfig,
        to: user.email,
        text: userStory.html,
        audio: userStory.audio,
      });
    } catch (e) {
      console.log("Failed to mail story.", {
        error: e.message,
        config: shallowConfig,
      });
    }
  }

  console.log("Writing story to history...");

  for (const story of stories) {
    if (!story?.context) {
      console.log("Failed to find context.", {
        config: {
          languageNative: story.languageNative,
          languageTarget: story.languageTarget,
          readingLevel: story.readingLevel,
        },
      });
      console.log("Exiting.");
      return;
    }

    try {
      const pastStoryData = await readStoryData(story);

      const pastStories = pastStoryData
        .trim()
        .split("---")
        .map((story) => story.trim())
        .filter((story) => !!story);

      pastStories.unshift(story?.context);

      if (pastStories.length > MAX_STORY_HISTORY) {
        pastStories.splice(50);
      }

      await writeStoryData({
        ...story,
        stories: pastStories,
      });
    } catch (e) {
      console.log("Failed to write story history.", {
        error: e.message,
        config: {
          languageNative: story.languageNative,
          languageTarget: story.languageTarget,
          readingLevel: story.readingLevel,
        },
      });
      console.log("Exiting.");
      return;
    }
  }

  console.log("Finished.");
})();

async function createLanguageStory(config: LanguageConfig) {
  console.log("Generating a new story...");

  console.log(`- Target Language: ${config.languageTarget}`);
  console.log(`- Native Language: ${config.languageNative}`);
  console.log(`- Reading Level: ${config.readingLevel}`);

  const pastStoryData = await readStoryData(config);

  const result = await generateStory({
    config,
    context: pastStoryData,
  });

  if (typeof result !== "string") {
    console.log("Invalid response.");
    return;
  }

  const segments = resultToStorySegments({
    text: result,
    config,
  });

  const story = segments.find(({ id }) => id === "story_target_language");

  if (!story?.content) {
    console.log("Failed to find story.");
    return;
  }

  console.log("Generating HTML...");

  let storyHtml: string | undefined;

  try {
    storyHtml = await storySegmentsToHTML(segments, {
      exclude: ["context"],
    });
  } catch (e) {
    console.log("Failed to generate story.", e);
    console.log("Exiting.");
    return;
  }

  let storyAudio: Buffer | undefined;

  if (isAudioEnabled) {
    console.log("Generating audio...");
    try {
      storyAudio = await getAudioStory({ text: story?.content });
    } catch (e) {
      console.log("Failed to generate audio.", e);
    }
  } else {
    console.log("Audio is not enabled, skipping.");
  }

  const context = segments.find(({ id }) => id === "context");

  console.log("Finished writing story.");

  return {
    html: storyHtml,
    audio: storyAudio,
    context: context?.content,
  };
}
