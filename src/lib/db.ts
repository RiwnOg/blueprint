import prisma from "./prisma";

export async function getAllTodos() {
  const data = await prisma.tb_todo.findMany();
  return data;
}
/*
export async function createTodo(
  newTodo: { title: string; content: string },
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    if (!newTodo.title.length) {
      return res
        .status(500)
        .json({ message: "Please do not leave this empty" });
    }
    const data = await prisma.tb_todo.create({
      data: {
        title: newTodo.title,
        content: newTodo.content,
      },
    });
    res.status(200).json(data);
  }
}
*/
