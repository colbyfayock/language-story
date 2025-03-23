import { drizzle } from "drizzle-orm/node-postgres";
import * as pg from "pg";

import { Preferences } from "./schema";

const pool = new pg.Pool({
  connectionString: process.env.XATA_DATABASE_URL,
  max: 20,
});

export const db = drizzle(pool, {
  schema: {
    Preferences,
  },
});
