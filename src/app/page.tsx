import { createTodoAction } from "./actions";

export default function Home() {
  return (
    <main className="">
      <form action={createTodoAction}>
        <input name="text" className="text-black"/>
        <button>Create Todo</button>
      </form>
    </main>
  )
}
