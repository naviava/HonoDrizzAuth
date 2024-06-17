import { pgTable, primaryKey, text, timestamp } from "drizzle-orm/pg-core";

export const passwordResetTokens = pgTable(
  "password_reset_token",
  {
    email: text("email").notNull(),
    token: text("token").unique().notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (passwordResetToken) => ({
    compositePk: primaryKey({
      columns: [passwordResetToken.email, passwordResetToken.token],
    }),
  })
);
