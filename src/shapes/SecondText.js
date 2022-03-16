import React, { useState, useRef, useEffect } from "react";
import { animated, useSpring } from "react-spring";

const SecondText = ({ color, toggle, init }) => {

    const shapeRef = useRef(null);

	const animationFillStyle = useSpring({
        from: { fillColor: "#b8b8c6" },
        to: { fillColor: color }, 
		config: { duration: 1000 },
		delay: 3500,
		reset: init,
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
