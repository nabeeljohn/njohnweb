import ToolsMenuBreadcrumbs from "@/appcomponents/toolsmenu/toolsmenubreadcrumbs";

export default function DevToolsLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className="flex flex-col">
            <main className="flex-1">
                <div className="bg-gray-700 text-gray-100">
                    <div className="max-w-7xl mx-auto px-6">
                        <ToolsMenuBreadcrumbs items={[
                            { label: "Developer Tools", href: "/tools/dev" },
                            { label: "Link Lab", href: "/tools/dev/url" },
                            { label: "JWT Tools", href: "/tools/dev/jwt" },
                            { label: "SAML Utility", href: "/tools/dev/saml" },
                            { label: "XML and JSON Formatter", href: "/tools/dev/formatter" },
                            { label: "Milo AI", href: "/tools/dev/agent" },
                        ]} />
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}