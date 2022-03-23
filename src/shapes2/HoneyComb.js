import React, { useEffect, useRef, useState } from "react";

import { animated, useSpring } from "react-spring";

const coordinateIndex = [ {x: -33, y: -89.152}, {x: -33, y: 87.848}, {x: -33, y: 274.848} ];




function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const HoneyComb = () => {

    const groupRef = useRef(null);

    const animationFillStyle = useSpring({
		from: { fillColor: '#e9e8e8' },
		to: { fillColor: '#1210c9' },
		config: { duration: 1000 },
	});

    const [randomColorIndex, setRandomColorIndex] = useState([]);
    const [elementArry, setElementArry] = useState();

    useEffect(() => {
        
        if (groupRef && groupRef.current){
            
            
            
            
            const colorIndex = [];
            const elements = [];

            groupRef.current.childNodes.forEach((node, index) => {

                elements.push(node);
                
                const randomBool = rand(0, 1);
                
                if(randomBool){
                    colorIndex.push('#1210c9');
                } else {
                    colorIndex.push('#e9e8e8');
                }
                
            });
            setElementArry(elements);
            // console.log(colorIndex);
        }

    } ,[groupRef])

	return (
		<>
			<g
				id="그룹_882"
				data-name="그룹 882"
				transform="translate(-33 -89.152)"
			>
				<g
					id="그룹_881"
					data-name="그룹 881"
					transform="translate(966 3615)"
                    ref={groupRef}
				>
					{/* #1210c9 : fill color */}
                    {/* #e9e8e8 : unfill color */}
					<path
						id="패스_10269"
						data-name="패스 10269"
						d="M4.429,66.161,0,73.832,4.429,81.5h8.858l4.429-7.671-4.429-7.671Z"
						transform="translate(0 -50.132)"
						fill="#e9e8e8"
					/>
					<path
						id="패스_10270"
						data-name="패스 10270"
						d="M4.429,132.32,0,139.992l4.429,7.671h8.858l4.429-7.671-4.429-7.671Z"
						transform="translate(0 -100.263)"
						fill="#1210c9"
					/>
					<path
						id="패스_10271"
						data-name="패스 10271"
						d="M4.429,198.481,0,206.152l4.429,7.671h8.858l4.429-7.671-4.429-7.671Z"
						transform="translate(0 -150.395)"
						fill="#e9e8e8"
					/>
					<path
						id="패스_10272"
						data-name="패스 10272"
						d="M4.429,264.642,0,272.313l4.429,7.671h8.858l4.429-7.671-4.429-7.671Z"
						transform="translate(0 -200.527)"
						fill="#e9e8e8"
					/>
					<path
						id="패스_10273"
						data-name="패스 10273"
						d="M4.429,330.8,0,338.474l4.429,7.671h8.858l4.429-7.671L13.286,330.8Z"
						transform="translate(0 -250.659)"
						fill="#e9e8e8"
					/>
					<path
						id="패스_10274"
						data-name="패스 10274"
						d="M118.742,81.5l-4.429-7.671,4.429-7.671H127.6l4.429,7.671L127.6,81.5Z"
						transform="translate(-86.619 -50.132)"
						fill="#e9e8e8"
					/>
					<path
						id="패스_10275"
						data-name="패스 10275"
						d="M118.742,147.663l-4.429-7.671,4.429-7.671H127.6l4.429,7.671-4.429,7.671Z"
						transform="translate(-86.619 -100.263)"
						fill="#e9e8e8"
					/>
					<path
						id="패스_10276"
						data-name="패스 10276"
						d="M118.742,213.824l-4.429-7.671,4.429-7.671H127.6l4.429,7.671-4.429,7.671Z"
						transform="translate(-86.619 -150.396)"
						fill="#e9e8e8"
					/>
					<path
						id="패스_10277"
						data-name="패스 10277"
						d="M118.742,279.984l-4.429-7.671,4.429-7.671H127.6l4.429,7.671-4.429,7.671Z"
						transform="translate(-86.619 -200.527)"
						fill="#e9e8e8"
					/>
					<path
						id="패스_10278"
						data-name="패스 10278"
						d="M118.742,346.145l-4.429-7.671,4.429-7.671H127.6l4.429,7.671-4.429,7.671Z"
						transform="translate(-86.619 -250.66)"
						fill="#e9e8e8"
					/>
					<path
						id="패스_10279"
						data-name="패스 10279"
						d="M61.678,114.583l-4.429-7.671,4.429-7.671h8.858l4.429,7.671-4.429,7.671Z"
						transform="translate(-43.38 -75.198)"
						fill="#e9e8e8"
					/>
					<path
						id="패스_10280"
						data-name="패스 10280"
						d="M61.678,180.744l-4.429-7.671,4.429-7.671h8.858l4.429,7.671-4.429,7.671Z"
						transform="translate(-43.38 -125.33)"
						fill="#e9e8e8"
					/>
					<path
						id="패스_10281"
						data-name="패스 10281"
						d="M61.678,246.9l-4.429-7.671,4.429-7.671h8.858l4.429,7.671L70.536,246.9Z"
						transform="translate(-43.38 -175.461)"
						fill="#e9e8e8"
					/>
					<path
						id="패스_10282"
						data-name="패스 10282"
						d="M61.678,313.064l-4.429-7.671,4.429-7.671h8.858l4.429,7.671-4.429,7.671Z"
						transform="translate(-43.38 -225.593)"
						fill="#e9e8e8"
					/>
					<path
						id="패스_10283"
						data-name="패스 10283"
						d="M61.679,363.883l-4.429,7.671,4.429,7.671h8.858l4.429-7.671-4.429-7.671Z"
						transform="translate(-43.38 -275.725)"
						fill="#e9e8e8"
					/>
					<path
						id="패스_10284"
						data-name="패스 10284"
						d="M233.055,81.5l-4.429-7.671,4.429-7.671h8.858l4.429,7.671L241.913,81.5Z"
						transform="translate(-173.237 -50.132)"
						fill="#e9e8e8"
					/>
					<path
						id="패스_10285"
						data-name="패스 10285"
						d="M233.055,147.663l-4.429-7.671,4.429-7.671h8.858l4.429,7.671-4.429,7.671Z"
						transform="translate(-173.237 -100.263)"
						fill="#e9e8e8"
					/>
					<path
						id="패스_10286"
						data-name="패스 10286"
						d="M233.055,213.824l-4.429-7.671,4.429-7.671h8.858l4.429,7.671-4.429,7.671Z"
						transform="translate(-173.237 -150.396)"
						fill="#e9e8e8"
					/>
					<path
						id="패스_10287"
						data-name="패스 10287"
						d="M233.055,279.984l-4.429-7.671,4.429-7.671h8.858l4.429,7.671-4.429,7.671Z"
						transform="translate(-173.237 -200.527)"
						fill="#e9e8e8"
					/>
					<path
						id="패스_10288"
						data-name="패스 10288"
						d="M233.055,346.145l-4.429-7.671,4.429-7.671h8.858l4.429,7.671-4.429,7.671Z"
						transform="translate(-173.237 -250.66)"
						fill="#e9e8e8"
					/>
					<path
						id="패스_10289"
						data-name="패스 10289"
						d="M175.992,114.583l-4.429-7.671,4.429-7.671h8.858l4.429,7.671-4.429,7.671Z"
						transform="translate(-129.999 -75.198)"
						fill="#e9e8e8"
					/>
					<path
						id="패스_10290"
						data-name="패스 10290"
						d="M175.992,180.744l-4.429-7.671,4.429-7.671h8.858l4.429,7.671-4.429,7.671Z"
						transform="translate(-129.999 -125.33)"
						fill="#e9e8e8"
					/>
					<path
						id="패스_10291"
						data-name="패스 10291"
						d="M175.992,246.9l-4.429-7.671,4.429-7.671h8.858l4.429,7.671L184.85,246.9Z"
						transform="translate(-129.999 -175.461)"
						fill="#e9e8e8"
					/>
					<path
						id="패스_10292"
						data-name="패스 10292"
						d="M175.992,313.064l-4.429-7.671,4.429-7.671h8.858l4.429,7.671-4.429,7.671Z"
						transform="translate(-129.999 -225.593)"
						fill="#e9e8e8"
					/>
					<path
						id="패스_10293"
						data-name="패스 10293"
						d="M175.992,363.883l-4.429,7.671,4.429,7.671h8.858l4.429-7.671-4.429-7.671Z"
						transform="translate(-129.999 -275.725)"
						fill="#e9e8e8"
					/>
					<path
						id="패스_10294"
						data-name="패스 10294"
						d="M290.3,114.583l-4.429-7.671L290.3,99.24h8.858l4.429,7.671-4.429,7.671Z"
						transform="translate(-216.617 -75.198)"
						fill="#e9e8e8"
					/>
					<path
						id="패스_10295"
						data-name="패스 10295"
						d="M290.3,180.744l-4.429-7.671L290.3,165.4h8.858l4.429,7.671-4.429,7.671Z"
						transform="translate(-216.617 -125.33)"
						fill="#e9e8e8"
					/>
					<path
						id="패스_10296"
						data-name="패스 10296"
						d="M290.3,246.9l-4.429-7.671,4.429-7.671h8.858l4.429,7.671-4.429,7.671Z"
						transform="translate(-216.617 -175.461)"
						fill="#e9e8e8"
					/>
					<path
						id="패스_10297"
						data-name="패스 10297"
						d="M290.3,313.064l-4.429-7.671,4.429-7.671h8.858l4.429,7.671-4.429,7.671Z"
						transform="translate(-216.617 -225.593)"
						fill="#e9e8e8"
					/>
					<path
						id="패스_10298"
						data-name="패스 10298"
						d="M290.3,363.883l-4.429,7.671,4.429,7.671h8.858l4.429-7.671-4.429-7.671Z"
						transform="translate(-216.617 -275.725)"
						fill="#e9e8e8"
					/>
					<path
						id="패스_10299"
						data-name="패스 10299"
						d="M347.368,66.161l-4.429,7.671,4.429,7.671h8.858l4.429-7.671-4.429-7.671Z"
						transform="translate(-259.856 -50.132)"
						fill="#e9e8e8"
					/>
					<path
						id="패스_10300"
						data-name="패스 10300"
						d="M4.429,0,0,7.671l4.429,7.671h8.858l4.429-7.671L13.286,0Z"
						fill="#e9e8e8"
					/>
					<path
						id="패스_10301"
						data-name="패스 10301"
						d="M118.742,0l-4.429,7.671,4.429,7.671H127.6l4.429-7.671L127.6,0Z"
						transform="translate(-86.619)"
						fill="#e9e8e8"
					/>
					<path
						id="패스_10302"
						data-name="패스 10302"
						d="M61.678,48.422l-4.429-7.671,4.429-7.671h8.858l4.429,7.671-4.429,7.671Z"
						transform="translate(-43.38 -25.066)"
						fill="#e9e8e8"
					/>
					<path
						id="패스_10303"
						data-name="패스 10303"
						d="M233.055,0l-4.429,7.671,4.429,7.671h8.858l4.428-7.671L241.913,0Z"
						transform="translate(-173.237)"
						fill="#e9e8e8"
					/>
					<path
						id="패스_10304"
						data-name="패스 10304"
						d="M175.992,48.422l-4.429-7.671,4.429-7.671h8.858l4.429,7.671-4.429,7.671Z"
						transform="translate(-129.999 -25.066)"
						fill="#e9e8e8"
					/>
					<path
						id="패스_10305"
						data-name="패스 10305"
						d="M290.3,48.422l-4.429-7.671L290.3,33.08h8.858l4.429,7.671-4.429,7.671Z"
						transform="translate(-216.617 -25.066)"
						fill="#e9e8e8"
					/>
					<path
						id="패스_10306"
						data-name="패스 10306"
						d="M347.368,0l-4.429,7.671,4.429,7.671h8.858l4.429-7.671L356.226,0Z"
						transform="translate(-259.856)"
						fill="#e9e8e8"
					/>
					<path
						id="패스_10307"
						data-name="패스 10307"
						d="M347.368,132.32l-4.429,7.671,4.429,7.671h8.858l4.429-7.671-4.429-7.671Z"
						transform="translate(-259.856 -100.263)"
						fill="#e9e8e8"
					/>
					<path
						id="패스_10308"
						data-name="패스 10308"
						d="M347.368,198.481l-4.429,7.671,4.429,7.671h8.858l4.429-7.671-4.429-7.671Z"
						transform="translate(-259.856 -150.395)"
						fill="#e9e8e8"
					/>
					<path
						id="패스_10309"
						data-name="패스 10309"
						d="M347.368,264.642l-4.429,7.671,4.429,7.671h8.858l4.429-7.671-4.429-7.671Z"
						transform="translate(-259.856 -200.527)"
						fill="#e9e8e8"
					/>
					<path
						id="패스_10310"
						data-name="패스 10310"
						d="M347.368,330.8l-4.429,7.671,4.429,7.671h8.858l4.429-7.671-4.429-7.671Z"
						transform="translate(-259.856 -250.659)"
						fill="#e9e8e8"
					/>
				</g>
			</g>
		</>
	);
};

export default HoneyComb;
