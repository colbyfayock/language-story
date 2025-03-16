import path from "node:path";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const apiKey = process.env.RESEND_API_KEY;

if (typeof apiKey !== "string") {
  throw new Error("Please set RESEND_API_KEY");
}

export const resend = new Resend(apiKey);
