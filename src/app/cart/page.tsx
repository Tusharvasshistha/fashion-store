import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>
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
                <button onClick={() => removeFromCart(item.id)} className="ml-4 text-red-500 hover:underline">Remove</button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mb-6">
            <div className="font-bold text-lg">Total: ₹{total}</div>
            <button onClick={clearCart} className="text-sm text-gray-500 hover:underline">Clear Cart</button>
          </div>
          <Link href="/checkout" className="bg-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-700 transition block text-center">Proceed to Checkout</Link>
        </>
      )}
    </div>
  );
}
