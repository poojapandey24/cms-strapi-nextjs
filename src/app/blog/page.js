'use client';
import Link from 'next/link';
import Image from 'next/image';

const blogs = [
  {
    slug: 'customer-service-2025',
    title: 'Customer Service Management Systems Explained: Features, Benefits & Best Picks For 2025',
    category: 'Customer Service',
    date: '26 Jun 2025',
    excerpt: 'In 2025, customer service is no longer just a support function. It’s a key brand differentiator...',
    image: '/blog1.jpg',
  },
  {
    slug: 'voice-ai-sla',
    title: 'Voice AI’s Role In Improving SLA Adherence For Customer Support',
    category: 'AI & Automation',
    date: '25 Jun 2025',
    excerpt: 'Did you know poor SLA adherence could be costing you your customers and millions in revenue?',
    image: '/blog2.jpg',
  }
];

export default function BlogPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Latest Blog Posts</h1>
      <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
        {blogs.map((blog) => (
          <div key={blog.slug} style={{
            border: '1px solid #eee',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 0 10px rgba(0,0,0,0.05)'
          }}>
            <Image src={blog.image} alt={blog.title} width={600} height={300} style={{ objectFit: 'cover', width: '100%' }} />
            <div style={{ padding: '1rem' }}>
              <span style={{
                backgroundColor: '#fce4ec',
                color: '#c2185b',
                fontSize: '0.75rem',
                padding: '0.3rem 0.7rem',
                borderRadius: '20px',
                display: 'inline-block',
                marginBottom: '0.5rem'
              }}>{blog.category}</span>

              <p style={{ fontSize: '0.8rem', color: '#888' }}>{blog.date}</p>

              <h2 style={{ fontSize: '1.1rem', fontWeight: 'bold', margin: '0.5rem 0' }}>{blog.title}</h2>
              <p style={{ fontSize: '0.95rem', color: '#444' }}>{blog.excerpt}</p>

              <Link href={`/blog/${blog.slug}`}>
                <span style={{ color: '#e53935', marginTop: '1rem', display: 'inline-block', fontWeight: 'bold' }}>
                  Read More →
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
