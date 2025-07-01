import { events } from "@/lib/events";
import Image from "next/image";

export default function EventsPage() {
  return (
    <main className="events-page">
      <h1 className="events-title">Upcoming Events</h1>

      <div className="events-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <Image
              src={event.image}
              alt={event.title}
              width={600}
              height={300}
              className="event-image"
            />
            <div className="event-content">
              <h2 className="event-title">{event.title}</h2>
              <p className="event-meta">
                {new Date(event.date).toLocaleDateString()} • {event.location}
              </p>
              <p className="event-description">{event.description}</p>
              <button className="event-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
