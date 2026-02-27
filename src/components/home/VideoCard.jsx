"use client";

import Link from "next/link";
import { useRef, useState } from "react";

export const VideoCard = ({
  title = "FOR INSTRUCTORS",
  linkLabel = "Start a Class",
  redirectUrl = "#",
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };
  const handleVideoPause = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <div
      className={` h-100 max-w-150 relative rounded-lg transition duration-500 overflow-hidden ${isPlaying ? "opacity-80 shadow-2xl -translate-y-0.5" : "opacity-100"}`}
      onMouseEnter={handleVideoPlay}
      onMouseLeave={handleVideoPause}
    >
      <video
        ref={videoRef}
        src="https://videos.ctfassets.net/spoqsaf9291f/NbFul3fpx8iFqd92FdjZb/2a0b3f2e96fdcd6623bf0f97064bfc1c/web-qa-agent-4x3_final.mp4"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute h-full w-full bg-dark-700/90 top-0 left-0 flex items-center justify-center flex-col">
        <h5 className="text-white font-600 text-large-400">{title}</h5>
        <Link href={redirectUrl} className="btn mt-6 btn-pill border px-10 py-6 border-white text-white hover:bg-primary-500 hover:border-primary-300/90">{linkLabel}</Link>
      </div>
    </div>
  );
};
