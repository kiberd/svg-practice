import React, { useState, useRef, useEffect } from "react";
import { animated, useSpring } from "react-spring";

const pathArr = [
	"M900,150 c45,112 140,5 190,200",
	"M1085,150 c-32,133 -183,4 -193,176",
	"M1280,150 c45,140 140,5 190,180",
];

const FirstLine = ({ init, rest }) => {
	const lineRef = useRef(null);
	const [length, setLength] = useState(null);

	useEffect(() => {
		setLength(lineRef.current.getTotalLength());
	}, [length]);

	const animatedStyle = useSpring({
		from: { length },
		to: { length: 0 },
		delay: 2000,
		config: { duration: 1000 },
		reset: init,
	});

	useEffect(() => {
		if (rest && lineRef && lineRef.current) {
            setTimeout(() => {
                lineRef.current.setAttribute("stroke-dashoffset", length);
            } ,3000);
			
		}
	}, [rest, lineRef]);

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
				strokeDashoffset={animatedStyle.length}
				strokeDasharray={length}
				strokeWidth={3}
			/>
		</>
	);
};

export default FirstLine;
