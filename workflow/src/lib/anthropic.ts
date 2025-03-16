import path from "node:path";
import Anthropic from "@anthropic-ai/sdk";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const apiKey = process.env.ANTHROPIC_API_KEY;

if (typeof apiKey !== "string") {
  throw new Error("Please set ANTHROPIC_API_KEY");
}

export const anthropic = new Anthropic({ apiKey });
