// components/ContactsList.tsx
export type Contact = {
  first_name: string;
  last_name: string;
  email_address: string;
};

export default function ContactsList({ contacts }: { contacts: Contact[] }) {
  return (
    <ul className="space-y-2">
      {contacts.map((c, i) => (
        <li key={i}>
          {c.first_name} {c.last_name} — {c.email_address}
        </li>
      ))}
    </ul>
  );
}