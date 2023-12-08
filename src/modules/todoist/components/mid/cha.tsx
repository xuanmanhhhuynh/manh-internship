"use client";
import { useState } from "react";
import Mid from "./task";
const Cha = () => {
  const [isMidVisible, setIsMidVisible] = useState(false);

  const toggleMidVisibility = () => {
    setIsMidVisible(!isMidVisible);
  };

  return (
    <div className="pb-20">
      <div className="flex items-center border-b py-1.5 border-b-gray-100">
        <div className="arrow-down" onClick={toggleMidVisibility}>
          <svg width="24" height="24">
            <path fill="none" stroke="currentColor" d="m16 10-4 4-4-4"></path>
          </svg>
        </div>
        <h1 className="text-black font-semibold font-weight: 600 flex-grow">
          Nhiệm vụ
        </h1>
        <div className="ml-auto flex items-center">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                transform="translate(3 10)"
              >
                <circle cx="2" cy="2" r="2"></circle>
                <circle cx="9" cy="2" r="2"></circle>
                <circle cx="16" cy="2" r="2"></circle>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className={isMidVisible ? "block" : "hidden"}>
        <Mid />
      </div>
    </div>
  );
};

export default Cha;
