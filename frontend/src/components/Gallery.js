import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const GALLERY_IMAGES = [
  { url: "/images/Gallery-1.jpg", alt: "Gallery 1", span: "col-span-2 row-span-2" },
  { url: "/images/Gallery-2.jpg", alt: "Gallery 2", span: "" },
  { url: "https://images.unsplash.com/photo-1743615467363-250466982515?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwzfHxzb3V0aCUyMGluZGlhbiUyMGRvc2ElMjBtYXNhbGElMjBjcmlzcHl8ZW58MHx8fHwxNzc1OTY1NjI3fDA&ixlib=rb-4.1.0&q=85", alt: "Dosa Platter", span: "" },
  { url: "https://images.unsplash.com/photo-1667388969250-1c7220bf3f37?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAxODF8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MHx8fHwxNzc1OTY1NTIwfDA&ixlib=rb-4.1.0&q=85", alt: "Restaurant Dining", span: "" },
  { url: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwxfHxwYW5lZXIlMjBidXR0ZXIlMjBtYXNhbGElMjBpbmRpYW4lMjBncmF2eSUyMGN1cnJ5fGVufDB8fHx8MTc3NTk2NTYyN3ww&ixlib=rb-4.1.0&q=85", alt: "Paneer Masala", span: "" },
  { url: "https://images.unsplash.com/photo-1711153419402-336ee48f2138?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MTJ8MHwxfHNlYXJjaHwyfHxpbmRpYW4lMjB2ZWdldGFyaWFuJTIwZmVhc3QlMjB0aGFsaXxlbnwwfHx8fDE3NzU5NjU1MzR8MA&ixlib=rb-4.1.0&q=85", alt: "Thali Spread", span: "col-span-2" },
  { url: "/images/10.jpg", alt: "Menu Item", span: "" },
  { url: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDZ8MHwxfHNlYXJjaHwxfHxpZGxpJTIwc2FtYmFyfGVufDB8fHx8MTc3NTk2NTUzM3ww&ixlib=rb-4.1.0&q=85", alt: "Idli Platter", span: "" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" data-testid="gallery-section" className="bg-[#022c22] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm text-yellow-500 uppercase tracking-[0.2em] font-sans mb-3">Gallery</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-50">A Feast for the Eyes</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-dense gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[200px]">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              data-testid={`gallery-image-${i}`}
              onClick={() => setLightbox(img)}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${img.span}`}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#022c22]/0 group-hover:bg-[#022c22]/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          >
            <button
              data-testid="lightbox-close"
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={lightbox.url}
              alt={lightbox.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
