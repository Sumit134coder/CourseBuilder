import React from "react";
import Image from "next/image";
import heroImage from "@/assets/images/home/classManagment.svg";

const ClassManagement = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-x-62">
      <div>
        <h2 className=" text-dark-500 font-bold text-heading-600">
          <span className="text-primary-500">Class Management</span> Tools for Educators
        </h2>
        <p>
          Class provides tools to help run and manage the class such as Class
          Roster, Attendance, and more. With the Gradebook, teachers can review
          and grade tests and quizzes in real-time.
        </p>
      </div>
      <Image
        src={heroImage}
        alt="ClassManagement
      "
        width={500}
        height={500}
      />
    </div>
  );
};

export default ClassManagement;
