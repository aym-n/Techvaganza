import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import RegisterDropdown from "./RegisterDropdown";
import ResourceDropdown from "./ResourceDropdown";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isRegisterDropdownOpen, setIsRegisterDropdownOpen] = useState(false);
  const [isResourceDropdownOpen, setIsResourceDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDropdown = (dropdown) => {
    if (dropdown === "register") {
      setIsRegisterDropdownOpen(!isRegisterDropdownOpen);
      setIsResourceDropdownOpen(false);
    } else if (dropdown === "resources") {
      setIsResourceDropdownOpen(!isResourceDropdownOpen);
      setIsRegisterDropdownOpen(false);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header
        className="py-8 px-4 md:px-28 w-full linear-bg font-kodeMono"
      >
        <div className="flex flex-row justify-between items-center container mx-auto ">
          <Link to="/">
            <img src="/common/logo.png" className="h-16 md:h-24" alt="Logo" />
          </Link>

          {/* Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button className="text-white text-2xl" onClick={toggleSidebar}>
              {isSidebarOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>

          <div className="hidden md:flex font-semibold items-center md:space-x-14 large:space-x-16">
            <Link
              to="/"
              className="text-white hover:text-secondary underline-animate text-2xl relative inline-block"
            >
              Home
            </Link>
            <Link
              to="/events"
              className="text-white hover:text-secondary text-2xl underline-animate relative inline-block"
            >
              Events
            </Link>
            <Link
              // to="https://erp.nitsri.ac.in/Academic/Event/iitms59kYF9lC0cj3VbTS6unBiAl+l75Pr6We0g1qjBoOkzq3f3cNp1dZ7YOKj7wb+MDkvhXLxOyJOP47ksp5DwqNGQ==?enc=S4ALRM2Vj9bizT3vZvKSo3N+ZwkymXBaFNp5ctbAnVBuQ8nlFHQ9FoYayvr2BAVZjYQO+c0SC2YUM3DcznhpD2S6muaSikpGaDEGX8Ez2mgZ1zseNxb+Dq4Y6ECAw5nj"
              to={'#'}
              className="text-white hover:text-secondary text-2xl underline-animate relative inline-block"
            >
              Register
            </Link>

            <Link
              to="/schedule"
              className="text-white hover:text-secondary text-2xl underline-animate relative inline-block"
            >
              Schedule
            </Link>

            <Link
              to="/contact"
              className="text-white hover:text-secondary text-2xl underline-animate relative inline-block"
            >
              Contact
            </Link>
          </div>
        </div>
      </header>
      <div className="md:hidden">
        <Sidebar
          className="md:hidden"
          isOpen={isSidebarOpen}
          onClose={toggleSidebar}
        />
      </div>
    </>
  );
};

export default Header;
