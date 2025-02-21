"use client";

import Link from "next/link"; // Importing icons for theme toggle

export default function Footer() {
  return (
    <footer className="bg-[#ededed] dark:bg-gray-900 py-16 sm:py-12 shadow-lg transition-all duration-200">
      <div className="container max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 justify-between">
          {/* Quick Links Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold uppercase text-gray-900 dark:text-gray-200">
              Quick Links
            </h3>
            <nav className="space-y-4">
              <Link
                href="/"
                className="block text-sm text-gray-900 dark:text-gray-200 hover:text-indigo-400 transition-colors duration-300 py-1 px-2"
                prefetch={false}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-sm text-gray-900 dark:text-gray-200 hover:text-indigo-400 transition-colors duration-300 py-1 px-2"
                prefetch={false}
              >
                About
              </Link>
              <Link
                href="/projects"
                className="block text-sm text-gray-900 dark:text-gray-200 hover:text-indigo-400 transition-colors duration-300 py-1 px-2"
                prefetch={false}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="block text-sm text-gray-900 dark:text-gray-200 hover:text-indigo-400 transition-colors duration-300 py-1 px-2 rounded-lg"
                prefetch={false}
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold uppercase text-gray-900 dark:text-gray-200">
              Subscribe to Newsletter
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Stay updated with the latest news and updates. Subscribe to my
              newsletter for regular insights and tips.
            </p>
            <form className="flex flex-col sm:flex-row items-center space-x-2">
              <input
                type="email"
                placeholder="Your Email Address"
                aria-label="Your Email Address"
                className="px-4 py-2 w-full sm:w-64 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 dark:text-white bg-white/80 dark:bg-gray-900/80"
              />
              <button
                type="submit"
                className="mt-4 sm:mt-0 bg-indigo-500 px-6 py-2 rounded-md text-white hover:bg-indigo-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold uppercase text-gray-900 dark:text-gray-200">
              Contact Info
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Dhaka, Bangladesh
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Phone: +8801345678956
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Email: contact@kamanashisbiwas.com
            </p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-gray-600 text-center dark:border-gray-700 dark:text-gray-400">
          <p>&copy; Kamanashis Biswas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
