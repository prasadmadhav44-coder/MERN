async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json()
  return data.products;
}

const Products = async () => {
  const products = await getProducts();

  return (
    <>
      <div>
        <p>Products List</p>
        {products.map((e) => (
          <p key={e.id}>{e.title}</p>
        ))}
      </div>
    </>
  );
};

export default Products;
