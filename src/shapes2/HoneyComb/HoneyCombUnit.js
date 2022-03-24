import React from "react";
import { animated, useSpring } from "react-spring";

const HoneyCombUnit = ({ element, elementIndex }) => {

	const animationFillStyle = useSpring({
		from: { fillColor: "#e9e8e8" },
		to: { fillColor: "#1210c9" },
		config: { duration: 3000 },
	});

	return (
		<>
			<animated.path
				id={element.id}
				transform={element.transform}
				d={element.d}
				fill={elementIndex ? animationFillStyle.fillColor : "#e9e8e8"}
			/>
		</>
	);
};

export default HoneyCombUnit;
