import React from "react";

function UserList({ users, onDelete, onEdit }) {
  return (
    <ul>
      {users.map((user) => (
        <li
          key={user.id}
          className="border p-2 mb-2 flex justify-between items-center"
        >
          <div>
            <strong>{user.name}</strong> — {user.email}
          </div>
          <div>
            <button
              onClick={() => onEdit(user)}
              className="bg-yellow-400 text-white px-2 py-1 mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(user.id)}
              className="bg-red-500 text-white px-2 py-1"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
