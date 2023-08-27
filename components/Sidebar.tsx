"use client";
import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";
import Modal from "./Modal";

interface sidebarprops {
  children: React.ReactNode;
}
// console.log("hello World")
const Sidebar: React.FC<sidebarprops> = ({ children }) => {
 
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    [pathname]
  );
  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box>
          <div className="flex flex-col gap-y-4 py-4">
            {routes.map((item) => (
              // <SidebarItem key={item.label} label={item.label} active={item.active} href={item.href} icon={item.icon}  /> or use-
              <SidebarItem key={item.label} {...item} /> 
            ))}
          </div>
        </Box>
        <Box classname=" overflow-y-auto h-full"> <Library/> </Box>
      </div>
      <main className=" h-full flex-1 overflow-auto py-2">
        {children}
      </main>

    </div>
  );
};

export default Sidebar;
