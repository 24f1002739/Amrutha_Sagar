import "@/App.css";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import About from "@/components/About";
import MenuSection from "@/components/MenuSection";
import PartyOrders from "@/components/PartyOrders";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import ChatWidget from "@/components/ChatWidget";
import FloatingCallButton from "@/components/FloatingCallButton";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="bg-[#022c22] min-h-screen relative">
      <Navbar />
      <Hero />
      <Highlights />
      <About />
      <MenuSection />
      <PartyOrders />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
      <ChatWidget />
      <FloatingCallButton />
    </div>
  );
}

export default App;
