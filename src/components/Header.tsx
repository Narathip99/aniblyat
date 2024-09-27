"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ToggleTheme } from "./ToggleTheme";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // เปลี่ยนเป็น true เมื่อ scrollY > 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "h-[60px] backdrop-blur-lg bg-opacity-80"
          : "h-[100px] bg-background"
      }`}
    >
      <div className="container mx-auto flex h-full w-full items-center justify-between">
        <div>
          {/* logo */}
          <span className="text-3xl font-bold">Aniblyat</span>
        </div>
        <div className="flex items-center gap-8">
          <nav className="flex gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
};

export default Header;
