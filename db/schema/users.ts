import {
  boolean,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

import { twoFactorConfirms } from "./two-factor-confirms";
import { authenticators } from "./authenticators";
import { accounts } from "./accounts";
import { sessions } from "./sessions";

export const userRoleEnum = pgEnum("user_role", ["USER", "ADMIN"]);

export const users = pgTable(
  "user",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    name: text("name"),
    email: text("email").notNull().unique(),
    emailVerified: timestamp("emailVerified", { mode: "date" }),
    image: text("image"),
    password: text("password"),
    role: userRoleEnum("role").notNull().default("USER"),
    is2FAEnabled: boolean("is2FAEnabled").notNull().default(false),

    createdAt: timestamp("createdAt", { mode: "date" }).notNull().defaultNow(),
    updatedAt: timestamp("updatedAt", { mode: "date" }).notNull().defaultNow(),
  },
  (user) => ({
    emailIdx: uniqueIndex("email_idx").on(user.email),
  })
);

export const usersRelations = relations(users, ({ many }) => ({
  accounts: many(accounts),
  sessions: many(sessions),
  authenticators: many(authenticators),
  twoFactorConfirms: many(twoFactorConfirms),
}));
