import PreviewRounded from "@/components/UI/PreviewRounded";
import TagPill from "@/components/UI/TagPill";
import React from "react";

const ArticleCard = ({
  imageSrc = "",
  tags = [],
  description = "",
  title = "",
}) => {
  return (
    <div className="space-y-5">
      <PreviewRounded imageSrc={imageSrc} />
      <div className="my-5 space-x-4">
        {tags.map((tag) => (
          <TagPill text={tag} key={tag} />
        ))}
      </div>
      <h5 className="text-body-400 font-weight-500 text-dark-800">{title}</h5>
      <p className="text-body-100 mt-5">{description}</p>
      <button className="underline">Read More</button>
    </div>
  );
};

export default ArticleCard;
