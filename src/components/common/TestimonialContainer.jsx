import TestimonialHeroImage from "./TestimonialHeroImage";
import TestimonialContentCard from "./TestimonialContentCard";

const dummyTestimonials = [
  {
    review:
      "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking.",
    reviewer: "Gloria Rose",
    rating: 5,
    averageReviews: 12,
  },
  {
    review:
      "Thank you so much for your help. It's exactly what I've been looking for. ",
    reviewer: "Jerry Rose",
    rating: 3,
    averageReviews: 12,
  },
];

const TestimonialContainer = () => {
  return (
    <div className="relative">
      <TestimonialHeroImage />
      <TestimonialContentCard
        review={dummyTestimonials[0].review}
        reviewer={dummyTestimonials[0].reviewer}
        rating={dummyTestimonials[0].rating}
        averageReviews={dummyTestimonials[0].averageReviews}
      />
    </div>
  );
};

export default TestimonialContainer;
