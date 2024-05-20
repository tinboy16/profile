"use client";
import React from "react";
import { useSpring, animated } from "@react-spring/web";

const achievementsList = [
  {
    metric: "Projects",
    value: 10,
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: 1000,
  },
  {
    metric: "Awards",
    value: 2,
  },
  {
    metric: "Years",
    value: 2,
  },
];

const AnimatedNumber = ({ value }) => {
  const props = useSpring({
    from: { number: 0 },
    to: { number: value },
    delay: 200,
    config: { mass: 1, tension: 170, friction: 26 },
  });

  return <animated.span>{props.number.to(n => n.toFixed(0))}</animated.span>;
};

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row">
              {achievement.prefix || ""}
              <AnimatedNumber value={achievement.value} />
              {achievement.postfix || ""}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
