import { useState } from "react";
import LanguageDropdown from "./LanguageDropdown";
import { NavLink } from "react-router-dom";
import search from "../assets/icons/search.png";
import homeIcon from "../assets/icons/home.png";
import labIcon from "../assets/icons/lab.png";
import courseIcon from "../assets/icons/course.png";
import quizIcon from "../assets/icons/quiz.png";
import profileIcon from "../assets/icons/profile.png";
import AuthButton from "./AuthButton";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const base = "flex items-center gap-2 p-2 rounded-md transition";
  const active = "bg-blue-600 text-white";
  const inactive = "text-gray-300 hover:bg-gray-700";

  return (
    <>
      {/* NAVBAR */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0B1120] text-white sticky top-0 z-50">
        
        {/* Left */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsOpen(true)}
            className="text-xl hover:cursor-pointer"
          >
            ☰
          </button>
          <h1 className="font-semibold tracking-wide">
            ASTRODIGITAL.UZ
          </h1>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
           <LanguageDropdown />
           <AuthButton />
        </div>
      </div>

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#111827] text-white transform transition-transform duration-300 z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="p-4 flex justify-between items-center border-b border-gray-700">
          <h2 className="font-semibold">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* MENU */}
        <ul className="p-4 space-y-2">
          
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${base} ${isActive ? active : inactive}`
              }
              onClick={() => setIsOpen(false)}
            >
              <img src={homeIcon} className="w-5 h-5" />
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                `${base} ${isActive ? active : inactive}`
              }
              onClick={() => setIsOpen(false)}
            >
              <img src={courseIcon} className="w-5 h-5" />
              Courses
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/labs"
              className={({ isActive }) =>
                `${base} ${isActive ? active : inactive}`
              }
              onClick={() => setIsOpen(false)}
            >
              <img src={labIcon} className="w-5 h-5" />
              Virtual Lab
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/quizzes"
              className={({ isActive }) =>
                `${base} ${isActive ? active : inactive}`
              }
              onClick={() => setIsOpen(false)}
            >
              <img src={quizIcon} className="w-5 h-5" />
              Quizs
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `${base} ${isActive ? active : inactive}`
              }
              onClick={() => setIsOpen(false)}
            >
              <img src={profileIcon} className="w-5 h-5" />
              Profile
            </NavLink>
          </li>

        </ul>
      </div>

      {/* OVERLAY */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}
    </>
  );
};

export default Navbar;