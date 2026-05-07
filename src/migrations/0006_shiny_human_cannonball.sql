CREATE TABLE "team_members" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"role" text NOT NULL,
	"bio" text DEFAULT '',
	"focus" jsonb NOT NULL,
	"image" text NOT NULL,
	"email" text NOT NULL,
	"linkedin" text NOT NULL,
	"history" jsonb NOT NULL
);
