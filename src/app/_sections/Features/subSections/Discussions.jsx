import Image from "next/image";
import React from "react";
import heroImage from "@/assets/images/home/Discussions.svg";


const Discussions = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-x-62">
      <Image
        src={heroImage}
        alt="ClassManagement"
        width={500}
        height={500}
      />
      <div>
        <h2 className=" text-dark-500 font-bold text-heading-600">
          One-on-One <span className="text-primary-500">Discussions</span>
        </h2>
        <p>
          Teachers and teacher assistants can talk with students privately
          without leaving the Zoom environment.
        </p>
      </div>
    </div>
  );
};

export default Discussions;
