import React from "react";
import zcouple from "../../assets/Job/zcouple.png";

const JobSection = () => {
  return (
    <section className="bg-[#FFF4C3] pb-16 px-6 max-lg:px-8">
      <div className="flex flex-col lg:flex-row justify-between items-center bg-white px-8 rounded-lg max-lg:pt-6 shadow-lg">
        <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-8">
          <h3 className="text-lg font-medium text-[#333333] mb-2">
            Zocdoc jobs
          </h3>
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#333333] mb-6">
            Join us, and help transform <br /> healthcare for everyone.
          </h2>
          <button className="bg-[#FFF04B] text-black font-medium py-3 px-6 rounded-md hover:bg-[#FFCC00] transition">
            View job openings
          </button>
        </div>

        <div className="lg:w-1/2 flex justify-center max-lg:mt-4">
          <img
            src={zcouple}
            alt="Job Promo"
            className="w-[400px] -mt-16 h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default JobSection;
