'use server'

import { db } from "@/db";
import { todos } from "@/db/schema";

export async function getAllTodos() {
    return await db.query.todos.findMany();
}