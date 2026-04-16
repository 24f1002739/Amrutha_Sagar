import { Leaf, UtensilsCrossed, Users, PartyPopper } from "lucide-react";
import { motion } from "framer-motion";

const FEATURES = [
  { icon: Leaf, title: "100% Pure Veg", desc: "Fresh vegetarian ingredients prepared with care and tradition" },
  { icon: UtensilsCrossed, title: "Breakfast, Lunch & Dinner", desc: "Complete dining experience from morning tiffin to evening meals" },
  { icon: Users, title: "Family Dining", desc: "Comfortable space for families to enjoy quality time together" },
  { icon: PartyPopper, title: "Party Orders", desc: "Catering for birthdays, functions and special celebrations" },
];

export default function Highlights() {
  return (
    <section id="highlights" data-testid="highlights-section" className="bg-[#022c22] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              data-testid={`highlight-card-${i}`}
              className="backdrop-blur-md bg-[#064e3b]/30 border border-emerald-800/40 rounded-2xl p-6 md:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:bg-[#064e3b]/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-5 group-hover:bg-yellow-500/20 transition-colors">
                <f.icon className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-emerald-50 mb-2">{f.title}</h3>
              <p className="text-sm text-emerald-200/70 font-sans leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
