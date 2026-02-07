import { drizzle } from "drizzle-orm/node-postgres";
import * as pg from "pg";

import { Preferences } from "./schema";

// TODO: The Xata database has been removed and needs to be migrated to a new solution.
// See README.md for more details.
const getDb = () => {
  throw new Error(
    "Database unavailable: The Xata database has been removed and needs to be migrated to a new solution. See README.md for details.",
  );
};

const pool = new pg.Pool({
  connectionString: process.env.XATA_DATABASE_URL,
  max: 20,
});

const _db = drizzle(pool, {
  schema: {
    Preferences,
  },
});

export const db = new Proxy(_db, {
  get(_target, prop) {
    getDb();
  },
});
