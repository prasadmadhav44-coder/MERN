-- CreateTable
CREATE TABLE "Blog" (
    "blog_id" TEXT NOT NULL,
    "blog_cover_url" TEXT NOT NULL,
    "blog_title" TEXT NOT NULL,
    "blog_description" TEXT NOT NULL,
    "blog_tags" TEXT NOT NULL,
    "blog_author_name" TEXT NOT NULL,
    "blog_author_url" TEXT NOT NULL,
    "blog_content" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("blog_id")
);
