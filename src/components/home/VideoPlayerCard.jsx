"use client";

import { useRef, useState } from "react";

const VideoPlayerCard = ({ src = "", alt = "", className = "" }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoPlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={handleVideoPlayPause}
        className="absolute inset-0 z-10 flex items-center justify-center bg-transparent"
      >
        {isPlaying ? "⏸" : "▶"}
      </button>

      <video loop muted controls ref={videoRef} src={src} className="w-full h-full object-cover rounded-2xl" />
    </div>
  );
};

export default VideoPlayerCard;
