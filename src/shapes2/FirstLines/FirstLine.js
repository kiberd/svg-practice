import React, { useState, useRef, useEffect } from "react";
import { animated, useSpring } from "react-spring";

const FirstLine = () => {

    const firstLineRef = useRef(null);
    const secondLineRef = useRef(null);
    const thirdLineRef = useRef(null);

	const [firstLength, setFirstLength] = useState(null);
    const [secondLength, setSecondLength] = useState(null);
    const [thirdLength, setThirdLength] = useState(null);

	useEffect(() => {
        if ( firstLineRef.current && secondLineRef.current && thirdLineRef.current){
            setFirstLength(firstLineRef.current.getTotalLength());
            setSecondLength(secondLineRef.current.getTotalLength());
            setThirdLength(thirdLineRef.current.getTotalLength());
        }
	}, [firstLineRef, secondLineRef, thirdLineRef]);

	const firstAnimatedStyle = useSpring({
		from: { firstLength },
		to: { firstLength: 0 },
		delay: 2000,
		config: { duration: 1000 },
	});

    const secondAnimatedStyle = useSpring({
		from: { secondLength },
		to: { secondLength: 0 },
		delay: 2000,
		config: { duration: 1000 },
	});

    const thirdAnimatedStyle = useSpring({
		from: { thirdLength },
		to: { thirdLength: 0 },
		delay: 2000,
		config: { duration: 1000 },
	});

	return (
		<>
			<animated.path
                ref={firstLineRef}
				id="패스_10311"
				data-name="패스 10311"
				d="M5425.8,3648.5s55.823-.565,55.651,80.978,60.445,70.214,60.445,70.214"
				transform="translate(-4389.799 -70.902)"
				fill="none"
				stroke="#1210c9"
                strokeDashoffset={firstAnimatedStyle.firstLength}
				strokeDasharray={firstLength}
				stroke-linecap="round"
				stroke-width="2"
			/>
			<animated.path
                ref={secondLineRef}
				id="패스_10312"
				data-name="패스 10312"
				d="M5425.8,3648.5s55.823-.375,55.651,53.682,60.445,46.546,60.445,46.546"
				transform="translate(-4389.799 106.098)"
				fill="none"
				stroke="#1210c9"
                strokeDashoffset={secondAnimatedStyle.secondLength}
				strokeDasharray={secondLength}
				stroke-linecap="round"
				stroke-width="2"
			/>
			<animated.path
                ref={thirdLineRef}
				id="패스_10313"
				data-name="패스 10313"
				d="M5425.8,3800.227s55.823.565,55.651-80.977,60.445-70.214,60.445-70.214"
				transform="translate(-4389.799 141.371)"
				fill="none"
				stroke="#1210c9"
                strokeDashoffset={thirdAnimatedStyle.thirdLength}
				strokeDasharray={thirdLength}
				stroke-linecap="round"
				stroke-width="2"
			/>
		</>
	);
};

export default FirstLine;
