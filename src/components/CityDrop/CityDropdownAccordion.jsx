import React from "react";

const CityDropdownAccordion = ({ title, items, isOpen, toggleAccordion }) => {
  return (
    <div className="border-b border-[#444444] border-1 mb-4">
      <button
        onClick={toggleAccordion}
        className="w-full flex justify-between items-center p-4 focus:outline-none"
      >
        <span className="text-lg font-medium">{title}</span>
        {isOpen ? (
          <svg width="17" height="25" viewBox="0 0 17 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.46263 7.47852L0.0322266 8.91825L8.03263 16.9088L16.0318 8.90985L14.6014 7.47972L8.03263 14.0473L1.46263 7.47852Z" fill="#333333" />
          </svg>
        ) : (
          <svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.4755 16.798L17.8831 15.3358L9.75763 7.47248L1.88558 15.5966L3.33836 17.004L9.80276 10.3336L16.4755 16.798Z" fill="#333333" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="transition-all duration-500 ease-in-out">
          <ul>
            {items.map((doctor, index) => (
              <li key={index} className="underline pl-2 pb-2">
                {doctor}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CityDropdownAccordion;