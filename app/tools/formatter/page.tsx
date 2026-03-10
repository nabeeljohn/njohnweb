"use client";

import { useState } from "react";

export default function JSONXMLFormatter() {
    const [output, setOutput] = useState("");
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        if (!output) return;

        await navigator.clipboard.writeText(output);
        setCopied(true);

        setTimeout(() => setCopied(false), 2000);
    };

    function formatJSON(json: string) {
        try {
            const parsed = JSON.parse(json);
            return JSON.stringify(parsed, null, 2);
        } catch (e) {
            return "Invalid JSON";
        }
    }

    return (
        <div className="bg-gray-700 text-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-6">

                <h1 className="text-3xl font-bold mb-6">JSON/XML Formatter</h1>

                <p className="text-gray-400 mb-8">
                    Format and beautify your JSON or XML data for improved readability.
                </p>

                <div className="space-y-8">

                    {/* Input */}
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Input</h2>

                        <textarea
                            className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:border-blue-500 resize-y font-mono text-sm"
                            placeholder="Paste your JSON or XML data here..."
                            rows={18}
                            onChange={(e) => setOutput(formatJSON(e.target.value))}
                        />
                    </div>

                    {/* Output */}
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="text-xl font-semibold">Output</h2>

                            <button
                                onClick={handleCopy}
                                className="bg-gray-900 hover:bg-gray-800 px-3 py-1 rounded text-sm transition"
                            >
                                {copied ? "Copied!" : "Copy to Clipboard"}
                            </button>
                        </div>

                        <textarea
                            value={output}
                            className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:border-blue-500 resize-y font-mono text-sm"
                            placeholder="Formatted data will appear here..."
                            rows={18}
                            readOnly
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}