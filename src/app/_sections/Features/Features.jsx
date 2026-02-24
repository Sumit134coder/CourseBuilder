import React from "react";
import UserInterface from "./subSections/UserInterface";
import Quizes from "./subSections/Quizes";
import Tools from "./subSections/Tools";
import ClassManagement from "./subSections/ClassManagment";
import Discussions from "./subSections/Discussions";

const Features = () => {
  return (
    <div className="mx-[150px]">
      <div className="text-center">
        <h1 className="header-2-tone text-dark-500 font-bold text-heading-500">
          Our <span className="text-primary-500">Features</span>
        </h1>
        <p>
          This very extraordinary feature, can make learning activities more
          efficient
        </p>
      </div>
      <div className="space-y-8 my-25">
      <UserInterface />
      <Tools />
      <Quizes />
      <ClassManagement />
      <Discussions />
      </div>
    </div>
  );
};

export default Features;
