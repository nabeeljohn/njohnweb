import DevToolsHeader from "@/appcomponents/devtools/devtoolsheader";
import Link from "next/link";

const cardStyle = "bg-gray-800 hover:bg-gray-900 text-center p-6 rounded-lg shadow-lg transition"
export const metadata = {
  title: "NJohn Web - Developer Tools Home",
};

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
              href="/tools/todo"
              className={cardStyle}
            >
              <h2 className="text-xl font-semibold text-blue-400 mb-2">
                Todo List
              </h2>
              <p className="text-gray-300 text-sm">
                Save and manage todos.
              </p>
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

            {/* Placeholder 2 */}
            <div className="bg-gray-800 text-center p-6 rounded-lg shadow-lg opacity-60 cursor-not-allowed">
              <h2 className="text-xl font-semibold text-gray-400 mb-2">
                Tool Placeholder
              </h2>
              <p className="text-gray-500 text-sm">Coming soon…</p>
            </div>

            {/* Placeholder 3 */}
            <div className="bg-gray-800 text-center p-6 rounded-lg shadow-lg opacity-60 cursor-not-allowed">
              <h2 className="text-xl font-semibold text-gray-400 mb-2">
                Tool Placeholder
              </h2>
              <p className="text-gray-500 text-sm">Coming soon…</p>
            </div>

            {/* Placeholder 4 */}
            <div className="bg-gray-800 text-center p-6 rounded-lg shadow-lg opacity-60 cursor-not-allowed">
              <h2 className="text-xl font-semibold text-gray-400 mb-2">
                Tool Placeholder
              </h2>
              <p className="text-gray-500 text-sm">Coming soon…</p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
