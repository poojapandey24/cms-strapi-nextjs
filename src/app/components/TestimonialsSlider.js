'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
  {
    name: "John D.",
    title: "Sales Manager",
    text: "Using your CRM web app has completely transformed the way we manage our customer relationships. It's intuitive, feature-rich, and has helped us streamline our sales processes. Highly recommended!",
  },
  {
    name: "Sarah M.",
    title: "Marketing Director",
    text: "I've tried multiple CRM solutions in the past, but yours truly stands out. The user interface is clean and easy to navigate, and the automation features have saved us countless hours. It's a game-changer for our business.",
  },
  {
    name: "Michael R.",
    title: "CEO",
    text: "Your CRM web app has had a significant impact on our bottom line. It has empowered our team to stay organized, track leads effectively, and close deals faster.",
  },
   {
    name: "John D.",
    title: "Sales Manager",
    text: "Using your CRM web app has completely transformed the way we manage our customer relationships. It's intuitive, feature-rich, and has helped us streamline our sales processes. Highly recommended!",
  },
  {
    name: "Sarah M.",
    title: "Marketing Director",
    text: "I've tried multiple CRM solutions in the past, but yours truly stands out. The user interface is clean and easy to navigate, and the automation features have saved us countless hours. It's a game-changer for our business.",
  },
  {
    name: "Michael R.",
    title: "CEO",
    text: "Your CRM web app has had a significant impact on our bottom line. It has empowered our team to stay organized, track leads effectively, and close deals faster.",
  }
];

export default function TestimonialsSlider() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto text-white">
      <h2 className="text-3xl text-center font-bold mb-12">What People Say About Us</h2>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="bg-[#0f1e39] border border-white/10 rounded-lg p-6 h-full flex flex-col justify-between">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-white rounded-full" />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-white/50">{t.title}</p>
                </div>
              </div>
              <p className="text-white/80 text-sm mb-6">“{t.text}”</p>
              <div className="text-3xl text-cyan-400 self-end">🎵</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
