import { Phone, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const HERO_BG = "https://images.unsplash.com/photo-1665660710687-b44c50751054?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwzfHxzb3V0aCUyMGluZGlhbiUyMGRvc2ElMjB0aGFsaXxlbnwwfHx8fDE3NzU5NjU1MjB8MA&ixlib=rb-4.1.0&q=85";

export default function Hero() {
  return (
    <section id="home" data-testid="hero-section" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={HERO_BG} alt="South Indian Food" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#022c22] via-[#022c22]/85 to-[#022c22]/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="text-sm text-yellow-500 uppercase tracking-[0.3em] font-sans mb-4">
            Pure Vegetarian Family Restaurant
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-emerald-50 leading-tight mb-6">
            Savor Earth's <span className="text-yellow-500">Finest</span> Harvest
          </h1>
          <p className="text-base md:text-lg text-emerald-200/80 leading-relaxed mb-3 font-sans">
            Authentic South Indian breakfast, North Indian gravies, Chinese starters, fresh juices & more at Amrutha Sagar Veg Restaurant, Hosur.
          </p>
          <p className="text-sm text-emerald-200/60 font-sans mb-8">
            Open Daily: 8 AM - 10:30 PM | Near Gandhi Statue, Hosur
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#menu"
              data-testid="hero-explore-menu-btn"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-yellow-500 text-[#022c22] font-semibold px-8 py-3.5 rounded-full hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/20 text-sm"
            >
              Explore Menu
            </a>
            <a
              href="tel:+910000000000"
              data-testid="hero-call-btn"
              className="flex items-center gap-2 bg-transparent text-yellow-500 border border-yellow-500/50 font-semibold px-8 py-3.5 rounded-full hover:bg-yellow-500/10 transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              Call to Order
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a
          href="#highlights"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#highlights")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-emerald-200/50 hover:text-yellow-500 transition-colors animate-bounce"
        >
          <ArrowDown className="w-6 h-6" />
        </a>
      </motion.div>
    </section>
  );
}
