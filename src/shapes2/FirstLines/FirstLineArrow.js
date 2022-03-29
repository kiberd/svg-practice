import React from "react";
import { animated, useSpring } from "react-spring";

const FirstLineArrow = ({ init }) => {

    const animationFillStyle = useSpring({
		from: { fillColor: "transparent" },
		to: { fillColor: "#1210c9" },
		config: { duration: 500 },
        delay: 3300,
        reset: init
	});

	return (
		<>
			<animated.path
				id="다각형_1"
				data-name="다각형 1"
				d="M5.5,0,11,14H0Z"
				transform="translate(1156 3723.098) rotate(90)"
				fill={animationFillStyle.fillColor}
			/>
			<animated.path
				id="다각형_2"
				data-name="다각형 2"
				d="M5.5,0,11,14H0Z"
				transform="translate(1156 3785.098) rotate(90)"
				fill={animationFillStyle.fillColor}
			/>
			<animated.path
				id="다각형_3"
				data-name="다각형 3"
				d="M5.5,0,11,14H0Z"
				transform="translate(1156 3849.098) rotate(90)"
				fill={animationFillStyle.fillColor}
			/>
		</>
	);
};

export default React.memo(FirstLineArrow);
