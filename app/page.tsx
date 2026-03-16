import AboutMe from "@/appcomponents/main/aboutme/aboutme";
import AboutMeBoxes from "@/appcomponents/main/aboutme/aboutmeboxes";
import { AboutMeCallToActions } from "@/appcomponents/main/aboutme/aboutmectas";
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