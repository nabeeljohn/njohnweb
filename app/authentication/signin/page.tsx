import SignInClient from "./signinclient";
import AlreadySignedIn from "../alreadysignedin";
import { Suspense } from "react";
import { handleGetCurrentUser } from "@/lib/authentication/actions";
import { pageTitle } from "@/lib/metadata/metadata";

export const metadata = {
    title: pageTitle("Sign In"),
    description: "Sign in to your NJohn Web account to access your personalized dashboard, manage your tools, and stay productive. Enter your credentials to get started.",
};

export default async function Page() {
  const contact = await handleGetCurrentUser();

  // If user is already signed in, show a friendly message
  if (contact) {
    return (
        <AlreadySignedIn contact={contact} />
    );
  }

  // Otherwise, show the SignIn form
  return (
    <Suspense
      fallback={
        <div className="h-full flex items-center justify-center bg-gray-700 text-gray-100 pt-12 pb-12 px-4">
          Loading...
        </div>
      }
    >
      <SignInClient />
    </Suspense>
  );
}