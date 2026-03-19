"use client";

import { useState } from "react";
import AddPaymentModal from "./modals/addpaymentmodal";

// Dummy placeholder data with amounts
const dummyPayments = [
    { id: "1", datetime: "2026-03-16T10:00:00", transaction: "Invoice #123", bank: "Bank A", amount: 120.50, is_completed: false },
    { id: "2", datetime: "2026-03-15T14:30:00", transaction: "Invoice #124", bank: "Bank B", amount: 85.75, is_completed: true },
    { id: "3", datetime: "2026-03-16T09:15:00", transaction: "Invoice #125", bank: "Bank C", amount: 250.00, is_completed: false },
];

export default function PayTrackerPlaceholder() {
    const [payments, setPayments] = useState(dummyPayments);

    const toggleCompleted = (id: string) => {
        setPayments(payments.map(p => p.id === id ? { ...p, is_completed: !p.is_completed } : p));
    };

    const deletePayment = (id: string) => {
        setPayments(payments.filter(p => p.id !== id));
    };

    // Sort incomplete first, completed last, then by datetime
    const sortedPayments = [...payments].sort((a, b) => {
        if (a.is_completed !== b.is_completed) return a.is_completed ? 1 : -1;
        return new Date(a.datetime).getTime() - new Date(b.datetime).getTime();
    });

    // Calculate total amount
    const totalAmount = payments.reduce((sum, p) => sum + p.amount, 0);

    return (
        <div className="p-4">
            <div className="mb-8">
                {/* Header with title and Add button */}
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-3xl font-bold text-gray-100">Payment Tracker (Placeholder)</h1>
                    <AddPaymentModal />
                    {/* <button
                        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium shadow"
                        onClick={() => alert("Add Payment clicked!")}
                    >
                        Add Payment
                    </button> */}
                </div>

                {/* Warning / Info Banner */}
                <div className="mt-2 rounded-lg border border-yellow-500/40 bg-yellow-500/10 p-4 text-yellow-200 text-sm">
                    ⚠️ This tool is currently in development. Authentication will be required for user context once it is fully implemented.
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full w-full border border-gray-700 rounded-lg">
                    <thead className="bg-gray-700 text-gray-200">
                        <tr>
                            <th className="px-4 py-2 text-left w-52">Date/Time</th>
                            <th className="px-4 py-2 text-left w-28">Amount</th>
                            <th className="px-4 py-2 text-left">Transaction</th>
                            <th className="px-4 py-2 text-left w-32">Bank</th>
                            <th className="px-4 py-2 text-left w-48">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedPayments.map(payment => (
                            <tr
                                key={payment.id}
                                className={`
                                    border-b border-gray-700 hover:bg-gray-700 transition-colors
                                    ${payment.is_completed 
                                        ? "bg-gray-900 text-gray-400"
                                        : "bg-gray-800 text-gray-100"
                                    }
                                `}
                            >
                                <td className="px-4 py-2 w-52">{new Date(payment.datetime).toLocaleString()}</td>
                                <td className="px-4 py-2 w-28">${payment.amount.toFixed(2)}</td>
                                <td className="px-4 py-2">{payment.transaction}</td>
                                <td className="px-4 py-2 w-32">{payment.bank}</td>
                                <td className="px-4 py-2 w-48">
                                    <div className="flex justify-end items-center space-x-2">
                                        <button className="flex items-center gap-1 bg-gray-700 hover:bg-gray-600 text-gray-100 text-sm px-3 py-1 rounded-md whitespace-nowrap">
                                            ✏️ Edit
                                        </button>
                                        <button className="flex items-center gap-1 bg-red-700 hover:bg-red-600 text-red-100 text-sm px-3 py-1 rounded-md whitespace-nowrap" onClick={() => deletePayment(payment.id)}>
                                            🗑️ Delete
                                        </button>
                                        <button
                                            className={`
                                                flex items-center gap-1 text-sm px-3 py-1 rounded-md whitespace-nowrap w-40 text-left
                                                ${payment.is_completed
                                                    ? "bg-gray-600 hover:bg-gray-500 text-gray-200"
                                                    : "bg-green-700 hover:bg-green-600 text-green-100"
                                                }
                                            `}
                                            onClick={() => toggleCompleted(payment.id)}
                                        >
                                            {payment.is_completed ? "⏳ Mark Pending" : "✅ Mark Completed"}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {payments.length === 0 && (
                            <tr>
                                <td colSpan={5} className="text-gray-400 px-4 py-2 text-center">
                                    No payments found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                    <tfoot className="bg-gray-700 text-gray-200">
                        <tr>
                            <td className="px-4 py-2 font-bold text-left">Total</td>
                            <td className="px-4 py-2 font-bold">${totalAmount.toFixed(2)}</td>
                            <td colSpan={3}></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}