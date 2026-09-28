import React, { useState } from "react";

// creating sidebar
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // Sidebar open by default

  return (
    <div
      className={`fixed top-16 left-0 h-screen bg-purple-950 text-white transition-transform duration-300 ease-in-out p-5 ${
        isOpen ? "w-64 translate-x-0" : "w-16 -translate-x-0"
      }`}
    >
      {/* Button (toggles between Open/Close) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none"
      >
        {isOpen ? "Close" : "Open"}
      </button>

      {/* Sidebar Content (Hidden when closed) */}
      {isOpen && (
        <div>
          <h2 className="text-2xl font-bold mb-5">My Sidebar</h2>
          <nav className="flex flex-col space-y-3">
            <a href="#" className="px-3 py-2 hover:bg-gray-700 rounded">
              Home
            </a>
            <a href="#" className="px-3 py-2 hover:bg-gray-700 rounded">
              About
            </a>
            <a href="#" className="px-3 py-2 hover:bg-gray-700 rounded">
              Services
            </a>
            <a href="#" className="px-3 py-2 hover:bg-gray-700 rounded">
              Contact
            </a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
