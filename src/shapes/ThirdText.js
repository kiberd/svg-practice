import React, { useState, useRef, useEffect } from "react";
import { animated, useSpring } from "react-spring";

const ThirdText = ({ color, init, rest, data }) => {
	const shapeRef = useRef(null);

	const animationFillStyle = useSpring({
		from: { fillColor: "#b8b8c6" },
		to: { fillColor: color },
		config: { duration: 1000 },
		delay: 4500,
		reset: init,
	});

	// useEffect(() => {
	// 	if (rest && shapeRef && shapeRef.current) {
	//         setTimeout(() => {
	//             shapeRef.current.setAttribute("fill", "#b8b8c6");
	//         }, 3000);
	// 	}
	// }, [rest, shapeRef]);

	return (
		<>
			<animated.text
				ref={shapeRef}
				fill={animationFillStyle.fillColor}
				// id="AI_모형_03"
				// data-name="AI 모형03"
				// transform="translate(1184 2749)"
				id={data.id}
				data-name={data.id}
				transform={data.transform}
				font-size="14"
				font-family="SegoeUI, Segoe UI"
			>
				<tspan x="-22.295" y="0">
					{data.id.split("_")[0]}
				</tspan>
				{/* x="-6" 해줘야함 */}
				<tspan x="-6" y="0" font-family="MalgunGothic, Malgun Gothic">
					{data.id.split("_")[1]}
				</tspan>
				<tspan y="0"></tspan>
				<tspan x="-7.547" y="16">
					{data.id.split("_")[2]}
				</tspan>
			</animated.text>
		</>
	);
};

export default ThirdText;
