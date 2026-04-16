import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MENU_CATEGORIES } from "../data/menuData";
import { ScrollArea, ScrollBar } from "../components/ui/scroll-area";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0].id);
  const active = MENU_CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <section id="menu" data-testid="menu-section" className="bg-[#022c22] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm text-yellow-500 uppercase tracking-[0.2em] font-sans mb-3">Our Menu</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-50">
            Explore Our Delicacies
          </h2>
        </motion.div>

        <ScrollArea className="w-full mb-10">
          <div className="flex gap-2 pb-4 px-1">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                data-testid={`menu-tab-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2.5 rounded-full text-sm font-sans font-medium transition-all duration-200 flex-shrink-0 ${
                  activeCategory === cat.id
                    ? "bg-yellow-500 text-[#022c22] shadow-lg shadow-yellow-500/20"
                    : "bg-[#064e3b]/30 text-emerald-200/70 hover:text-yellow-500 border border-emerald-800/40"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid lg:grid-cols-[320px_1fr] gap-8">
                <div className="hidden lg:block">
                  <img
                    src={active.image}
                    alt={active.name}
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl sticky top-24"
                  />
                </div>

                <div className="backdrop-blur-md bg-[#064e3b]/20 border border-emerald-800/40 rounded-2xl p-6 md:p-8">
                  <h3 className="font-serif text-2xl font-bold text-yellow-500 mb-6">{active.name}</h3>
                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-1">
                    {active.items.map((item, idx) => (
                      <div
                        key={idx}
                        data-testid={`menu-item-${active.id}-${idx}`}
                        className="flex items-baseline justify-between py-3 border-b border-emerald-800/20 group hover:border-yellow-500/30 transition-colors"
                      >
                        <span className="text-emerald-50 font-sans text-sm group-hover:text-yellow-500 transition-colors pr-2">
                          {item.name}
                        </span>
                        <span className="text-yellow-500 font-semibold text-sm whitespace-nowrap font-sans">
                          &#8377;{item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
