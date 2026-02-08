import Link from "next/link"

export default function Header() {
    return (
        <header className="w-full h-16 bg-gray-800 text-white flex items-center justify-center">
            <h1 className="text-xl font-bold">Tools:</h1>
            <p>
                <Link href="/tools/url" className="ml-4 text-blue-400 hover:underline">URL Encoder/Decoder</Link>
                <span className="mx-2"> | </span>
                <Link href="/tools/todo" className="ml-4 text-blue-400 hover:underline">Todo List</Link>
            </p>
        </header>
    );
}