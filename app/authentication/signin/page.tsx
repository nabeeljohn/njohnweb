import { Suspense } from "react";
import SignInClient from "./signinclient";
import { handleGetCurrentUser } from "@/lib/authentication/actions";
import { pageTitle } from "@/lib/metadata/metadata";
import Link from "next/link";

export const metadata = {
    title: pageTitle("Sign In"),
    description: "Sign in to your NJohn Web account to access your personalized dashboard, manage your tools, and stay productive. Enter your credentials to get started.",
};


export default async function Page() {
  const contact = await handleGetCurrentUser();

  // If user is already signed in, show a friendly message
  if (contact) {
    return (
      <div className="flex items-center justify-center">
        <div className="max-w-xxl w-full px-6 py-8 bg-gray-800/70 rounded-lg shadow-lg text-gray-300 text-center flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-white">
            Welcome back, {contact.firstName}!
          </h1>
          <p className="text-gray-400">
            MemberId: {contact.memberId}
          </p>
          <p className="text-gray-400">
            You’re already signed in. You can access your productivity tools dashboard or log out below.
          </p>

          <div className="flex gap-4 justify-center mt-4">
            <Link
              href="/tools/productivity/"
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md transition-colors"
            >
              Go to Productivity Tools
            </Link>
            <Link
              href="/authentication/signout"
              className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-md transition-colors"
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
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