import { useState } from "react";
import { motion } from "framer-motion";
import { PartyPopper, Send, CheckCircle } from "lucide-react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";

const FORMSPREE_ID = "xkokodzw"; // Replace with your Formspree ID

export default function PartyOrders() {
  const [form, setForm] = useState({ customer_name: "", email: "", mobile: "", event_date: "", num_people: "", requirements: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "Customer Name": form.customer_name,
          "Email": form.email,
          "Mobile": form.mobile,
          "Event Date": form.event_date,
          "Number of People": form.num_people,
          "Requirements": form.requirements,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ customer_name: "", email: "", mobile: "", event_date: "", num_people: "", requirements: "" });
        console.log("✅ Party order submitted successfully!");
      } else {
        setError("Failed to submit order. Please try again.");
        console.error("Form submission error:", response.statusText);
      }
    } catch (err) {
      setError("Error submitting order. Please check your internet connection.");
      console.error("Party order error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="party-orders" data-testid="party-orders-section" className="bg-[#022c22] py-14 md:py-20">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center mx-auto mb-5">
            <PartyPopper className="w-7 h-7 text-yellow-500" />
          </div>
          <p className="text-sm text-yellow-500 uppercase tracking-[0.2em] font-sans mb-3">Celebrations</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-50">Party Order Enquiry</h2>
          <p className="text-emerald-200/70 font-sans mt-3 text-sm">Our team will contact you after receiving your enquiry</p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            data-testid="party-order-success"
            className="backdrop-blur-md bg-[#064e3b]/30 border border-emerald-800/40 rounded-2xl p-10 text-center"
          >
            <CheckCircle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h3 className="font-serif text-2xl text-emerald-50 mb-2">Enquiry Sent!</h3>
            <p className="text-emerald-200/70 font-sans mb-6">Our team will reach out to you shortly to discuss your party requirements.</p>
            <button
              onClick={() => setSubmitted(false)}
              data-testid="party-order-new-btn"
              className="bg-yellow-500 text-[#022c22] font-semibold px-6 py-2.5 rounded-full hover:bg-yellow-400 transition-colors text-sm"
            >
              Submit Another Enquiry
            </button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="backdrop-blur-md bg-[#064e3b]/30 border border-emerald-800/40 rounded-2xl p-6 md:p-8 space-y-5"
          >
            {error && (
              <div className="bg-red-500/20 border border-red-500/50 text-red-200 p-3 rounded-lg text-sm">
                {error}
              </div>
            )}
            
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label className="text-emerald-200/80 text-sm mb-2 block font-sans">Customer Name</Label>
                <Input
                  data-testid="party-name-input"
                  required
                  value={form.customer_name}
                  onChange={(e) => setForm({ ...form, customer_name: e.target.value })}
                  placeholder="Your name"
                  className="bg-[#022c22] border-emerald-800 focus:border-yellow-500 text-emerald-50 placeholder:text-emerald-200/30 font-sans"
                />
              </div>
              <div>
                <Label className="text-emerald-200/80 text-sm mb-2 block font-sans">Email Address</Label>
                <Input
                  data-testid="party-email-input"
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="bg-[#022c22] border-emerald-800 focus:border-yellow-500 text-emerald-50 placeholder:text-emerald-200/30 font-sans"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label className="text-emerald-200/80 text-sm mb-2 block font-sans">Mobile Number</Label>
                <Input
                  data-testid="party-mobile-input"
                  required
                  value={form.mobile}
                  onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                  placeholder="+91 XXXXX XXXXX"
                  className="bg-[#022c22] border-emerald-800 focus:border-yellow-500 text-emerald-50 placeholder:text-emerald-200/30 font-sans"
                />
              </div>
              <div>
                <Label className="text-emerald-200/80 text-sm mb-2 block font-sans">Event Date</Label>
                <Input
                  data-testid="party-date-input"
                  type="date"
                  required
                  value={form.event_date}
                  onChange={(e) => setForm({ ...form, event_date: e.target.value })}
                  className="bg-[#022c22] border-emerald-800 focus:border-yellow-500 text-emerald-50 font-sans"
                />
              </div>
            </div>
            <div>
              <Label className="text-emerald-200/80 text-sm mb-2 block font-sans">Number of People</Label>
              <Input
                data-testid="party-people-input"
                type="number"
                min="1"
                required
                value={form.num_people}
                onChange={(e) => setForm({ ...form, num_people: e.target.value })}
                placeholder="50"
                className="bg-[#022c22] border-emerald-800 focus:border-yellow-500 text-emerald-50 placeholder:text-emerald-200/30 font-sans"
              />
            </div>
            <div>
              <Label className="text-emerald-200/80 text-sm mb-2 block font-sans">Food Requirements</Label>
              <Textarea
                data-testid="party-requirements-input"
                required
                value={form.requirements}
                onChange={(e) => setForm({ ...form, requirements: e.target.value })}
                placeholder="Describe the food items, special requests, budget preferences..."
                rows={4}
                className="bg-[#022c22] border-emerald-800 focus:border-yellow-500 text-emerald-50 placeholder:text-emerald-200/30 font-sans resize-none"
              />
            </div>
            <button
              type="submit"
              data-testid="party-order-submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-yellow-500 text-[#022c22] font-semibold px-8 py-3.5 rounded-full hover:bg-yellow-400 transition-colors text-sm shadow-lg shadow-yellow-500/20 disabled:opacity-60"
            >
              <Send className="w-4 h-4" />
              {loading ? "Sending..." : "Send Party Order Enquiry"}
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
