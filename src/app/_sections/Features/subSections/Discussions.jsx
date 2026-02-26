import Image from "next/image";
import React from "react";
import heroImage from "@/assets/images/home/Discussions.svg";


const Discussions = () => {
  return (
    <article className="flex flex-col md:flex-row items-center justify-between gap-x-62">
      <Image
        src={heroImage}
        alt="Illustration showing discussion between teachers and students in a classroom"
        width={500}
        height={500}
      />
      <div>
        <h3 className=" text-dark-500 font-bold text-large-600">
          One-on-One <span className="text-primary-500">Discussions</span>
        </h3>
        <p>
          Teachers and teacher assistants can talk with students privately
          without leaving the Zoom environment.
        </p>
      </div>
    </article>
  );
};

export default Discussions;
