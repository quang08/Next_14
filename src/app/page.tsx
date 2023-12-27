import { getAllTodos } from "@/data-access/todos";
import { createTodoAction, deleteTodoAction } from "./actions";
import { unstable_noStore } from "next/cache";

export default async function Home() {
  const todos = await getAllTodos();
  unstable_noStore(); // we're fetching dynamic data, so we don't want to cache this page because it will be stale immediately.

  return (
    <main className="">

      <form action={createTodoAction}>
        <input name="text" className="text-black"/>
        <button>Create Todo</button>
      </form>

      <ul className="list-disc">
        {todos.map(todo => (
          <li key={todo.id} className="flex gap-2 items-center">
            {todo.text}
            <form action={deleteTodoAction.bind(null, todo.id)}>
              <button className="text-red-400">Delete</button>
            </form>
          </li>
        ))}
      </ul>
    </main>
  )
}
