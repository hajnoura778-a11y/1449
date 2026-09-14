"use client";

import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "الرئيسية" },
  { to: "/about", label: "من نحن" },
  { to: "/how-it-works", label: "كيف تعمل المنصة" },
  { to: "/faq", label: "الأسئلة الشائعة" },
  { to: "/contact", label: "تواصل معنا" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // يتغير الشكل عندما يتجاوز السكرول 20 بكسل
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 w-full transition-all duration-300 ease-in-out",
        scrolled
          ? "bg-[#fdfbf7]/90 backdrop-blur-md border-b border-[#e8ded1] shadow-sm h-16 md:h-20"
          : "bg-transparent border-b border-transparent h-20 md:h-24"
      )}
    >
      <div className="container-page flex h-full items-center justify-between px-4">
        
        {/* أقصى اليمين: اللوغو */}
        <div className="flex items-center justify-start">
          <Link 
            to="/" 
            className="group flex items-center gap-3 transition-transform duration-200 active:scale-95 shrink-0"
          >
            <img 
              src="sss.svg" 
              alt="شعار منصة حماية المستهلك" 
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              // @ts-ignore
              fetchpriority="high"
            />
          </Link>
        </div>

        {/* المنتصف: القائمة الرئيسية */}
        <nav 
          aria-label="التنقل الرئيسي"
          className="hidden md:flex items-center gap-6 lg:gap-8"
        >
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="relative py-2 text-sm lg:text-base font-medium text-[#4a3b2c] transition-colors duration-200 hover:text-[#9b6131] whitespace-nowrap after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-0 after:bg-[#9b6131] after:transition-all after:duration-300 hover:after:w-full"
              activeProps={{ 
                className: "text-[#9b6131] font-bold after:w-full" 
              }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* أقصى اليسار: زر القائمة للموبايل فقط */}
        <div className="md:hidden flex items-center justify-end">
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-xl border border-[#d2c2b0] bg-white/80 backdrop-blur-sm text-[#1a0f07] transition-colors hover:bg-[#f7f2eb] focus:outline-none"
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5 shrink-0" /> : <Menu className="h-5 w-5 shrink-0" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      <div 
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-[#e8ded1] bg-[#fdfbf7]/95 backdrop-blur-2xl", 
          open ? "max-h-[350px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        )}
      >
        <div className="container-page flex flex-col gap-1">
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-[#4a3b2c] transition-all hover:bg-[#f7f2eb] hover:text-[#9b6131]"
              activeProps={{ className: "bg-[#f7f2eb] text-[#9b6131] font-bold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              <span>{n.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}