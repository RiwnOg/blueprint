import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await prisma.tb_todo.findMany();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
