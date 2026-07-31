import Image from 'next/image'
import React from 'react'

const ImagePage = () => {
  return (
    <>
      <p>Image Via Local Storage</p>
      <img src="./car.avif" />

      <p>Image Via CDN</p>
      <img src="https://ik.imagekit.io/4z8covdo9/batch%2018/car.jpg" />

      <p>Image Via Image - next/image </p>
      <Image src={"https://ik.imagekit.io/4z8covdo9/batch%2018/car.jpg"} width={300} height={300} alt='Car Image' />
    </>
  )
} 

export default ImagePage
