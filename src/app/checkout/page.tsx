"use client";
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import Link from 'next/link';

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="max-w-xl mx-auto py-12 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Thank you for your order!</h1>
        <p className="mb-6">Your order has been placed. We will contact you soon via WhatsApp.</p>
        <Link href="/" className="bg-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-700 transition">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>
      {cart.length === 0 ? (
        <div className="text-center text-gray-500">Your cart is empty.</div>
      ) : (
        <>
          <ul className="divide-y divide-gray-200 mb-6">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center gap-4 py-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div className="flex-1">
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-sm text-gray-500">Qty: {item.quantity}</div>
                </div>
                <div className="font-bold text-pink-600">₹{item.price * item.quantity}</div>
              </li>
            ))}
          </ul>
          <div className="font-bold text-lg mb-6">Total: ₹{total}</div>
          <button onClick={handleCheckout} className="bg-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-700 transition w-full">Place Order</button>
        </>
      )}
    </div>
  );
}
