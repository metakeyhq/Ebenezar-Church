'use client';
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import Image from "next/image";
import BlueLogo from "../../../../../public/logo-blue.svg";

export const WelcomeSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation menu items data
  const navItems = [
    "Home",
    "About us",
    "Our Branches",
    "Events",
    "Members",
    "Groups",
  ];

  return (
    <header className="w-full flex items-center justify-between py-0 px-4 relative">
      {/* Logo and Church Name */}
      <Image 
        src={BlueLogo}
        alt="Church Logo"
        className="w-[170px] h-[100px]"
      />

      {/* Desktop Navigation Menu */}
      <NavigationMenu className="mx-auto hidden lg:block">
        <NavigationMenuList className="flex gap-[43px]">
          {navItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink 
                className="[font-family:'Inter',Helvetica] font-normal text-black text-sm relative py-2 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#275e8b] after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full active:after:w-full"
              >
                {item}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Contact Button */}
      <Button className="w-[158px] h-[47px] bg-[#275e8b] rounded-none hover:bg-[#1d4a6e] hidden lg:block">
        <span className="[font-family:'Inter',Helvetica] font-medium text-white text-[19.6px]">
          Contact us
        </span>
      </Button>

      {/* Hamburger Button */}
      <button
        className="lg:hidden flex flex-col gap-1.5 z-20"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile Navigation Menu */}
      <div className={`fixed inset-0 bg-white z-10 lg:hidden transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setIsOpen(false)}
              className="text-xl font-medium text-black hover:text-[#275e8b]"
            >
              {item}
            </button>
          ))}
          <Button className="w-[158px] h-[47px] bg-[#275e8b] rounded-none hover:bg-[#1d4a6e]">
            <span className="[font-family:'Inter',Helvetica] font-medium text-white text-[19.6px]">
              Contact us
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};
