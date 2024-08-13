'use client';
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Banner from "@/components/Banner";
import WhyChoose from "@/components/WhyChoose";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Popup from "@/components/Popup";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [showPopup, setShowPopup] = useState(false);
  const HandlePopup = () =>{
    setShowPopup(true);
  };

  useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      once: true
    });
    AOS.refresh();
    }, []);

  return (
    <main>
      <div className="overflow-x-hidden">
        <Navbar HandlePopup={HandlePopup} />
        <Hero />
        <Banner />
        <WhyChoose />
        <About />
        <Banner />
        <Footer />
        <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
      </div>
    </main>
  );
}
