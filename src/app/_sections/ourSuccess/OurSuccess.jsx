import React from "react";
import SuccessMetric from "@/components/home/SuccessMetric";

const successMetrics = [
  { gradientText: "75%", label: "Total Success" },
  { gradientText: "15K", label: "Students" },
  { gradientText: "26", label: "Chief Experts" },
  { gradientText: "35", label: "Main Questions" },
  { gradientText: "16", label: "Years of Experience" },
];

const OurSuccess = () => {
  return (
    <section>
      <div className="text-center">
        <h2 className="text-dark-900 font-700 text-large-800">Our Success</h2>
        <p className="text-dark-900/80 text-body-75">
          Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
          sollicitudin at nec <br /> nam et pharetra gravida. Adipiscing a quis
          ultrices eu ornare tristique vel nisl orci.{" "}
        </p>
      </div>
      <div>
        <ul className="flex items-center justify-center gap-x-16 mt-10">
          {successMetrics.map((metric, index) => (
            <li key={index}>
              <SuccessMetric
                gradientText={metric.gradientText}
                label={metric.label}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OurSuccess;
