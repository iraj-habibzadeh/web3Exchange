import { useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";

export default function DropDownMenu() {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;

  const [active, setActive] = useState(false);
  const { theme, setTheme } = useTheme();
  const otherLocales = (locales || []).filter(
    (locale) => locale !== activeLocale
  );

  return (
    <div className="drop-downMenu flex align-center pt-4 px-5 cursor-pointer relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-6 cursor-pointer hover:bg-slate-50  transition-all ease-in  "
        onClick={() => setActive(!active)}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
      {active && (
        <div
          className="absolute  bg-white lg:p-5  shadow-lg h-[200px] top-[45px] left-0  z-50 rounded-lg transition-all ease-in"
          onMouseLeave={() => setActive(false)}
        >
          <h3 className="font-bold text-1xl text-black">Global preferences</h3>
          <div className="flex flex-row justify-between  text-slate-900 mt-3 ">
            <p className="mt-2 pr-2">Theme</p>
            <ul className="flex space-x-2 border-2 pl-0 rounded-lg border-blue-200 text-sm ">
              <li
                className={`${
                  theme === "auto" ? "bg-blue-600 rounded-md text-white" : ""
                } cursor-pointer p-2`}
                onClick={() => setTheme("auto")}
              >
                Auto
              </li>
              <li
                className={`${
                  theme === "light" ? "bg-blue-600 rounded-md text-white" : ""
                } cursor-pointer p-2`}
                onClick={() => setTheme("light")}
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
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              </li>
              <li
                className={`${
                  theme === "dark" ? "bg-blue-600 rounded-md text-white" : ""
                } cursor-pointer p-2`}
                onClick={() => setTheme("dark")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </li>
            </ul>
          </div>
          <div className="flex justify-between mt-3">
            <p className=" text-md text-black">Languages</p>
            <ul className="p-0 text-black">
              {otherLocales.map((locale) => {
                const { pathname, query, asPath } = router;
                return (
                  <li key={locale}>
                    <Link
                      href={{ pathname, query }}
                      as={asPath}
                      locale={locale}
                      legacyBehavior
                    >
                      {locale.toUpperCase()}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
