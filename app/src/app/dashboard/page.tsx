import { auth } from "@clerk/nextjs/server";
import { headers } from "next/headers";

import { getPreferencesByUserId } from "@language-story/data/users";
import { LANGUAGES } from "@language-story/data/constants";
import type { Language } from "@language-story/data/types";

import Container from "@/components/Container";
import FormPreferences from "@/components/FormPreferences";


export default async function Dashboard() {
  const { userId } = await auth();

  if (!userId) return;

  const headersList = await headers();
  const acceptLanguage = headersList
    .get("accept-language")
    ?.split(",")[0] as Language;

  const browserLanguage = LANGUAGES.includes(acceptLanguage)
    ? acceptLanguage
    : undefined;

  const userPreferences = await getPreferencesByUserId(userId);

  return (
    <Container>
      <h1 className="mb-6 font-bold text-3xl">Dashboard</h1>
      <FormPreferences
        browserLanguage={browserLanguage}
        userPreferences={userPreferences}
      />
    </Container>
  );
}
