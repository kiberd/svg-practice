import React, { useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";

const yCoordinate = [
	3462, 3506, 3550, 3594,

	3678, 3722, 3766, 3810,

	3894, 3938, 3982, 4026,
];

const ChampionText = ({ rankInfo, init }) => {
	const [transform, setTransform] = useState();

    const animationFillStyle = useSpring({
		from: { fillColor: "transparent", fontWeight: "400" },
		to: { fillColor: "#1210c9", fontWeight: "800" },
		config: { duration: 1500 },
		delay: 9500,
        reset: init
	});


	useEffect(() => {
	
		if (rankInfo) {
			const transformObj = {};

			transformObj.first = `translate(1665 ${
				yCoordinate[rankInfo.first]
			})`;
			transformObj.second = `translate(1665 ${
				yCoordinate[rankInfo.second]
			})`;
			transformObj.third = `translate(1665 ${
				yCoordinate[rankInfo.third]
			})`;

			setTransform(transformObj);
		}
	}, [rankInfo]);

	return (
		<>
			{transform ? (
				<>
					<animated.text
						id="Champion_M1"
						data-name="Champion M1"
						transform={transform.first}
						fill={animationFillStyle.fillColor}
						font-size="11"
						font-family="Pretendard-Bold, Pretendard"
						font-weight={animationFillStyle.fontWeight}
					>
						<tspan x="0" y="0">
							Champion M1
						</tspan>
					</animated.text>
					<animated.text
						id="Champion_M2"
						data-name="Champion M2"
						transform={transform.second}
						fill={animationFillStyle.fillColor}
						font-size="11"
						font-family="Pretendard-Bold, Pretendard"
						font-weight={animationFillStyle.fontWeight}
					>
						<tspan x="0" y="0">
							Champion M2
						</tspan>
					</animated.text>
					<animated.text
						id="Champion_M3"
						data-name="Champion M3"
						transform={transform.third}
						fill={animationFillStyle.fillColor}
						font-size="11"
						font-family="Pretendard-Bold, Pretendard"
						font-weight={animationFillStyle.fontWeight}
					>
						<tspan x="0" y="0">
							Champion M3
						</tspan>
					</animated.text>
				</>
			) : null}
		</>
	);
};

export default ChampionText;
