import UrlForm from "./urlform";
import UrlToolInstructions from "./urltoolinstructions";
import { pageTitle } from "@/lib/metadata/metadata";

export const metadata = {
  title: pageTitle("Link Lab"),
};

export default function URLTool() {
    return (
        <>
        <div className="pb-10">
            <h1 className="text-3xl font-bold">Link Lab</h1>
        </div>
        <UrlForm />
        <UrlToolInstructions />
        </>
    );
}
