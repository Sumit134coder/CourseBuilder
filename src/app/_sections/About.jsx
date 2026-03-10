import { VideoCard } from "@/components/home/VideoCard";
import VideoPlayerCard from "@/components/home/VideoPlayerCard";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section className="space-y-40">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center px-50">
        <div>
          <h4 className="header-2-tone text-large-500 font-500">
            Everything you can do in a physical classroom,{" "}
            <span>you can do with TOTC</span>
          </h4>
          <p className="my-8">
            TOTC’s school management software helps traditional and online
            schools manage scheduling, attendance, payments and virtual
            classrooms all in one secure cloud-based system.
          </p>
          <Link href="#" className="underline mt-10">
            Learn More
          </Link>
        </div>
        <div className="about_video_container">
          <VideoPlayerCard src="https://videos.ctfassets.net/spoqsaf9291f/1EL7UZIXfcqngxsNSbL8tR/a35c698ae3499345013792fe78804a38/web-homepage-hero-1920x1200_final.mp4" alt="Teacher teaching Students" className="" />
        </div>
      </div>
    </section>
  );
};

export default About;
