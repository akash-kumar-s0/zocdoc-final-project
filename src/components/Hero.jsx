import React, { useState, useEffect } from "react";
import leftH from "../assets/Hero/Left.png";
import rightH from "../assets/Hero/Right.png";
import "./Hero.css";
import { FaSearch, FaMapMarkerAlt, FaRegAddressCard } from "react-icons/fa";

const Hero = () => {
  const words = ["dentists", "doctors", "therapists", "specialists"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [words.length]);

  return (
    <section className="bg-yellow-50 py-16 px-4 md:px-8 relative flex flex-col items-center">
      <div className="absolute block top-5 left-[-225px] w-[450px]">
        <img className="max-w-full h-auto" src={leftH} alt="Left Hand" />
      </div>
      <div className="absolute block top-5 right-[-160px] w-[465px]">
        <img src={rightH} alt="Right Hand" />
      </div>

      <h1 className="font-normal text-[44px] text-center mb-8">
        Book local{" "}
        <span className="inline-block animate-fade">
          {words[currentWordIndex]}
        </span>{" "}
        <br /> who take your insurance
      </h1>

      <div className="bg-white flex items-center rounded-full shadow-md overflow-hidden max-w-4xl mx-auto p-1">
        <div className="flex items-center px-4 w-1/3 border-r border-gray-300">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Condition, procedure, doctor..."
            className="w-full p-2 outline-none text-gray-700"
          />
        </div>

        <div className="flex items-center px-4 w-1/3 border-r border-gray-300">
          <FaMapMarkerAlt className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Chennai, TN"
            className="w-full p-2 outline-none text-gray-700"
          />
        </div>

        <div className="flex items-center px-4 w-1/3">
          <FaRegAddressCard className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Choose Insurance"
            className="w-full p-2 outline-none text-gray-700"
          />
        </div>

        <button className="bg-[#FCE721] rounded-full p-3 ml-2 hover:bg-[#fde721] hover:shadow">
          <FaSearch className="text-white" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
