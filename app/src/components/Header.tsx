import Container from "@/components/Container";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Container className="flex items-center justify-between py-5">
        <p className="font-bold text-lg">
          <Link href="/">Language Story</Link>
        </p>
        <ul className="flex items-center gap-4">
          <SignedOut>
            <li>
              <SignInButton />
            </li>
          </SignedOut>
          <SignedIn>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <UserButton
                appearance={{
                  elements: {
                    rootBox: {
                      display: "block",
                    },
                    userButtonTrigger: {
                      display: "block",
                    },
                  },
                }}
              />
            </li>
          </SignedIn>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
