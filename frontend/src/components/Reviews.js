import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const REVIEWS_DATA = [
  { id: "1", name: "Lakshmi Narayanan", rating: 5, comment: "Best vegetarian restaurant in Hosur! The dosas are perfectly crispy and the sambar is authentic. Highly recommend for family dining!" },
  { id: "2", name: "Venkatesh Reddy", rating: 5, comment: "Excellent food quality and service! We had the Amrutha special dosa and it was heavenly. Will definitely visit again!" },
  { id: "3", name: "Priyanka Kumari", rating: 5, comment: "Amazing South Indian cuisine! Their idli-sambar combo is perfection. A must-visit place in Hosur!" }
];

export default function Reviews() {
  const reviews = REVIEWS_DATA;

  return (
    <section id="reviews" data-testid="reviews-section" className="bg-[#022c22] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm text-yellow-500 uppercase tracking-[0.2em] font-sans mb-3">Testimonials</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-50">What Our Guests Say</h2>
        </motion.div>

        {reviews && reviews.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <motion.div
                key={review.id || i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-testid={`review-card-${i}`}
                className="backdrop-blur-md bg-[#064e3b]/30 border border-emerald-800/40 rounded-2xl p-6 md:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
              >
                <Quote className="w-8 h-8 text-yellow-500/30 mb-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star
                      key={si}
                      className={`w-4 h-4 ${si < (review.rating || 0) ? "fill-yellow-500 text-yellow-500" : "text-emerald-800/50"}`}
                    />
                  ))}
                </div>
                <p className="text-emerald-200/80 font-sans text-sm leading-relaxed mb-5">{review.comment}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center">
                    <span className="text-yellow-500 font-serif font-bold text-sm">
                      {review.name?.charAt(0) || "?"}
                    </span>
                  </div>
                  <span className="text-emerald-50 font-sans text-sm font-medium">{review.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-emerald-200">No reviews available yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
