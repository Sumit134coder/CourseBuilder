import React from "react";
import Image from "next/image";
import heroImage from "@/assets/images/home/Tools.svg";

const Tools = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-x-62">
      <div>
        <h2 className=" text-dark-500 font-bold text-heading-600">
          <span className="text-primary-500">Tools</span> For Teachers And
          Learners
        </h2>
        <p>
          Class has a dynamic set of teaching tools built to be deployed and
          used during class. Teachers can handout assignments in real-time for
          students to complete and submit.
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

export default Tools;
