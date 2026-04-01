"use client";

import { useState } from "react";
import AddPaymentModal from "./modals/addpaymentmodal";
import PayTrackerMobileCard from "./mobilecard";
import PayTrackerDesktopTable from "./desktoptable";

type Payment = {
    id: string;
    datetime: string;
    transaction: string;
    bank: string;
    amount: number;
    is_completed: boolean;
};

const dummyPayments: Payment[] = [
    { id: "1", datetime: "2026-03-16T10:00:00", transaction: "Invoice #123", bank: "MTB", amount: 120.5, is_completed: false },
    { id: "2", datetime: "2026-03-15T14:30:00", transaction: "Invoice #124", bank: "DISC", amount: 85.75, is_completed: true },
    { id: "3", datetime: "2026-03-16T09:15:00", transaction: "Invoice #125", bank: "MTB", amount: 250.0, is_completed: false },
];

export default function PayTrackerResponsive() {
    const [payments, setPayments] = useState(dummyPayments);

    const toggleCompleted = (id: string) => {
        setPayments(payments.map(p =>
            p.id === id ? { ...p, is_completed: !p.is_completed } : p
        ));
    };

    const deletePayment = (id: string) => {
        setPayments(payments.filter(p => p.id !== id));
    };

    const sortedPayments = [...payments].sort((a, b) => {
        if (a.is_completed !== b.is_completed) return a.is_completed ? 1 : -1;
        return new Date(a.datetime).getTime() - new Date(b.datetime).getTime();
    });

    const totalAmount = payments.reduce((sum, p) => sum + p.amount, 0);

    return (
        <div className="p-4">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-100">
                        Payment Tracker (Placeholder)
                    </h1>
                    <AddPaymentModal />
                </div>
                <div className="mt-2 rounded-lg border border-yellow-500/40 bg-yellow-500/10 p-4 text-yellow-200 text-sm">
                    ⚠️ This tool is currently in development. Authentication will be required for user context once it is fully implemented.
                </div>
            </div>

            {/* ================= MOBILE (CARDS) ================= */}
            <PayTrackerMobileCard toggleCompleted={toggleCompleted} deletePayment={deletePayment} sortedPayments={sortedPayments} />

            {/* ================= DESKTOP (TABLE) ================= */}
            <PayTrackerDesktopTable toggleCompleted={toggleCompleted} deletePayment={deletePayment} sortedPayments={sortedPayments} totalAmount={totalAmount} />
        </div>
    );
}