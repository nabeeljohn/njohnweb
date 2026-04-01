'use client'

import { useState } from "react";

export default function AddPaymentModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [dateTime, setDateTime] = useState("");
    const [amount, setAmount] = useState("");
    const [details, setDetails] = useState("");
    const [bank, setBank] = useState("");

    const handleNowClick = () => {
        const now = new Date().toISOString().slice(0, 16); // format YYYY-MM-DDTHH:mm
        setDateTime(now);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const paymentData = { dateTime, amount, details, bank };
        console.log("Payment submitted:", paymentData);
        // TODO: send to API or state management
        setIsOpen(false);
    };

    return (
        <>
            <button
                className="bg-gray-800 hover:bg-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition"
                onClick={() => setIsOpen(true)}
            >
                Add Payment
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 backdrop-blur-sm">
                    <div className="bg-gray-800 text-gray-100 p-6 rounded-lg w-full max-w-md relative">
                        {/* Close button */}
                        <button
                            className="absolute top-3 right-3 text-gray-400 hover:text-gray-200"
                            onClick={() => setIsOpen(false)}
                        >
                            ✕
                        </button>

                        <h2 className="text-xl font-semibold mb-4">Add Payment</h2>

                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            {/* DateTime */}
                            <div className="flex flex-col">
                                <label className="mb-1 text-gray-400">Date & Time</label>
                                <div className="flex gap-2">
                                    <input
                                        type="datetime-local"
                                        className="flex-1 bg-gray-700 text-gray-100 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={dateTime}
                                        onChange={(e) => setDateTime(e.target.value)}
                                    />
                                    <button
                                        type="button"
                                        className="bg-green-600 hover:bg-green-700 text-white px-3 rounded-md"
                                        onClick={handleNowClick}
                                    >
                                        Now
                                    </button>
                                </div>
                            </div>

                            {/* Amount */}
                            <div className="flex flex-col">
                                <label className="mb-1 text-gray-400">Amount</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    className="bg-gray-700 text-gray-100 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                />
                            </div>

                            {/* Transaction Details */}
                            <div className="flex flex-col">
                                <label className="mb-1 text-gray-400">Transaction Details</label>
                                <textarea
                                    className="bg-gray-700 text-gray-100 p-2 rounded-md resize-none min-h-[60px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={details}
                                    onChange={(e) => setDetails(e.target.value)}
                                />
                            </div>

                            {/* Bank */}
                            <div className="flex flex-col">
                                <label className="mb-1 text-gray-400">Bank</label>
                                <select
                                    className="bg-gray-700 text-gray-100 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={bank}
                                    onChange={(e) => setBank(e.target.value)}
                                >
                                    <option value="">Select a bank</option>
                                    <option value="MTB">MTB</option>
                                    <option value="Discover">Discover</option>
                                </select>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md mt-2"
                            >
                                Save Payment
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}