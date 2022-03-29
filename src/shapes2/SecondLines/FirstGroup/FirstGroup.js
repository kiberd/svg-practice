import React, { useState, useRef, useEffect } from "react";
import { animated, useSpring } from "react-spring";

const FirstGroup = ({ init }) => {

    const firstLineRef = useRef(null);
    const secondLineRef = useRef(null);
    const thirdLineRef = useRef(null);
    const fourthLineRef = useRef(null);

	const [firstLength, setFirstLength] = useState(null);
    const [secondLength, setSecondLength] = useState(null);
    const [thirdLength, setThirdLength] = useState(null);
    const [fourthLength, setFourthLength] = useState(null);

	useEffect(() => {
        if ( firstLineRef.current && secondLineRef.current && thirdLineRef.current && fourthLineRef.current){
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
        reset: init
	});

    const secondAnimatedStyle = useSpring({
		from: { secondLength },
		to: { secondLength: 0 },
		delay: 5500,
		config: { duration: 1000 },
        reset: init
	});

    const thirdAnimatedStyle = useSpring({
		from: { thirdLength },
		to: { thirdLength: 0 },
		delay: 5500,
		config: { duration: 1000 },
        reset: init
	});

    const fourthAnimatedStyle = useSpring({
		from: { fourthLength },
		to: { fourthLength: 0 },
		delay: 5500,
		config: { duration: 1000 },
        reset: init
	});

    const animationFillStyle = useSpring({
		from: { fillColor: "transparent" },
		to: { fillColor: "#1210c9" },
		config: { duration: 300 },
        delay: 6500,
        reset: init
	});

	return (
		<>
			<g
				id="그룹_927"
				data-name="그룹 927"
				transform="translate(1272.215 3473.455)"
			>

				<animated.path
					id="다각형_4"
					data-name="다각형 4"
					d="M5.5,0,11,14H0Z"
					transform="translate(111.568 0) rotate(62)"
					// fill="#e9e8e8"
                    fill={animationFillStyle.fillColor}
				/>
				<animated.path
					id="다각형_5"
					data-name="다각형 5"
					d="M5.5,0,11,14H0Z"
					transform="translate(111.804 43.199) rotate(65)"
					// fill="#e9e8e8"
                    fill={animationFillStyle.fillColor}
				/>
				<animated.path
					id="다각형_6"
					data-name="다각형 6"
					d="M5.5,0,11,14H0Z"
					transform="matrix(0.309, 0.951, -0.951, 0.309, 112.885, 86.748)"
					// fill="#e9e8e8"
                    fill={animationFillStyle.fillColor}
				/>
				<animated.path
					id="다각형_7"
					data-name="다각형 7"
					d="M5.5,0,11,14H0Z"
					transform="translate(111.798 130.287) rotate(71)"
					// fill="#e9e8e8"
                    fill={animationFillStyle.fillColor}
				/>


				<animated.path
                    ref={firstLineRef}
					id="패스_10338"
					data-name="패스 10338"
					d="M5680.675,3799.083s45.913-61.025,46.267-128.506,31.368-103.935,65.942-120.385"
					transform="translate(-5680.675 -3544.358)"
					fill="none"
					stroke="#1210c9"
                    strokeDashoffset={firstAnimatedStyle.firstLength}
				    strokeDasharray={firstLength}
					stroke-width="1"
				/>
				<animated.path
                    ref={secondLineRef}
					id="패스_10339"
					data-name="패스 10339"
					d="M5680.675,3756.52s43.3-51.776,49.924-110.578,27.71-82.113,62.284-95.75"
					transform="translate(-5680.675 -3501.795)"
					fill="none"
					stroke="#1210c9"
                    strokeDashoffset={secondAnimatedStyle.secondLength}
				    strokeDasharray={secondLength}
					stroke-width="1"
				/>
				<animated.path
                    ref={thirdLineRef}
					id="패스_10340"
					data-name="패스 10340"
					d="M5680.675,3712.116s40.563-52.748,55.284-92.06,22.351-59.163,56.924-69.864"
					transform="translate(-5680.675 -3457.391)"
					fill="none"
					stroke="#1210c9"
                    strokeDashoffset={thirdAnimatedStyle.thirdLength}
				    strokeDasharray={thirdLength}
					stroke-width="1"
				/>
				<animated.path
                    ref={fourthLineRef}
					id="패스_10341"
					data-name="패스 10341"
					d="M5680.675,3669.275a525.4,525.4,0,0,0,38.114-53.156c17.418-28.282,39.521-58.057,74.095-65.928"
					transform="translate(-5680.675 -3414.55)"
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

export default React.memo(FirstGroup);
