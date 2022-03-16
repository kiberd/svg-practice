import React, { useState, useRef, useEffect } from "react";
import { animated, useSpring } from "react-spring";

import { useAnimatedPath } from "../CustomHooks";

const pathArr = [
    "M688, 750 c88,194 324,0 385,162",
    "M498, 750 c88,194 324,0 385,162",
    "M1082, 750 c88,194 324,0 385,162",
];

const ThirdLine = ({ color, toggle, init }) => {

    const lineRef = useRef(null);
	const [length, setLength] = useState(null);

	useEffect(() => {
		setLength(lineRef.current.getTotalLength());
	}, [length]);

	const animatedStyle = useSpring({
		from: { length },
		to: { length: 0 },
		delay: 5500,
		config: { duration: 1200 },
		loop: init,
	});

	return (
		<>
			<animated.path
				ref={lineRef}

				id="패스_214"
				data-name="패스 214"
				d="M1178.5,2476.5s3.515,32.666,145.676,32.822S1473,2557.133,1473,2557.133"
				transform="translate(2 302)"
				fill="transparent"
				stroke="#1210c7"

				strokeDashoffset={animatedStyle.length}
				strokeDasharray={length}
				strokeWidth={3}
			/>
		</>
	);
};

export default ThirdLine;
