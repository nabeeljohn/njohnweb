import { Suspense } from "react";
import SignInClient from "./signinclient";

export default function Page() {
  return (
    <Suspense fallback={<div className="h-full flex items-center justify-center bg-gray-700 text-gray-100 pt-12 pb-12 px-4">Loading...</div>}>
      <SignInClient />
    </Suspense>
  );
}
