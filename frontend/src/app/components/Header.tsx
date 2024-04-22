// Header.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Tailblocks from "./Tailblocks";

function Header() {
  const pathname = usePathname();
  const navLinks = [
    { href: "", text: "First Link" },
    { href: "", text: "Second Link" },
    { href: "../supportme", text: "Support Me" },
    { href: "../contact", text: "Contact Us" },
  ];

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Tailblocks />
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.text}
                href={link.href}
                className={"mr-5 hover:text-gray-900"}
              >
                {link.text}
                {isActive}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
        >
          Button
        </button>
      </div>
    </header>
  );
}

export default Header;
