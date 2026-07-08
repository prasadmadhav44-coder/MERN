const Blog = async () => {
  const getBlogs = async () => {
    const res = await fetch("https://dummyjson.com/recipes");
    const data = await res.json();
    return data;
  };

  const data = await getBlogs();

  return (
    <>
      <p>Blogs Pages</p>
      {data.recipes.map((items) => {
        return <p key={items.id}>{items.name}</p>;
      })}
    </>
  );
};

export default Blog;
