import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const title = "Five Legend";

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header ref={headerRef} className="bg-emerald-600 text-white shadow-md">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-extrabold">
          {title}
        </NavLink>

        {/* Bouton hamburger (mobile) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded hover:bg-emerald-700 focus:outline-none"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-6 text-lg font-bold">
          <NavLink to="/" className="hover:text-emerald-100 w-full">
            HOME
          </NavLink>
          <NavLink to="/register" className="hover:text-emerald-200 w-full">
            REGISTER
          </NavLink>
          <NavLink to="/profile" className="hover:text-emerald-200 w-full">
            PROFILE
          </NavLink>
        </nav>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="absolute to-100% w-full shadow-nav z-2 md:hidden border-t border-emerald-500 bg-emerald-600">
          <ul className="flex flex-col items-start text-lg font-bold">
            <li className="px-4 w-full hover:bg-emerald-500">
              <NavLink
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 hover:text-emerald-100"
              >
                Home
              </NavLink>
            </li>
            <li className="px-4 w-full hover:bg-emerald-500">
              <NavLink
                to="/register"
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 hover:text-emerald-100"
              >
                S&apos;inscrire
              </NavLink>
            </li>
            <li className="px-4 w-full hover:bg-emerald-500">
              <NavLink
                to="/profile"
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 hover:text-emerald-100"
              >
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
