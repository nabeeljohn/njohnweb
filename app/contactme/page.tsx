
import ContactMeForm from "./contactmeform";
import { pageTitle } from "@/lib/metadata/metadata";

export const metadata = {
  title: pageTitle('Contact Me'),
};

export default function ContactPage() {
  return (
    <ContactMeForm />
  );
}