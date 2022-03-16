import React, { useState, useRef, useEffect } from "react";
import { useInterval } from "./CustomHooks";

import { useSpring, useChain, useSpringRef, animated } from "react-spring";

import Background from "./shapes/Background";

import Rectangle from "./shapes/Rectangle";
import FirstText from "./shapes/FirstText";
import FirstLine from "./shapes/FirstLine";

import Circle from "./shapes/Circle";
import SecondText from "./shapes/SecondText";
import SecondLine from "./shapes/SecondLine";

import TripleRectangle from "./shapes/TripleRectangle";
import ThirdText from "./shapes/ThirdText";
import ThirdLine from "./shapes/ThirdLine";

import QuadCricle from "./shapes/QuadCricle";
import FourthText from "./shapes/FourthText";

const Map3 = () => {
  
  
  const [init, setInit] = useState(false);
  const [rest ,setRest] = useState(false);

  // const showStyle = useSpring({
  //   to: { fillColor: "#1816c9" },
  //   from: { fillColor: "#b8b8c6" },
  //   config: { duration: 1000 },
  //   reset: reset,
  // });

  // const firstLineRef = useRef(null);
  // const [firstLineLength, setFirstLineLength] = useState(null);

  // useEffect(() => {
  //   setFirstLineLength(firstLineRef.current.getTotalLength());
  // }, [firstLineLength]);

  // const lineShowStyle = useSpring({
  //   to: { firstLineLength: 0 },
  //   from: { firstLineLength },
  //   config: { duration: 1000 },
  //   // loop: true,
  //   reset: reset,
  // });


  const handleRest = () => {
    setRest(true);
  }



  return (
    <>
      <button
        type="button"
        onClick={() => {
          setInit(true);
          setRest(false);
        }}
      >
        Reset
      </button>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="830"
        height="499"
        viewBox="0 0 830 499"
      >
        <g id="그룹_939" data-name="그룹 939" transform="translate(-963 -2425)">
          <Background />

          {/* First shape */}
          {/* <>
            <animated.rect
              fill={showStyle.fillColor}
              id="사각형_59"
              data-name="사각형 59"
              width="25"
              height="25"
              transform="translate(1168 2425)"
            />
            <animated.text
              fill={showStyle.fillColor}
              id="상장기업"
              transform="translate(1156 2471)"
              font-size="14"
              font-family="MalgunGothic, Malgun Gothic"
            >
              <tspan x="0" y="0">
                상장기업
              </tspan>
            </animated.text>

            <animated.path
              ref={firstLineRef}
              id="패스_58"
              data-name="패스 58"
              d="M1178.5,2476.5s3.515,33.829,145.676,33.991S1473,2560,1473,2560"
              transform="translate(2 4.501)"
              fill="transparent"
              stroke="#1210c7"
              strokeDashoffset={lineShowStyle.firstLineLength}
              strokeDasharray={firstLineLength}
              strokeWidth={3}
            />
          </> */}

          <Rectangle color={"#1816c9"} init={init} rest={rest}/>
					<FirstText color={"#1816c9"}  init={init} rest={rest}/>
					<FirstLine color={"#1816c9"}  init={init} rest={rest} onHandleRest={handleRest}/>

					<Circle color={"#1816c9"}  init={init} rest={rest}/>
					<SecondText color={"#1816c9"} init={init} rest={rest}/>
					<SecondLine color={"#1816c9"} init={init} rest={rest}/>

					<TripleRectangle color={"#1816c9"} init={init} rest={rest}/>
					<ThirdText color={"#1816c9"} init={init} rest={rest}/>
					<ThirdLine color={"#1816c9"} init={init} rest={rest}/>

					<QuadCricle color={"#1816c9"} init={init} rest={rest}/>
					<FourthText color={"#1816c9"}  init={init} rest={rest} onHandleRest={handleRest}/>
        </g>
      </svg>
    </>
  );
};

export default Map3;
