"use client";

import { useState, useTransition } from "react";

export default function CreateTaskModal({
    action,
}: {
    action: (formData: FormData) => Promise<void>;
}) {
    const [open, setOpen] = useState(false);
    const [isPending, startTransition] = useTransition();

    return (
        <>
            {/* Open Button */}
            <button
                onClick={() => setOpen(true)}
                className="bg-gray-900 hover:bg-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition"
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
                    <div className="relative bg-gray-800 p-6 rounded-xl w-full max-w-md shadow-lg">
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
                            <div className="flex justify-end space-x-3 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-500 text-sm"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-sm disabled:opacity-50"
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