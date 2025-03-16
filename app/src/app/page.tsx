import Link from "next/link";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

import Container from "@/components/Container";

export default function Home() {
  return (
    <Container className="flex items-center flex-col justify-center gap-10 h-full">
      <h1 className="text-6xl text-center font-black">Language Story</h1>
      <SignedOut>
        <li>
          <SignInButton />
        </li>
      </SignedOut>
      <SignedIn>
        <Link
          href="/dashboard"
          className="inline-block px-5 py-3 bg-blue-500 text-white font-bold rounded cursor-pointer"
        >
          Dashboard
        </Link>
      </SignedIn>
    </Container>
  );
}
