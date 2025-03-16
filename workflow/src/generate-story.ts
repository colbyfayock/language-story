import {
  generateStory,
  getAudioStory,
  isAudioEnabled,
  resultToStorySegments,
  storySegmentsToHTML,
} from "./lib/story";
import { readStoryData, writeStoryData } from "./lib/utils";

import { config } from "./lib/config";
import { mailStory } from "./lib/mail";

(async function run() {
  console.log("Generating a new story...");

  console.log(`- Target Language: ${config.language}`);
  console.log(`- Native Language: ${config.languageNative}`);
  console.log(`- Reading Level: ${config.readingLevel}`);

  const pastStoryData = await readStoryData();
  const result = await generateStory({ context: pastStoryData });

  if (typeof result !== "string") {
    console.log("Invalid response.");
    return;
  }

  const segments = resultToStorySegments(result);

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

  console.log("Sending story...");

  try {
    await mailStory({
      text: storyHtml,
      audio: storyAudio,
    });
  } catch (e) {
    console.log("Failed to mail story.", e);
    console.log("Exiting.");
    return;
  }

  console.log("Writing story to history....");

  const context = segments.find(({ id }) => id === "context");

  if (!context?.content) {
    console.log("Failed to find context.");
    console.log("Exiting.");
    return;
  }

  try {
    const pastStories = pastStoryData
      .trim()
      .split("---")
      .map((story) => story.trim());

    pastStories.unshift(context?.content);

    if (pastStories.length > config.maxStoryHistory) {
      pastStories.splice(50);
    }

    await writeStoryData(pastStories);
  } catch (e) {
    console.log("Failed to write story.", e);
    console.log("Exiting.");
    return;
  }

  console.log("Finished.");
})();
