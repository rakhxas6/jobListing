import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineManageSearch } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="hidden sm:flex items-center justify-between p-5">
      <div className="logoSec flex items-center gap-2">
        <MdOutlineManageSearch size={32} className="text-blue-500" />
        <span className="text-2xl">
          Job<span className="text-blue-600">seeker</span>
        </span>
      </div>
      <ul className=" hidden navLinks sm:flex items-center justify-center space-x-5 text-lg">
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
      <div className="userProfile flex items-center gap-2">
        <FaRegCircleUser size={24} />
        <span className="username text-lg">Lucifer</span>
      </div>
    </nav>
  );
};

export default Navbar;
