import React, { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
// import TextLoop from "@kelvinkhai/react-text-loop";

const yCoordinate = [
	3485, 3547, 3609, 3671, 3733, 3796, 3858, 3920, 3982, 4044,
];

const initialWords = [
	"P4P",
	"Doppelganger",
	"Judgement Day",
	"Impact Count-Up",
	"Reference Model",
	"Victory Road",
	"Tech Scanner",
	"ESG Breakdown",
	"PULSE",
	"Scanner Tech",
];

const MethodText = ({ init }) => {
	const animationFillStyle = useSpring({
		from: { fillColor: "#5a5a77", fontWeight: "400" },
		to: { fillColor: "#1210c9", fontWeight: "700" },
		config: { duration: 1000 },
		delay: 3800,
		reset: init,
	});

	const animationShowStyle = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		config: { duration: 1500 },
		reset: init,
	});

	const [words, setWords] = useState(initialWords);
	const [transforms, setTransforms] = useState();

	// Make random word arry
	useEffect(() => {
		// Set random word arry
		const tempWords = [...words];
		tempWords.sort(() => Math.random() - 0.5);
		setWords(tempWords);

		const transformArry = [];
		yCoordinate.map((y) => {
			const transform = `translate(1159.288 ${y})`;
			transformArry.push(transform);
		});

		setTransforms(transformArry);
	}, []);

	return (
		<>
			{words &&
				transforms &&
				words.map((word, index) => (
					<animated.text
						transform={transforms[index]}
						fill={
							index === 4 || index === 5 || index === 6
								? animationFillStyle.fillColor
								: "#5a5a77"
						}
						font-size="14"
						font-family="Pretendard-Regular, Pretendard"
						style={animationShowStyle}
						font-weight={
							index === 4 || index === 5 || index === 6
								? animationFillStyle.fontWeight
								: null
						}
					>
						<tspan x="0" y="0">
							{word}
						</tspan>
					</animated.text>
				))}
		</>
	);
};

export default MethodText;
