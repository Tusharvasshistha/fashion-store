"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const [mobile, setMobile] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      router.push('/'); // Redirect to home after login
    }, 1200);
  };

  return (
    <div className="max-w-md mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Sign In / Sign Up</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 flex flex-col gap-4">
        <label htmlFor="mobile" className="font-semibold">WhatsApp Number</label>
        <input
          id="mobile"
          type="tel"
          pattern="[0-9]{10}"
          maxLength={10}
          required
          value={mobile}
          onChange={e => setMobile(e.target.value)}
          className="border border-pink-300 rounded px-4 py-2 text-lg"
          placeholder="Enter your 10-digit mobile number"
        />
        <button type="submit" className="bg-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-700 transition mt-2">
          Continue
        </button>
        {submitted && <div className="text-green-600 text-center mt-2">Signed in successfully! (Demo)</div>}
      </form>
    </div>
  );
}
