import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

import Container from "@/components/Container";

export default function Home() {
  return (
    <Container className="flex h-full flex-col items-center justify-center gap-10">
      <h1 className="text-center font-black text-6xl">Language Story</h1>
      <SignedOut>
        <li>
          <SignInButton />
        </li>
      </SignedOut>
      <SignedIn>
        <Link
          href="/dashboard"
          className="inline-block cursor-pointer rounded bg-blue-500 px-5 py-3 font-bold text-white"
        >
          Dashboard
        </Link>
      </SignedIn>
    </Container>
  );
}
