import React, { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";

const libraryArry = [
	"Naïve Bayes",
	"Decision Tree",
	"Random Forest",
	"K Nearest Neighbors",
	"Linear Regression",
	"Logistic Regression",
	"Lasso Regression",
	"Multiple Regression",
	"K-Means",
	"Hierarchical Clustering",
	"FCM Algorithm",
	"EM Algorithm",
];

const FirstLibrary = ({ rankInfo, init }) => {
	const animationFillStyle = useSpring({
		from: { fillColor: "#5a5a77", fontWeight: "400" },
		to: { fillColor: "#1210c9", fontWeight: "800" },
		config: { duration: 1500 },
		delay: 9500,
		reset: init,
	});

    const animationShowStyle = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		config: { duration: 1500 },
		reset: init,
	});

	const [matchArry, setMatchArry] = useState();

	// 0, 1, 2, 3
	useEffect(() => {
		if (rankInfo) {
			const indexArry = [0, 1, 2, 3];
			const matchIndex = [];
			const matchArry = [false, false, false, false];

			Object.values(rankInfo).map((rank) => {
				indexArry.map((index, idx) => {
					if (index === rank) {
						matchIndex.push(idx);
					}
				});
			});

			matchIndex.map((index) => {
				matchArry[index] = true;
			});

			setMatchArry(matchArry);
		}
	}, [rankInfo]);

	const [libraries, setLibraries] = useState();

	// Set random library words
	useEffect(() => {
		const tempLibraries = [...libraryArry];
		tempLibraries.sort(() => Math.random() - 0.5);
		setLibraries(tempLibraries);
	}, []);

	return (
		<>
			{libraries && matchArry ? (
				<g
					id="그룹_923"
					data-name="그룹 923"
					transform="translate(-15 -66.902)"
				>
					<animated.text
						transform="translate(1434 3552)"
						fill={matchArry[0] ? animationFillStyle.fillColor : "#5a5a77"}
						font-size="14"
						font-family="Pretendard-Regular, Pretendard"
						fontWeight={matchArry[0] ? animationFillStyle.fontWeight : "0"}
                        style={animationShowStyle}
					>
						<tspan x="0" y="0">
							{libraries[0]}
						</tspan>
					</animated.text>
					<animated.text
						transform="translate(1434 3595)"
						fill={matchArry[1] ? animationFillStyle.fillColor : "#5a5a77"}
						font-size="14"
						font-family="Pretendard-Regular, Pretendard"
						fontWeight={matchArry[1] ? animationFillStyle.fontWeight : "0"}
                        style={animationShowStyle}
					>
						<tspan x="0" y="0">
							{libraries[1]}
						</tspan>
					</animated.text>
					<animated.text
						transform="translate(1434 3638)"
						fill={matchArry[2] ? animationFillStyle.fillColor : "#5a5a77"}
						font-size="14"
						font-family="Pretendard-Bold, Pretendard"
						fontWeight={matchArry[2] ? animationFillStyle.fontWeight : "0"}
                        style={animationShowStyle}
					>
						<tspan x="0" y="0">
							{libraries[2]}
						</tspan>
					</animated.text>
					<animated.text
						transform="translate(1434 3681)"
						fill={matchArry[3] ? animationFillStyle.fillColor : "#5a5a77"}
						font-size="14"
						font-family="Pretendard-Regular, Pretendard"
						fontWeight={matchArry[3] ? animationFillStyle.fontWeight : "0"}
                        style={animationShowStyle}
					>
						<tspan x="0" y="0">
							{libraries[3]}
						</tspan>
					</animated.text>
				</g>
			) : null}
		</>
	);
};

export default FirstLibrary;
