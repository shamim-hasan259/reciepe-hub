"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden p-2 fixed top-16 right-3 z-50 bg-white dark:bg-gray-800 shadow rounded"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static top-0 left-0 h-[80vh] w-64 
          transform transition-transform duration-300
          bg-white dark:bg-gray-900 shadow-lg border-r border-gray-200 dark:border-gray-800
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <div className="p-6">
          {/* Title */}
          <h2 className="text-2xl font-bold bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Dashboard
          </h2>

          {/* Links */}
          <nav className="mt-8 flex flex-col gap-3">
            <Link
              href="/dashboard"
              className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-cyan-50 dark:hover:bg-gray-800 transition"
            >
              Dashboard
            </Link>

            <Link
              href="/add-pet"
              className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-cyan-50 dark:hover:bg-gray-800 transition"
            >
              Add Pet
            </Link>
            <Link
              href="/my-listing"
              className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-cyan-50 dark:hover:bg-gray-800 transition"
            >
              My Listing
            </Link>
          </nav>
        </div>
      </aside>
    </div>
  );
};
export default Sidebar;
