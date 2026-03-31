'use client';

import { useState } from "react";
import { handleLoginContact } from "@/lib/authentication/actions";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function SignInClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirectUrl = searchParams.get("redirect") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    const result = await handleLoginContact({ message: { success: "", error: "" } }, formData);

    if (result?.message?.success) {
      // setSuccessMessage(result.message.success);
      // setErrorMessage("");
      router.push(redirectUrl);
    } else if (result?.message?.error) {
      setErrorMessage(result.message.error);
      setSuccessMessage("");
    }
  };

  return (
    <div className="h-full flex items-center justify-center bg-gray-700 text-gray-100 pt-12 pb-12 px-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-xl">
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign In</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            {successMessage && (
              <div className="bg-green-900/50 text-green-400 p-3 rounded-md">{successMessage}</div>
            )}
            {errorMessage && (
              <div className="bg-red-900/50 text-red-400 p-3 rounded-md">{errorMessage}</div>
            )}
          </div>

          <div>
            <label className="block text-sm mb-1">Email address</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@yourdomain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              required
              className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 transition-colors py-2 rounded-md font-medium">
            Sign In
          </button>
        </form>

        <div className="mt-6 flex flex-col sm:flex-row justify-between text-sm text-gray-400">
          <Link href="/authentication/forgot-password" className="hover:text-gray-200">
            Forgot password?
          </Link>
          <Link href="/authentication/signup" className="hover:text-gray-200 mt-2 sm:mt-0">
            Don’t have an account? Sign up
          </Link>
        </div>

        <div className="mt-6 flex items-start space-x-2 bg-gray-700/50 p-3 rounded-md text-gray-300 text-sm">
          <svg className="w-4 h-4 mt-[2px] flex-shrink-0 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-9-4a1 1 0 112 0v1a1 1 0 11-2 0V6zm1 3a1 1 0 00-.993.883L9 10v4a1 1 0 001.993.117L11 14v-4a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <p>Enter the email and password you used during registration.</p>
        </div>
      </div>
    </div>
  );
}
