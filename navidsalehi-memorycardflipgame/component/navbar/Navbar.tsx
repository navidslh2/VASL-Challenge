"use client";
import Logo from "@/ui/Logo";
import { MdLocalPhone } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import HeaderItems from "./HeaderItems";
import Mobilemenu from "./Mobilemenu";



const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="fixed top-5 left-5 right-5 h-[60px]  px-4 md:px-10 flex items-center justify-between  border border-gray-800 bg-gray-700  rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] z-20">
      <GiHamburgerMenu 
        className="md:hidden text-white  hover:text-blue-400 cursor-pointer"
        onClick={() => setIsMobileMenuOpen(true)}
      />
      <div>
        <Logo />
      </div>
      <div className="hidden md:flex">
        <HeaderItems  />
      </div>
      <div className="flex text-white gap-3 items-center text-sm">
        <span>09128391641</span>
        <MdLocalPhone  size={20} />
      </div>
      {isMobileMenuOpen && (
        <Mobilemenu
          isShow={isMobileMenuOpen}
          backdropHandler={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
