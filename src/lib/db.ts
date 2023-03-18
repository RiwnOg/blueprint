import prisma from "./prisma";

export async function getAllTodos() {
  const data = await prisma.tb_todo.findMany();
  return data;
}

export async function createTodo(title: string, content: string) {
  await prisma.tb_todo.create({
    data: {
      title,
      content,
    },
  });
}
