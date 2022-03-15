import React, { useState } from "react";
import { useInterval } from "./CustomHooks";

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

const Map3 = () => {

    const [init, setInit] = useState(true);
    const [isLoop, setIsLoop] = useState(false);

	const [toggle, setToggle] = useState(false);
	// const [index, setIndex] = useState(0);

    useInterval(() => {
        // console.log('loop');
        // console.log("init : ", init);
        // console.log("isLoop : ", isLoop)
        if(init && isLoop) {
            setInit(!init);
            setToggle(true);
        }
    }, 1000);

    const handleRest = () => {
        // console.log('handleRest');
        setTimeout( setInit(true), 2000 );
    };

	return (
		<>
			<button
				type="button"
				onClick={() => {
                    setInit(!init);
					setToggle(!toggle);
					// setIndex(0);
				}}
			>
				Toggle scenario 1 animation
			</button>
			<button
				type="button"
				onClick={() => {
                    setInit(!init);
					setToggle(!toggle);
					// setIndex(1);
				}}
			>
				Toggle scenario 2 animation
			</button>
			<button
				type="button"
				onClick={() => {
                    setInit(!init);
					setToggle(!toggle);
					// setIndex(2);
				}}
			>
				Toggle scenario 3 animation
			</button>
            <button
				type="button"
				onClick={ () => { setIsLoop(!isLoop) } }
			>
				Random Loop
			</button>
			<button
				type="button"
				onClick={() => {
					window.location.reload();
				}}
			>
				Reset
			</button>

			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns="http://www.w3.org/1999/xlink"
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

					<Rectangle color={"#1816c9"} toggle={toggle} init={init} />
					<FirstText color={"#1816c9"} toggle={toggle} init={init}/>
					<FirstLine color={"#1816c9"} toggle={toggle} init={init}/>

					<Circle color={"#1816c9"} toggle={toggle} init={init}/>
					<SecondText color={"#1816c9"} toggle={toggle} init={init}/>
					<SecondLine color={"#1816c9"} toggle={toggle} init={init}/>

					<TripleRectangle color={"#1816c9"} toggle={toggle} init={init}/>
					<ThirdText color={"#1816c9"} toggle={toggle} init={init}/>
					<ThirdLine color={"#1816c9"} toggle={toggle} init={init}/>

					<QuadCricle color={"#1816c9"} toggle={toggle} init={init}/>
					<FourthText color={"#1816c9"} toggle={toggle} init={init} onHandleRest={handleRest} />
				</g>
			</svg>
		</>
	);
};

export default Map3;
