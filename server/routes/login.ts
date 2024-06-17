import { Hono } from "hono";

export const loginRoute = new Hono()
  .get("/", (c) => {
    return c.json({ message: "Happy Login!" });
  })
  .post("/", (c) => {
    return c.json({ message: "Happy Login Post!" });
  });
