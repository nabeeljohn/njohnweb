import Link from "next/link";

export default function DevToolBoxes() {
    const cardStyle = "bg-gray-800 hover:bg-gray-900 text-center p-6 rounded-lg shadow-lg transition"

    return (
        <>
            {/* Page Title */}
            <h1 className="text-3xl font-bold mb-8">Developer Toolbox</h1>

            {/* Tools Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* URL Encoder/Decoder */}
                <Link
                    href="/tools/dev/url"
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
                    href="/tools/dev/tasks"
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
                    href="/tools/dev/jwt"
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
                    href="/tools/dev/saml"
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
                    href="/tools/dev/formatter"
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
                    href="/tools/dev/paytracker"
                    className={cardStyle}
                >
                    <h2 className="text-xl font-semibold text-blue-400 mb-2">
                        PayTracker
                    </h2>
                    <p className="text-gray-300 text-sm">
                        Track and manage payments.
                    </p>
                    <p className="text-gray-500 text-xs mt-1">Requires Login</p>
                </Link>

            </div>
        </>
    )
}