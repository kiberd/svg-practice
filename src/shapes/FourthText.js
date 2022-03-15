import React, { useState, useRef, useEffect } from "react";
import { animated, useSpring } from "react-spring";

const FourthText = ({ color, toggle, onHandleRest }) => {

    const handleRest = () => {
		onHandleRest();
	};

	const animationFillStyle = useSpring({
		fill: toggle ? color : "#b8b8c6",
		config: { duration: 1000 },
		delay: 4500,
        onRest: handleRest,
	});

	return (
		<>
			<animated.text
				style={{
					...animationFillStyle,
				}}
				id="Data_Set_06"
				data-name="Data Set 06"
				transform="translate(1475 2904)"
				fill="#b8b8c6"
				font-size="14"
				font-family="SegoeUI, Segoe UI"
			>
				<tspan x="-26.072" y="0">
					Data Set
				</tspan>
				<tspan x="-7.547" y="16">
					06
				</tspan>
			</animated.text>
		</>
	);
};

export default FourthText;
