import React, { useState, useEffect } from "react";
import CityDropdownColumn from "./CityDropdownColumn";
import { useDoctorCities } from "../../api/react-query";
import LoadingSpinner from "../common/LoadingSpinner";

const CityDropdown = () => {
  const { data: doctorCities, isLoading, error } = useDoctorCities(); 
  const [openIndex, setOpenIndex] = useState(null);
  const [columnOffSet, setColumnOffSet] = useState([]);

  useEffect(() => {
    if (doctorCities) {
      const cityNames = Object.keys(doctorCities);
      const firstColCities = cityNames.slice(0, 5);
      const secondColCities = cityNames.slice(5, 10);
      const thirdColCities = cityNames.slice(10, 15);
      const fourthColCities = cityNames.slice(15, 20);
      setColumnOffSet([
        { offSet: 0, cities: firstColCities },
        { offSet: 5, cities: secondColCities },
        { offSet: 10, cities: thirdColCities },
        { offSet: 15, cities: fourthColCities },
      ]);
    }
  }, [doctorCities]);

  return (
    <div className="bg-[#FFF4C3] mt-10">
      <div className=" mx-auto py-20 px-10">
        <h1 className="text-2xl">Find doctors and dentists by city</h1>
        <div className="mt-10 flex flex-col lg:flex-row justify-between">
          {isLoading ? (
            <div className="flex justify-center w-full">
              <LoadingSpinner /> 
            </div>
          ) : error ? (
            <div className="text-red-500 text-center w-full p-4">
              Error: {error.message}
            </div>
          ) : (
            columnOffSet.map((value) => (
              <CityDropdownColumn
                key={value.offSet}
                cities={value.cities}
                data={doctorCities}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
                columnOffset={value.offSet}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CityDropdown;