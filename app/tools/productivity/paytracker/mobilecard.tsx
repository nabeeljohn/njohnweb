type Payment = {
    id: string;
    datetime: string;
    transaction: string;
    bank: string;
    amount: number;
    is_completed: boolean;
};

type MobileCardProps = {
    toggleCompleted: (id: string) => void;
    deletePayment: (id: string) => void;
    sortedPayments: Payment[];
};

export default function PayTrackerMobileCard({ toggleCompleted, deletePayment, sortedPayments }: MobileCardProps) {
    return (
        <>
            <div className="sm:hidden space-y-4">
                {sortedPayments.map((payment) => (
                    <div
                        key={payment.id}
                        className={`rounded-lg p-4 border border-gray-700 ${
                            payment.is_completed
                                ? "bg-gray-900 text-gray-400"
                                : "bg-gray-800 text-gray-100"
                        }`}
                    >
                        <div className="text-xs text-gray-400 mb-1">
                            {new Date(payment.datetime).toLocaleString()}
                        </div>

                        <div className="text-lg font-semibold mb-1">
                            ${payment.amount.toFixed(2)}
                        </div>

                        <div className="font-medium truncate">{payment.transaction}</div>

                        <div className="text-sm text-gray-400 mb-3">{payment.bank}</div>

                        {/* Actions row (single line, text + icon) */}
                        <div className="flex gap-2 overflow-x-auto">
                            <button
                                className="text-gray-200 hover:underline flex items-center gap-1 whitespace-nowrap"
                                title="Edit"
                            >
                                ✏️ Edit
                            </button>
                            <button
                                className="text-red-400 hover:text-red-200 flex items-center gap-1 whitespace-nowrap"
                                title="Delete"
                                onClick={() => deletePayment(payment.id)}
                            >
                                🗑️ Delete
                            </button>
                            <button
                                className={`flex items-center gap-1 whitespace-nowrap ${
                                    payment.is_completed
                                        ? "text-gray-200 hover:underline"
                                        : "text-green-200 hover:underline"
                                }`}
                                title={payment.is_completed ? "Mark Pending" : "Mark Completed"}
                                onClick={() => toggleCompleted(payment.id)}
                            >
                                {payment.is_completed ? "⏳ Pending" : "✅ Completed"}
                            </button>
                        </div>
                    </div>
                ))}
                {sortedPayments.length === 0 && (
                    <div className="text-center text-gray-400">No payments found.</div>
                )}
            </div>
        </>
    );
}