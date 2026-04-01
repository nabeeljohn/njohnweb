import { pageTitle } from "@/lib/metadata/metadata";
import PayTrackerResponsive from "./paytracker";

export const metadata = {
    title: pageTitle("PayTracker"),
    description: "Track your payments and expenses with ease."
};


export default function PayTracker() {
    return (
        <PayTrackerResponsive />
    );
}