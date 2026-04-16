import { motion } from "framer-motion";
import { Clock, MapPin, Utensils, IndianRupee } from "lucide-react";

const ABOUT_IMG = "/images/about-img.jpg";

const PERKS = [
  { icon: Utensils, text: "Fresh vegetarian food" },
  { icon: Clock, text: "Open 8 AM - 10:30 PM" },
  { icon: MapPin, text: "Centrally located in Hosur" },
  { icon: IndianRupee, text: "Affordable pricing" },
];

export default function About() {
  return (
    <section id="about" data-testid="about-section" className="bg-[#022c22] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={ABOUT_IMG}
              alt="Restaurant Interior"
              className="rounded-2xl w-full h-[400px] lg:h-[500px] object-cover shadow-2xl"
            />
            <div className="absolute top-4 right-4 bg-yellow-500 text-[#022c22] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
              Pure Veg
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-sm text-yellow-500 uppercase tracking-[0.2em] font-sans mb-3">Our Story</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-50 mb-6">
              A Legacy of Pure Vegetarian Delights
            </h2>
            <p className="text-emerald-200/80 leading-relaxed font-sans mb-4 text-justify">
              Nestled near the iconic Gandhi Statue in Hosur, Amrutha Sagar Veg Restaurant is a beloved destination for pure vegetarian cuisine. We serve authentic South Indian breakfast, hearty lunch meals, Chinese starters, chats, fresh juices, desserts and beverages.
            </p>
            <p className="text-emerald-200/80 leading-relaxed font-sans mb-8 text-justify">
              Our commitment to quality ingredients, traditional recipes, and warm hospitality has made us a trusted name for family dining in Hosur. From our signature dosas to our rich paneer gravies, every dish is prepared with passion.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {PERKS.map((p) => (
                <div key={p.text} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                    <p.icon className="w-4 h-4 text-yellow-500" />
                  </div>
                  <span className="text-sm text-emerald-200/80 font-sans">{p.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
