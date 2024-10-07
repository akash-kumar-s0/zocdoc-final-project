import React from "react";
import info from "../../assets/info.svg";

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-md w-full space-y-6">
        <div>
          <h2 className="text-3xl text-gray-900  mb-6">Create an account</h2>
        </div>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-[150] rounded-md  placeholder-gray-500 focus:outline-none focus:ring-yellow-500 focus:border-black sm:text-md"
            />
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="first-name" className="">
                Legal first name
              </label>
              <input
                id="first-name"
                name="first-name"
                type="text"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-[150] rounded-md  placeholder-gray-500 focus:outline-none focus:ring-yellow-500 focus:border-black sm:text-md"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="last-name" className="">
                Legal last name
              </label>
              <input
                id="last-name"
                name="last-name"
                type="text"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-[150] rounded-md  placeholder-gray-500 focus:outline-none focus:ring-yellow-500 focus:border-black sm:text-md"
              />
              <div>
                <img src={info} alt="" />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="dob" className="">
              Date of birth
            </label>
            <input
              id="dob"
              name="dob"
              type="text"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-[150] rounded-md  placeholder-gray-500 focus:outline-none focus:ring-yellow-500 focus:border-black sm:text-md"
              placeholder="dd/mm/yyyy"
            />
          </div>

          <div className="space-y-1">
            <div className="text-md text-gray-900">Sex</div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <input
                  id="male"
                  name="sex"
                  type="radio"
                  className="h-4 w-4 text-yellow-500 focus:ring-yellow-400 border-gray-[150]"
                />
                <label htmlFor="male" className="ml-2 text-md">
                  Male
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="female"
                  name="sex"
                  type="radio"
                  className="h-4 w-4 text-yellow-500 focus:ring-yellow-400 border-gray-[150]"
                />
                <label htmlFor="female" className="ml-2 text-md">
                  Female
                </label>
              </div>
            </div>
            <a
              href="#"
              className="text-md text-black hover:text-blue-500 underline"
            >
              Add more sex & gender info (optional)
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 text-md font-medium text-black bg-[#FEF04B] rounded-md  hover:bg-[#FCE721] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
          >
            Continue
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-[150]"></div>
            </div>
            <div className="relative flex justify-center text-md">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>

          <div className="space-y-2">
            <button
              type="button"
              className="w-full flex items-center justify-center py-2 px-4 border border-gray-[150] rounded-md text-md font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Continue with Google
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-center py-2 px-4 border border-gray-[150] rounded-md text-md font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Continue with Apple
            </button>
          </div>

          <div className="text-center">
            <p className="text-md">
              Already have an account?{" "}
              <a
                href="#"
                className="font-medium text-black hover:text-blue-500 underline"
              >
                Log in
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
