import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-200 dark:bg-gray-700 text-gray-300 py-6 px-8 mt-auto border-t border-gray-800">
      <div className="container mx-auto flex items-center justify-center text-sm">
        <span className="hover:text-green-400 transition-colors duration-200">
          &copy; {year} Atlas School. All rights reserved.
        </span>
      </div>
    </footer>
  );
}