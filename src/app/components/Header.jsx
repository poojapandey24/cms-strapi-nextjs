import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
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
  );
}
