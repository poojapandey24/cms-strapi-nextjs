import { notFound } from 'next/navigation';
import { blogs } from '@/lib/blogs';
import Image from 'next/image';

export default function BlogDetailPage({ params }) {
  if (!params) return notFound();

  const {slug} = params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return notFound();

  return (
    <main style={{ padding: '2rem', maxWidth: '900px', margin: 'auto' }}>
      {/* Breadcrumb */}
      <div style={{ fontSize: '0.9rem', marginBottom: '1rem', color: '#999' }}>
        Home &gt; {blog.category} &gt; <strong>{blog.title}</strong>
      </div>

      {/* Title and Excerpt */}
      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{blog.title}</h1>
      <p style={{ color: '#666' }}>{blog.excerpt}</p>

      {/* Hero Image */}
      <div style={{ margin: '2rem 0' }}>
        <Image src={blog.image} alt={blog.title} width={900} height={450} style={{ borderRadius: '10px', width: '100%', height: 'auto' }} />
      </div>

      {/* Author + Date */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#888' }}>
        <Image src="/avatar.png" alt="author" width={35} height={35} style={{ borderRadius: '50%' }} />
        <span>{blog.author}</span> · <span>Published on: {blog.publishedDate}</span>
      </div>

      {/* Table of Contents */}
      {Array.isArray(blog.toc) && (
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#e53935' }}>Table of Contents</h3>
          <ol>
            {blog.toc.map((item, index) => (
              <li key={index} style={{ marginTop: '0.5rem' }}>{item}</li>
            ))}
          </ol>
        </div>
      )}

      {typeof blog.contentHTML === 'string' && (
        <div
            dangerouslySetInnerHTML={{ __html: blog.contentHTML }}
            style={{ fontSize: '1.1rem', color: '#444', lineHeight: '1.8' }}
        />
    )}
    </main>
  );
}
