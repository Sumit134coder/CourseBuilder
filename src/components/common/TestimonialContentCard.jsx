import StarRating from "./StarRating";

const TestimonialContentCard = ({
  review = "",
  reviewer = "",
  rating = 5,
  averageReviews = 10,
}) => {
  return (
    <div className="testimonial_content_card text-gray-300 p-10.25 rounded-lg overflow-hidden shadow-lg absolute -right-16 -bottom-16 bg-white w-4/5">
      <p className="border-l border-gray-300 pl-6">{review}</p>
      <div className="flex justify-between items-center mt-2">
        <span className="text-body-300">{reviewer}</span>
        <div>
          <StarRating rating={rating} />
          <span className="text-body-75 mt-2">
            {averageReviews} reviews at Yelp
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialContentCard;
