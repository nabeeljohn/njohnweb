import UrlForm from "./urlform";
import { pageTitle } from "@/lib/metadata/metadata";

export const metadata = {
  title: pageTitle("Link Lab"),
};

export default function URLTool() {
    return (
        <UrlForm />
    );
}
