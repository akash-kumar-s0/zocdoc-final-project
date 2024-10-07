import React, { useState, useRef, useEffect } from "react";
import { FaSearch, FaMapMarkerAlt, FaRegAddressCard } from "react-icons/fa";
import blink from "../../../assets/Hero/Design.png";
import LoadingSpinner from "../../common/LoadingSpinner"; 
import { useSpecialties } from "../../../api/react-query";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const searchBarRef = useRef(null);

  const { data: specialties, isLoading, error } = useSpecialties();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchBarRef]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setShowDropdown(true);
  };

  const handleSelectSpecialty = (specialtyName) => {
    setSearchTerm(specialtyName);
    setShowDropdown(false);
  };

  return (
    <div ref={searchBarRef} className="bg-white hidden lg:flex items-center rounded-full shadow-md max-w-4xl mx-auto p-1 relative">
      <div className="flex items-center px-4 w-1/3 border-r border-gray-300 relative">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Condition, procedure, doctor..."
          className="w-full p-2 outline-none text-gray-700"
          onFocus={() => setShowDropdown(true)}
        />
        {showDropdown && (
          <ul className="absolute top-full left-0 right-0 mt-2 max-h-60 overflow-y-visible bg-white border rounded-lg shadow-lg z-50 overflow-scroll">
            {isLoading ? ( 
              <div className="flex justify-center py-2">
                <LoadingSpinner />
              </div>
            ) : error ? (
              <div className="text-red-500 text-center p-4">Error: {error.message}</div>
            ) : (
              specialties
                .filter((specialty) =>
                  specialty.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((specialty) => (
                  <li
                    key={specialty.id}
                    onClick={() => handleSelectSpecialty(specialty.name)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {specialty.name}
                  </li>
                ))
            )}
          </ul>
        )}
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
        <FaSearch className="text-black" />
        <img
          className="absolute -bottom-4 -right-8 top-5 flex space-x-1"
          src={blink}
          alt=""
        />
      </button>
    </div>
  );
};

export default SearchBar;