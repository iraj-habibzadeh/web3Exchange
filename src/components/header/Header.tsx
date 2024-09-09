"use client";

import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import DropDownMenu from "./DropDownMenu";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(false);
  const pathname = usePathname();
  const menuItem = [
    { name: "Home", href: "/" },
    { name: "Trade", href: "/trade" },
    { name: "Explorer", href: "/explorer" },
    { name: "Pool", href: "/pool" },
    { name: "Stake", href: "/stake" },
  ];

  return (
    <header className="shadow-md bg-transparent sticky top-0 grid grid-cols-1 w-screen">
      <div className="container m-auto sm:m-auto p-4">
        <div className="absolute left-5 top-6 md:hidden">
          <div
            className="md:hidden flex start-0  cursor-pointer "
            onClick={() => setActiveMenu(activeMenu === true ? false : true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3">
          <div className="md:flex hidden  left-side space-x-3 mt-4">
            {menuItem.map((item, index) => {
              return (
                <Link
                  key={index}
                  className={`text-gray-950 hover:text-blue-900 transition-all ease-in-out dark:text-white ${
                    pathname === item.href ? "!text-blue-900 " : ""
                  }`}
                  href={item.href}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <div className="center-side md:flex hidden relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search token and NFT colection"
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
          <div className=" md:flex md:align-center md:self-center right-side md:justify-end flex justify-end  ">
            <DropDownMenu />
            <ConnectButton />
          </div>
        </div>
        {activeMenu && (
          <div className="flex-col flex justify-start  left-side md:space-x-3 mt-4">
            {menuItem.map((item, index) => {
              return (
                <Link
                  key={index}
                  className={`text-gray-950  mt-2 hover:text-blue-900 transition-all ease-in-out dark:text-white ${
                    pathname === item.href ? "!text-blue-900 " : ""
                  }`}
                  href={item.href}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}
