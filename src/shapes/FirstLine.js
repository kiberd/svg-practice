import React, { useState, useRef, useEffect } from "react";
import { animated, useSpring } from "react-spring";

import { useAnimatedPath } from "../CustomHooks";

const FirstLine = ({ color, toggle, init }) => {
	const animationProps = useAnimatedPath({
		toggle,
		delay: 500,
		config: { duration: 1500 },
        init
	});

	const pathArr = [
		"M900,150 c45,112 140,5 190,200",
		"M1085,150 c-32,133 -183,4 -193,176",
		"M1280,150 c45,140 140,5 190,180",
	];

	return (
		<>
			<animated.path
				{...animationProps}
				id="패스_58"
				data-name="패스 58"
				d="M1178.5,2476.5s3.515,33.829,145.676,33.991S1473,2560,1473,2560"
				transform="translate(2 4.501)"
				fill="transparent"
				stroke={init ? "none" : "#1210c7"}
				strokeWidth={3}
				strokeDasharray={2}
			/>
		</>
	);
};

export default FirstLine;
