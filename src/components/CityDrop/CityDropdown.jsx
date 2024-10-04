import React, { useState, useEffect } from "react";
import axios from "axios";
import CityDropdownColumn from "./CityDropdownColumn";

const CityDropdown = () => {
  const [doctorCities, setDoctorCities] = useState({});
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get("http://localhost:5000/doctorCities");
        setDoctorCities(response.data);
      } catch (error) {
        console.error("Error fetching cities data:", error);
      }
    };
    fetchCities();
  }, []);

  const cityNames = Object.keys(doctorCities);
  const firstColCities = cityNames.slice(0, 5);
  const secondColCities = cityNames.slice(5, 10);
  const thirdColCities = cityNames.slice(10, 15);
  const fourthColCities = cityNames.slice(15, 20);

  return (
    <div className="bg-[#FFF4C3] mt-10">
      <div className="container mx-auto py-20 px-10">
        <h1 className="text-2xl">Find doctors and dentists by city</h1>
        <div className="mt-10 flex flex-col lg:flex-row justify-between">
          <CityDropdownColumn
            cities={firstColCities}
            data={doctorCities}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            columnOffset={0}
          />
          <CityDropdownColumn
            cities={secondColCities}
            data={doctorCities}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            columnOffset={5}
          />
          <CityDropdownColumn
            cities={thirdColCities}
            data={doctorCities}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            columnOffset={10}
          />
          <CityDropdownColumn
            cities={fourthColCities}
            data={doctorCities}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            columnOffset={15}
          />
        </div>
      </div>
    </div>
  );
};

export default CityDropdown;