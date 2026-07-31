import { PrismaClient } from "@prisma/client";

const { NextResponse } = require("next/server");

const prisma = new PrismaClient();

export async function GET(request, { params }) {
  // 1. Data from Frontend
  const data = await params;

  // 2. DB Logic
  const db_data = await prisma.blog.findUnique({
    where: { blog_id: data.blog_id },
  });

  // 3. Data to Frontend
  return NextResponse.json({ message: "Fetched a Blog", data: db_data });
}