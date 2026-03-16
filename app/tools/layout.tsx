import DevToolsHeader from "@/appcomponents/devtools/devtoolsheader";

export default function ToolsLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className="flex flex-col">
            <DevToolsHeader />
            <main className="flex-1">
                <div className="bg-gray-700 text-gray-100 py-12">
                    <div className="max-w-7xl mx-auto px-6">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}