"use client";

import React, { useEffect, useRef, useState } from "react";
import AnimatedDigit from "./AnimatedDigit";

function parseMetric(value) {
  const str = String(value);
  const match = str.match(/^([\d.]+)(.*)$/);
  if (!match) return { digits: str.split(""), suffix: "" };

  const numStr = match[1];
  const suffix = match[2];
  const digits = numStr.split("");
  return { digits, suffix };
}

const SuccessMetric = ({
  gradientText = "18%",
  label = "Popularity",
  digitDelay = 120,
  duration = 900,
}) => {
  const { digits, suffix } = parseMetric(gradientText);
  const [active, setActive] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="text-center">
      <h3 className="gradient-text text-large-1000">
        {digits.map((char, i) => {
          const isNumeric = !isNaN(parseInt(char, 10));
          return isNumeric ? (
            <AnimatedDigit
              key={i}
              target={char}
              delay={i * digitDelay}
              duration={duration}
              active={active}
            />
          ) : (
            <span key={i}>{char}</span>
          );
        })}

        {suffix && (
          <span
            style={{
              opacity: active ? 1 : 0,
              transition: `opacity 0.4s ease`,
              transitionDelay: "0ms",
            }}
          >
            {suffix}
          </span>
        )}
      </h3>
      <p className="text-dark-900/80 text-body-75 -mt-8">{label}</p>
    </div>
  );
};

export default SuccessMetric;