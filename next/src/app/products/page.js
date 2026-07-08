"use client"
import { useEffect, useState } from "react"

const Products = () => {
  const [data,setData] = useState();

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json(); 
      setData(data)
    } catch(err) {
      console.log(err)
    }
  }

  console.log(data)

  return (
    <p>Products Page</p>
  )
}

export default Products