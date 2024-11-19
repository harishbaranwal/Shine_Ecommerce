import React from 'react';

function Speciality() {
  return (
    <div
      style={{
        width: '100%',
        margin: '2rem auto',
        textAlign: 'center',
        padding: '1rem',
      }}
    >
      <h1
        style={{
          fontSize: '2rem',
          marginBottom: '2rem',
          fontWeight: 'bold',
          color: '#333',
        }}
      >
        What makes us different
      </h1>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          gap: '30px',
        }}
      >
        {[
       
            { icon: '🚀', title: 'Fast Delivery', description: 'Get your products delivered quickly and efficiently.' },
            { icon: '🔒', title: 'Secure Payments', description: 'Your payment information is safe with us.' },
            { icon: '⭐', title: 'Top Quality', description: 'We provide only the best quality products.' },
            { icon: '💬', title: '24/7 Support', description: 'Our team is here to help you anytime.' },
            { icon: '📦', title: 'Easy Returns', description: 'Hassle-free returns for peace of mind.' },
           { icon: '🎁', title: 'Exclusive Offers', description: 'Get access to special deals and discounts.' }
        
        ].map((item, index) => (
          <div
            key={index}
            style={{
              flex: '1 1 21%',
              minWidth: '300px',
              padding: '1rem',
              backgroundColor: '#f9f9f9',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              transition: 'transform 0.3s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{item.icon}</div>
            <h2 style={{ fontSize: '1.5rem', color: '#333', margin: '0.5rem 0' }}>{item.title}</h2>
            <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.4' , fontSize: '14px',}}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Speciality;
