import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [user, setUser] = useState('');

  const handleLogin = () => {
    if(user) {
      onLogin(user);
    } else {
      alert('Vui lòng nhập tên tài khoản');
    }
  };

  return (
    <div>
      <h2>Đăng nhập</h2>
      <input
        type="text"
        placeholder="Nhập tên tài khoản"
        value={user}
        onChange={e => setUser(e.target.value)}
      />
      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
}
