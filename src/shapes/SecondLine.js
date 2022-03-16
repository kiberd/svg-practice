import React, { useState, useRef, useEffect } from "react";
import { animated, useSpring } from "react-spring";

import { useAnimatedPath } from "../CustomHooks";

const pathArr = [
    "M1085,460 c-53,128 -336,-16 -387,138",
    "M885,460 c-53,128 -336,-16 -387,138",
    "M1470,460 c-53,128 -336,-16 -387,138",
];

const SecondLine = ({ color, toggle, init }) => {
    

    const lineRef = useRef(null);
	const [length, setLength] = useState(null);

	useEffect(() => {
		setLength(lineRef.current.getTotalLength());
	}, [length]);

	const animatedStyle = useSpring({
		from: { length },
		to: { length: 0 },
		delay: 4000,
		config: { duration: 1200 },
		loop: init,
	});

	return (
		<>
			<animated.path
                ref={lineRef}

				id="패스_119"
				data-name="패스 119"
				d="M1469,2476.5s-3.467,28.966-143.7,29.1-146.8,42.4-146.8,42.4"
				transform="translate(6 159)"
				fill="transparent"
				stroke="#1210c7"

				strokeDashoffset={animatedStyle.length}
				strokeDasharray={length}
				strokeWidth={3}
			/>
		</>
	);
};

export default SecondLine;
