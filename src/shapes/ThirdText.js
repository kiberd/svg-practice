import React, { useState, useRef, useEffect } from "react";
import { animated, useSpring } from "react-spring";

const ThirdText = ({ color, toggle, init }) => {

    const shapeRef = useRef(null);

	const animationFillStyle = useSpring({
        from: { fillColor: "#b8b8c6" },
        to: { fillColor: color }, 
		config: { duration: 1000 },
		delay: 4500,
        loop: init,
	});

	useEffect(() => {
	    if(init && shapeRef && shapeRef.current){
	        shapeRef.current.style.fill = "#b8b8c6";
	    }
	} ,[init]);

	return (
		<>
			<animated.text
                ref={shapeRef}
                fill={animationFillStyle.fillColor}
				id="AI_모형_03"
				data-name="AI 모형03"
				transform="translate(1184 2749)"
				font-size="14"
				font-family="SegoeUI, Segoe UI"
			>
				<tspan x="-22.295" y="0">
					AI
				</tspan>
                {/* x="-6" 해줘야함 */}
				<tspan x="-6" y="0" font-family="MalgunGothic, Malgun Gothic">
					모형
				</tspan>
				<tspan y="0"></tspan>
				<tspan x="-7.547" y="16">
					03
				</tspan>
			</animated.text>
		</>
	);
};

export default ThirdText;