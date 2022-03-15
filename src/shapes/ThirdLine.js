import React, { useState, useRef, useEffect } from "react";
import { animated, useSpring } from "react-spring";

import { useAnimatedPath } from "../CustomHooks";

const ThirdLine = ({ toggle, index }) => {
	const animationProps = useAnimatedPath({
		toggle,
		delay: 3500,
		config: { duration: 1000 },
	});

	const pathArr = [
		"M688, 750 c88,194 324,0 385,162",
		"M498, 750 c88,194 324,0 385,162",
		"M1082, 750 c88,194 324,0 385,162",
	];

	return (
		<>
			<animated.path
				{...animationProps}
				id="패스_214"
				data-name="패스 214"
				d="M1178.5,2476.5s3.515,32.666,145.676,32.822S1473,2557.133,1473,2557.133"
				transform="translate(2 302)"
				fill="transparent"
				stroke="#1210c7"
				strokeWidth={3}
				strokeDasharray={2}
			/>
		</>
	);
};

export default ThirdLine;
