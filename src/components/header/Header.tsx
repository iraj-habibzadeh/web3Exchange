'use client'

import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import DropDownMenu from "./DropDownMenu";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const menuItem = [
    {name:'Home', href:'/'},
    {name:'Trade', href:'/trade'},
    {name:'Explorer', href:'/explorer'},
    {name:'Pool', href:'/pool'},
    {name:'Stake', href:'/stake'},
  ]

  return (
    <header className="shadow-md bg-transparent sticky top-0">
      <div className="container m-auto p-4">
        <div className="grid lg:grid-cols-3">
          <div className="flex left-side space-x-3 mt-4">
           {
            menuItem.map((item, index) => {
              return (
                <Link
                  key={index}
                  className={`text-gray-950 hover:text-blue-900 transition-all ease-in-out dark:text-white ${
                    pathname === item.href ? "!text-blue-900 " : ''
                  }`}
                  href={item.href}
                >
                  {item.name}
                </Link>
              );
            })
           }
            {/* <Link
              className="text-gray-950 hover:text-blue-900 transition-all ease-in-out dark:text-white  "
              href="#"
            >
              Trade
            </Link>
            <Link
              className="text-gray-950 hover:text-blue-900 transition-all ease-in-out dark:text-white "
              href="#"
            >
              Explorer
            </Link>
            <Link
              className="text-gray-950 hover:text-blue-900 transition-all ease-in-out dark:text-white "
              href="#"
            >
              Pool
            </Link>
            <Link
              className="text-gray-950 hover:text-blue-900 transition-all ease-in-out dark:text-white "
              href="#"
            >
              Stake
            </Link> */}
          </div>
          <div className="center-side flex relative">
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
          <div className="flex align-center self-center right-side justify-end">
            <DropDownMenu />
            <ConnectButton />
          </div>
        </div>
      </div>
    </header>
  );
}
