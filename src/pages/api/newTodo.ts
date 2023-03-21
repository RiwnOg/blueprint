import prisma from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const newTodo = JSON.parse(req.body).newTodo;
    if (req.method === "POST") {
      if (!newTodo.title.length) {
        return res
          .status(500)
          .json({ message: "Please do not leave this empty" });
      }
      try {
        const data = await prisma.tb_todo.create({
          data: {
            title: newTodo.title,
            content: newTodo.content,
          },
        });
        res.status(200).json(data);
      } catch (error) {
        return res.status(500).json({ message: "Error creating a new Post" });
      }
    }
  } catch (error) {
    return res.status(500).json(error);
  }
}
