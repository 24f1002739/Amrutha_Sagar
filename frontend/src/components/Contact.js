import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";

const MAPS_EMBED = "https://maps.google.com/maps?q=Amrutha+Sagar+Veg+Restaurant,+Hosur&t=&z=15&ie=UTF8&iwloc=&output=embed";

const FORMSPREE_ID = "xlgagqno"; // Replace with your Formspree ID

const INFO = [
  { icon: MapPin, label: "Address", value: "No.75, Tank St, near Gandhi Statue, Hosur, Tamil Nadu 635109" },
  { icon: Clock, label: "Opening Hours", value: "8:00 AM - 10:30 PM (Monday to Sunday)" },
  { icon: Phone, label: "Phone", value: "+91 9767672424" },
  { icon: Mail, label: "Email", value: "amruthasagar67@gmail.com" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      console.log("Submitting to Formspree with ID:", FORMSPREE_ID);
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          "_replyto": form.email,
          "_subject": "Contact Confirmation - Amrutha Sagar",
          "_next": "https://www.amruthasagar.com/?success=contact",
        }),
      });

      console.log("Response status:", response.status, response.statusText);
      const data = await response.json().catch(() => ({}));
      console.log("Response data:", data);

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
        console.log("✅ Message sent successfully!");
      } else {
        const errorMsg = data.error || data.message || response.statusText || "Failed to send message";
        setError(`Error: ${errorMsg}`);
        console.error("Form submission error:", response.status, errorMsg, data);
      }
    } catch (err) {
      setError(`Error: ${err.message || 'Unable to send message'}`);
      console.error("Contact error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="bg-[#022c22] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm text-yellow-500 uppercase tracking-[0.2em] font-sans mb-3">Get in Touch</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-50">Visit Us Today</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {INFO.map((item) => (
              <div key={item.label} className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-yellow-500" />
                </div>
                <div>
                  <p className="text-yellow-500 font-sans text-xs uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-emerald-200/80 font-sans text-sm">{item.value}</p>
                </div>
              </div>
            ))}

            <a
              href="tel:+919767672424"
              data-testid="contact-call-btn"
              className="inline-flex items-center gap-2 bg-yellow-500 text-[#022c22] font-semibold px-8 py-3.5 rounded-full hover:bg-yellow-400 transition-colors text-sm shadow-lg shadow-yellow-500/20 mt-4"
            >
              <Phone className="w-4 h-4" />
              Call Now for Enquiries
            </a>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              data-testid="contact-success"
              className="backdrop-blur-md bg-[#064e3b]/30 border border-emerald-800/40 rounded-2xl p-10 text-center flex flex-col items-center justify-center h-full"
            >
              <CheckCircle className="w-16 h-16 text-yellow-500 mb-4" />
              <h3 className="font-serif text-2xl text-emerald-50 mb-2">Message Sent!</h3>
              <p className="text-emerald-200/70 font-sans mb-6">Thank you for contacting us. We'll respond shortly.</p>
              <button
                onClick={() => setSubmitted(false)}
                data-testid="contact-new-btn"
                className="bg-yellow-500 text-[#022c22] font-semibold px-6 py-2.5 rounded-full hover:bg-yellow-400 transition-colors text-sm"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="backdrop-blur-md bg-[#064e3b]/30 border border-emerald-800/40 rounded-2xl p-6 md:p-8 space-y-5 h-fit"
            >
              {error && (
                <div className="bg-red-500/20 border border-red-500/50 text-red-200 p-3 rounded-lg text-sm">
                  {error}
                </div>
              )}
              
              <div>
                <Label className="text-emerald-200/80 text-sm mb-2 block font-sans">Your Name</Label>
                <Input
                  data-testid="contact-name-input"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Enter your name"
                  className="bg-[#022c22] border-emerald-800 focus:border-yellow-500 text-emerald-50 placeholder:text-emerald-200/30 font-sans"
                />
              </div>

              <div>
                <Label className="text-emerald-200/80 text-sm mb-2 block font-sans">Email Address</Label>
                <Input
                  data-testid="contact-email-input"
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="bg-[#022c22] border-emerald-800 focus:border-yellow-500 text-emerald-50 placeholder:text-emerald-200/30 font-sans"
                />
              </div>

              <div>
                <Label className="text-emerald-200/80 text-sm mb-2 block font-sans">Message</Label>
                <Textarea
                  data-testid="contact-message-input"
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us how we can help..."
                  rows={4}
                  className="bg-[#022c22] border-emerald-800 focus:border-yellow-500 text-emerald-50 placeholder:text-emerald-200/30 font-sans resize-none"
                />
              </div>

              <button
                type="submit"
                data-testid="contact-submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-yellow-500 text-[#022c22] font-semibold px-8 py-3.5 rounded-full hover:bg-yellow-400 transition-colors text-sm shadow-lg shadow-yellow-500/20 disabled:opacity-60"
              >
                <Send className="w-4 h-4" />
                {loading ? "Sending..." : "Send Message"}
              </button>
            </motion.form>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border border-emerald-800/40 h-[350px] mt-12"
        >
          <iframe
            data-testid="google-maps-embed"
            src={MAPS_EMBED}
            width="100%"
            height="100%"
            style={{ border: 0, filter: "brightness(0.85) contrast(1.1) saturate(0.8)" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Amrutha Sagar Location"
          />
        </motion.div>
      </div>
    </section>
  );
}
