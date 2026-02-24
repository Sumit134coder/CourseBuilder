import PreviewRounded from "@/components/UI/PreviewRounded";
import React from "react";

const ArticleRow = ({ title = "", description = "", imageSrc = "" }) => {
  return (
    <div className="flex gap-8 my-2 ">
      <PreviewRounded imageSrc={imageSrc} className="h-full" />
      <div>
        <h5 className="text-body-200 font-weight-500 text-dark-800">{title}</h5>
        <p className="text-body-100 mt-5">{description}</p>
      </div>
    </div>
  );
};

export default ArticleRow;
