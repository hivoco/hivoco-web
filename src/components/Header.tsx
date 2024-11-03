import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const router = useRouter();
  const changeRoute = (route: string) => {
    router.push(route);
  };
  const [isOpen, setIsOpen] = useState(false);
  // const [isProductsOpen, setIsProductsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  // const toggleProducts = () => setIsProductsOpen(!isProductsOpen);

  const styles = {
    flex: "flex items-center",
    flexBetween: "flex justify-between items-center",
    paragraph: "text-base font-normal text-black relative group",
    selected:
      "font-medium text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-blue-800",
    submenu: "absolute bg-[#F8F8F8] shadow-md rounded w-52 p-5 z-50 text-start",
    submenuItem:
      "block text-black hover:bg-gray-200 py-1 px-2 rounded py-2 border-b",
  };

  const headertitle = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About Us", path: "/about-us" },
    {
      id: 3,
      name: "Products",
      path: "#",
      subMenu: [
        { id: 1, name: "Bharat Bhasha.AI", path: "/bharat-bhasha" },
        { id: 2, name: "Razor Sharp", path: "/razor-sharp" },
        { id: 3, name: "Talking Brochure", path: "/talking-brochures" },
      ],
    },
    { id: 4, name: "Contact Us", path: "/get-in-touch" },
  ];

  const [isSubMenuOpen, setSubMenuOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false); // State for burger menu

  return (
    <>
      <div
        className={`h-[90px] w-screen ${styles.flex} shadow-header-shadow z-50`}
      >
        <div
          className={`px-4 md:px-20 container ${styles.flexBetween} text-center`}
        >
          <div className="hidden md:block cursor-pointer">
            <Image
              onClick={() => changeRoute("/")}
              src="/logo.png"
              alt="logo"
              height={40}
              width={200}
            />
          </div>
          <div className="md:hidden flex items-center justify-between w-full">
            <div className=" cursor-pointer">
              <Image
                onClick={() => changeRoute("/")}
                src="/svgs/HV.svg"
                alt="logo"
                height={60}
                width={60}
              />
            </div>
            <button
              onClick={toggleSidebar}
              className="p-2 text-gray-700 focus:outline-none cursor-pointer"
            >
              {!isOpen && <FiMenu size={24} />}
            </button>
          </div>
          <div
            className={`relative ${
              isMenuOpen ? "block" : "hidden"
            } md:flex md:gap-11`}
          >
            {headertitle.map((n) => (
              <div
                key={n.id}
                className="relative"
                onMouseEnter={() => n.id === 3 && setSubMenuOpen(true)}
                onMouseLeave={() => n.id === 3 && setSubMenuOpen(false)}
              >
                <p
                  onClick={() => changeRoute(n.path)}
                  className={`${styles.paragraph} ${
                    router.pathname === n.path ? styles.selected : ""
                  } hover:font-medium`}
                >
                  <span
                    className={`relative inline-block ${
                      router.pathname === n.path
                        ? styles.selected
                        : "group-hover:text-transparent"
                    } bg-clip-text bg-gradient-to-r from-red-800 to-blue-800 transition-colors duration-300 ease-in-out`}
                  >
                    {n.name}
                  </span>
                  <span
                    className={`absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-red-800 to-blue-800 transition-all duration-300 ease-in-out group-hover:w-full ${
                      router.pathname === n.path ? "w-full" : ""
                    }`}
                  />
                </p>

                {n.subMenu && isSubMenuOpen && (
                  <div className={styles.submenu}>
                    {n.subMenu.map((subItem) => (
                      <p
                        key={subItem.id}
                        onClick={() => changeRoute(subItem.path)}
                        className={styles.submenuItem}
                      >
                        {subItem.name}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Header;
