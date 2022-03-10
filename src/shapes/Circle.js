import React, { useState, useRef, useEffect } from "react";
import { animated, useSpring } from "react-spring";

import { useAnimatedPath } from "../CustomHooks";

const Circle = ({ color, toggle }) => {

    const animationStrokeProps = useAnimatedPath({ toggle });
    const animationFillStyle = useSpring({
        fill: toggle ? color : "#b8b8c6",
        config: { duration: 1000},
        delay: 1500,
    })

	return (
		<>
			<animated.path
                style={{
                    ...animationStrokeProps.style,
                    ...animationFillStyle
                }}
                fill={color}
                stroke={"#fff"}
                strokeWidth={2}
				d="M310,325h1a26.24,26.24,0,0,1,16.22,10c2.81,3.8,4.91,8.26,4.85,13.43-.06,4.69-.65,9-3,13.27-3.86,7.15-7.68,10.08-14.34,12.21-9.45,3-18.23,1.12-25.47-6.08a24,24,0,0,1-7.36-17.41c-.1-7.69,2.59-14.08,8.29-19,4.17-3.58,8.88-6.49,14.77-6.39l.68,2c1-.69,3.05,1.4,3.36-1.27C309.07,325.45,309.67,325.24,310,325Z"
			/>
		</>
	);
};

export default Circle;
