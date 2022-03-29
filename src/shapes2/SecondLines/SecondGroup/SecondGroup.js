import React, { useState, useRef, useEffect } from "react";
import { animated, useSpring } from "react-spring";

const SecondGroup = ({ init }) => {
	const firstLineRef = useRef(null);
	const secondLineRef = useRef(null);
	const thirdLineRef = useRef(null);
	const fourthLineRef = useRef(null);

	const [firstLength, setFirstLength] = useState(null);
	const [secondLength, setSecondLength] = useState(null);
	const [thirdLength, setThirdLength] = useState(null);
	const [fourthLength, setFourthLength] = useState(null);

	useEffect(() => {
		if (
			firstLineRef.current &&
			secondLineRef.current &&
			thirdLineRef.current &&
			fourthLineRef.current
		) {
			setFirstLength(firstLineRef.current.getTotalLength());
			setSecondLength(secondLineRef.current.getTotalLength());
			setThirdLength(thirdLineRef.current.getTotalLength());
			setFourthLength(fourthLineRef.current.getTotalLength());
		}
	}, [firstLineRef, secondLineRef, thirdLineRef, fourthLineRef]);

	const firstAnimatedStyle = useSpring({
		from: { firstLength },
		to: { firstLength: 0 },
		delay: 5500,
		config: { duration: 1000 },
		reset: init,
	});

	const secondAnimatedStyle = useSpring({
		from: { secondLength },
		to: { secondLength: 0 },
		delay: 5500,
		config: { duration: 1000 },
		reset: init,
	});

	const thirdAnimatedStyle = useSpring({
		from: { thirdLength },
		to: { thirdLength: 0 },
		delay: 5500,
		config: { duration: 1000 },
		reset: init,
	});

	const fourthAnimatedStyle = useSpring({
		from: { fourthLength },
		to: { fourthLength: 0 },
		delay: 5500,
		config: { duration: 1000 },
		reset: init,
	});

	const animationFillStyle = useSpring({
		from: { fillColor: "transparent" },
		to: { fillColor: "#1210c9" },
		config: { duration: 300 },
		delay: 6500,
		reset: init,
	});

	return (
		<>
			<g
				id="그룹_929"
				data-name="그룹 929"
				// transform="translate(1249 3694.485)"
				transform="translate(1272.215 3694.485)"
			>
				<animated.path
					id="다각형_4-2"
					data-name="다각형 4"
					// d="M5.5,0,11,14H0Z"
					// transform="translate(136.646) rotate(76)"
                    d="M5.5,0,11,14H0Z"
					transform="translate(113.432 0) rotate(76)"
					fill={animationFillStyle.fillColor}
				/>
				<animated.path
					id="다각형_5-2"
					data-name="다각형 5"
					// d="M5.5,0,11,14H0Z"
					// transform="matrix(0.087, 0.996, -0.996, 0.087, 137.494, 41.94)"
                    d="M5.5,0,11,14H0Z"
					transform="matrix(0.087, 0.996, -0.996, 0.087, 114.279, 41.94)"
					fill={animationFillStyle.fillColor}
				/>
				<animated.path
					id="다각형_6-2"
					data-name="다각형 6"
					// d="M5.5,0,11,14H0Z"
					// transform="matrix(0.052, 0.999, -0.999, 0.052, 137.888, 81.999)"
                    d="M5.5,0,11,14H0Z"
					transform="matrix(0.052, 0.999, -0.999, 0.052, 114.673, 81.999)"
					fill={animationFillStyle.fillColor}
				/>
				<animated.path
					id="다각형_7-2"
					data-name="다각형 7"
					// d="M5.5,0,11,14H0Z"
					// transform="translate(137.061 126.205) rotate(89)"
                    d="M5.5,0,11,14H0Z"
					transform="translate(113.846 126.205) rotate(89)"
					fill={animationFillStyle.fillColor}
				/>

				<animated.path
					ref={firstLineRef}
					id="패스_10338-2"
					data-name="패스 10338"
					// d="M5656.765,3641.623s35.572-9.377,64.681-43.248,39.064-38.921,69.827-48.183"
					// transform="translate(-5655.848 -3544.47)"
					d="M5656.765,3641.623s29.433-9.377,53.518-43.248,32.321-38.921,57.775-48.183"
					transform="translate(-5655.848 -3544.47)"
					fill="none"
					stroke="#1210c9"
					strokeDashoffset={firstAnimatedStyle.firstLength}
					strokeDasharray={firstLength}
					stroke-width="1"
				/>
				<animated.path
					ref={secondLineRef}
					id="패스_10339-2"
					data-name="패스 10339"
					// d="M5680.674,3599.113s30.788-2.9,63.308-21.216,55.49-27.981,72.116-27.705"
					// transform="translate(-5680.674 -3501.907)"
					d="M5680.674,3599.113s25.51-2.9,52.455-21.216,45.978-27.981,59.754-27.705"
					transform="translate(-5680.674 -3501.907)"
					fill="none"
					stroke="#1210c9"
					strokeDashoffset={secondAnimatedStyle.secondLength}
					strokeDasharray={secondLength}
					stroke-width="1"
				/>
				<animated.path
					ref={thirdLineRef}
					id="패스_10340-2"
					data-name="패스 10340"
					// d="M5680.674,3554.709s39.58-.068,68.646-4.516,53.3-5.895,64.986-4.969"
					// transform="translate(-5680.674 -3457.503)"
					d="M5680.674,3554.709s32.7-.068,56.721-4.516,44.04-5.895,53.7-4.969"
					transform="translate(-5680.674 -3457.503)"
					fill="none"
					stroke="#1210c9"
					strokeDashoffset={thirdAnimatedStyle.thirdLength}
					strokeDasharray={thirdLength}
					stroke-width="1"
				/>
				<animated.path
					ref={fourthLineRef}
					id="패스_10341-2"
					data-name="패스 10341"
					// d="M5680.674,3550.192s10.3-4.488,50.037,14.408,85.634,20.984,84.649,20.158"
					// transform="translate(-5680.674 -3452.986)"
					d="M5680.674,3550.192s8.522-4.488,41.414,14.408,70.875,20.984,70.061,20.158"
					transform="translate(-5680.674 -3452.986)"
					fill="none"
					stroke="#1210c9"
					strokeDashoffset={fourthAnimatedStyle.fourthLength}
					strokeDasharray={fourthLength}
					stroke-width="1"
				/>
			</g>
		</>
	);
};

export default React.memo(SecondGroup);
