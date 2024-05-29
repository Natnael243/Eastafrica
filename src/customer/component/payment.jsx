import React, { useState } from 'react';
import telebirrLogo from '../assets/Telebirr.png';
import { useNavigate } from 'react-router-dom';

const PaymentForm = ({ onPaymentSuccess, onClose }) => {
  const [orderNumber, setOrderNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [processing, setProcessing] = useState(false);

  const handlePayment = () => {
    // Simulating payment processing
    setProcessing(true);
    setTimeout(() => {
      onPaymentSuccess();
    }, 2000);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6 relative">
        <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>
          X
        </button>
        <img
          src={telebirrLogo} // replace with your payment company logo image
          alt="Payment Company Logo"
          className="mx-auto mb-4"
          style={{ maxWidth: '100px' }}
        />
        <div className="text-center mb-6">
          <p className="text-lg font-semibold">Telebirr Payment</p>
        </div>
        <div className="text-center mb-6 bg-gray-100 border border-gray-300 rounded-lg p-4">
          <p className="text-lg">Amount to pay</p>
          <p className="text-2xl font-bold text-green-500">470ETB</p>
        </div>
        <div className="mb-4">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-2"
            type="text"
            placeholder="Order Number"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
          />
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <button
          className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
          onClick={handlePayment}
          disabled={processing}
        >
          {processing ? 'Processing...' : 'Pay Now'}
        </button>
      </div>
    </div>
  );
};

const SuccessMessage = ({ onClose }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/orderCard');
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6 text-center">
        <button className="absolute top-2 right-2 text-gray-500" onClick={handleClose}>
          X
        </button>
        <h2 className="text-2xl font-bold mb-4">Payment Successful!</h2>
        <p className="text-lg mb-4">Thank you for your purchase.</p>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
          onClick={handleClose}
        >
          Show Status
        </button>
      </div>
    </div>
  );
};

const Payment = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePaymentSuccess = () => {
    setPaymentSuccess(true);
  };

  const handleClose = () => {
    setPaymentSuccess(false);
  };

  return (
    <div>
      {!paymentSuccess ? (
        <PaymentForm onPaymentSuccess={handlePaymentSuccess} onClose={handleClose} />
      ) : (
        <SuccessMessage onClose={handleClose} />
      )}
    </div>
  );
};

export default Payment;
