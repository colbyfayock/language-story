import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/Container";
import ChecklistAudio from "@/components/svg/ChecklistAudio";
import LanguageBook from "@/components/svg/LanguageBook";
import MessageBubbles from "@/components/svg/MessageBubbles";
import WomanLearningLanguage from "@/components/svg/WomanLearningLanguage";
import WomanReadingStory from "@/components/svg/WomanReadingStory";

export default function Home() {
  return (
    <>
      <Container className="flex h-full flex-col items-center justify-center gap-10 pt-12 pb-0 lg:pt-30 lg:pb-30">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-0">
          <div className="flex max-w-2xl flex-col justify-center text-center lg:text-left">
            <h1 className="mb-6 font-extrabold text-5xl md:text-6xl">
              Learn a new language with a daily story
            </h1>
            <p className="mb-8 text-2xl">
              Receive a new story every day in your target language with
              translations, questions, and audio to help you learn.
            </p>
            <p className="text-xl">
              <Link
                href="/dashboard"
                className="inline-block cursor-pointer rounded bg-ls-blue-500 px-5 py-3 font-bold text-white"
              >
                <SignedIn>Go to Dashboard</SignedIn>
                <SignedOut>Join the Waitlist</SignedOut>
              </Link>
            </p>
          </div>
          <div className="flex items-center justify-center">
            <WomanReadingStory className="h-auto max-h-96 w-full px-10 md:px-0 lg:max-h-none" />
          </div>
        </div>
      </Container>

      <div className="bg-white">
        <Container className="py-12 md:py-30">
          <h2 className="relative z-10 mb-8 text-center font-bold text-5xl md:mb-16">
            Features
          </h2>
          <div className="relative z-0">
            <ul className="relative z-10 grid gap-6 md:grid-cols-3">
              <li className="mx-auto w-full max-w-md rounded-lg bg-white px-6 py-10 text-center shadow-lg shadow-ls-slate-900/5">
                <span className="mb-6 flex items-center justify-center md:aspect-video">
                  <LanguageBook className="h-auto w-full max-w-36 md:h-full md:max-h-30 md:w-auto" />
                </span>
                <h3 className="mb-4 font-semibold text-2xl">
                  Engaging Stories
                </h3>
                <p className="text-lg">
                  Read stories tailored to your learning level.
                </p>
              </li>
              <li className="mx-auto w-full max-w-md rounded-lg bg-white px-6 py-10 text-center shadow-lg shadow-ls-slate-900/5">
                <span className="mb-6 flex items-center justify-center md:aspect-video">
                  <MessageBubbles className="h-auto w-full max-w-36 md:h-full md:max-h-30 md:w-auto" />
                </span>
                <h3 className="mb-4 font-semibold text-2xl">
                  Full Translations
                </h3>
                <p className="text-lg">
                  Understand the stories with complete translations.
                </p>
              </li>
              <li className="mx-auto w-full max-w-md rounded-lg bg-white px-6 py-10 text-center shadow-lg shadow-ls-slate-900/5">
                <span className="mb-6 flex items-center justify-center md:aspect-video">
                  <ChecklistAudio className="h-auto w-full max-w-36 md:h-full md:max-h-30 md:w-auto" />
                </span>
                <h3 className="mb-4 font-semibold text-2xl">
                  Questions &amp; Audio
                </h3>
                <p className="text-lg">
                  Test your comprehension with native audio.
                </p>
              </li>
            </ul>
            <svg
              className="translate-[0,_-115%] -rotate-90 -ml-[35rem] md:-ml-[10%] lg:-ml-[5%] absolute top-[28%] left-1/2 z-0 m-auto h-auto w-[70rem] origin-center md:top-0 md:right-0 md:bottom-0 md:left-0 md:w-[120%] md:rotate-0 lg:w-[110%]"
              width="923"
              height="394"
              viewBox="0 0 923 394"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M707.144 0C617.144 0 499.144 38 411.144 38.5C305.644 34.5 269.144 23 233.144 18C197.144 13 129.644 0 55.6438 27.5C-18.3562 55 -13.3562 164.5 40.1438 253.5C93.6438 342.5 208.644 394 317.144 394C425.644 394 430.144 366.5 528.644 366.5C627.144 366.5 634.644 387.5 745.144 366.5C855.644 345.5 922.144 279 922.144 180.5C922.144 82 797.144 0 707.144 0Z"
                className="fill-ls-slate-50"
              />
            </svg>
          </div>
        </Container>
      </div>

      <div className="bg-white">
        <Container className="py-10 lg:p-20">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-10 lg:flex-row">
            <p>
              <Image
                width="400"
                height="400"
                src="/colby-fayock.png"
                alt="Colby Fayock"
                className="aspect-square h-auto max-w-48 rounded-full"
              />
            </p>
            <div className="max-w-lg text-center lg:max-w-none lg:text-left">
              <h2 className="mb-3 font-bold text-3xl">Built by Colby Fayock</h2>
              <p className="mb-4">
                Language Story is built by Colby Fayock — a developer and
                lifelong learner who&apos;s passionate about making learning fun
                and approachable for everyone
              </p>
              <ul className="flex justify-center gap-3 lg:justify-start">
                <li>
                  <Link
                    href="https://twitter.com/colbyfayock"
                    className="text-ls-blue-400 hover:underline"
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://youtube.com/colbyfayock"
                    className="text-ls-blue-400 hover:underline"
                  >
                    YouTube
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-white">
        <Container className="relative pt-20 pb-[calc(var(--spacing)_*_110)]">
          <h2 className="mb-16 text-center font-extrabold text-5xl">
            Start your language journey today!
          </h2>
          <p className="mb-8 text-center text-2xl">
            <Link
              href="/dashboard"
              className="inline-block cursor-pointer rounded bg-ls-blue-400 px-5 py-3 font-bold text-white"
            >
              Join the Waitlist
            </Link>
          </p>
          <WomanLearningLanguage className="absolute right-0 bottom-0 left-0 mx-auto max-h-96 w-auto max-w-full" />
        </Container>
      </div>
    </>
  );
}
