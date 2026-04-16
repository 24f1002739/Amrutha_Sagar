import { Phone } from "lucide-react";

export default function FloatingCallButton() {
  return (
    <a
      href="tel:+919767672424"
      data-testid="floating-call-btn"
      className="fixed bottom-5 left-4 md:left-6 z-50 w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center shadow-lg shadow-yellow-500/30 hover:bg-yellow-400 transition-all hover:scale-105 animate-pulse-gentle"
      aria-label="Call Now"
    >
      <Phone className="w-6 h-6 text-[#022c22]" />
    </a>
  );
}
