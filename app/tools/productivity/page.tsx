import ProductivityToolBoxes from "./productivitytoolboxes"
import ToolFeedBack from "../feedback/feedback"
import { pageTitle } from "@/lib/metadata/metadata"

export const metadata = {
    title: pageTitle("Productivity Tools"),
    description: "Access your personalized productivity tools and features to stay organized and efficient.",
};

export default function ProductivityTools() {
    return (
        <>
            <ProductivityToolBoxes />
            <ToolFeedBack />
        </>
    )
}