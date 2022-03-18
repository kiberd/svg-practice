import React, { useState, useRef, useEffect } from "react";
import { animated, useSpring } from "react-spring";

const pathArr = [
    "M1085,460 c-53,128 -336,-16 -387,138",
    "M885,460 c-53,128 -336,-16 -387,138",
    "M1470,460 c-53,128 -336,-16 -387,138",
];

const SecondLine = ({ init, rest }) => {
    

    const lineRef = useRef(null);
	const [length, setLength] = useState(null);

	useEffect(() => {
		setLength(lineRef.current.getTotalLength());
	}, [length]);

	const animatedStyle = useSpring({
		from: { length },
		to: { length: 0 },
		delay: 4000,
		config: { duration: 1200 },
		reset: init,
	});

    useEffect(() => {
        if (init) {
            lineRef.current.setAttribute("stroke-dashoffset", length);
        }
    } ,[init]);

    useEffect(() => {
        let timer;
		if (rest && length && lineRef && lineRef.current) {
            timer = setTimeout(() => {
                lineRef.current.setAttribute("stroke-dashoffset", length);
            }, 3000);
		}
        return () => clearTimeout(timer);
	}, [rest, length, lineRef]);

	return (
		<>
			<animated.path
                ref={lineRef}
				id="패스_119"
				data-name="패스 119"
				d="M1469,2476.5s-3.467,28.966-143.7,29.1-146.8,42.4-146.8,42.4"
				transform="translate(6 159)"
				fill="transparent"
				stroke="#1210c7"
				strokeDashoffset={animatedStyle.length}
				strokeDasharray={length}
				strokeWidth={3}
			/>
		</>
	);
};

export default SecondLine;
