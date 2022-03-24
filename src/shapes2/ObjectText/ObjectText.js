import React from "react";
import { animated, useSpring } from "react-spring";

const ObjectText = () => {

    const animationFillStyle = useSpring({
		from: { fillColor: "#e9e8e8" },
		to: { fillColor: "#1210c9" },
		config: { duration: 3000 },
	});

	return (
		<>
			<animated.text
				id="Objective_01"
				data-name="Objective 01"
				transform="translate(828.5 3583.098)"
				fill={animationFillStyle.fillColor}
				font-size="14"
				font-family="Pretendard-Bold, Pretendard"
				font-weight="700"
			>
				<tspan x="0" y="0">
					Objective 01
				</tspan>
			</animated.text>
			<animated.text
				id="Objective_02"
				data-name="Objective 02"
				transform="translate(828.5 3760.098)"
				fill={animationFillStyle.fillColor}
				font-size="14"
				font-family="Pretendard-Bold, Pretendard"
				font-weight="700"
			>
				<tspan x="0" y="0">
					Objective 02
				</tspan>
			</animated.text>
			<animated.text
				id="Objective_03"
				data-name="Objective 03"
				transform="translate(828.5 3947.098)"
				fill={animationFillStyle.fillColor}
				font-size="14"
				font-family="Pretendard-Bold, Pretendard"
				font-weight="700"
			>
				<tspan x="0" y="0">
					Objective 03
				</tspan>
			</animated.text>
		</>
	);
};

export default ObjectText;
