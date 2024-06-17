import { Hono } from "hono";
import { logger } from "hono/logger";
import { loginRoute } from "./routes/login";

export const app = new Hono().basePath("/api");
app.use("*", logger());

app.route("/login", loginRoute);
