import Link from "next/link";

export default function ToolFeedBack() {

    return (
        <>
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
        </>
    )
}