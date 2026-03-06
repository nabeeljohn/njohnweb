import BookingForm from "./bookingform";
import { pageTitle } from "@/lib/metadata/metadata";

export const metadata = {
    title: pageTitle("Photography Booking"),
    description: "Book a photo session with Nabeel John. Fill out the form to schedule your photography session and capture your special moments.",
};

export default function BookingPage() {
    return (
        <BookingForm />
    );
}
