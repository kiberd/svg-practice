import React, { useState, useRef, useEffect } from "react";
import { animated, useSpring } from "react-spring";

const FourthText = ({ color, init, rest, onHandleRest }) => {

	const shapeRef = useRef(null);

	const animationFillStyle = useSpring({
        from: { fillColor: "#b8b8c6" },
        to: { fillColor: color }, 
		config: { duration: 1000 },
		delay: 6500,
        reset: init,
        onRest: onHandleRest,
	});

	useEffect(() => {
		if (rest && shapeRef && shapeRef.current) {
            setTimeout(() => {
                shapeRef.current.setAttribute("fill", "#b8b8c6");
            } ,3000);
		}
	}, [rest, shapeRef]);

	return (
		<>
			<animated.text
                ref={shapeRef}
                fill={animationFillStyle.fillColor}
				id="Data_Set_06"
				data-name="Data Set 06"
				transform="translate(1475 2904)"
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
