import { pageTitle } from "@/lib/metadata/metadata";
import PayTrackerPlaceholder from "./paytracker";

export const metadata = {
    title: pageTitle("PayTracker")
};


export default function PayTracker() {
    return (
        <PayTrackerPlaceholder />
    );
}