import ProductivityToolsHeader from "@/appcomponents/productivitytools/productivitytoolsheader"

type children = {
    children: React.ReactNode;
};

export default function ProductivityToolsLayout({children} : children) {
    return (
        <div className="flex flex-col">
            <ProductivityToolsHeader />
            <main className="flex-1">
                <div className="bg-gray-700 text-gray-100 py-12">
                    <div className="max-w-7xl mx-auto px-6">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    )
}