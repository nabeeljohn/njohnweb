export default function BookingPage() {
    return (

        <div className="h-full flex items-center justify-center bg-gray-700 text-gray-100 pt-24 pb-24 px-4">
            <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-xl">
                <form className="space-y-6 bg-gray-800 p-8 rounded-lg  max-w-xl text-gray-100">
                    <h1 className="text-3xl font-bold mb-6 text-center">Book a Photo Session</h1>
                    <p className="text-gray-400">
                        Interested in booking a photo session? Fill out the form below, and I’ll get back to you soon to schedule your session.
                    </p>
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your full name"
                            required
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
                            className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition"
                    >
                        Submit Booking
                    </button>
                </form>
            </div>
        </div>
    );
}
