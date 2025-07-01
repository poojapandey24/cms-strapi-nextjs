import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
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
  );
} 