// BASE_URL = localhost:3000/api/blogs/:blog_id
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

// 1. GET - localhost:3000/api/blogs/:blog_id
export async function GET(req, { params }) {
  // 1. Data from Frontend
  const blog_id = params.blog_id;

  // 2. DB Logic
  const blogData = await prisma.blog.findUnique({
    where: {
      blog_id: blog_id,
    },
  });

  // 3. Data to Frontend
  return NextResponse.json({
    data: blogData,
  });
}

// 2. PUT - localhost:3000/api/blogs/:blog_id
export async function PUT(req, { params }) {
  // 1. Data from Frontend
  const blog_id = params.blog_id;
  const body = await req.json();

  // 2. DB Logic
  const blog = await prisma.blog.update({
    where: {
      blog_id: blog_id,
    },
    data: {
      blog_id: body.blog_id,
      blog_title: body.blog_title,
      blog_author: body.blog_author,
    },
  });

  // 3. Data to Frontend
  return NextResponse.json({
    data: blog,
  });
}

// 3. DELETE - localhost:3000/api/blogs/:blog_id
export async function DELETE(req, { params }) {
  // 1. Data from Frontend
  const blog_id = params.blog_id;

  // 2. DB Logic
  await prisma.blog.delete({
    where: {
      blog_id: blog_id,
    },
  });

  // 3. Data to Frontend
  return NextResponse.json({
    message: "Blog deleted",
  });
}
