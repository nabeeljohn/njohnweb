
import { pageTitle } from "@/lib/metadata/metadata";
import DevToolBoxes from "./devtoolboxes";
import ToolFeedBack from "../feedback/feedback";

export const metadata = {
  title: pageTitle("Developer Tools"),
};

export default function DevToolsHome() {
  return (
    <>
      <DevToolBoxes />
      <ToolFeedBack />
    </>
  );
}
