"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    setDropdownOpen(false); // Close dropdown when toggling menu
  };

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-950 sticky top-0 z-50 shadow mb-8 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/favicon.ico" className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold text-white">Done It</span>
        </Link>
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden"
          aria-controls="navbar-dropdown"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          )}
        </button>
        <div className={`w-full md:block md:w-auto ${isMenuOpen ? "block" : "hidden"}`} id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-white bg-blue-600 rounded md:bg-transparent md:text-blue-600 md:p-0 md:pt-2"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="relative" ref={dropdownRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button
                className="flex items-center justify-between w-full py-2 px-3 text-gray-200 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 md:pt-2"
              >
                Resources
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 z-10 mt-1 w-44 font-normal bg-gray-800 divide-y divide-gray-700 rounded-lg shadow">
                  <ul className="py-2 text-sm text-gray-200">
                    <li>
                      <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-700">
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link href="/settings" className="block px-4 py-2 hover:bg-gray-700">
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link href="/earnings" className="block px-4 py-2 hover:bg-gray-700">
                        Earnings
                      </Link>
                    </li>
                  </ul>
                  <div className="py-1">
                    <Link href="/signout" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700">
                      Sign out
                    </Link>
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link
                href="/For-Teams"
                className="block py-2 px-3 text-gray-200 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 md:pt-2"
              >
                For Teams
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="block py-2 px-3 text-gray-200 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 md:pt-2"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/Features"
                className="block py-2 px-3 text-gray-200 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 md:pt-2"
              >
                Features
              </Link>
            </li>
            <li className="hidden md:block border-l border-gray-500 h-8 mx-4"></li>
            {/* Desktop view buttons */}
            <li className="hidden md:block">
              <Link
                href="/login"
                className="block py-2 px-3 text-gray-200 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 md:pt-2"
              >
                Log in
              </Link>
            </li>
            <li className="hidden md:block">
              <Link
                href="/start-for-free"
                className="block py-4 px-6 bg-red-600 text-gray-200 rounded hover:bg-red-700 md:border-0 md:p-2"
              >
                Start for Free
              </Link>
            </li>
            {/* Mobile view buttons */}
            <li className="md:hidden w-full">
              <div className="flex justify-between items-center space-x-2">
                <Link
                  href="/login"
                  className="block py-4 px-8 bg-gray-600 text-gray-200 rounded hover:bg-gray-700"
                >
                  Log in
                </Link>
                <Link
                  href="/start-for-free"
                  className="block py-4 px-6 bg-red-600 text-gray-200 rounded hover:bg-red-700"
                >
                  Start for Free
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
  