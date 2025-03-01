# 📚 Language Story

A story a day to help you learn a new language.

Powered by Claude, ElevenLabs, Resend, and GitHub Actions.

## Getting Started

Language Story is primarily based on GitHub Actions which require only a few steps:

- Clone or fork this repository
- Add environment variables in your repository configuration
- Configure Actions permissions to allow both Read and Write
- Wait for your first story!

To add your environment variables, navigate to your repository Settings, Secrets and
variables, then Actions and add the following Secrets:

| Name              | Required | Example          |
| ----------------- | -------- | ---------------- |
| ANTHROPIC_API_KEY | Yes      | abc1234          |
| ELEVENLABS_API_KEY| No       | abc1234          |
| MAIL_FROM         | Yes      | from@example.com |
| MAIL_TO           | Yes      | to@example.com   |
| RESEND_API_KEY    | Yes      | abc1234          |

If `ELEVENLABS_API_KEY` is not configured, it will skip generating audio.

To configure Actions permissions, navigate to Settings, Actions, then find the Workflow Permissions to configure Read & Write.

## How it Works

This project uses GitHub Actions, Claude, ElevenLabs, and Resend to automatically send you a new short
story every day or in the configured timeframe.

GitHub Actions are used to coordinate triggering a script using cron syntax.

The script, written in Typescript, includes a set of configurations that help determine
how the story will be created.

Anthropic's Claude is used along with the configurations to generate a new story
based on a set of themes in the target language from scratch.

ElevenLabs is used to generate an audio version of the story for listening comprehension.

Once the story has been written, Resend is used email the output to the email of your choice.

## Configuration

The `story.config.js` file is used to provide additional configurations for how your story
should be generated.

| Name            | Description                                  | Example               |
| --------------- | -------------------------------------------- | --------------------- |
| language        | Language story should be generated in.       | Brazilian Portuguese  |
| languageNative  | Learner's native language.                   | English               |
| readingLevel    | Difficulty and complexity level of the story.| 4th Grade             | 
| anthropicModelId| ID of the Anthropic model to use.            | claude-3-5-sonnet-20241022 |
| elevenlabsModelId| ID of the ElevenLabs model to use.          | eleven_multilingual_v2 |
| elevenlabsVoiceId| ID of the ElevenLabs voice to use.          | JBFqnCBsd6RMkjVDRZzb  |
| maxStoryHistory | How many stories should be kept for generation context. | 50         |

## Running Locally

To run the script locally:

- Install all dependencies: `npm install`
- Create a `.env` file with the environment variables listed above.
- Run `npm run generate-story`
