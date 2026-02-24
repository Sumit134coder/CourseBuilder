import React from "react";
import UserInterface from "./subSections/UserInterface";
import Quizes from "./subSections/Quizes";
import Tools from "./subSections/Tools";
import ClassManagement from "./subSections/ClassManagment";
import Discussions from "./subSections/Discussions";

const Features = () => {
  return (
    <div>
      <div>
        <h1>Our Features</h1>
        <p>
          This very extraordinary feature, can make learning activities more
          efficient
        </p>
      </div>
      <UserInterface />
      <Tools/>
      <Quizes/>
      <ClassManagement/>
      <Discussions />
    </div>
  );
};

export default Features;
