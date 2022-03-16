import React, { useState, useRef, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import { useAnimatedPath } from "../CustomHooks";

const pathArr = [
	"M900,150 c45,112 140,5 190,200",
	"M1085,150 c-32,133 -183,4 -193,176",
	"M1280,150 c45,140 140,5 190,180",
];

const FirstLine = ({ color, toggle, init }) => {
	// const animationProps = useAnimatedPath({
	// 	toggle,
	// 	delay: 500,
	// 	config: { duration: 1500 },
	// 	init,
	// });

	const lineRef = useRef(null);
	const [length, setLength] = useState(null);

	useEffect(() => {
		setLength(lineRef.current.getTotalLength());
	}, [length]);

    
	// useEffect(() => {
	//     if(init && lineRef && lineRef.current){
	//         lineRef.current.style.fill = "#b8b8c6";
	//     }
	// } ,[init]);

	const animatedStyle = useSpring({
		from: { length },
		to: { length: 0 },
		delay: 2000,
		config: { duration: 1500 },
		loop: true,
	});

    

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
