import React from "react";
import Image from "next/image";
import heroImage from "@/assets/images/home/FeatureQuiz.svg";

const Quizes = () => {
  return (
    <div>
      <Image src={heroImage} alt="quizes" width={500} height={500} />
      <div>
        <h2>
          Assessments, <br /> <span>Quizzes</span>, Tests
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
