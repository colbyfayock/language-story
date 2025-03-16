import * as dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";

dotenv.config();

if (typeof process.env.XATA_DATABASE_URL !== "string") {
  throw new Error("Please set your XATA_DATABASE_URL");
}

export default defineConfig({
  dialect: "postgresql",
  schema: "./app/db/schema.ts",
  out: "./app/db/migrations",
  dbCredentials: {
    url: process.env.XATA_DATABASE_URL,
  },
});
