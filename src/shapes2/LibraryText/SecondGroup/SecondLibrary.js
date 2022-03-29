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

const SecondLibrary = ({ rankInfo, init }) => {
	const animationFillStyle = useSpring({
		from: { fillColor: "#5a5a77", fontWeight: "400" },
		to: { fillColor: "#1210c9", fontWeight: "800" },
		config: { duration: 1500 },
		delay: 9500,
        reset: init
	});

    const animationShowStyle = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		config: { duration: 1500 },
		reset: init,
	});

	const [matchArry, setMatchArry] = useState();

	// 4, 5, 6, 7
	useEffect(() => {
		if (rankInfo) {
			const indexArry = [4, 5, 6, 7];
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
					id="그룹_886"
					data-name="그룹 886"
					transform="translate(-44 -40.902)"
				>
					<animated.text
						id="Linear_Regression"
						data-name="Linear Regression"
						transform="translate(1463 3741)"
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
						id="Logistic_Regression"
						data-name="Logistic Regression"
						transform="translate(1463 3784)"
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
						id="Lasso_Regression"
						data-name="Lasso Regression"
						transform="translate(1463 3827)"
						fill={matchArry[2] ? animationFillStyle.fillColor : "#5a5a77"}
						font-size="14"
						font-family="Pretendard-Regular, Pretendard"
						fontWeight={matchArry[2] ? animationFillStyle.fontWeight : "0"}
                        style={animationShowStyle}
					>
						<tspan x="0" y="0">
                            {libraries[2]}
						</tspan>
					</animated.text>
					<animated.text
						id="Multiple_Regression"
						data-name="Multiple Regression"
						transform="translate(1463 3870)"
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

export default SecondLibrary;
