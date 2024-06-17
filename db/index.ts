import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";
import { Pool } from "pg";

const pool = new Pool({
  host: "127.0.0.1",
  port: 6500,
  user: "dbadmin",
  password: "BoSVCV0c7RBahUDxb3q+E51MhhN7N9nvLJk/eB3uxG/b",
  database: "authdb",
});

export const db = drizzle(pool, { schema });
