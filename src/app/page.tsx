import { getAllTodos } from "@/data-access/todos";
import { createTodoAction, deleteTodoAction, toggleTodoAction } from "./actions";
import { unstable_noStore } from "next/cache";
import { SubmitButton } from "./submit-button";
import { CheckSquareIcon, SquareIcon } from "lucide-react";

export default async function Home() {
  const todos = await getAllTodos();
  unstable_noStore(); // we're fetching dynamic data, so we don't want to cache this page because it will be stale immediately.

  return (
    <main className="">

      <form action={createTodoAction}>
        <input name="text" className="text-black"/>
        <SubmitButton/>
      </form>

      <ul className="list-disc">
        {todos.map(todo => (
          <li key={todo.id} className="flex gap-2 items-center">
            <form action={toggleTodoAction.bind(null, todo.id)}>
              <button>
                {todo.completed ? <CheckSquareIcon/> : <SquareIcon/>}
              </button>
            </form>
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
