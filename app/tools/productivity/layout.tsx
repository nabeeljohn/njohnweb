import ToolsMenuBreadcrumbs from "@/appcomponents/toolsmenu/toolsmenubreadcrumbs";

type children = {
    children: React.ReactNode;
};

export default function ProductivityToolsLayout({children} : children) {
    return (
        <div className="flex flex-col">
            <main className="flex-1">
                <div className="bg-gray-700 text-gray-100">
                    <div className="max-w-7xl mx-auto px-6">
                    <ToolsMenuBreadcrumbs items={[
                            { label: "Productivity Tools", href: "/tools/productivity" },
                            { label: "Tasks Lite", href: "/tools/productivity/tasks" },
                            { label: "Pay Tracker", href: "/tools/productivity/paytracker" },
                        ]} />
                        {children}
                    </div>
                </div>
            </main>
        </div>
    )
}