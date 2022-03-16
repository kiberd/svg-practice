import React, { useState, useRef, useEffect } from "react";
import { useInterval } from "./CustomHooks";

import { useSpring, useChain, useSpringRef, animated } from "react-spring";

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
	const [init, setInit] = useState(false);
	const [isLoop, setIsLoop] = useState(true);

	const [toggle, setToggle] = useState(false);
	// const [index, setIndex] = useState(0);

	// useInterval(() => {
	// 	// console.log('loop');
	// 	// console.log("init : ", init);
	// 	// console.log("isLoop : ", isLoop)
        
	// 	// if (init && isLoop) {
	// 	// 	setInit(!init);
	// 	// }

    //     console.log(init);
    //     if (init) setInit(false);
	// }, 1000);

	// const handleRest = () => {
	// 	console.log("handleRest");
	// 	setTimeout(setInit(true), 2000);
	// };

	
    const showStyle = useSpring({
        to: { fillColor: "#1816c9" },
        from: { fillColor: "#b8b8c6" },
		config: { duration: 1000 },
    });

    const hideStyle = useSpring({
        to: { fillColor: "#b8b8c6" },
        from: { fillColor: "#1816c9" },
		config: { duration: 0 },
        delay: 5000,
    });

    const styleRef = useSpringRef();

	const firstShapeStyle = useSpring({
		ref: styleRef,
        to: async (next, cancel) => {
            await next(showStyle)
            await next(hideStyle)
        },
		from: { fillColor: "#b8b8c6" },
	});

    useEffect(() => {
        styleRef.start();
    }, [styleRef]);



    






    const firstLineRef = useRef(null);
	const [firstLineLength, setFirstLineLength] = useState(null);

    useEffect(() => {
		setFirstLineLength(firstLineRef.current.getTotalLength());
	}, [firstLineLength]);

    const lineShowStyle = useSpring({
        to: { firstLineLength: 0 },
		from: { firstLineLength },
		config: { duration: 1000 },
        
	});

    const lineHideStyle = useSpring({
		firstLineLength: 0,
		config: { duration: 0 },
        delay: 5000,
	});

    // const firstLineStyleRef = useSpringRef();

    const firstLineStyle = useSpring({
		// ref: firstLineStyleRef,
        to: async (next, cancel) => {
            await next(lineShowStyle)
            await next(lineHideStyle)
        },
		from: { firstLineLength },
	});

    // useEffect(() => {
    //     firstLineStyleRef.start();
    // } ,[firstLineStyle])

    



    

    // useChain( !init ? [firstShapeShowApi, firstLineShowApi] : [firstShapeHideApi, firstLineHideApi], !init ? [0, 1] : [0, 0], 2000 );
    // useChain( [firstShapeShowApi, firstLineShowApi], [0, 1], 2000 );

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
					setIsLoop(!isLoop);
				}}
			>
				Random Loop
			</button>

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
					<animated.rect
						fill={firstShapeStyle.fillColor}
                        
						id="사각형_59"
						data-name="사각형 59"
						width="25"
						height="25"
						transform="translate(1168 2425)"
					/>
					<animated.text
						fill={firstShapeStyle.fillColor}
                        
						id="상장기업"
						transform="translate(1156 2471)"
						font-size="14"
						font-family="MalgunGothic, Malgun Gothic"
					>
						<tspan x="0" y="0">
							상장기업
						</tspan>
					</animated.text>


                    {/* First line */}
					<animated.path
						ref={firstLineRef}
						id="패스_58"
						data-name="패스 58"
						d="M1178.5,2476.5s3.515,33.829,145.676,33.991S1473,2560,1473,2560"
						transform="translate(2 4.501)"
						fill="transparent"
						stroke="#1210c7"
						strokeDashoffset={firstLineStyle.firstLineLength}
						strokeDasharray={firstLineLength}
						strokeWidth={3}
					/>

					{/* <Rectangle color={"#1816c9"} toggle={toggle} init={init} />
					<FirstText color={"#1816c9"} toggle={toggle} init={init}/>
					<FirstLine color={"#1816c9"} toggle={toggle} init={init} />

					<Circle color={"#1816c9"} toggle={toggle} init={init}/>
					<SecondText color={"#1816c9"} toggle={toggle} init={init}/>
					<SecondLine color={"#1816c9"} toggle={toggle} init={init}/>

					<TripleRectangle color={"#1816c9"} toggle={toggle} init={init}/>
					<ThirdText color={"#1816c9"} toggle={toggle} init={init}/>
					<ThirdLine color={"#1816c9"} toggle={toggle} init={init}/>

					<QuadCricle color={"#1816c9"} toggle={toggle} init={init}/>
					<FourthText color={"#1816c9"} toggle={toggle} init={init}/> */}
				</g>
			</svg>
		</>
	);
};

export default Map3;
