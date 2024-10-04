import React from "react";
import CityDropdownAccordion from "./CityDropdownAccordion";

const CityDropdownColumn = ({
  cities,
  data,
  openIndex,
  setOpenIndex,
  columnOffset,
}) => {
  return (
    <div className="flex flex-col w-full lg:w-1/4 p-4">
      {cities.map((city, index) => (
        <CityDropdownAccordion
          key={city}
          title={city}
          items={data[city]}
          isOpen={openIndex === index + columnOffset}
          toggleAccordion={() =>
            setOpenIndex(
              openIndex === index + columnOffset ? null : index + columnOffset
            )
          }
        />
      ))}
    </div>
  );
};

export default CityDropdownColumn;
