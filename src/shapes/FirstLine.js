import React, { useState, useRef, useEffect } from "react";
import { animated, useSpring } from "react-spring";

const pathArr = [
	"M900,150 c45,112 140,5 190,200",
	"M1085,150 c-32,133 -183,4 -193,176",
	"M1280,150 c45,140 140,5 190,180",
];

const FirstLine = ({ init, rest, data }) => {

    console.log('firstLine render');
	const lineRef = useRef(null);
	const [length, setLength] = useState(null);

	useEffect(() => {
		setLength(lineRef.current.getTotalLength());
	}, [data]);

	const animatedStyle = useSpring({
		to: { length },
		from: { length: 0 },
		delay: 2000,
		config: { duration: 1000 },
		reset: init,
	});

	// useEffect(() => {
	// 	if (length) {
	// 		lineRef.current.setAttribute("stroke-dashoffset", length);
	// 	}
	// }, [length]);

	// useEffect(() => {
	// 	if (rest && length && lineRef && lineRef.current) {
	// 		setTimeout(() => {
	// 			lineRef.current.setAttribute("stroke-dashoffset", length);
	// 		}, 3000);
	// 	}
	// }, [rest, length, lineRef]);

	return (
		<>
			{data ? (
				<animated.path
					ref={lineRef}
					// id="패스_58"
					// data-name="패스 58"
					// d="M1178.5,2476.5s3.515,33.829,145.676,33.991S1473,2560,1473,2560"
					// transform="translate(2 4.501)"
					id={data.id}
					data-name={data.id}
					d={data.d}
					transform={data.transform}
					fill="transparent"
					stroke="#1210c7"
					strokeDashoffset={animatedStyle.length}
					strokeDasharray={length}
					strokeWidth={3}
				/>
			) : null}
		</>
	);
};

export default FirstLine;
