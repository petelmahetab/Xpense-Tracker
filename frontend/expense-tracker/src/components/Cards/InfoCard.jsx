import React from "react";

const InfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex gap-6 bg-gray-800 p-6 rounded-2xl  border border-sky-200/50 transition-all duration-300 ease-in-out hover:bg-gray-900 hover:border-sky-700  hover:shadow-sky-900/50">
      <div
        className={`w-14 h-14 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl transition-transform duration-300 hover:scale-110`}
      >
        {icon}
      </div>
      <div>
        <h6 className="text-sm text-gray-100 mb-1 transition-colors duration-300 group-hover:text-gray-100">
          {label}
        </h6>
        <span className="text-[22px] text-gray-300 transition-colors duration-300 group-hover:text-white">
          ${value}
        </span>
      </div>
    </div>
  );
};

export default InfoCard;