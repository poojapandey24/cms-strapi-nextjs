// src/app/events/[id]/page.js
import { events } from '@/lib/events';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export default function EventDetail({ params }) {
  const event = events.find(e => e.id === params.id);
  if (!event) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
      <p className="text-gray-500 mb-4">
        {new Date(event.date).toLocaleDateString()} • {event.location}
      </p>
      <Image src={event.image} alt={event.title} width={800} height={400} className="rounded mb-6" />
      <p className="text-lg text-gray-700 mb-6">{event.description}</p>

      <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition">
        Register Now
      </button>
    </main>
  );
}
