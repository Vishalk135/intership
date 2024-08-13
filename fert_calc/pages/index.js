import Image from "next/image";
import { Inter } from "next/font/google";
import Ferti_calculator from "../components/Ferti_calculator.jsx";
import Navbar from "@/components/Navbar.jsx";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navbar />
      <Ferti_calculator />
      
    </main>
  );
}
