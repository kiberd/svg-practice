import React, { useState, useRef, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import { useAnimatedPath } from "../CustomHooks";

const pathArr = [
  "M900,150 c45,112 140,5 190,200",
  "M1085,150 c-32,133 -183,4 -193,176",
  "M1280,150 c45,140 140,5 190,180",
];

const FirstLine = ({ color, init, rest, onHandleRest }) => {
  const lineRef = useRef(null);
  const [length, setLength] = useState(null);

  useEffect(() => {
    setLength(lineRef.current.getTotalLength());
  }, [length]);

  const animatedStyle = useSpring({
    from: { length },
    to: { length: 0 },
    delay: 2000,
    config: { duration: 1500 },
    reset: init,
    onRest: onHandleRest,
  });

  const animatedRestStyle = useSpring({
    to: { length },
    from: { length: 0 },
    config: { duration: 1000 },
  });

  useEffect(() => {
    console.log(length);
  }, [rest]);

  return (
    <>
      <animated.path
        ref={lineRef}
        id="패스_58"
        data-name="패스 58"
        d="M1178.5,2476.5s3.515,33.829,145.676,33.991S1473,2560,1473,2560"
        transform="translate(2 4.501)"
        fill="transparent"
        stroke="#1210c7"
        strokeDashoffset={rest ? 0 : animatedStyle.length}
        strokeDasharray={rest ? 0 : length}
        strokeWidth={3}
      />
    </>
  );
};

export default FirstLine;
