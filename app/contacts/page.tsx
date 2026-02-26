type Contact = {
  first_name: string;
  last_name: string;
  email_address: string;
};

async function getContacts(): Promise<Contact[]> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (!baseUrl) throw new Error("NEXT_PUBLIC_BASE_URL is not defined");

  const res = await fetch(`${baseUrl}/api/contacts`, { cache: "no-store" });
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

export default async function ContactsPage() {
  const contacts = await getContacts();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Contacts</h1>
      {contacts.length === 0 ? (
        <div>No contacts found.</div>
      ) : (
        <ul className="space-y-2">
          {contacts.map((c, i) => (
            <li key={i}>
              {c.first_name} {c.last_name} — {c.email_address}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}