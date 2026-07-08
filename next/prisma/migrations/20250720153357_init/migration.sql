-- CreateTable
CREATE TABLE "Blog" (
    "blog_id" TEXT NOT NULL,
    "blog_title" TEXT NOT NULL,
    "blog_author" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("blog_id")
);
