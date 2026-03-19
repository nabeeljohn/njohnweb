"use client";

import { useState, useTransition } from "react";
import { MdDeleteForever } from "react-icons/md"

type DeleteAllModalProps = {
    action: () => Promise<void>; // the function to call when confirming
    tasks?: any[];
};

export default function DeleteAllModal({ action, tasks = [] }: DeleteAllModalProps) {
    
    const [open, setOpen] = useState(false);
    const [isPending, startTransition] = useTransition();

    const handleConfirm = () => {
        startTransition ( async () => {
            await action();
            setOpen(false);
        });
    }

    return (
        <>
            {/* Open Button */}
            <button
                onClick={() => setOpen(true)}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium text-white transition disabled:opacity-50"
                disabled = {tasks.length === 0}
            >
                Delete All Tasks
            </button>

            {/* Modal */}
            {open && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur-sm">
                    <div className="bg-gray-800 text-gray-100 rounded-lg shadow-lg w-11/12 max-w-md p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <MdDeleteForever className="h-6 w-6 text-red-500" />
                            <h2 className="text-xl font-semibold">Confirm Delete</h2>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Are you sure you want to delete all tasks? This action cannot be undone.
                        </p>

                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setOpen(false)}
                                className="px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 text-sm disabled:opacity-50"
                                disabled = {isPending}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleConfirm}
                                className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 text-sm text-white disabled:opacity-50"
                                disabled = {isPending}
                            >
                                {isPending ? "Deleting..." : "Delete All"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}