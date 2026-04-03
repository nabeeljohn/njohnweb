import AboutMe from "@/appcomponents/aboutme/aboutme";
import AboutMeBoxes from "@/appcomponents/aboutme/aboutmeboxes";
import { AboutMeCallToActions } from "@/appcomponents/aboutme/aboutmectas";
import { pageTitle } from "@/lib/metadata/metadata";

export const metadata = {
  title: pageTitle("Home")
};

export default function Home() {
  return (
    <>
      <AboutMe />
      <AboutMeBoxes />
      <AboutMeCallToActions />
    </>
  );
}