import React from "react";

const SuccessMetric = ({ gradientText = "18%", label = "Popularity" }) => {
  return (
    <div className=" text-center">
      <h3 className="gradient-text text-large-1000">{gradientText}</h3>
      <p className="text-dark-900/80 text-body-75 -mt-8">{label}</p>
    </div>
  );
};

export default SuccessMetric;
