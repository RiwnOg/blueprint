import Link from "next/link";
import { getAllTodos } from "../../lib/db";

export default async function Todo() {
  const todos = await getAllTodos();
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">
          I&apos;m the Todo page!
        </h1>
        <Link href="/"> Go Home </Link>
      </div>
      <div>Lista dos Todos</div>
      {todos.map((todo, index: number) => (
        <li key={todo.id}>
          <h1 className="text-lg px-2 py-6">
            {index + 1} - {todo.title}: {todo.content} ~{" "}
            {todo.published ? "Publicado" : "Rascunho"}
          </h1>
        </li>
      ))}
    </>
  );
}

/*
import { tb_todo } from "@prisma/client";
import Link from "next/link";

async function getTodos() {
  const res = await fetch(`${process.env.BASE_URL}/api/todo`, {
    method: "GET",
    cache: "no-store",
  });
  if (!res.ok) {
    console.log("error_res ==>", res);
  }
  return res.json();
}

export default async function Todo() {
  const data: tb_todo[] = await getTodos();
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">
          I&apos;m the Todo page!
        </h1>
        <Link href="/"> Go Home </Link>
      </div>
      <div>Lista dos Todos</div>
      {data.map((Todo, index: number) => (
        <li key={Todo.id}>
          <h1 className="text-lg px-2 py-6">
            {index + 1} - {Todo.title}: {Todo.content} ~{" "}
            {Todo.published ? "Publicado" : "Rascunho"}
          </h1>
        </li>
      ))}
    </>
  );
}
*/
