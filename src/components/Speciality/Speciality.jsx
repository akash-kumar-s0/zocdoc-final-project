import React from "react";
import SpecialityImage from "../../assets/Speciality";

const specialties = SpecialityImage;

const Speciality = () => {
  return (
    <section className="bg-white pt-16 pb-12 px-10 lg:px-20 md:px-8 max-lg:pt-5">
      <div className="max-w-full mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-left">
          Top-searched specialties
        </h2>

        <div className="flex flex-wrap md:flex-nowrap w-auto box-border -m-[6px]">
          {specialties.map((specialty, index) => (
            <div className="p-1 sm:basis-1/3 basis-1/2"  key={index}>
              <div
                className="bg-[#FEF0BB] lg:pt-7 md:pb-4  py-4 flex flex-col items-center pt-[23px] pb-[13px] border-solid border-[#3a2f1f1a] rounded-[4px] border-[1px]"
              >
                <div className="lg:px-8 lg:mb-4 md:mb-[8px] md:px-[19px] px-[26px] mb-3">
                  <div className="flex items-center justify-center bg-white rounded-full ">
                    <p className="lg:max-w-44 ">
                      <img
                        src={specialty.imgSrc}
                        alt={specialty.name}
                        className="w-auto"
                      />
                    </p>
                  </div>
                </div>
                <p className="text-gray-800 font-medium">{specialty.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speciality;
