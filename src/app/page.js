import Image from "next/image";
import Link from "next/link";
import TestimonialsSlider from "@/app/components/TestimonialsSlider";

export default function HomePage() {
  return (
    <div className="bg-dark text-white min-h-screen">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo-container">
          <Image src="/logo.svg" width={24} height={24} alt="Logo" />
          <span>CRM Boost</span>
        </div>
        <div className="nav-links">
          <Link href="/blog" className="nav-link">
            Blog
          </Link>
        </div>
        <div className="button-group">
          <button className="btn-primary">Get a demo</button>
          <button className="btn-secondary">Get started free</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Boost Sales with Our <br />
            <span className="text-cyan-400">Cutting-Edge CRM Solution</span>
          </h1>
          <p className="hero-subtitle">
            Our CRM web app empowers businesses to streamline operations, boost
            sales, and nurture customer relationships with ease
          </p>
          <button className="btn-primary btn-large">Get a demo</button>
        </div>

        <div className="hero-visual">
          {/* Fake chart placeholder */}
          <div className="chart-container">
            <p className="chart-title">Tracking</p>
            <Image
              src="/tracking.svg"
              width={150}
              height={150}
              alt="Tracking"
            />
          </div>
          <div className="stats-container">
            <div className="stat-item">
              <p>Emails</p>
              <p className="stat-value">17</p>
              <p className="stat-change">▲ 50%</p>
            </div>
            <div className="stat-item">
              <p>Meetings</p>
              <p className="stat-value">40</p>
              <p className="stat-change">▲ 24%</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BRANDS */}
      <section className="brands-section">
        <div className="brands-container">
          {["logo", "logo", "logo", "logo", "logo"].map((logo, i) => (
            <Image
              key={i}
              src={`/logos/${logo}.png`}
              alt={logo}
              width={100}
              height={40}
              className="brand-logo"
            />
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section">
        <h2 className="features-title">Our Top Features</h2>
        <div className="features-grid">
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
            },
          ].map((f, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS SECTION - Inspired by uploaded image */}
      <section className="benefits-section">
        <div className="benefits-container">
          {/* Block 1: Universal Inbox */}
          <div className="benefit-block">
            <div className="benefit-content">
              <h3 className="benefit-title">
                Manage All Your Customer Communications From One Universal
                Inbox.
              </h3>
              <p className="benefit-desc">
                Use free customer management software to better support your
                customers with tools like ticketing and live chat. CRM includes
                a universal inbox, giving your whole team a centralized view of
                every customer interaction. From the universal inbox, your team
                can view, assign, and reply to every conversation, from any
                channel.
              </p>
            </div>
            <div className="benefit-image">
              <Image
                src="/benefits1.svg"
                width={500}
                height={300}
                alt="Universal Inbox Dashboard"
              />
            </div>
          </div>

          {/* Block 2: Accelerate Revenue */}
          <div className="benefit-block">
            <div className="benefit-content">
              <h3 className="benefit-title">Accelerate Revenue Growth</h3>
              <p className="benefit-desc">
                Close more deals, faster with our AI-powered deal management
                tools that streamline your sales process, so your leads move
                seamlessly from qualified to closed-won. Introduce consistency
                into the customer journey and arm your sellers with all the data
                and insights they need to prioritize the right deals at the
                right time.
              </p>
            </div>
            <div className="benefit-image">
              <Image
                src="/benefits2.svg"
                width={500}
                height={300}
                alt="Revenue Chart"
              />
            </div>
          </div>

          {/* Block 3: Prospect Smarter */}
          <div className="benefit-block">
            <div className="benefit-content">
              <h3 className="benefit-title">Prospect Smarter</h3>
              <p className="benefit-desc">
                Identify high-value leads with data-driven prospecting tools.
                Use real-time insights and engagement tracking to focus on the
                leads that are most likely to convert. Our intelligent scoring
                system helps you prioritize your outreach efforts for maximum
                impact.
              </p>
            </div>
            <div className="benefit-image">
              <Image
                src="/benefits3.svg"
                width={500}
                height={300}
                alt="Prospecting Dashboard"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl text-center font-bold mb-12">
          What Our Customers Say
        </h2>
        <TestimonialsSlider />
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Transform Your Sales Process?</h2>
          <p className="cta-subtitle">
            Join thousands of businesses that have already boosted their sales
            with our CRM solution.
          </p>
          <div className="cta-buttons">
            <button className="cta-btn-primary">Start Free Trial</button>
            <button className="cta-btn-secondary">Schedule Demo</button>
          </div>
        </div>
      </section>
    </div>
  );
}
