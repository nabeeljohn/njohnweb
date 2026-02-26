import { Suspense } from "react";
import Contacts from "./contacts";

export default function ContactsPage() {
  return (
    <div className="bg-gray-700 text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-8">Contacts</h1>
        {/* Placeholder Content */}
        <Suspense fallback={<div>Loading contacts...</div>}>
          <Contacts />
        </Suspense>
      </div>
    </div>
  );
}