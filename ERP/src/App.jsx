import { useState } from 'react'
import './App.css'
import UserForm from './components/UserForm';
import UserList from './components/UserList';


function App() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  const addUser = (user) => {
    if (editUser) {
      setUsers(users.map(u => (u.id === user.id ? user : u)));
      setEditUser(null);
    } else {
      user.id = Date.now();
      setUsers([...users, user]);
    }
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const editHandler = (user) => {
    setEditUser(user);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">React CRUD App</h1>
      <UserForm addUser={addUser} editUser={editUser} />
      <UserList users={users} onDelete={deleteUser} onEdit={editHandler} />
    </div>
  )
}

export default App
