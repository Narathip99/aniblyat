"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Button variant="ghost" size="icon" onClick={toggleTheme}>
        {theme === "light" ? <SunIcon /> : <MoonIcon />}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  );
}
