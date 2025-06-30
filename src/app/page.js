import Image from "next/image";
import Link from "next/link";
import TestimonialsSlider from "@/app/components/TestimonialsSlider";


export default function HomePage() {
  return (
    <div className="bg-[#030b1a] text-white min-h-screen">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-white/10">
        <div className="text-2xl font-bold flex items-center gap-2">
          <Image src="/logo.svg" width={24} height={24} alt="Logo" />
          <span>CRM Boost</span>
        </div>
        <div className="hidden md:flex gap-6 items-center text-sm text-white/80">
          {/* <div className="hover:text-white cursor-pointer">Software ▾</div> */}
          <Link href="/blog" className="hover:text-white cursor-pointer">
            Blog
          </Link>
          <Link href="/events" className="hover:text-white cursor-pointer">
            Events
          </Link>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600">
            Get a demo
          </button>
          <button className="px-4 py-2 border border-white/20 rounded hover:bg-white/10">
            Get started free
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-6 py-16 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Boost Sales with Our <br />
            <span className="text-cyan-400">Cutting-Edge CRM Solution</span>
          </h1>
          <p className="text-white/80 mb-6">
            Our CRM web app empowers businesses to streamline operations, boost
            sales, and nurture customer relationships with ease
          </p>
          <button className="bg-cyan-500 text-white px-6 py-3 rounded font-semibold hover:bg-cyan-600">
            Get a demo
          </button>
        </div>

        <div className="mt-12 md:mt-0 md:ml-12 space-y-6">
          {/* Fake chart placeholder */}
          <div className="bg-[#0f1e39] p-4 rounded-lg shadow-md w-72">
            <p className="text-sm mb-2">Tracking</p>
            {/* <div className="h-32 bg-gradient-to-br from-cyan-500 to-blue-500 rounded"></div> */}
            <Image src="/tracking.svg" width={150} height={150} alt="Tracking" />
          </div>
          <div className="flex justify-between text-sm text-white/70">
            <div>
              <p>Emails</p>
              <p className="text-xl text-white">17</p>
              <p className="text-green-400 text-xs">▲ 50%</p>
            </div>
            <div>
              <p>Meetings</p>
              <p className="text-xl text-white">40</p>
              <p className="text-green-400 text-xs">▲ 24%</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BRANDS */}
      <section className="bg-gradient-to-r from-cyan-500 to-blue-500 py-6 px-6">
        <div className="flex flex-wrap justify-center gap-8">
          {["logo", "logo", "logo", "logo", "logo"].map((logo, i) => (
            <Image
              key={i}
              src={`/logos/${logo}.png`}
              alt={logo}
              width={100}
              height={40}
              className="h-8 object-contain"
            />
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl text-center font-bold mb-12">Our Top Features</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Relationship Management",
              desc: "We put the R for Relationships back into CRM. Contact management solution for individuals & teams managing relationships.",
              icon: "👥",
            },
            {
              title: "Social Profile Matching & Enrichment",
              desc: "Let Nimble find social profile information, emails, phone numbers, addresses, etc. for your prospects & contacts.",
              icon: "🔍",
            },
            {
              title: "Sales, Pipelines, Reporting",
              desc: "Customizable deals, automation, templates, and advanced reporting tools.",
              icon: "📈",
            },
            {
              title: "Relationship Management",
              desc: "We put the R for Relationships back into CRM. Contact management solution for individuals & teams managing relationships.",
              icon: "👥",
            },
            {
              title: "Social Profile Matching & Enrichment",
              desc: "Let Nimble find social profile information, emails, phone numbers, addresses, etc. for your prospects & contacts.",
              icon: "🔍",
            },
            {
              title: "Sales, Pipelines, Reporting",
              desc: "Customizable deals, automation, templates, and advanced reporting tools.",
              icon: "📈",
            }
          ].map((f, i) => (
            <div
              key={i}
              className="bg-[#101c2e] p-6 rounded-lg shadow-md border border-white/5 hover:border-cyan-500 transition"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-white/70 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS SECTION - Inspired by uploaded image */}
      <section className="py-16 px-6 max-w-7xl mx-auto space-y-16">
        {/* Block 1: Universal Inbox */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Manage All Your Customer Communications From One Universal Inbox.</h3>
            <p className="text-white/80">
              Use free customer management software to better support your customers with tools like ticketing and live chat.
              CRM includes a universal inbox, giving your whole team a centralized view of every customer interaction. From the
              universal inbox, your team can view, assign, and reply to every conversation, from any channel.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image src="/benefits1.svg" width={500} height={300} alt="Universal Inbox Dashboard" />
          </div>
        </div>

        {/* Block 2: Accelerate Revenue */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Accelerate Revenue Growth</h3>
            <p className="text-white/80">
              Close more deals, faster with our AI-powered deal management tools that streamline your sales process, so your
              leads move seamlessly from qualified to closed-won. Introduce consistency into the customer journey and arm your
              sellers with all the data and insights they need to prioritize the right deals at the right time.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image src="/benefits2.svg" width={500} height={300} alt="Revenue Chart" />
          </div>
        </div>

        {/* Block 3: Prospect Smarter */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Prospect Smarter</h3>
            <p className="text-white/80">
              Identify high-value leads with data-driven prospecting tools. Use real-time insights and engagement tracking to
              focus on the leads that matter most.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image src="/benefits3.svg" width={500} height={300} alt="Prospecting Chart" />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <TestimonialsSlider />

    </div>
  );
}