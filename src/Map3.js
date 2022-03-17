import React, { useEffect, useState } from "react";

import Background from "./shapes/Background";

import Rectangle from "./shapes/Rectangle";
import FirstText from "./shapes/FirstText";
import FirstLine from "./shapes/FirstLine";

import Circle from "./shapes/Circle";
import SecondText from "./shapes/SecondText";
import SecondLine from "./shapes/SecondLine";

import TripleRectangle from "./shapes/TripleRectangle";
import ThirdText from "./shapes/ThirdText";
import ThirdLine from "./shapes/ThirdLine";

import QuadCricle from "./shapes/QuadCricle";
import FourthText from "./shapes/FourthText";

import { useWindowFocus } from "./CustomHooks";

const Map3 = () => {

	const [init, setInit] = useState(false);
	const [rest, setRest] = useState(false);

    useEffect(() => {
        
        let timer;
       
        if (rest && !init) timer = setTimeout(animationStart, 5000);
        return () => clearTimeout(timer);
        
    } ,[rest, init]);
    
    const handleRest = () => {
        // setRest(true);
        // setInit(false);
        animationStop();
    };

    const animationStart = () => {
        setRest(false);
        setInit(true);
    };

    const animationStop = () => {
        setRest(true);
        setInit(false);
    };

    const { onFocus, onBlur } = useWindowFocus();

    useEffect(() => {
        console.log(onFocus);
        console.log(onBlur);
    }, [onFocus, onBlur]);

	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="830"
				height="499"
				viewBox="0 0 830 499"
			>
				<g
					id="그룹_939"
					data-name="그룹 939"
					transform="translate(-963 -2425)"
				>

					<Background />

					{/* First shape */}
					<Rectangle color={"#1816c9"} init={init} rest={rest} />
					<FirstText color={"#1816c9"} init={init} rest={rest} />
					<FirstLine init={init} rest={rest} />

					<Circle color={"#1816c9"} init={init} rest={rest} />
					<SecondText color={"#1816c9"} init={init} rest={rest} />
					<SecondLine init={init} rest={rest} />

					<TripleRectangle color={"#1816c9"} init={init} rest={rest} />
					<ThirdText color={"#1816c9"} init={init} rest={rest} />
					<ThirdLine init={init} rest={rest} />

					<QuadCricle color={"#1816c9"} init={init} rest={rest} />
					<FourthText color={"#1816c9"} init={init} rest={rest} onHandleRest={handleRest}/>
				</g>
			</svg>
		</>
	);
};

export default Map3;
