// src/app/events/[id]/page.js
import { events } from "@/lib/events";
import { notFound } from "next/navigation";
import Image from "next/image";

export default function EventDetail({ params }) {
  const event = events.find((e) => e.id === params.id);
  if (!event) return notFound();

  return (
    <main className="event-detail-page">
      <h1 className="event-detail-title">{event.title}</h1>
      <p className="event-detail-meta">
        {new Date(event.date).toLocaleDateString()} • {event.location}
      </p>
      <Image
        src={event.image}
        alt={event.title}
        width={800}
        height={400}
        className="event-detail-image"
      />
      <p className="event-detail-description">{event.description}</p>

      <button className="event-detail-btn">Register Now</button>
    </main>
  );
}
