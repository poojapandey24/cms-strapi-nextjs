'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Home() {
  const pathname = usePathname();

  return (
    <main style={{ padding: '3rem', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center' }}>🚀 Welcome to My Landing Page</h1>

      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
        <Tab href="/blog" label="Blog" pathname={pathname} />
        <Tab href="/events" label="Events" pathname={pathname} />
      </div>

      <p style={{ marginTop: '3rem', textAlign: 'center', color: '#555' }}>
        Click on a tab above to explore!
      </p>
    </main>
  );
}

function Tab({ href, label, pathname }) {
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <span style={{
        padding: '0.75rem 1.5rem',
        borderRadius: '6px',
        border: '1px solid #ccc',
        backgroundColor: isActive ? '#0070f3' : '#f9f9f9',
        color: isActive ? 'white' : 'black',
        cursor: 'pointer',
        transition: '0.3s'
      }}>
        {label}
      </span>
    </Link>
  );
}
