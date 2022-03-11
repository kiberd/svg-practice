import React, { useState, useRef, useEffect } from "react";
import { animated, useSpring } from "react-spring";

import { useAnimatedPath } from "../CustomHooks";

const Rectangle = ({ color, toggle, index }) => {
	const animationStrokeProps = useAnimatedPath({ toggle });
	const animationFillStyle = useSpring({
		fill: toggle ? color : "#b8b8c6",
		config: { duration: 1000 },
		delay: 0,
	});

	const rectArry = [
		"M913.92,48.17V97.83H864.5c-.73-4-1-34.15-.34-49.66Z",
		"M1107.83,97.92h-49.66V48.49c4-.71,35.25-.93,49.66-.32Z",
		"M1301.84,97.91h-49.68V48.48c4-.69,36-.91,49.68-.3Z",
	];

	return (
		<>
			<animated.path
				style={{
					...animationStrokeProps.style,
					...animationFillStyle,
				}}
				// fill={color}
				stroke={"#fff"}
				strokeWidth={2}
				// d="M913.92,48.17V97.83H864.5c-.73-4-1-34.15-.34-49.66Z"
                d={rectArry[index]}

			/>
		</>
	);
};

export default Rectangle;
