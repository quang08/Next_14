'use server'

import { db } from "@/db";
import { todos } from "@/db/schema";

export async function createTodoAction(formData: FormData) {
    const text = formData.get("text") as string;
    await db.insert(todos).values({text})
}