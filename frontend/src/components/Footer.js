import { Phone, MapPin, Clock } from "lucide-react";

const LOGO_URL = "/logo.png";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Party Orders", href: "#party-orders" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer data-testid="footer" className="bg-[#011a14] border-t border-emerald-800/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src={LOGO_URL} alt="Amrutha Sagar" className="h-12 w-auto" />
              <div>
                <h3 className="font-serif text-yellow-500 text-lg font-bold">Amrutha Sagar</h3>
                <p className="text-emerald-200/50 text-xs font-sans">Veg Restaurant</p>
              </div>
            </div>
            <p className="text-emerald-200/60 text-sm font-sans leading-relaxed">
              Pure vegetarian family restaurant in Hosur serving authentic South Indian, North Indian, Chinese and more.
            </p>
          </div>

          <div>
            <h4 className="text-emerald-50 font-sans font-semibold text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {QUICK_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="text-emerald-200/60 hover:text-yellow-500 transition-colors text-sm font-sans py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-emerald-50 font-sans font-semibold text-sm mb-4 uppercase tracking-wider">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                <p className="text-emerald-200/60 text-sm font-sans">No.75, Tank St, near Gandhi Statue, Hosur, Tamil Nadu 635109</p>
              </div>
              <div className="flex gap-3 items-center">
                <Clock className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                <p className="text-emerald-200/60 text-sm font-sans">8:00 AM - 10:30 PM Daily</p>
              </div>
              <a
                href="tel:+910000000000"
                data-testid="footer-call-btn"
                className="inline-flex items-center gap-2 bg-yellow-500 text-[#022c22] font-semibold px-5 py-2.5 rounded-full hover:bg-yellow-400 transition-colors text-sm shadow-lg shadow-yellow-500/20 mt-2"
              >
                <Phone className="w-4 h-4" />
                Call for Enquiry
              </a>
              <div className="flex gap-2 mt-3 flex-wrap">
                <a
                  href="https://www.swiggy.com/city/hosur/amrutha-sagar-veg-restaurant-denkanikotta-road-opp-gandhi-statue-hosur-rest644970"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-orange-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-orange-600 transition-colors text-sm shadow-lg shadow-orange-500/20"
                >
                  🛵 Order on Swiggy
                </a>
                <a
                  href="https://www.zomato.com/hosur/amrutha-sagar-veg-restaurant-1-hosur-locality/order"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-red-600 transition-colors text-sm shadow-lg shadow-red-500/20"
                >
                  🍽️ Order on Zomato
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-emerald-800/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-emerald-200/40 text-xs font-sans">
            &copy; {new Date().getFullYear()} Amrutha Sagar Veg Restaurant. All rights reserved.
          </p>
          <p className="text-emerald-200/30 text-xs font-sans">
            Pure Vegetarian Family Restaurant, Hosur
          </p>
        </div>
      </div>
    </footer>
  );
}
