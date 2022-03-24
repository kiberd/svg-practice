import React, { useState, useRef, useEffect } from "react";
import { animated, useSpring } from "react-spring";

const ThirdGroup = () => {

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
	});

    const secondAnimatedStyle = useSpring({
		from: { secondLength },
		to: { secondLength: 0 },
		delay: 5500,
		config: { duration: 1000 },
	});

    const thirdAnimatedStyle = useSpring({
		from: { thirdLength },
		to: { thirdLength: 0 },
		delay: 5500,
		config: { duration: 1000 },
	});

    const fourthAnimatedStyle = useSpring({
		from: { fourthLength },
		to: { fourthLength: 0 },
		delay: 5500,
		config: { duration: 1000 },
	});

    const animationFillStyle = useSpring({
		from: { fillColor: "transparent" },
		to: { fillColor: "#1210c9" },
		config: { duration: 300 },
        delay: 6500,
	});

    return (
        <>
			<g
				id="그룹_928"
				data-name="그룹 928"
				transform="translate(1254.149 3853.948)"
			>


				<animated.path
					id="다각형_4-3"
					data-name="다각형 4"
					d="M5.5,0,11,14H0Z"
					transform="matrix(-0.469, 0.883, -0.883, -0.469, 134.799, 186.163)"
					fill={animationFillStyle.fillColor}
				/>
				<animated.path
					id="다각형_5-3"
					data-name="다각형 5"
					d="M5.5,0,11,14H0Z"
					transform="translate(134.519 142.707) rotate(115)"
					fill={animationFillStyle.fillColor}
				/>
				<animated.path
					id="다각형_6-3"
					data-name="다각형 6"
					d="M5.5,0,11,14H0Z"
					transform="matrix(-0.309, 0.951, -0.951, -0.309, 134.351, 98.666)"
					fill={animationFillStyle.fillColor}
				/>
				<animated.path
					id="패스_10342"
					data-name="패스 10342"
					d="M5.5,0,11,14H0Z"
					transform="translate(133.445 55.187) rotate(109)"
					fill={animationFillStyle.fillColor}
				/>



				<animated.path
                    ref={firstLineRef}
					id="패스_10338-3"
					data-name="패스 10338"
					d="M5661,3609.043s66.427,2.174,66.768,69.656,30.209,103.935,63.507,120.385"
					transform="translate(-5660.996 -3609.042)"
					fill="none"
					stroke="#1210c9"
                    strokeDashoffset={firstAnimatedStyle.firstLength}
				    strokeDasharray={firstLength}
					stroke-width="1"
				/>
				<animated.path
                    ref={secondLineRef}
					id="패스_10339-3"
					data-name="패스 10339"
					d="M5661.634,3609.3s65.609,1.793,72.026,60.7,24.767,73.119,58.249,86.78"
					transform="translate(-5661.634 -3609.299)"
					fill="none"
					stroke="#1210c9"
                    strokeDashoffset={secondAnimatedStyle.secondLength}
				    strokeDasharray={secondLength}
					stroke-width="1"
				/>
				<animated.path
                    ref={thirdLineRef}
					id="패스_10340-3"
					data-name="패스 10340"
					d="M5661.5,3609.779s60.7,2.838,74.937,42.432,21.893,49.863,55.338,60.641"
					transform="translate(-5661.503 -3609.779)"
					fill="none"
					stroke="#1210c9"
                    strokeDashoffset={thirdAnimatedStyle.thirdLength}
				    strokeDasharray={thirdLength}
					stroke-width="1"
				/>
				<animated.path
                    ref={fourthLineRef}
					id="패스_10341-3"
					data-name="패스 10341"
					d="M5661.595,3609.814s50.073,2.113,73.229,27.406,23.575,24.854,57.047,32.827"
					transform="translate(-5661.595 -3609.813)"
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

export default ThirdGroup;