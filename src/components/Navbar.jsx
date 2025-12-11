import React, { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineManageSearch } from "react-icons/md";
import { Spin as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-5 relative">
      {/* Hamburger */}
      <div className="hamburger sm:hidden flex z-50">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>

      {/* Logo */}
      <div className="logoSec flex items-center gap-2">
        <MdOutlineManageSearch size={32} className="text-blue-500" />
        <span className="text-2xl font-semibold">
          Job<span className="text-blue-600">seeker</span>
        </span>
      </div>

      {/* Navigation Links */}
      <ul
        className={`
          navLinks 
          sm:flex hidden items-center space-x-6 text-lg
        `}
      >
        <li>
          <a href="/job">Job</a>
        </li>
        <li>
          <a href="/companies">Companies</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
      </ul>

      {/* Mobile Sidebar Menu */}
      <ul
        className={`
          sm:hidden fixed top-0 left-0 bg-blue-600 text-white h-72 w-56 
          flex flex-col items-start justify-center gap-6 p-8 text-lg transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <li>
          <a href="/job" onClick={() => setOpen(false)}>
            Job
          </a>
        </li>
        <li>
          <a href="/companies" onClick={() => setOpen(false)}>
            Companies
          </a>
        </li>
        <li>
          <a href="/about" onClick={() => setOpen(false)}>
            About Us
          </a>
        </li>
      </ul>

      {/* User Profile */}
      <div className="userProfile flex items-center gap-2">
        <FaRegCircleUser size={24}  color="blue"/>
        <span className="username text-lg">Lucifer</span>
      </div>
    </nav>
  );
};

export default Navbar;
