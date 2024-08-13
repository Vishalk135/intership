'use client'
import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import Table from "@/components/Table";
import Menu from "@/components/Menu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  
  return (
    <main>
      {/*<Table />*/}
      <Menu />
      
    </main>
  ); 
}
