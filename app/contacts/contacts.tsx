import ContactsList, { Contact } from "./contactslist";

async function getContacts(): Promise<Contact[]> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (!baseUrl) throw new Error("NEXT_PUBLIC_BASE_URL is not defined");

  const res = await fetch(`${baseUrl}/api/contacts`, { cache: "no-store" });
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

export default async function Contacts() {
    const returnedcontacts = await getContacts();

    return (
        <div className="bg-gray-800 text-center p-6 rounded-lg shadow-lg">
            <div className="text-white">
                {returnedcontacts.length === 0 ? (
                    <div>No contacts found.</div>
                ) : (
                    <ContactsList contacts={returnedcontacts} />
                )}
            </div>
        </div>
    );
}