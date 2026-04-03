"use client";

import { useState, useTransition } from "react";

type CreateTaskModalProps = {
    action: (formData: FormData) => Promise<void>;
};

export default function CreateTaskModal({action}: CreateTaskModalProps) {

    const [open, setOpen] = useState(false);
    const [isPending, startTransition] = useTransition();

    return (
        <>
            {/* Open Button */}
            <button
                onClick={() => setOpen(true)}
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center bg-gray-800 hover:bg-gray-700 border border-gray-600 px-4 py-2.5 rounded-lg text-sm font-medium transition active:scale-[0.98]"
            >
                Create Task
            </button>

            {/* Modal */}
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">

                    {/* Background Overlay */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setOpen(false)}
                    />

                    {/* Modal Content */}
                    <div className="relative bg-gray-800 p-4 sm:p-6 rounded-xl w-[min(100%-1.5rem,28rem)] mx-3 sm:mx-0 max-w-md shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Create Task</h2>

                        {/* Form */}
                        <form
                            action={(formData: FormData) =>
                                startTransition(async () => {
                                    await action(formData); // call your server action
                                    setOpen(false); // close modal after success
                                    // optionally reset fields if uncontrolled (inputs auto clear on re-render)
                                })
                            }
                            className="space-y-4"
                        >
                            <div>
                                <label className="block text-sm mb-1">Title</label>
                                <input
                                    name="title"
                                    className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm mb-1">Description</label>
                                <textarea
                                    name="description"
                                    rows={6}
                                    className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="w-full sm:w-auto min-h-[44px] px-4 py-2.5 rounded-lg bg-gray-600 hover:bg-gray-500 text-sm transition active:scale-[0.98]"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="w-full sm:w-auto min-h-[44px] px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-sm font-medium disabled:opacity-50 transition active:scale-[0.98]"
                                    disabled={isPending}
                                >
                                    {isPending ? "Creating..." : "Submit"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}