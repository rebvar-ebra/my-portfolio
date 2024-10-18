import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
      <Hero />
      <Navbar />
    </div>
  );
}
