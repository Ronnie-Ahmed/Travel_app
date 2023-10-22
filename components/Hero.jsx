import React from "react";

const Hero = () => {
  return (
    <div>
      {Array(10)
        .fill(0)
        .map((_, i) => (
          <div key={i}>Hero</div>
        ))}
    </div>
  );
};

export default Hero;
