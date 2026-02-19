"use client";

import { useEffect, useState } from "react";

type Contact = {
  first_name: string;
  last_name: string;
  email_address: string;
};

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/contacts")
      .then((res) => res.json())
      .then((data) => setContacts(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

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
