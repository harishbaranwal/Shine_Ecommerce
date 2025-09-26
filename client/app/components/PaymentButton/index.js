import React from 'react';
import axios from 'axios';

const PaymentButton = ({cartTotal}) => {
   
   const handlePayment = async () => {
  try {
    const options = {
      key: 'rzp_test_RL5tPQF3IiMMLp', // test key
      amount: (cartTotal * 100).toString(), // amount in paise
      currency: 'INR',
      name: 'Shine_Ecom',
      description: 'Test Transaction',
      handler: function (response) {
        alert(`Payment ID: ${response.razorpay_payment_id}`);
        alert('Payment Successful (not verified on backend)');
      },
      prefill: {
        name: 'Your Name',
        email: 'email@example.com',
        contact: '9912345678',
      },
      notes: {
        address: 'Your Address',
      },
      theme: {
        color: '#F37254',
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  } catch (error) {
    console.error('Payment failed', error);
  }
};



    return <button onClick={handlePayment}>Pay Now</button>;
};

export default PaymentButton;
    



