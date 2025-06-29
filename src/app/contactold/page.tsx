"use client";

import { useState } from 'react';
import Head from 'next/head';
import { FormEvent } from 'react';


export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: (e.currentTarget.elements.namedItem('name') as HTMLInputElement).value,
        email: (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value,
        message: (e.currentTarget.elements.namedItem('message') as HTMLTextAreaElement).value,
      }),
    });

    if (res.ok) {
      setStatus('✅ Message sent!');
      e.currentTarget.reset(); // ✅ No TypeScript error
    } else {
      setStatus('❌ Error sending message.');
    }
    
  };

  return (
    <>
      <Head>
        <title>Contact Kirill Ayzenberg</title>
        <meta name="description" content="Contact Kirill Ayzenberg for mortgage lending services and inquiries." />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4 py-16">
        <div className="bg-white max-w-lg w-full rounded-2xl shadow-xl p-8 md:p-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-4">
            Contact <span className="text-blue-600">Kirill Ayzenberg</span>
          </h1>
          <p className="text-center text-gray-500 mb-8">Have questions? Fill out the form below.</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>

          {status && <p className="mt-4 text-center text-gray-600">{status}</p>}

          <div className="mt-8 text-center text-gray-600">
            <p>Email: <a href="mailto:kirillayzenbergseo@gmail.com" className="text-blue-600 hover:underline">kirillayzenbergseo@gmail.com</a></p>
            <p>Phone: <a href="tel:+16573308857" className="text-blue-600 hover:underline">(657) 330-8857</a></p>
            <a href="/resources" className="text-blue-600 hover:underline">Resources</a>
          </div>
        </div>
      </main>
    </>
  );
}
