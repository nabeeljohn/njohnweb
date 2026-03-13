import Link from "next/link";
import { pageTitle } from "@/lib/metadata/metadata";

export const metadata = {
  title: pageTitle("Developer Tools"),
};

const cardStyle = "bg-gray-800 hover:bg-gray-900 text-center p-6 rounded-lg shadow-lg transition"

export default function DevToolsHome() {
  return (
    <>
      {/* Page content container */}
      <div className="bg-gray-700 text-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">

          {/* Page Title */}
          <h1 className="text-3xl font-bold mb-8">Developer Toolbox</h1>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* URL Encoder/Decoder */}
            <Link
              href="/tools/url"
              className={cardStyle}
            >
              <h2 className="text-xl font-semibold text-blue-400 mb-2">
                Link Lab
              </h2>
              <p className="text-gray-300 text-sm">
                Encode or decode URLs quickly.
              </p>
            </Link>

            {/* Todo List */}
            <Link
              href="/tools/tasks"
              className={cardStyle}
            >
              <h2 className="text-xl font-semibold text-blue-400 mb-2">
                Tasks
              </h2>
              <p className="text-gray-300 text-sm">
                Manage your tasks and action items.
              </p>
              <p className="text-gray-500 text-xs mt-1">Requires Login</p>
            </Link>

            {/* JWT Generator */}
            <Link
              href="/tools/jwt"
              className={cardStyle}
            >
              <h2 className="text-xl font-semibold text-blue-400 mb-2">
                JWT Generator
              </h2>
              <p className="text-gray-300 text-sm">
                Generate and sign JWT tokens.
              </p>
            </Link>

            {/* SAML Utility */}
            <Link
              href="/tools/saml"
              className={cardStyle}
            >
              <h2 className="text-xl font-semibold text-blue-400 mb-2">
                SAML Utility
              </h2>
              <p className="text-gray-300 text-sm">
                Decode, inspect and verify SAML messages.
              </p>
            </Link>

            {/* XML and JSON Formatter */}
            <Link
              href="/tools/formatter"
              className={cardStyle}
            >
              <h2 className="text-xl font-semibold text-blue-400 mb-2">
                XML & JSON Formatter
              </h2>
              <p className="text-gray-300 text-sm">
                Format and validate XML and JSON data.
              </p>
            </Link>

            {/* Placeholder 4 */}
            <Link
              href="/tools/todo"
              className={cardStyle}
            >
              <h2 className="text-xl font-semibold text-blue-400 mb-2">
                Payment Tracker
              </h2>
              <p className="text-gray-300 text-sm">
                Track and manage payments.
              </p>
              <p className="text-gray-500 text-xs mt-1">Requires Login</p>
            </Link>

          </div>

          {/*Feedback section*/}
          <div className="mt-12 rounded-xl border border-gray-700 bg-gray-800/70 backdrop-blur-sm p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-white">
                Help me improve the tools
              </h2>

              <p className="text-sm text-gray-400 mt-1">
                Request a new tool, report a bug, or suggest an improvement to an existing one.
              </p>
            </div>

            <Link
              href="/request-tool"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg text-white font-medium whitespace-nowrap"
            >
              Give Feedback
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
