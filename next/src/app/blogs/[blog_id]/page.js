// get all the recipes
const getAllRecipes = async () => {
  try {
    const res = await fetch("https://dummyjson.com/recipes",{
      next: {
        revalidate: 30
      }
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

// recipes by the ID
const getRecipeByID = async (id) => {
  try {
    const res = await fetch(`https://dummyjson.com/recipes/${id}`,{
      next: {
        revalidate: 30, // revalidate every 60 Sec
      }
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const generateStaticParams = async () => {
  const recipes = await getAllRecipes();
  return recipes.recipes.map((items) => ({ slug: items.id }));
};

const BlogDetails = async ({ params }) => {
  const { blog_id } = await params;
  const res = await getRecipeByID(blog_id);

  console.log(res)

  return <p>Hello - {blog_id}</p>;
};

export default BlogDetails;
