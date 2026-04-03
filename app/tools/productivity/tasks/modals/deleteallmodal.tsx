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
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center bg-red-600 hover:bg-red-700 px-4 py-2.5 rounded-lg text-sm font-medium text-white border border-red-500/50 transition disabled:opacity-50 active:scale-[0.98]"
                disabled = {tasks.length === 0}
            >
                <span className="sm:hidden">Delete all tasks</span>
                <span className="hidden sm:inline">Delete All Tasks</span>
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

                        <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:gap-3">
                            <button
                                onClick={() => setOpen(false)}
                                className="w-full sm:w-auto min-h-[44px] px-4 py-2.5 rounded-lg bg-gray-700 hover:bg-gray-600 text-sm disabled:opacity-50 transition active:scale-[0.98]"
                                disabled = {isPending}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleConfirm}
                                className="w-full sm:w-auto min-h-[44px] px-4 py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-sm font-medium text-white disabled:opacity-50 transition active:scale-[0.98]"
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