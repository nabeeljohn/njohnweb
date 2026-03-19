import Link from "next/link";
import { productivityToolsUrls } from "@/lib/urls/urls";


export default function ProductivityToolBoxes() {
    const cardStyle = "bg-gray-800 hover:bg-gray-900 text-center p-6 rounded-lg shadow-lg transition"

    return (
        <>
            {/* Page Title */}
            <h1 className="text-3xl font-bold mb-8">Productivity Toolbox</h1>

            {/* Tools Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Tasks */}
                <Link
                    href={productivityToolsUrls.tasks}
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

                {/* PayTracker */}
                <Link
                    href={productivityToolsUrls.payTracker}
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