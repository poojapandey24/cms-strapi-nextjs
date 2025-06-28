import { events } from '@/lib/events';
import Image from 'next/image';

export default function EventsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Upcoming Events</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div key={event.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src={event.image}
              alt={event.title}
              width={600}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-1">{event.title}</h2>
              <p className="text-sm text-gray-500 mb-2">
                {new Date(event.date).toLocaleDateString()} • {event.location}
              </p>
              <p className="text-gray-700 text-sm mb-4">{event.description}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
