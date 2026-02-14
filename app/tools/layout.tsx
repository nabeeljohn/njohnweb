import DevToolsHeader from "@/appcomponents/devtoolsheader";

export default function ToolsLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className="min-h-screen flex flex-col">
            <DevToolsHeader />
            <main className="flex-1">
                {children}
            </main>
        </div>
    );
}