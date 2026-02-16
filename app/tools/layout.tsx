import DevToolsHeader from "@/appcomponents/devtools/devtoolsheader";

export default function ToolsLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className="flex flex-col">
            <DevToolsHeader />
            <main className="flex-1">
                {children}
            </main>
        </div>
    );
}