import React from "react";
import Header from "./components/navbar/header";
import Task from "./components/task/task";
import Myprojectcha from "./components/project/Myprojectcha";

function Sidebar() {
  return (
    <div className="w-2/12 bg-white-4">
      <Header />
      <Task />
      <Myprojectcha />
    </div>
  );
}

export default Sidebar;
