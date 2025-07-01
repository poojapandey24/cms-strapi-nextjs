export default function Footer() {
  return (
    <footer className="bg-[#030b1a] text-white/70 py-8 border-t border-white/10 text-center mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} CRM Boost. All rights reserved.</p>
      </div>
    </footer>
  );
} 