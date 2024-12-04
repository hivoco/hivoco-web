import { useState } from "react";
import Link from "next/link";
import { FiX } from "react-icons/fi";

interface props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<props> = ({ isOpen, setIsOpen }) => {
  // const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleProducts = () => setIsProductsOpen(!isProductsOpen);

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transition-transform transform z-50 block md:hidden ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Menu Icon */}

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity  ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="p-4 space-y-4">
          {/* Close Button */}
          <button
            onClick={toggleSidebar}
            className="text-gray-700 focus:outline-none"
          >
            <FiX size={24} />
          </button>

          {/* Links */}
          <Link
            href="/"
            className="block text-gray-800 hover:text-blue-500 font-sf-pro-display-normal font-semibold text-lg "
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className="block text-gray-800 hover:text-blue-500 font-sf-pro-display-normal font-semibold text-lg"
          >
            About Us
          </Link>

          {/* Products Dropdown */}
          <div>
            <button
              onClick={toggleProducts}
              className="block w-full text-left text-gray-800 hover:text-blue-500 focus:outline-none font-sf-pro-display-normal font-semibold text-lg"
            >
              Products
            </button>
            <div
              className={`pl-4 mt-2 space-y-2 transition-all ${
                isProductsOpen
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <Link
                href="/bharat-bhasha"
                className="block text-gray-800 font-sf-pro-display-normal font-medium text-base hover:text-blue-500"
              >
                Bharat Bhasha.AI
              </Link>
              <Link
                href="/razor-sharp"
                className="block text-gray-800 font-sf-pro-display-normal font-medium text-base hover:text-blue-500"
              >
                Razor Sharp
              </Link>
              {/* <Link
                href="/talking-brochures"
                className="block text-gray-800 font-sf-pro-display-normal font-medium text-base hover:text-blue-500"
              >
                Talking Brochure
              </Link> */}
            </div>
          </div>

          <Link
            href="/get-in-touch"
            className="block text-gray-800 hover:text-blue-500 font-sf-pro-display-normal font-semibold text-lg"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
