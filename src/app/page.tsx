'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/profile")
  }

  return (
    <>
      <Link href="/about">About</Link>
      <Link href="/profile/1">Profile</Link>
      <button onClick={() => handleClick()}>click</button>
    </>
  )
}