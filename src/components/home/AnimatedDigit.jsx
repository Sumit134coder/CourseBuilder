import React, { useEffect, useState } from "react";

const AnimatedDigit = ({ target, delay = 0, duration = 900, active }) => {
  const [current, setCurrent] = useState(0);
  const targetNum = parseInt(target, 10);
  const isNumeric = !isNaN(targetNum);

  useEffect(() => {
    if (!isNumeric || !active) return;

    let startTime = null;
    let rafId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(eased * targetNum));
      if (progress < 1) rafId = requestAnimationFrame(animate);
    };

    const timeout = setTimeout(() => {
      rafId = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(rafId);
    };
  }, [active, target, delay, duration, targetNum, isNumeric]);

  if (!isNumeric) return <span>{target}</span>;
  return <span>{current}</span>;
};

export default AnimatedDigit;
