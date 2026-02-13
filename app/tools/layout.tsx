import Link from "next/link";
import "../globals.css";

export default function ToolsLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <div>
                <h1>Developer Tools</h1>
                <p>
                    <Link href="/tools/url">Url Encoder and Decoder</Link> |
                    <Link href="/tools/todo">Todo - NextUp App</Link>
                </p>
            </div>
            <div className="min-h-screen flex flex-col">
                {children}
            </div>
        </>
    );
}