import { useState } from "react";
import logo from "../assets/Header_Logo.png";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Courses", href: "#courses" },
  { label: "Categories", href: "#categories" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <nav className="flex h-[76px] items-center justify-between">
          {/* Logo */}
          <a href="#" className="shrink-0">
            <img
              src={logo}
              alt="ByteSpace"
              className="h-7 w-auto object-contain sm:h-8"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm transition-colors ${
                  index === 0
                    ? "font-medium text-white"
                    : "text-blue-100 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden items-center gap-2 md:flex">
            <a
              href="#signin"
              className="px-3 py-2 text-sm font-medium text-white transition hover:text-lime-300"
            >
              Sign In
            </a>

            <a
              href="#join"
              className="rounded-full px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Join Us
            </a>

            {/* Shop icon */}
            <button
              type="button"
              aria-label="Shop"
              className="ml-2 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-lime-300 hover:text-lime-300"
            >
              <svg
                className="h-[18px] w-[18px]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 8h12l1 12H5L6 8Z" />
                <path d="M9 8a3 3 0 0 1 6 0" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 text-white md:hidden"
          >
            {isOpen ? (
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="rounded-2xl border border-white/10 bg-blue-800/95 p-4 shadow-xl backdrop-blur-md md:hidden">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm text-white transition hover:bg-white/10"
                >
                  {item.label}
                </a>
              ))}

              <div className="mt-3 border-t border-white/10 pt-3">
                <a
                  href="#signin"
                  className="block rounded-lg px-4 py-3 text-sm text-white"
                >
                  Sign In
                </a>

                <a
                  href="#join"
                  className="mt-1 block rounded-full bg-lime-300 px-4 py-3 text-center text-sm font-semibold text-blue-900"
                >
                  Join Us
                </a>

                <button
                  type="button"
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm text-white"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 8h12l1 12H5L6 8Z" />
                    <path d="M9 8a3 3 0 0 1 6 0" />
                  </svg>
                  Shop
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
