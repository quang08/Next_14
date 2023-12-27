'use server'

import { db } from "@/db";
import { todos } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function createTodoAction(formData: FormData) {
    const text = formData.get("text") as string;
    await db.insert(todos).values({text})
    revalidatePath("/")
}

export async function deleteTodoAction(id: number) {
    await db.delete(todos).where(eq(todos.id, id));
    revalidatePath("/")
}