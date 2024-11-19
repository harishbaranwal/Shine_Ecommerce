import React from 'react';

function Banner() {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '1.5rem',
        backgroundColor: '#0d0d0d',
        color: '#ffffff',
        margin: '2rem auto',
        width: '90%',
        borderRadius: '5px',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        fontFamily: '"Arial", sans-serif',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        letterSpacing: '1px',
        height: '120px', // Corrected property name
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      "Your satisfaction is our priority!"
    </div>
  );
}

export default Banner;
