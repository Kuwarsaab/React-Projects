import React, { useEffect, useState } from "react";

function UserForm({ addUser, editUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (editUser) {
      setName(editUser.name);
      setEmail(editUser.email);
    }
  }, [editUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    addUser({ id: editUser?.id, name, email });
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        className="border p-2 mr-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        className="border p-2 mr-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button className="bg-blue-500 text-white p-2">
        {editUser ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default UserForm;
