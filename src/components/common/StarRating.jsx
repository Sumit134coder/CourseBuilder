import React from "react";
import Star from "@/assets/icons/Star";

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-2">
      {Array(rating)
        .fill(0)
        .map((_, index) => (
          <Star key={`star_${index}`} className="text-amber-300" />
        ))}
    </div>
  );
};

export default StarRating;
