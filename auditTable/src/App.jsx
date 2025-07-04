import './App.css'
import React, { useState } from 'react';

const auditChecks = Array.from({ length: 19 }, (_, i) => ({
  serial: i + 1,
  check: `Check ${i + 1}`,
  value: '',
}));

export default function App() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [showAudit, setShowAudit] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleAddUser = () => {
    if (newUser.name && newUser.email) {
      setUsers([...users, { ...newUser }]);
      setNewUser({ name: '', email: '' });
    }
  };

  const handleAudit = (user) => {
    setSelectedUser(user);
    setShowAudit(true);
  };

  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>

      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Name"
          className="border p-2 rounded"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <button onClick={handleAddUser} className="bg-blue-600 text-white px-4 py-2 rounded">
          Add User
        </button>
      </div>

      <table className="table-auto w-full border mb-8">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">#</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, idx) => (
            <tr key={idx}>
              <td className="border px-4 py-2">{idx + 1}</td>
              <td className="border px-4 py-2">{u.name}</td>
              <td className="border px-4 py-2">{u.email}</td>
              <td className="border px-4 py-2">
                <button onClick={() => handleAudit(u)} className="bg-green-600 text-white px-3 py-1 rounded">
                  Audit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showAudit && selectedUser && (
        <div className="border rounded p-4 bg-gray-100">
          <h2 className="text-xl font-semibold mb-2">Audit for: {selectedUser.name}</h2>
          <table className="table-auto w-full border">
            <thead>
              <tr className="bg-gray-300">
                <th className="border px-4 py-2">Serial No</th>
                <th className="border px-4 py-2">Check</th>
                <th className="border px-4 py-2">Value</th>
              </tr>
            </thead>
            <tbody>
              {auditChecks.map((row, idx) => (
                <tr key={idx}>
                  <td className="border px-4 py-2">{row.serial}</td>
                  <td className="border px-4 py-2">{row.check}</td>
                  <td className="border px-4 py-2">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={() => setShowAudit(false)} className="mt-4 bg-red-600 text-white px-3 py-1 rounded">
            Close
          </button>
        </div>
      )}
    </div>
  );
}

