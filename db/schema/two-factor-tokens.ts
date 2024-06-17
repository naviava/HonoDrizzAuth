import { pgTable, primaryKey, text, timestamp } from "drizzle-orm/pg-core";

export const twoFactorTokens = pgTable(
  "two_factor_token",
  {
    email: text("email").notNull(),
    token: text("token").unique().notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (twoFactorConfirm) => ({
    compositePk: primaryKey({
      columns: [twoFactorConfirm.email, twoFactorConfirm.token],
    }),
  })
);
