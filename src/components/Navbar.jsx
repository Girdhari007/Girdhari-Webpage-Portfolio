import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  return (
    <nav className="fixed top-0 right-0 z-50 flex flex-col items-end p-4 h-full space-y-6 pointer-events-auto  text-white">
      <ul className="space-y-4">
        {/* Introduction Section Link */}
        <li>
          <Link
            to="intro"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            onSetActive={() => setActiveSection("intro")}
            className={`cursor-pointer bg-green-200 bg-opacity-50 text-teal-500 text-lg sm:text-xl lg:text-2xl rounded-md px-3 py-1 transition-all duration-300 ${
              activeSection === "intro"
                ? "scale-125 bg-teal-500 text-white shadow-md"
                : "scale-100 bg-transparent"
            }`}
          >
            Introduction
          </Link>
        </li>

        {/* Skills Section Link */}
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            onSetActive={() => setActiveSection("skills")}
            className={`cursor-pointer bg-green-200 bg-opacity-50 text-white-500 text-lg sm:text-xl lg:text-2xl rounded-md px-3 py-1 transition-all duration-300 ${
              activeSection === "skills"
                ? "scale-150 bg-teal-500 text-red shadow-md"
                : "scale-100 text-red bg-transparent"
            }`}
          >
            Skills
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
