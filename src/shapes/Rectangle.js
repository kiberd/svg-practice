import React, { useState, useRef, useEffect } from "react";
import { animated, useSpring, useSpringRef } from "react-spring";

import { useAnimatedPath } from "../CustomHooks";

const rectArry = [
    "M913.92,48.17V97.83H864.5c-.73-4-1-34.15-.34-49.66Z",
    "M1107.83,97.92h-49.66V48.49c4-.71,35.25-.93,49.66-.32Z",
    "M1301.84,97.91h-49.68V48.48c4-.69,36-.91,49.68-.3Z",
];

const Rectangle = ({ color, toggle, init }) => {

	const shapeRef = useRef(null);
    const springApi = useSpringRef();

	const animationFillStyle = useSpring({
        ref: springApi,
        from: { fillColor: "#b8b8c6" },
        to: { fillColor: color }, 
		config: { duration: 1000 },
		// delay: 0,
        // loop: true,
	});

	// useEffect(() => {
	//     if(init && shapeRef && shapeRef.current){
	//         shapeRef.current.style.fill = "#b8b8c6";
	//     }
	// } ,[init]);

	return (
		<>
			<animated.rect
                ref={shapeRef}
                fill={animationFillStyle.fillColor}
				id="사각형_59"
				data-name="사각형 59"
				width="25"
				height="25"
				transform="translate(1168 2425)"
			/>
		</>
	);
};

export default Rectangle;
