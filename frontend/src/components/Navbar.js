import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const LOGO_URL = "/logo.png";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Party Orders", href: "#party-orders" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#022c22]/90 border-b border-emerald-800/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" onClick={(e) => handleClick(e, "#home")} className="flex items-center gap-3">
            <img src={LOGO_URL} alt="Amrutha Sagar" className="h-10 md:h-14 w-auto" />
            <span className="font-serif text-yellow-500 text-lg md:text-xl font-bold hidden sm:block">
              Amrutha Sagar
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                data-testid={`nav-link-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                className="px-3 py-2 text-sm text-emerald-200/80 hover:text-yellow-500 transition-colors font-sans tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+910000000000"
              data-testid="nav-call-btn"
              className="hidden md:flex items-center gap-2 bg-yellow-500 text-[#022c22] font-semibold px-5 py-2.5 rounded-full hover:bg-yellow-400 transition-colors text-sm shadow-lg shadow-yellow-500/20"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <button
              data-testid="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-emerald-50 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden backdrop-blur-xl bg-[#022c22]/95 border-t border-emerald-800/50">
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="block px-4 py-3 text-emerald-200/80 hover:text-yellow-500 hover:bg-[#064e3b]/30 rounded-xl transition-colors font-sans"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+910000000000"
              className="flex items-center gap-2 px-4 py-3 text-yellow-500 font-semibold"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
