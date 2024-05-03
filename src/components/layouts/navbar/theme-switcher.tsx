"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

const themeIcons = {
  light: <SunIcon size={16} />,
  dark: <MoonIcon size={16} />,
  system: <HiOutlineComputerDesktop size={16} />,
};

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, themes } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const changeTheme = (theme: string) => {
    if (theme === "system") {
      setTheme("system");
      return;
    }
    setTheme(theme);
  };

  const selectedTheme = useMemo(() => {
    return new Set([theme as string]);
  }, [theme]);

  if (!mounted) return null;

  return (
    <Dropdown>
      <DropdownTrigger>
        <button className="p-1 outline-none text-foreground-500">
          {themeIcons[theme as keyof typeof themeIcons]}
        </button>
      </DropdownTrigger>
      <DropdownMenu
        selectionMode="single"
        variant="flat"
        disallowEmptySelection
        aria-label="Single selection example"
        selectedKeys={selectedTheme}
      >
        {themes.map((theme) => (
          <DropdownItem
            className="text-black dark:text-white"
            key={theme}
            onClick={() => changeTheme(theme)}
          >
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
