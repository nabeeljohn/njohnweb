import { MdEdit, MdDelete, MdCheckCircle, MdPendingActions } from "react-icons/md";

type PayTrackerDesktopTableProps = {
    toggleCompleted: (id: string) => void;
    deletePayment: (id: string) => void;
    sortedPayments: Payment[];
    totalAmount: number;
};

type Payment = {
    id: string;
    datetime: string;
    transaction: string;
    bank: string;
    amount: number;
    is_completed: boolean;
};

export default function PayTrackerDesktopTable({
    toggleCompleted,
    deletePayment,
    sortedPayments,
    totalAmount,
}: PayTrackerDesktopTableProps) {

    const pendingMTB = sortedPayments.filter(p => p.bank === "MTB" && !p.is_completed).reduce((sum, p) => sum + p.amount, 0);
    const pendingDISC = sortedPayments.filter(p => p.bank === "DISC" && !p.is_completed).reduce((sum, p) => sum + p.amount, 0);
    const completedMTB = sortedPayments.filter(p => p.bank === "MTB" && p.is_completed).reduce((sum, p) => sum + p.amount, 0);
    const completedDISC = sortedPayments.filter(p => p.bank === "DISC" && p.is_completed).reduce((sum, p) => sum + p.amount, 0);

    return (
        <div className="hidden sm:block overflow-x-auto">
            <div className="overflow-x-auto rounded-xl border border-gray-700 shadow-sm">
                <table className="min-w-full w-full divide-y divide-gray-700 rounded-xl">
<thead className="bg-gray-800 text-gray-200 text-base sticky top-0 shadow-md z-10">
  <tr className="border-b-4 border-gray-700 tracking-wide">
    <th className="px-6 py-4 text-left w-64 font-medium">Date/Time</th>
    <th className="px-6 py-4 text-left w-28 font-medium">Amount</th>
    <th className="px-6 py-4 text-left font-medium">Transaction</th>
    <th className="px-6 py-4 text-left w-32 font-medium">Bank</th>
    <th className="px-6 py-4 text-left w-48 font-medium">Actions</th>
  </tr>
</thead>

                    <tbody className="bg-gray-800 text-gray-100">
                        {sortedPayments.map((payment) => (
                            <tr
                                key={payment.id}
                                className={`transition-colors hover:bg-gray-800 border-b border-gray-700 ${payment.is_completed ? "bg-gray-900 text-gray-600" : ""
                                    }`}
                            >
                                <td className="px-6 py-2">{new Date(payment.datetime).toLocaleString()}</td>
                                <td className="px-6 py-2 font-semibold">${payment.amount.toFixed(2)}</td>
                                <td className="px-6 py-2 truncate max-w-[250px]" title={payment.transaction}>
                                    {payment.transaction}
                                </td>
                                <td className="px-6 py-2">{payment.bank}</td>

                                {/* Actions row */}
                                <td className="px-6 py-2">
                                    <div className="flex gap-3 items-center">
                                        {/* Edit */}
                                        <button
                                            className="flex items-center gap-1 text-gray-300 hover:text-gray-100 text-sm whitespace-nowrap"
                                            title="Edit Payment"
                                        >
                                            <MdEdit size={18} /> Edit
                                        </button>

                                        {/* Delete */}
                                        <button
                                            className="flex items-center gap-1 text-gray-400 hover:text-red-400 text-sm whitespace-nowrap"
                                            title="Delete Payment"
                                            onClick={() => deletePayment(payment.id)}
                                        >
                                            <MdDelete size={18} /> Delete
                                        </button>

                                        {/* Toggle Completed */}
                                        <button
                                            className={`flex items-center gap-1 text-sm whitespace-nowrap ${payment.is_completed
                                                    ? "text-yellow-300 hover:text-yellow-100" // pending action
                                                    : "text-green-300 hover:text-green-100"  // complete action
                                                }`}
                                            title={payment.is_completed ? "Mark as Pending" : "Mark as Completed"}
                                            onClick={() => toggleCompleted(payment.id)}
                                        >
                                            {payment.is_completed ? (
                                                <>
                                                    <MdPendingActions size={18} /> Mark Pending
                                                </>
                                            ) : (
                                                <>
                                                    <MdCheckCircle size={18} /> Mark Completed
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}

                        {sortedPayments.length === 0 && (
                            <tr>
                                <td colSpan={5} className="text-gray-400 px-6 py-4 text-center">
                                    No payments found.
                                </td>
                            </tr>
                        )}
                    </tbody>

                    <tfoot className="bg-gray-900 text-gray-200 font-semibold">
                        <tr>
                            <td className="px-6 py-3">Total</td>
                            <td className="px-6 py-3">${totalAmount.toFixed(2)}</td>
                            <td colSpan={3}></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div className="mt-4 flex flex-col sm:flex-row gap-4">
                {/* Pending totals */}
                <div className="flex items-center gap-4 bg-gray-800 rounded-lg px-4 py-2 shadow-sm border border-gray-700">
                    <span className="font-semibold text-gray-200">PENDING</span>
                    <div className="flex gap-3 text-gray-400 text-sm">
                        <span className="px-2 py-1 bg-yellow-700/20 rounded-md">
                            MTB: ${pendingMTB.toFixed(2)}
                        </span>
                        <span className="px-2 py-1 bg-yellow-700/20 rounded-md">
                            DISC: ${pendingDISC.toFixed(2)}
                        </span>
                    </div>
                </div>

                {/* Completed totals */}
                <div className="flex items-center gap-4 bg-gray-800 rounded-lg px-4 py-2 shadow-sm border border-gray-700">
                    <span className="font-semibold text-gray-200">COMPLETED</span>
                    <div className="flex gap-3 text-gray-400 text-sm">
                        <span className="px-2 py-1 bg-green-700/20 rounded-md">
                            MTB: ${completedMTB.toFixed(2)}
                        </span>
                        <span className="px-2 py-1 bg-green-700/20 rounded-md">
                            DISC: ${completedDISC.toFixed(2)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}