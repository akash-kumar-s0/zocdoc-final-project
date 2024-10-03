import React, { useState, useEffect } from "react";
import leftH from "../assets/Hero/Left.png";
import rightH from "../assets/Hero/Right.png";
import blink from "../assets/Hero/Design.png";
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
    <section className="bg-yellow-50 py-16 px-4 pb-24 md:px-8 md:pt-10 max-lg:pb-5 relative flex flex-col items-center overflow-hidden">
      <div className="absolute hidden lg:flex top-5 left-[-225px] w-[450px]">
        <img  className="max-w-full h-auto" src={leftH} alt="Left Hand" />
      </div>
      <div className="absolute hidden lg:flex top-5 xl:right-[-160px] w-[465px] lg:right-[-205px]">
        <img  className="max-w-full h-auto " src={rightH} alt="Right Hand" />
      </div>

      <h1 className="font-normal text-[44px] text-center mb-8">
        Book local{" "}
        <span className="inline-block animate-fade">
          {words[currentWordIndex]}
        </span>{" "}
        <br /> who take your insurance
      </h1>

      <div className="bg-white hidden lg:flex items-center rounded-full shadow-md  max-w-4xl mx-auto p-1">
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

        <button className="bg-[#FCE721] relative rounded-full p-3 ml-2 hover:bg-[#fde721] hover:shadow">
          <FaSearch className="text-white" />
          <img className="absolute -bottom-4 -right-8 top-5  flex space-x-1" src={blink} alt="" />
        </button>
      </div>

        <div className="hidden max-lg:flex flex-col w-full bg-white px-4 rounded-lg shadow-md mx-auto">
      
            <div className="flex items-center border-b border-gray-300 py-2">
                <FaSearch className="text-gray-500 mr-2" />
                <input
                    type="text"
                    placeholder="Condition, procedure, doctor..."
                    className="w-full p-2 outline-none"
                />
            </div>
            
            <div className="flex items-center border-b border-gray-300 py-2">
                <FaMapMarkerAlt className="text-gray-500 mr-2" />
                <input
                    type="text"
                    placeholder="Chennai, TN"
                    className="w-full p-2 outline-none"
                />
            </div>

            <div className="flex items-center pb-2 mt-4">
                <FaRegAddressCard className="text-gray-500 mr-2" />
                <input
                    type="text"
                    placeholder="Choose insurance"
                    className="w-full p-2 outline-none"
                />
            </div>
            
        </div>

        <div className="hidden max-lg:flex flex-col w-full mx-auto">
            <button className="w-full bg-[#FEF04B] text-black p-3 rounded-md mt-6 hover:bg-[#fde721] hover:shadow">
                Find care
            </button></div>
        
    </section>
  );
};

export default Hero;
