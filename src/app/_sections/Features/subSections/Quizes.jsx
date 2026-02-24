import React from "react";
import Image from "next/image";
import heroImage from "@/assets/images/home/FeatureQuiz.svg";

const Quizes = () => {
  return (
    <article className="flex flex-col md:flex-row items-center justify-between gap-x-16">
      <div className="order-1 md:order-none">
        <Image
          src={heroImage}
          alt="Illustration showing students taking online quizzes and assessments"
          width={500}
          height={500}
          priority={false}
        />
      </div>

      <div className="max-w-xl">
        <h3 className="text-dark-500 font-bold text-heading-600 leading-tight">
          Assessments, <br />
          <span className="text-primary-500">Quizzes</span>, Tests
        </h3>

        <p className="mt-4 text-gray-600 leading-relaxed">
          Easily launch live assignments, quizzes, and tests. Student results
          are automatically entered in the online gradebook.
        </p>
      </div>
    </article>
  );
};

export default Quizes;
