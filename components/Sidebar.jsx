"use client";
import { GrJava } from "react-icons/gr";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { SideBarLinks } from "@/app/Constants";

const Sidebar = () => {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState({});

  useEffect(() => {
    // Open the main menu if the current path matches any of its submenus
    SideBarLinks.forEach((link) => {
      if (link.submenu) {
        link.submenu.forEach((subLink) => {
          if (pathname === subLink.path) {
            setOpenMenus((prev) => ({
              ...prev,
              [link.name]: true,
            }));
          }
        });
      }
    });
  }, [pathname]);

  const toggleMenu = (menuName) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  return (
    <div className="p-4 bg-transparent">
      <div className="flex flex-col bg-black w-72 h-full text-white rounded-lg shadow-sm">
        {/* Sidebar Header */}
        <div className="flex items-center p-4 text-xl font-bold uppercase">
          <div className="p-2 rounded-xl mr-4 bg-accent text-black text-xl">
            <GrJava />
          </div>
          Selenify
        </div>

        {/* Sidebar Links */}
        <div className="mt-4">
          {SideBarLinks.map((link) => {
            const Icon = link.icons;
            const isOpen = openMenus[link.name];

            return (
              <div key={link.name}>
                {link.submenu ? (
                  // Main Menu with Submenu (Toggle Logic)
                  <div
                    className={`flex items-center justify-between gap-3 p-2 m-2 text-sm duration-150 rounded-xl transition-all cursor-pointer ${
                      isOpen ? "bg-accent text-black" : "bg-transparent text-gray-300 hover:bg-accent hover:text-black"
                    }`}
                    onClick={() => toggleMenu(link.name)}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="text-xl" />
                      <span className="capitalize">{link.name}</span>
                    </div>
                    <span className="ml-auto">
                      {isOpen ? <ChevronDown /> : <ChevronRight />}
                    </span>
                  </div>
                ) : (
                  // Main Menu without Submenu (Direct Link)
                  <Link href={link.path}>
                    <div
                      className={`flex items-center gap-3 p-2 m-2 text-sm duration-150 rounded-xl transition-all cursor-pointer ${
                        pathname === link.path
                          ? "bg-accent text-black"
                          : "bg-transparent text-gray-300 hover:bg-accent hover:text-black"
                      }`}
                    >
                      <Icon className="text-xl" />
                      <span className="capitalize">{link.name}</span>
                    </div>
                  </Link>
                )}

                {/* Submenu Links */}
                {isOpen && link.submenu && (
                  <div className="ml-8">
                    {link.submenu.map((subLink) => (
                      <Link key={subLink.name} href={subLink.path}>
                        <div
                          className={`flex items-center gap-2 p-2 m-1 text-sm rounded-lg transition-all cursor-pointer ${
                            pathname === subLink.path
                              ? "bg-accent text-black"
                              : "bg-transparent text-gray-300 hover:bg-accent hover:text-black"
                          }`}
                        >
                          <span className="capitalize">{subLink.name}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
