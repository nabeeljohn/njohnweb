import ContactsList, { Contact } from "./contactslist";

async function getContacts(): Promise<Contact[]> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (!baseUrl) throw new Error("NEXT_PUBLIC_BASE_URL is not defined");

  const res = await fetch(`${baseUrl}/api/contacts`, { cache: "no-store" });
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

export default async function ContactsPage() {
  const returnedcontacts = await getContacts();

  return (
    <div className="bg-gray-700 text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-8">Contacts</h1>
        {/* Placeholder Content */}
        <div className="bg-gray-800 text-center p-6 rounded-lg shadow-lg">
          <div className="text-white">
            {returnedcontacts.length === 0 ? (
              <div>No contacts found.</div>
            ) : (
              <ContactsList contacts={returnedcontacts} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}