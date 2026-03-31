import { pageTitle } from "@/lib/metadata/metadata";
import DevToolBoxes from "./devtoolboxes";
import ToolFeedBack from "../feedback/feedback";

export const metadata = {
  title: pageTitle("Developer Tools"),
  description: "Explore NJohn Web's Developer Tools to enhance your development workflow. Access APIs, SDKs, and resources designed to empower developers and streamline integration with NJohn Web's platform.",
};

export default function DevToolsHome() {
  return (
    <>
      <DevToolBoxes />
      <ToolFeedBack />
    </>
  );
}
