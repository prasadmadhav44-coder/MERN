"use client"

import Link from "next/link";
import "./style.css"
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  return (
    <>
      <p className="paragraph">Hello World</p>
      <p className="bg-green-500">Heading</p>

      <Link href="/about">
          <button>Go to About Page</button>
      </Link>

      <button onClick={()=> router.push("/about")}>About Page</button>
    </>
  );
}
