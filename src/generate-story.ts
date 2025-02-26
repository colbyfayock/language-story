import Anthropic from '@anthropic-ai/sdk';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

if (typeof process.env.MAIL_TO !== 'string' ) {
  throw new Error('Please set MAIL_TO')
}

if (typeof process.env.MAIL_FROM !== 'string' ) {
  throw new Error('Please set MAIL_FROM')
}

const resend = new Resend(process.env.RESEND_API_KEY);
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const LANGUAGE = 'Brazilian Portuguese';
const READING_LEVEL = '2nd Grade';

(async function run() {

  const message = await anthropic.messages.create({
    model: "claude-3-5-sonnet-20241022",
    max_tokens: 8192,
    temperature: 1,
    messages: [
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": `
You are tasked with creating a short story to help learners practice a new language.
The story should be tailored to a specific reading level in a topic appropriate for that age.
Your goal is to create an engaging narrative that supports language acquisition.

Here are the key elements you'll be working with:

<target_language>
${LANGUAGE}
</target_language>

<reading_level>
${READING_LEVEL}
</reading_level>

Follow these guidelines to create an effective language learning story:

1. Write the story primarily in the target language. Include both a version in the target
language and a follow-up in English.

2. Adjust the complexity of the story based on the specified reading level. For beginners,
use simple sentence structures and common vocabulary. For intermediate or advanced levels,
incorporate more complex grammar and varied vocabulary.

3. Center the story around an age appropriate topic, ensuring it's relatable and interesting to 
language learners.

4. Keep the story concise, aiming for 150-300 words depending on the reading level.

5. Use repetition of key phrases or grammar structures to reinforce learning.

6. Include dialogue to showcase conversational language use when appropriate.

7. For beginner levels, focus on present tense and common verbs. For higher levels, incorporate
a wider range of tenses and more advanced grammar concepts.

8. Use descriptive language appropriate to the reading level to help build vocabulary.

Before writing the story, briefly outline your approach in a Scratchpad section. Consider
the key vocabulary with translations, grammar concepts, and cultural elements you'll incorporate
based on the language, reading level, and topic.

After the story, provide a brief explanation (2-3 sentences) of the language learning elements
you've incorporated and how they support learners at the specified level.

Your final output will be sent as an email. It should be structured in basic HTML:

<h2>Scratchpad</h2>
<ul>
  <li>(Your planning notes here as bullets, including reading level)</li>
</ul>

<h2>Story (${LANGUAGE})</h2>
<p>(Your short story here, as a new paragraph for each line to the story)</p>

<h2>Story (English)</h2>
<p>(Your short story translation here, as a new paragraph for each line to the story)</p>

<h2>Language Learning Elements</h2>
<p>(Your brief explanation of incorporated language learning elements)</p>

Remember, your final output should include only the Scratchpad, Story, and
Language Learning Elements sections. Do not repeat these instructions or include any
additional commentary.
            `
          }
        ]
      }
    ]
  });
  
  const {content: [result]} = message;

  if ( result.type === 'text' && result.text ) {
    await resend.emails.send({
      from: `Language Story <${process.env.MAIL_FROM}>`,
      to: [String(process.env.MAIL_TO)],
      subject: `${LANGUAGE} Story of the Day`,
      html: result.text,
    });
  }
})();