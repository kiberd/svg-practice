import React from 'react';
import { animated, useSpring } from "react-spring";

const FirstLibrary = () => {

    const animationFillStyle = useSpring({
        from: { fillColor: "transparent" },
        to: { fillColor: "#1210c9" },
        config: { duration: 1000 },
        delay: 7500,
    });

    return (
        <>
			<g
				id="그룹_923"
				data-name="그룹 923"
				transform="translate(-15 -66.902)"
			>
				<animated.text
					id="Naïve_Bayes"
					data-name="Naïve Bayes"
					transform="translate(1434 3552)"
					fill={animationFillStyle.fillColor}
					font-size="14"
					font-family="Pretendard-Regular, Pretendard"
				>
					<tspan x="0" y="0">
						Naïve Bayes
					</tspan>
				</animated.text>
				<animated.text
					id="Decision_Tree"
					data-name="Decision Tree"
					transform="translate(1434 3595)"
					fill={animationFillStyle.fillColor}
					font-size="14"
					font-family="Pretendard-Regular, Pretendard"
				>
					<tspan x="0" y="0">
						Decision Tree
					</tspan>
				</animated.text>
				<animated.text
					id="Random_Forest"
					data-name="Random Forest"
					transform="translate(1434 3638)"
					fill={animationFillStyle.fillColor}
					font-size="14"
					font-family="Pretendard-Bold, Pretendard"
					// font-weight="700"
				>
					<tspan x="0" y="0">
						Random Forest
					</tspan>
				</animated.text>
				<animated.text
					id="K_Nearest_Neighbors"
					data-name="K Nearest Neighbors"
					transform="translate(1434 3681)"
					fill={animationFillStyle.fillColor}
					font-size="14"
					font-family="Pretendard-Regular, Pretendard"
				>
					<tspan x="0" y="0">
						K Nearest Neighbors
					</tspan>
				</animated.text>
			</g>
		</>
    );
};

export default FirstLibrary;