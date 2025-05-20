import React from 'react';

export default function IdentityList({ identities }) {
  return (
    <div>
      <h2>Danh sách danh tính</h2>
      <ul>
        {identities.map((id, index) => (
          <li key={index}>{id}</li>
        ))}
      </ul>
    </div>
  );
}
