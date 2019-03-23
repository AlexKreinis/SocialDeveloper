import React from 'react';

export default function NotFound() {
  return (
    <div className="container">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <h1>Page Not found</h1>
        <p>Sorry this page does not exist</p>
      </div>
    </div>
  );
}
