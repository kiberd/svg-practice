import React, { useState, useRef, useEffect } from "react";
import { animated, useSpring } from "react-spring";

const SecondText = ({ color, toggle }) => {
	const animationFillStyle = useSpring({
		fill: toggle ? color : "#b8b8c6",
		config: { duration: 1000 },
		delay: 1800,
	});

	return (
		<>
			<animated.text
                style={{
					...animationFillStyle,
				}}
				id="가치_적정성"
				data-name="가치적정성"
				transform="translate(1474 2609)"
				font-size="14"
				font-family="MalgunGothic, Malgun Gothic"
			>
				<tspan x="-14" y="0">
					가치
				</tspan>
				<tspan y="0" font-family="SegoeUI, Segoe UI"></tspan>
				<tspan x="-21" y="16">
					적정성
				</tspan>
			</animated.text>
		</>
	);
};

export default SecondText;
