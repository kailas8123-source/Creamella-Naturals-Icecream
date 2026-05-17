import { useEffect, useRef, useState } from 'react';
import { ShoppingBag } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const isScrolledRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const nextScrolled = window.scrollY > 80;
      if (nextScrolled !== isScrolledRef.current) {
        isScrolledRef.current = nextScrolled;
        setScrolled(nextScrolled);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="site-nav fixed left-0 right-0 z-[100] flex items-center justify-between transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,246,0.9)' : 'rgba(255,255,246,0.68)',
        backdropFilter: 'blur(14px) saturate(1.12)',
        WebkitBackdropFilter: 'blur(14px) saturate(1.12)',
      }}
    >
      <div className="flex items-center gap-2">
        <div className="brand-mark flex items-center justify-center">
          <span className="font-display font-bold text-lg">C</span>
        </div>
        <span className="brand-name font-display font-bold text-xl text-[#111]">Creamella</span>
      </div>

      <div className="hidden md:flex items-center gap-3">
        <div className="nav-links glass-pill px-5 py-2.5 flex items-center gap-6">
          {['Process', 'Products', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-label text-xs uppercase text-[#2B2B2B] hover:text-[#111] transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        <button className="nav-cta glass-pill px-5 py-2.5 flex items-center gap-2 transition-all hover:-translate-y-0.5">
          <ShoppingBag size={16} />
          <span className="font-label text-xs uppercase">Shop</span>
        </button>
      </div>
    </nav>
  );
}
