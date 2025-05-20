import React, { useState } from 'react';

export default function RegisterIdentity({ onRegister }) {
  const [identity, setIdentity] = useState('');

  const handleRegister = () => {
    if(identity) {
      onRegister(identity);
      setIdentity('');
    } else {
      alert('Vui lòng nhập danh tính');
    }
  };

  return (
    <div>
      <h2>Đăng ký danh tính mới</h2>
      <input
        type="text"
        placeholder="Nhập danh tính (ví dụ: DID:example:123)"
        value={identity}
        onChange={e => setIdentity(e.target.value)}
      />
      <button onClick={handleRegister}>Đăng ký</button>
    </div>
  );
}
