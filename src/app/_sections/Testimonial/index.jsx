import React from "react";

const Testimonials = () => {
  return (
    <section className="mx-[200px] text-dark-500 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
      <div>
        <div className="flex items-center gap-4">
          <hr className="border-dark-500 h-2 w-12 mt-4 " />
          <h5>TESTIMONIAL</h5>
        </div>
        <h2 className="text-large-900">What They Say?</h2>
        <div className="space-y-8 text-dark-100 text-body-400">
          <p>
            TOTC has got more than 100k positive ratings from our users around
            the world.{" "}
          </p>
          <p>
            Some of the students and teachers were greatly helped by the
            Skilline.
          </p>
          <p>Are you too? Please give your assessment</p>
        </div>
        <button className="btn btn-pill btn-outline">
          Write your assessment
        </button>
      </div>
      <div></div>
    </section>
  );
};

export default Testimonials;
