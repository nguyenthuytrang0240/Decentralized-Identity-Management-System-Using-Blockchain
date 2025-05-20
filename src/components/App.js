import React, { useState } from 'react';
import Login from './components/Login';
import RegisterIdentity from './components/RegisterIdentity';
import IdentityList from './components/IdentityList';

export default function App() {
  const [user, setUser] = useState(null);
  const [identities, setIdentities] = useState([]);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleRegister = (newIdentity) => {
    setIdentities([...identities, newIdentity]);
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div>
      <h1>Chào mừng {user} đến với Decentralized Identity Management</h1>
      <RegisterIdentity onRegister={handleRegister} />
      <IdentityList identities={identities} />
      <button onClick={() => setUser(null)}>Đăng xuất</button>
    </div>
  );
}
