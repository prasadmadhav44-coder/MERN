import { useEffect, useState } from "react";

const useProductFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // https://dummyjson.com/products
  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setData(data.products);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return { data, loading };
};

export default useProductFetch;
