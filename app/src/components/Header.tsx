import Container from "@/components/Container";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import LanguageStoryIcon from "@/components/svg/LanguageStoryIcon";

const Header = () => {
  return (
    <header>
      <Container className="flex items-center justify-between py-5">
        <p className="font-bold text-lg">
          <Link href="/">
            <LanguageStoryIcon className="w-9 h-auto mr-2" />
            Language Story
          </Link>
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
