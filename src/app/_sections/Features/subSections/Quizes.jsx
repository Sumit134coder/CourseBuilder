import React from "react";
import Image from "next/image";
import heroImage from "@/assets/images/home/FeatureQuiz.svg";

const Quizes = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-x-62">
      <Image src={heroImage} alt="quizes" width={500} height={500} />
      <div>
        <h2 className=" text-dark-500 font-bold text-heading-600">
          Assessments, <br /> <span className="text-primary-500">Quizzes</span>,
          Tests
        </h2>
        <p>
          Easily launch live assignments, quizzes, and tests. Student results
          are automatically entered in the online gradebook.
        </p>
      </div>
    </div>
  );
};

export default Quizes;
