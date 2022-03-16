import React, { useState, useRef, useEffect } from "react";
import { animated, useSpring } from "react-spring";

const FirstText = ({ color, toggle, init }) => {

    const shapeRef = useRef(null);

	const animationFillStyle = useSpring({
        from: { fillColor: "#b8b8c6" },
        to: { fillColor: color }, 
		config: { duration: 1000 },
		delay: 0,
        loop: true,
	});

	// useEffect(() => {
	//     if(init && shapeRef && shapeRef.current){
	//         shapeRef.current.style.fill = "#b8b8c6";
	//     }
	// } ,[init]);

	return (
		<>
			<animated.text
                ref={shapeRef}
                fill={animationFillStyle.fillColor}
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
