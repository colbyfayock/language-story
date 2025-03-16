import { auth } from "@clerk/nextjs/server";
import { headers } from "next/headers";

import Container from "@/components/Container";
import FormPreferences from "@/components/FormPreferences";

import { getPreferencesAction } from "@/app/actions";
import { LANGUAGES } from "@language-story/data/constants";
import type { Language } from "@language-story/data/types";

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

  const userPreferences = await getPreferencesAction();

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
