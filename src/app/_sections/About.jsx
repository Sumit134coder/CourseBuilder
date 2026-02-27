import { VideoCard } from "@/components/home/VideoCard";
import React from "react";

const About = () => {
  return (
    <section>
      <div className="px-70">
        <div className="text-center">
          <h2 className="header-2-tone text-large-700 font-700">
            What is <span>TOTC?</span>
          </h2>
          <p>
            TOTC is a platform that allows educators to create online classes
            whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-6">
          <VideoCard title="FOR INSTRUCTORS" linkLabel="Start a class today" />
          <VideoCard title="FOR STUDENTS" linkLabel="Enter access code" />
        </div>
      </div>
    </section>
  );
};

export default About;
