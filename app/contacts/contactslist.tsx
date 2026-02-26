// components/ContactsList.tsx
export type Contact = {
  first_name: string;
  last_name: string;
  email_address: string;
};

export default function ContactsList({ contacts }: { contacts: Contact[] }) {
  return (
<table className="min-w-full bg-gray-800 text-white rounded-lg overflow-hidden shadow">
  <thead className="bg-gray-700">
    <tr>
      <th className="px-6 py-3 text-left text-sm font-medium uppercase">First Name</th>
      <th className="px-6 py-3 text-left text-sm font-medium uppercase">Last Name</th>
      <th className="px-6 py-3 text-left text-sm font-medium uppercase">Email</th>
    </tr>
  </thead>
  <tbody>
    {contacts.map((c, i) => (
      <tr key={i} className={i % 2 === 0 ? "bg-gray-800" : "bg-gray-700"}>
        <td className="px-6 py-4 text-left">{c.first_name}</td>
        <td className="px-6 py-4 text-left">{c.last_name}</td>
        <td className="px-6 py-4 text-left">{c.email_address}</td>
      </tr>
    ))}
  </tbody>
</table>
  );
}