import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./db/schema",
  out: "./db/migrations",
  dialect: "postgresql", // 'postgresql' | 'mysql' | 'sqlite'
  dbCredentials: {
    host: "127.0.0.1",
    port: 6500,
    user: "dbadmin",
    password: "BoSVCV0c7RBahUDxb3q+E51MhhN7N9nvLJk/eB3uxG/b",
    database: "authdb",
    ssl: false,
  },
});
