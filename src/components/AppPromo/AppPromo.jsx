import React from "react";
import Qr from "../../assets/AppPromo/qr.png";
import PlayStore from "../../assets/AppPromo/playS.png";
import AppStore from "../../assets/AppPromo/appS.png";
import Hand from "../../assets/AppPromo/hand.png";
import Arrow from "../../assets/AppPromo/arrow.png";

const AppPromo = () => {
  return (
    <section className="relative bg-orange-200 flex justify-center items-center px-11 overflow-hidden">
      <div className=" py-10 pr-20 z-20 relative">
        <h2 className="text-3xl font-semibold mb-4">
          Thousands of providers. One app.
        </h2>
        <p className="text-gray-700 mb-4">
          The Zocdoc app is the quickest, easiest way to book and keep track of
          your appointments.
        </p>
        <p className="text-gray-700 mb-6">
          Scan the QR code to get the app now
        </p>
        <div className="mb-6">
          <img src={Qr} alt="QR code" className="w-32 h-32" />
        </div>
        <div className="flex space-x-4">
          <img
            src={AppStore}
            alt="Download on the App Store"
            className="w-36"
          />
          <img src={PlayStore} alt="Get it on Google Play" className="w-36" />
        </div>
      </div>

      <div className="hidden relative w-full md:w-1/2 lg:w-1/3 lg:flex justify-center z-20">
        <img
          src={Hand}
          alt="Phone showing the app"
          className="relative z-20 "
        />
        <div className="hidden lg:flex absolute w-[800px] h-[800px] bg-[#FEED5A] rounded-full -z-50 -bottom-[450px] right-0 lg:-right-11 overflow-hidden"></div>
      </div>

      <div className="hidden lg:flex absolute left-1/2 top-1/3 z-40 transform -translate-x-10 -translate-y-8">
        <img src={Arrow} alt="Decorative Arrow" className="w-24" />
      </div>
    </section>
  );
};

export default AppPromo;
