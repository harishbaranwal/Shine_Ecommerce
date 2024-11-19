import React from 'react';
import axios from 'axios';

const PaymentButton = ({cartTotal}) => {
    const handlePayment = async () => {
        try {
            const orderResponse = await axios.post('http://localhost:3000/api/razorpay/order', { amount:cartTotal}); // amount in paise
            const { amount, id: order_id, currency } = orderResponse.data;

            const options = {
                key: 'rzp_test_ufGoxV9E2Qfxq0', // Enter the Key ID generated from the Dashboard
                amount: amount.toString(),
                currency: currency,
                name: 'Shine_Ecom',
                description: 'Test Transaction',
                order_id: order_id,
                handler: async function (response) {
                    const paymentId = response.razorpay_payment_id;
                    const orderId = response.razorpay_order_id;
                    const signature = response.razorpay_signature;

                    const verifyResponse = await axios.post('/api/razorpay/verify', {
                        razorpay_order_id: orderId,
                        razorpay_payment_id: paymentId,
                        razorpay_signature: signature,
                    });



                    alert('Payment Successful');
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





// // Shine_Ecommerce\client\app\components\PaymentButton\index.js

// import React from 'react';
// import axios from 'axios';

// const PaymentButton = ({ cartTotal }) => {
//     const handlePayment = async () => {
//         try {
//             const amount = cartTotal * 100; // amount in paise
//             const orderResponse = await axios.post('http://localhost:3000/api/razorpay/order', { amount });
//             const { id: order_id, currency } = orderResponse.data;
    
//             const options = {
//                 key: 'rzp_test_ufGoxV9E2Qfxq0', // Enter the Key ID generated from the Dashboard
//                 amount: amount.toString(),
//                 currency: currency,
//                 name: 'Your Company Name',
//                 description: 'Test Transaction',
//                 order_id: order_id,
//                 handler: async function (response) {
//                     const paymentId = response.razorpay_payment_id;
//                     const orderId = response.razorpay_order_id;
//                     const signature = response.razorpay_signature;
    
//                     await axios.post('/api/razorpay/verify', {
//                         razorpay_order_id: orderId,
//                         razorpay_payment_id: paymentId,
//                         razorpay_signature: signature,
//                     });
    
//                     alert('Payment Successful');
//                 },
//                 prefill: {
//                     name: 'Your Name',
//                     email: 'email@example.com',
//                     contact: '9999999999',
//                 },
//                 notes: {
//                     address: 'Your Address',
//                 },
//                 theme: {
//                     color: '#F37254',
//                 },
//             };
    
//             const rzp1 = new window.Razorpay(options);
//             rzp1.open();
//         } catch (error) {
//             console.error('Payment failed', error);
//         }
//     };
    
//     return <button onClick={handlePayment}>Pay Now</button>;
// };

// export default PaymentButton;

