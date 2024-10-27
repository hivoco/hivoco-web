import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

function Header() {
  const router = useRouter();
  const changeRoute = (route: String) => {
    router.push(`${route}`); // No need for `/${route}`, route already includes "/"
  };

  const styles = {
    flex: "flex items-center",
    flexBetween: "flex justify-between items-center",
    paragraph: "text-base font-normal text-black relative group",
    selected:
      "font-medium text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-blue-800",
    submenu: "absolute bg-[#F8F8F8] shadow-md  rounded w-52 p-5", // Styles for the submenu
    submenuItem:
      "block text-black hover:bg-gray-200 py-1 px-2 rounded py-2  border-b", // Styles for submenu items
  };

  const headertitle = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About Us",
      path: "/about-us",
    },
    {
      id: 3,
      name: "Products",
      path: "#",
      subMenu: [
        {
          id: 1,
          name: "Bharat Bhasha.AI",
          path: "/#bharat-bhasha",
        },
        {
          id: 2, // Changed id to be unique
          name: "Razor Sharp",
          path: "/#razor-sharp",
        },
        {
          id: 3, // Changed id to be unique
          name: "Talking Brochure",
          path: "/#talking-brochure",
        },
      ],
    },
    {
      id: 4,
      name: "Contact Us",
      path: "/#contact-us",
    },
  ];

  const [isSubMenuOpen, setSubMenuOpen] = useState<Boolean>(false);

  return (
    <div
      className={`h-[90px]  w-screen ${styles.flex} shadow-header-shadow z-50`}
    >
      <div className={`px-20 container ${styles.flexBetween} text-center`}>
        <div className="hidden md:block cursor-pointer">
          <Image
            onClick={() => changeRoute("/")}
            src="/logo.png"
            alt="logo"
            height={40}
            width={200}
          />
        </div>

        <div className={`${styles.flex} gap-11 relative`}>
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
                  className={`absolute left-1/2 bottom-0 h-[2px] w-0 bg-gradient-to-r from-red-800 to-blue-800 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0 ${
                    router.pathname === n.path ? "w-full left-0" : ""
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
  );
}

export default Header;
