import { serial, text, boolean, pgTable } from "drizzle-orm/pg-core";

export const todos = pgTable("todos", {
  id: serial("id").primaryKey(),
  completed: boolean("completed").default(false),
  text: text("text").notNull(),
});

export type Todo = typeof todos.$inferSelect;