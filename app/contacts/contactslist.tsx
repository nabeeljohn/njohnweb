'use client';
// components/ContactsList.tsx
import { useState } from "react";

export type Contact = {
  first_name: string;
  last_name: string;
  email_address: string;
};

type Props = {
  contacts: Contact[];
};

export default function ContactsList({ contacts }: Props) {
  const [selected, setSelected] = useState<number[]>([]);

  const toggleSelect = (index: number) => {
    setSelected((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleDeleteSelected = () => {
    alert(`Deleting ${selected.length} selected contacts`);
    setSelected([]);
  };

  const handleAddContact = () => {
    alert("Open Add Contact modal");
  };

  const handleEdit = (contact: Contact) => {
    alert(`Editing ${contact.first_name} ${contact.last_name}`);
  };

  const handleDelete = (contact: Contact) => {
    alert(`Deleting ${contact.first_name} ${contact.last_name}`);
  };

  return (
    <div className="space-y-4">
      {/* Heading + Buttons Row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h2 className="text-xl font-semibold text-white">Contacts List</h2>
        <div className="flex flex-col sm:flex-row gap-2">
          <button
            onClick={handleAddContact}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
          >
            Add Contact
          </button>
          <button
            onClick={handleDeleteSelected}
            disabled={selected.length === 0}
            className={`${
              selected.length === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600"
            } text-white font-semibold px-4 py-2 rounded`}
          >
            Delete Selected
          </button>
        </div>
      </div>

      {/* Contact List */}
      <ul className="divide-y divide-gray-700">
        {contacts.map((c, i) => (
          <li
            key={i}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 px-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
          >
            <div className="flex items-center space-x-2 mb-2 sm:mb-0">
              <input
                type="checkbox"
                checked={selected.includes(i)}
                onChange={() => toggleSelect(i)}
                className="w-4 h-4 text-blue-600 rounded border-gray-600 bg-gray-700"
              />
              <div className="text-white">
                <span className="font-medium">
                  {c.first_name} {c.last_name}
                </span>{" "}
                — {c.email_address}
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(c)}
                className="bg-gray-600 hover:bg-gray-500 text-white px-3 py-1 rounded text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(c)}
                className="bg-gray-600 hover:bg-gray-500 text-white px-3 py-1 rounded text-sm"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}