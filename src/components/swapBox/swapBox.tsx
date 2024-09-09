import { useState } from "react";

export default function SwapBox() {
  const tabs = [
    {
      name: "Swap",
      active: true,
    },
    {
      name: "Limit",
      active: false,
    },
    {
      name: "Send",
      active: false,
    },
    {
      name: "Buy",
      active: false,
    },
  ];
  const [active, setActive] = useState(0);

  return (
    <div className="swap-box flex m-auto flex-col  mt-6">
      <ul className="flex flex-wrap  justify-center font-medium  text-gray-500 dark:text-gray-400">
        {tabs.map((item, index) => (
          <li className="me-2" key={index} onClick={() => setActive(index)}>
            <a
              href="#"
              className={`inline-block px-4 py-3 rounded-lg ${
                active === index
                  ? "active  text-white bg-blue-600 "
                  : "bg-transparent text-gray-600"
              }`}
              aria-current={item.name}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      {active === 0 && (
        <div className="buy grid grid-cols-1 m-auto mt-4">
          <label className="text-left justify-items-start" htmlFor="sell">
            Sell
          </label>
          <input
            type="text"
            className="lg:h-[150px] text-6xl flex justify-start align-center self-center p-8 bg-[#f9f9f9] rounded-md focus:border-none "
            id="sell"
          />
        </div>
      )}
    </div>
  );
}
