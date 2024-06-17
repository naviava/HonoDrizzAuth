import { pgTable, text } from "drizzle-orm/pg-core";
import { users } from "./users";
import { relations } from "drizzle-orm";

export const twoFactorConfirms = pgTable("two_factor_confirm", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
});

export const twoFactorConfirmsRelations = relations(
  twoFactorConfirms,
  ({ one }) => ({
    user: one(users, {
      fields: [twoFactorConfirms.userId],
      references: [users.id],
    }),
  })
);
