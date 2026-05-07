import {
  pgTable,
  serial,
  varchar,
  text,
  timestamp,
  integer,
  numeric,
  primaryKey,
  foreignKey,
  unique,
  check,
  boolean,
  uuid,
  json,
  date,
  jsonb,
} from "drizzle-orm/pg-core";
import { nanoid } from "nanoid";
import type { AdapterAccountType } from "next-auth/adapters";
import { sql } from "drizzle-orm";

const id = nanoid(50);

export const users = pgTable("users", {
  id: text("uID")
    .primaryKey()
    .$defaultFn(() => id)
    .unique(),
  firstname: text("firstname"),
  lastname: text("lastname"),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  role: text("role")
    .$type<"admin" | "staff" | "user">()
    .notNull()
    .default("staff"),
  image: text("image"),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});

export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccountType>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => [
    {
      compoundKey: primaryKey({
        columns: [account.provider, account.providerAccountId],
      }),
    },
  ],
);

export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { withTimezone: true }).notNull(),
});

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (verificationToken) => [
    {
      compositePk: primaryKey({
        columns: [verificationToken.identifier, verificationToken.token],
      }),
    },
  ],
);

export const authenticators = pgTable(
  "authenticator",
  {
    credentialID: text("credentialID").notNull().unique(),
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    providerAccountId: text("providerAccountId").notNull(),
    credentialPublicKey: text("credentialPublicKey").notNull(),
    counter: integer("counter").notNull(),
    credentialDeviceType: text("credentialDeviceType").notNull(),
    credentialBackedUp: boolean("credentialBackedUp").notNull(),
    transports: text("transports"),
  },
  (authenticator) => [
    {
      compositePK: primaryKey({
        columns: [authenticator.userId, authenticator.credentialID],
      }),
    },
  ],
);

export const reach_request = pgTable("reach_request", {
  id: serial("id").primaryKey(),
  email: text("email").notNull(),
  requestedAt: timestamp("timestamp").defaultNow().notNull(),
});

export const systems_requests = pgTable("systems_requests", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(), // "A"
  email: text("email").notNull(), // "CWECSDF@mynwu.ac.za"
  company: text("company").notNull(), // "0" (stored as text, can change to integer if numeric)
  services: jsonb("services").$type<string[]>().notNull(),
  status: text("status").notNull(), // "new"
  totalPrice: integer("total_price").notNull(), // 7500
  date: timestamp("date").defaultNow().notNull(), // "2026-05-03T22:39:02.743Z"
});

export const consults = pgTable("consults", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  mobile: text("mobile").notNull(),
  contactMethod: text("contact_method", {
    enum: ["Phone Call", "Email", "WhatsApp"],
  }).notNull(),
  hasBusiness: boolean("has_business").notNull(),
  businessName: text("business_name"),
  industry: text("industry"),
  businessStage: text("business_stage"),
  website: text("website"),
  challenge: text("challenge").notNull(),
  clarityGoal: text("clarity_goal").notNull(),
  implementationReady: text("implementation_ready").notNull(),
  preferredDateTime: timestamp("preferred_date_time").notNull(),
  status: text("status", {
    enum: ["pending", "confirmed", "cancelled"],
  }).notNull(),
  date: timestamp("date").notNull().defaultNow(),
});

export const teamMembers = pgTable("team_members", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  bio: text("bio").default(""),
  focus: jsonb("focus").$type<string[]>().notNull(),
  image: text("image").notNull(),
  email: text("email").notNull(),
  linkedin: text("linkedin").notNull(),
  history: jsonb("history")
    .$type<
      {
        title: string;
        year: string;
        impact: string;
      }[]
    >()
    .notNull(),
});
