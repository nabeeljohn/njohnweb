"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { formatJSON, minifyJSON, formatXML, minifyXML } from "@/lib/formatter/formatter";

export default function JSONXMLFormatter() {
    const params = useParams();
    const initialType = params.type === "xml" ? "xml" : "json"; // default to JSON

    const [inputType, setInputType] = useState<"json" | "xml">(initialType);
    const [output, setOutput] = useState("");
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        if (!output) return;
        await navigator.clipboard.writeText(output);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleFormat = (input: string) => {
        if (inputType === "json") {
            setOutput(formatJSON(input));
        } else {
            setOutput(formatXML(input));
        }
    };

    const handleMinify = (input: string) => {
        if (inputType === "json") {
            setOutput(minifyJSON(input));
        } else {
            setOutput(minifyXML(input));
        }
    };

    return (
        <div className="bg-gray-700 text-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-6">
                <h1 className="text-3xl font-bold mb-6">{inputType.toUpperCase()} Formatter</h1>

                <p className="text-gray-400 mb-6">
                    Format and minify your {inputType.toUpperCase()} data for improved readability.
                </p>

                {/* Toggle + Buttons Container */}
                <div className="flex items-center justify-between mb-4">
                    {/* Left: Toggle JSON/XML */}
                    <div className="flex gap-2 bg-gray-800 p-2 rounded-full">
                        {["json", "xml"].map((type) => (
                            <button
                                key={type}
                                onClick={() => setInputType(type as "json" | "xml")}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition ${inputType === type
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                                    }`}
                            >
                                {type.toUpperCase()}
                            </button>
                        ))}
                    </div>

                    {/* Right: Format / Minify */}
                    <div className="flex gap-2">
                        <button
                            onClick={() => handleFormat(output)}
                            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-sm min-w-[100px]"
                        >
                            Format
                        </button>
                        <button
                            onClick={() => handleMinify(output)}
                            className="bg-gray-900 hover:bg-gray-800 px-6 py-2 rounded text-sm min-w-[100px]"
                        >
                            Minify
                        </button>
                    </div>
                </div>

                <div className="space-y-8">
                    {/* Input */}
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Input</h2>
                        <textarea
                            className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:border-blue-500 resize-y font-mono text-sm"
                            placeholder={
                                inputType === "json"
                                    ? "Paste your JSON data here..."
                                    : "Paste your XML data here..."
                            }
                            rows={14}
                            onChange={(e) =>
                                inputType === "json" ? handleFormat(e.target.value) : handleFormat(e.target.value)
                            }
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
                            rows={14}
                            readOnly
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}