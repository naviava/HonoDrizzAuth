import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { Pool } from "pg";
import config from "~/drizzle.config";

const pool = new Pool({
  host: "127.0.0.1",
  port: 6500,
  user: "dbadmin",
  password: "BoSVCV0c7RBahUDxb3q+E51MhhN7N9nvLJk/eB3uxG/b",
  database: "authdb",
});

const db = drizzle(pool);

async function main() {
  console.log("\n\nMigration started...");
  await migrate(db, { migrationsFolder: config.out! });
  console.log("\nMigration completed!\n\n");
  process.exit(0);
}

main().catch((err) => {
  console.log(err);
  process.exit(0);
});
