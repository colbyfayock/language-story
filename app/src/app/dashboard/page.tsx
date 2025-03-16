import { headers } from "next/headers";
import { auth } from "@clerk/nextjs/server";

import Container from "@/components/Container";
import FormPreferences from "@/components/FormPreferences";

import type { Language } from '@language-story/data/types';
import { LANGUAGES } from '@language-story/data/constants';
import { getPreferencesAction } from "@/app/actions";

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
      <h1 className="font-bold text-3xl mb-6">Dashboard</h1>
      <FormPreferences
        browserLanguage={browserLanguage}
        userPreferences={userPreferences}
      />
    </Container>
  );
}
