'use client';

import { submitBooking } from "@/lib/photography/booking/booking";
import { useActionState } from "react";

export default function BookingForm() {
    const [state, formAction, isPending] = useActionState(submitBooking, { success: false });

    return (

        <div className="w-full flex justify-center px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl w-full">
                {/* Left Column: Booking Form */}
                <form
                    className="space-y-6 bg-gray-800 p-8 rounded-lg shadow-md w-full"
                    action={formAction}
                    method="POST"
                >
                    <h1 className="text-3xl font-bold mb-4 text-center md:text-left">Book a Photo Session</h1>
                    <p className="text-gray-400 mb-4">
                        Fill out the form below, and I’ll get back to you soon to schedule your session.
                    </p>

                    {/* Confirmation */}
                    {state.success && !isPending && (
                        <p className="text-yellow-400">Booking Request Sent!</p>
                    )}

                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your full name"
                            required
                            disabled={isPending}
                            className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Contact */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Contact</label>
                        <input
                            type="text"
                            name="contact"
                            placeholder="Email or phone number"
                            required
                            disabled={isPending}
                            className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Date */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Date</label>
                        <input
                            type="date"
                            name="date"
                            required
                            disabled={isPending}
                            className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Venue */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Venue</label>
                        <input
                            type="text"
                            name="venue"
                            placeholder="Location of the shoot"
                            required
                            disabled={isPending}
                            className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Details */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Details</label>
                        <textarea
                            name="details"
                            rows={5}
                            placeholder="Any additional information or requests"
                            disabled={isPending}
                            className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={isPending}
                        className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:bg-gray-500 disabled:cursor-not-allowed text-white font-semibold transition"
                    >
                        {isPending ? "Sending..." : "Submit Booking"}
                    </button>
                </form>

                {/* Right Column: Instructions */}
                <div className="bg-gray-800 p-8 rounded-lg shadow-md text-gray-200 flex flex-col gap-4">
                    <h2 className="text-2xl font-bold">Booking Instructions</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-400">
                        <li>Enter your full name so we can address you correctly.</li>
                        <li>Provide a valid contact email or phone number.</li>
                        <li>Select your preferred date for the photo session.</li>
                        <li>Indicate the venue or location for the shoot.</li>
                        <li>Include any additional details or special requests in the “Details” section.</li>
                    </ul>
                    <p className="text-gray-400 mt-4">
                        Once submitted, you will receive a confirmation. We will then reach out to finalize your booking.
                    </p>
                </div>
            </div>
        </div>
    );
}