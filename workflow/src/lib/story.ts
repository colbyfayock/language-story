import { marked } from "marked";

import { anthropic } from "./anthropic";
import { config } from "./config";
import { elevenlabs } from "./elevenlabs";

export interface StorySegment {
  id?: string;
  title?: string;
  content?: string;
}

const SECTIONS_MAP: Record<string, string> = {
  scratchpad: "Scratchpad",
  key_phrase: "Key Phrase",
  story_target_language: `Story (${config.language})`,
  story_native_language: `Story (${config.languageNative})`,
  exercises: "Exercises",
  learning_elements: "Language Learning Elements",
  context: "Context",
};

export const isAudioEnabled = typeof elevenlabs !== "undefined";

/**
 * generateStory
 */

interface GenerateStoryOptions {
  context: string;
}

export async function generateStory({ context }: GenerateStoryOptions) {
  const message = await anthropic.messages.create({
    model: config.anthropicModelId,
    max_tokens: 8192,
    temperature: 1,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: `
You are tasked with creating a short story to help learners practice a new language.
The story should be tailored to a specific reading level in a topic appropriate for that age.
Your goal is to create an engaging narrative that supports language acquisition.

Here are the key elements you'll be working with:

<target_language>
${config.language}
</target_language>

<native_language>
${config.languageNative}
</native_language>

<reading_level>
${config.readingLevel}
</reading_level>

<past_story_context>
${context}
</past_story_context>

Follow these guidelines to create an effective language learning story:

1. Write the story primarily in the <target_language>. Include both a version in the
<target_language> and a follow-up in the <native_language> to compare.

2. Adjust the complexity of the story based on the reading level defined as <reading_level>.
For beginners, use simple sentence structures and common vocabulary. For intermediate or
advanced levels, incorporate more complex grammar and varied vocabulary.

3. Center the story around an age appropriate topic, ensuring it's relatable and interesting to 
language learners. Can be from a variety of topics, including children's stories,
science, technology, space, and other common movie themes. As appropriate, use references
and cultural themes presend in <target_language>. Include activities that a person may
be involved with in every day life, such as going to the market, eating at a restaurant,
or traveling as well as interactions with other people such as dialogue.

4. Keep the story concise, aiming for 150-500 words depending on the reading level.

5. Use repetition of key phrases or grammar structures to reinforce learning. Include one primary
key phrase that is used in the story. The primary key phrase should be a common phrase or expression
used in the <target_language>. 

6. Include dialogue to showcase conversational language use when appropriate.

7. For beginner levels, focus on present tense and common verbs. For higher levels, incorporate
a wider range of tenses and more advanced grammar concepts.

8. Use descriptive language appropriate to the reading level to help build vocabulary.

9. The story should use past story learning elements from <past_story_context> to avoid repeating
past key phrases, keywords, and include light variation on themes to keep learners interested and
engaged. You should not repeat key phrases. You should avoid repeating keywords.

10. Come up with 3 questions about the story written in <target_language> that ask questions
about the story. These should be simple questions that help the learner better understand
what they just read.

11. Include a brief summary at the end that includes the key phrase, all of the keywords,
a concise description of the theme, and any other relevant information that can be passed
as context to a future story generation to provide variation of the story and learning elements.

Before writing the story, briefly outline your approach in a Scratchpad section. Consider
the key vocabulary with translations, grammar concepts, and cultural elements you'll incorporate
based on the language, reading level, and topic.

After the story, provide a brief explanation (2-3 sentences) of the language learning elements
you've incorporated and how they support learners at the specified level.

Your final output should be markdown with each section separated by ---.

This is the template you should use for output:

# scratchpad
- (Your planning notes here as bullets, including reading level)
---
# key_phrase
(Your primary key phrase in <target_language> that will be used in the story
along with the translation in <native_language>)
---
# story_target_language
(Your short story here, as a new paragraph for each line to the story)
---
# story_native_language
(Your short story translation here, as a new paragraph for each line to the story)
---
# exercises
- (Your 3 exercise questions about the story in <target_language>)
---
# learning_elements
(Your brief explanation of incorporated language learning elements)
---
# context
(Your generation context to include in future generations for learning element variation)

Remember, your final output should include only the Scratchpad, Story, and
Language Learning Elements sections. Do not repeat these instructions or include any
additional commentary.
            `,
          },
        ],
      },
    ],
  });

  const {
    content: [result],
  } = message;

  if (result?.type !== "text") {
    throw new Error("Invalid result type.");
  }

  return result?.text;
}

/**
 * getAudioStory
 */

interface GetAudioStoryOptions {
  text: string;
}

export async function getAudioStory({
  text,
}: GetAudioStoryOptions): Promise<Buffer> {
  if (!isAudioEnabled || !elevenlabs) {
    throw new Error("Audio is not enabled.");
  }

  const sanitized = text.replace(/\n+/g, " ");

  const audioStream = await elevenlabs.textToSpeech.convertAsStream(
    config.elevenlabsVoiceId,
    {
      text: sanitized,
      model_id: config.elevenlabsModelId,
      output_format: "mp3_44100_128",
    },
  );

  const chunks: Buffer[] = [];

  for await (const chunk of audioStream) {
    chunks.push(chunk);
  }

  return Buffer.concat(chunks);
}

/**
 * resultToStorySegments
 */

export function resultToStorySegments(text: string): Array<StorySegment> {
  return text.split("---").map((segment) => {
    const lines = segment.trim().split("\n");
    const id = lines.shift()?.replace("# ", "");
    const content = lines.join("\n");
    const title = id ? SECTIONS_MAP[id] : "More";
    return {
      title,
      id,
      content,
    };
  });
}

/**
 * storySegmentsToHTML
 */

interface StorySegmentsToHTMLOptions {
  exclude?: Array<string>;
}

export function storySegmentsToHTML(
  segments: Array<StorySegment>,
  options: StorySegmentsToHTMLOptions = {},
) {
  const { exclude } = options;
  return segments
    .filter(({ id }) => (id && exclude ? !exclude.includes(id) : true))
    .map((segment) => {
      return `
<h2>${segment.title}</h2>
${segment.content ? marked(segment.content) : ""}
    `;
    })
    .join("");
}
