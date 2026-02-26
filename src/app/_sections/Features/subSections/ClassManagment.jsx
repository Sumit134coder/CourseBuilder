import React from "react";
import Image from "next/image";
import heroImage from "@/assets/images/home/classManagment.svg";

const ClassManagement = () => {
  return (
    <article className="flex flex-col md:flex-row items-center justify-between gap-x-62">
      <div>
        <h2 className=" text-dark-500 font-bold text-large-600">
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
        alt="Illustration showing class management tools used by teachers and students in a classroom"
        width={500}
        height={500}
      />
    </article>
  );
};

export default ClassManagement;
