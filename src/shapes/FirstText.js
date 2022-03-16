import React, { useState, useRef, useEffect } from "react";
import { animated, useSpring } from "react-spring";

const FirstText = ({ color, init, rest }) => {

    const shapeRef = useRef(null);

	const animationFillStyle = useSpring({
        from: { fillColor: "#b8b8c6" },
        to: { fillColor: color }, 
		config: { duration: 1000 },
		delay: 0,
		reset: init,
	});

	const animationRestStyle = useSpring({
        to: { fillColor: "#b8b8c6" },
        from: { fillColor: color }, 
		config: { duration: 0 },
	});

	

	return (
		<>
			<animated.text
                ref={shapeRef}
                fill={rest? animationRestStyle.fillColor : animationFillStyle.fillColor}
				id="상장기업"
				transform="translate(1156 2471)"
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
