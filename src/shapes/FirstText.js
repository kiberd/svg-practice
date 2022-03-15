import React, { useState, useRef, useEffect } from "react";
import { animated, useSpring } from "react-spring";

const FirstText = ({ color, toggle }) => {
	const animationFillStyle = useSpring({
		fill: toggle ? color : "#b8b8c6",
		config: { duration: 1000 },
		delay: 0,
	});

	return (
		<>
			<animated.text
				style={{
					...animationFillStyle,
				}}
				id="상장기업"
				transform="translate(1156 2471)"
				fill="#b8b8c6"
				font-size="14"
				font-family="MalgunGothic, Malgun Gothic"
			>
				<tspan x="0" y="0">
					상장기업
				</tspan>
			</animated.text>
		</>
	);
};

export default FirstText;
