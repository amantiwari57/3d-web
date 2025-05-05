"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-100 text-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold tracking-wider">GAMESTORE</span>
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-300 hover:text-gray-900">
                Home
              </Link>
              <Link href="/stall" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-300 hover:text-gray-900">
                Stall
              </Link>
              <Link href="/new-releases" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-300 hover:text-gray-900">
                New Releases
              </Link>
              <Link href="/deals" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-300 hover:text-gray-900">
                Deals
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/search" className="p-1 rounded-full hover:bg-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Link>
            <Link href="/cart" className="p-1 rounded-full hover:bg-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </Link>
            <Link href="/profile" className="p-1 rounded-full hover:bg-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
          </div>
          <div className="flex md:hidden">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-300 hover:text-gray-900">
              Home
            </Link>
            <Link href="/stall" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-300 hover:text-gray-900">
              Games
            </Link>
            <Link href="/new-releases" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-300 hover:text-gray-900">
              New Releases
            </Link>
            <Link href="/deals" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-300 hover:text-gray-900">
              Deals
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-500">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium">User</div>
                <div className="text-sm font-medium text-gray-600">user@example.com</div>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <Link href="/profile" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-300 hover:text-gray-900">
                Your Profile
              </Link>
              <Link href="/cart" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-300 hover:text-gray-900">
                Cart
              </Link>
              <Link href="/search" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-300 hover:text-gray-900">
                Search
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
