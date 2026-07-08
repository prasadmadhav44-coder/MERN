import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// Base_URL - localhost:3000/api
const prisma = new PrismaClient();

// 1. GET -  http://localhost:3000/api/blogs
export async function GET(req) {
  // 1. Data From Frontend [ No ]

  // 2. DB Logic
  const blogDatas = await prisma.blog.findMany();

  // 3. Data to Backend
  return NextResponse.json({
    data: blogDatas,
  });
}

// 2. POST -  http://localhost:3000/api/blogs
export async function POST(req) {
  // 1. Data from Frontend
  const body = await req.json();
  const { blog_id, blog_title, blog_author } = body;

  // 2. DB Logic
  const newBlog = await prisma.blog.create({
    data: {
      blog_id: blog_id,
      blog_title: blog_title,
      blog_author: blog_author
    }
  })

  // 3. Data to Frontend
  return NextResponse.json(newBlog);
}