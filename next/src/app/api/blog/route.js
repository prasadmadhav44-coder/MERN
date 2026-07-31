import { PrismaClient } from "@prisma/client";

const { NextResponse } = require("next/server");

const prisma = new PrismaClient();

export async function GET() {
  // 1. Data from Frontend

  // 2. DB Logic
  const db_data = await prisma.blog.findMany();

  // 3. Data to Frontend
  return NextResponse.json({ message: "Fetched All Blogs", data: db_data });
}

export async function POST(request) {
  // 1. Data from Frontend
  const data = await request.json();

  // 2. DB Logic
  const db_data = await prisma.blog.create({
    data: {
      blog_cover_url: data.blog_cover_url,
      blog_title: data.blog_title,
      blog_description: data.blog_description,
      blog_tags: data.blog_tags,
      blog_author_name: data.blog_author_name,
      blog_author_url: data.blog_author_url,
      blog_content: data.blog_content,
    },
  });

  // 3. Data to Frontend
  return NextResponse.json({ message: "New Blog Created", data: db_data });
}

export async function PUT(request) {
  // 1. Data from Frontend

  const data = await request.json();

  // 2. DB Logic
  const db_data = await prisma.blog.update({
    where: { blog_id: data.blog_id },
    data: {
      blog_cover_url: data.blog_cover_url,
      blog_title: data.blog_title,
      blog_description: data.blog_description,
      blog_tags: data.blog_tags,
      blog_author_name: data.blog_author_name,
      blog_author_url: data.blog_author_url,
      blog_content: data.blog_content,
    },
  });

  // 3. Data to Frontend
  return NextResponse.json({ message: "Updated a Blog", data: db_data });
}

export async function DELETE(request) {
  // 1. Data from Frontend

  const data = await request.json();

  // 2. DB Logic
  await prisma.blog.delete({
    where: { blog_id: data.blog_id },
  });

  // 3. Data to Frontend
  return NextResponse.json({ message: "Deleted a Blog" });
}
