import React from "react";

const TagPill = ({ text = "" }) => {
  return (
    <span className="text-white bg-primary-500 text-body-75 uppercase rounded-full py-2 px-4">
      {text}
    </span>
  );
};

export default TagPill;
