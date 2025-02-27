# Language Story

A story a day to help you learn a new language.

Powered by Claude, Resend, and GitHub Actions.

## Getting Started

Language Story is primarily based on GitHub Actions which require only a few steps:

- Clone or fork this repository
- Add environment variables in your repository configuration
- Wait for your first story!

To add your environment variables, navigate to your repository Settings, Secrets and
variables, then Actions and add the following Secrets:

| Name              | Example          |
| ----------------- | ---------------- |
| ANTHROPIC_API_KEY | abc1234          |
| MAIL_FROM         | from@example.com |
| MAIL_TO           | to@example.com   |
| RESEND_API_KEY    | abc1234          |

## How it Works

This project uses GitHub Actions, Claude, and Resend to automatically send you a new short
story every day or in the configured timeframe.

GitHub Actions are used to coordinate triggering a script using cron syntax.

The script, written in Typescript, includes a set of configurations that help determine
how the story will be created.

Anthropic's Claude is used along with the configurations to generate a new story
based on a set of themes in the target language from scratch.

Once the story has been written, Resend is used email the output to the email of your choice.

## Configuration

The `story.config.js` file is used to provide additional configurations for how your story
should be generated.

| Name            | Description                                  | Example               |
| --------------- | -------------------------------------------- | --------------------- |
| language        | Language story should be generated in.       | Brazilian Portuguese  |
| languageNative  | Learner's native language.                   | English               |
| readingLevel    | Difficulty and complexity level of the story.| 4th Grade             | 

## Running Locally

To run the script locally:

- Install all dependencies: `npm install`
- Create a `.env` file with the environment variables listed above.
- Run `npm run generate-story`