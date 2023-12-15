"use client";
import { useState } from "react";
import MyWorkCon from "@/modules/todoist/components/bott/MyworkCon";
import Myprojectcon from "./Myprojectcon";

const Myprojectcha = () => {
  const [isMidVisible, setIsMidVisible] = useState(false);

  const toggleMidVisibility = () => {
    setIsMidVisible(!isMidVisible);
  };

  return (
    <div className="w-full text-left pl-3 py-3  ">
      <div className="flex items-center border-b py-1.5 border-b-gray-100">
        <h1 className="text-black666 text-sm font-weight: 400 flex-grow ">
          Myproject
        </h1>
        <div className="ml-auto flex items-center">
          <div>
            <svg width="13" height="13">
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z"
              ></path>
            </svg>
          </div>
          <div className="arrow-down " onClick={toggleMidVisibility}>
            <svg
              width="24"
              height="24"
              className={isMidVisible ? "" : "-rotate-90"}
            >
              <path fill="none" stroke="currentColor" d="m16 10-4 4-4-4"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className={isMidVisible ? "block" : "hidden"}>
        <Myprojectcon />
      </div>
    </div>
  );
};

export default Myprojectcha;
