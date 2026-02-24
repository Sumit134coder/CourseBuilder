import Image from "next/image";
import React from "react";
import heroImage from "@/assets/images/home/Discussions.svg";


const Discussions = () => {
  return (
    <div>
      <Image
        src={heroImage}
        alt="ClassManagement"
        width={500}
        height={500}
      />
      <div>
        <h2>
          One-on-One <span>Discussions</span>
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
