import React from "react";
import InsuranceImage from "../../assets/Insurance";

const Insurance = () => {
  const insurances = InsuranceImage;

  return (
    <section className="bg-white pt-16 pb-3 px-10 lg:px-20 md:px-8">
      <div className="max-w-full mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-left">
            Find an in-network doctor from over 1,000 insurance plans
          </h2>
          <p className="text-gray-600 text-left">
            Add your insurance to see in-network primary care doctors
          </p>
        </div>

        <div className="flex flex-wrap gap-4 items-center mb-8">
          {insurances.map((insurance, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 p-4 rounded-lg flex items-center justify-center w-40 h-20"
            >
              <img
                src={insurance}
                alt={` logo`}
                className="max-h-full max-w-full"
              />
            </div>
          ))}
          <a
            href="#"
            className="bg-white p-4 rounded-lg flex items-center justify-center w-40 h-20 text-blue-500 hover:underline pl-8"
          >
            See all(1,000+)
          </a>
        </div>

        <button className="px-6 py-2 bg-white border border-gray-500 rounded-md hover:bg-gray-100">
          Add your insurance coverage
        </button>
      </div>
    </section>
  );
};

export default Insurance;
