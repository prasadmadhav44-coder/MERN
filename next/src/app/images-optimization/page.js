import Image from "next/image";

const ImagePage = () => {
  return (
    <>
      {/** Via Image CDN */}
      <img src="https://static.toiimg.com/photo/80387978.cms" />

      {/** Via Image Local Storage */}
      {/* <img src="/a.jpg" /> */}

      <Image src={"/a.jpg"} alt="Picture Car" width={500} height={500} />
    </>
  );
};

export default ImagePage;
