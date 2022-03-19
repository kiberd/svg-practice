import React, { useState, useRef, useEffect } from "react";
import { animated, useSpring } from "react-spring";

const FirstText = ({ color, init, rest, data }) => {
	const shapeRef = useRef(null);

	const animationFillStyle = useSpring({
		from: { fillColor: "#b8b8c6" },
		to: { fillColor: color },
		config: { duration: 1000 },
		delay: 0,
		reset: init,
	});

	// useEffect(() => {
	// 	if (rest && shapeRef && shapeRef.current) {
	// 		setTimeout(() => {
	// 			shapeRef.current.setAttribute("fill", "#b8b8c6");
	// 		}, 3000);
	// 	}
	// }, [rest, shapeRef]);

    // useEffect(() => {
    //     if (data && shapeRef && shapeRef.current) {
    //         shapeRef.current.setAttribute("fill", "#b8b8c6");
	// 	}
    // } ,[data, shapeRef]);

	return (
		<>
			<animated.text
				ref={shapeRef}
				fill={animationFillStyle.fillColor}
				// id="상장기업"
				// transform="translate(1156 2471)"
                id={data.id}
				transform={data.transform}
				font-size="14"
				font-family="MalgunGothic, Malgun Gothic"
			>
				<tspan x="0" y="0">
					{data.id}
				</tspan>
			</animated.text>
		</>
	);
};

export default FirstText;
