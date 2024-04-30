import {
  Link,
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useWindowScroll } from "@uidotdev/usehooks";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { navbarItems } from "./navbar.constants";
import { ThemeSwitcher } from "./theme-switcher";

export default function NavbarLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  const [{ y }] = useWindowScroll();

  const isScrolled = useMemo(() => y! > 100, [y]);

  return (
    <Navbar
      maxWidth="md"
      isBordered={isScrolled}
      isBlurred
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-1" justify="center">
        {navbarItems.map((item, index) => {
          const isActive =
            pathname === item.path ||
            (item.path !== "/" && pathname.includes(item.path));

          return (
            <NavbarItem
              isActive={isActive}
              key={index}
              className="data-[active=true]:bg-gray-200 dark:data-[active=true]:bg-foreground-100 rounded-lg px-3 py-0.5 transition-colors group !font-light"
            >
              <Link
                color="foreground"
                href={item.path}
                aria-current={isActive ? "page" : undefined}
                className="!text-sm group-hover:text-black dark:group-hover:text-white"
              >
                {item.title}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarMenu>
        {navbarItems.map((item, index) => {
          const isActive =
            pathname === item.path ||
            (item.path !== "/" && pathname.includes(item.path));

          return (
            <NavbarMenuItem
              isActive={isActive}
              key={index}
              className="data-[active=true]:bg-gray-200 dark:data-[active=true]:bg-foreground-100 rounded-lg px-3 py-0.5 transition-colors group !font-light"
            >
              <Link
                color="foreground"
                href={item.path}
                aria-current={isActive ? "page" : undefined}
                className="!text-sm group-hover:text-black dark:group-hover:text-white"
              >
                {item.title}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
