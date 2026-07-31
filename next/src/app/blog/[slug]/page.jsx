// app/blog/[slug]/page.tsx

export const revalidate = 60; // ISR: every 1 minute

// Generate all static params at build time
export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/posts");
  const data = await res.json();

  return data.posts.map((post) => ({
    slug: post.id.toString(),
  }));
}

const BlogPostByID = async ({ params }) => {
  const { slug } = await params
  const res = await fetch(`https://dummyjson.com/posts/${slug}`, {
    // Important for SSG
    cache: "force-cache",
  });
  const post = await res.json();

  return (
    <div>
      <h1>Post ID: {params.slug}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default BlogPostByID;
