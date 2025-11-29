import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";

export default function Header() {
  return (
    <div className="mb-16 relative">
      {/* Logo Section */}
      <div className="mb-8 flex items-center gap-6">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden shadow-2xl hover:shadow-red-500/30 transition-all transform hover:scale-105">
          <Image
            src={logo}
            alt="Waïzé Logo"
            className="w-full h-full object-cover"
            height={400}
            width={400}
          />
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
            Support Contact
          </h1>
          <p className="text-lg text-slate-300 font-medium mt-2">
            Waïzé- Discover, book, and connect with service providers near you with ease.
          </p>
        </div>
      </div>

      <div className="absolute -left-6 top-0 w-1 h-32 bg-gradient-to-b from-red-500 to-orange-500 rounded-full"></div>
      <p className="text-xl text-slate-300 font-medium">
        At Waïzé, we prioritize your privacy and data security.
      </p>
    </div>
  );
}
