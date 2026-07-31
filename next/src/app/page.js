import Link from "next/link";
import "./style.css"


export default function Home() {
  return (
    <>
      <p className="style">Home Page</p>

      <p className="text-green-500">Home Page</p>

      <Link href="/">
        <button className="bg-amber-500">Home Page</button>
      </Link>

      <Link href="/about">
        <button className="bg-amber-500">About Page</button>
      </Link>
      
      <Link href="/blog">
        <button className="bg-amber-500">Blog Page</button>
      </Link>
    </>
  );
}
