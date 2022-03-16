import React, { useState, useRef, useEffect } from "react";
import { animated, useSpring } from "react-spring";

import { useAnimatedPath } from "../CustomHooks";

const rectangleArry = [
    "M695,607a11.46,11.46,0,0,1,1.91-2c.64-.4,2,.53,2.09-1,1.5-.09.85-1.24,1-2l2-1c1.5.4,2.17-.8,3.09-1.57s1.64-.85,1.91.57c-1.12,1.29-2.32,2.53-3.33,3.89A6.69,6.69,0,0,0,703,606c-.76.15-1.91-.5-2,1.22V607a2.68,2.68,0,0,0-.76.3c-.06.05.11.4.17.61a1.91,1.91,0,0,0,.59-.69c.76-.37,1.91.28,2-1.22,2.31.49,3-2.23,5-2.57.79-.14,1.28-.49,2.09.08,4.12,2.88,8.32,5.66,12.46,8.52a3.53,3.53,0,0,1,1.54,3.37c-.15,4.33,0,8.67,0,13-3.79,2.5-7.59,5-11.34,7.5a3.85,3.85,0,0,0-1.7,3.8c.16,2.32-.16,4.68.09,7a5.2,5.2,0,0,1-2.69,5.32c-3.4,2.21-6.86,4.35-10.32,6.46a3.54,3.54,0,0,1-4.44-.26c-2.75-2.06-5.74-3.81-8.62-5.71-.66-.44-1.19-1.23-1.9-1.42-1.82-.5-2.13-1.72-2.09-3.34,0-2.49-.19-5,.07-7.49s-.91-4-2.8-5.23q-4.34-2.87-8.58-5.83a4,4,0,0,1-1.73-3.8,61.35,61.35,0,0,0,0-9.49c-.23-2.24.9-3.5,2.33-4.55,2.9-2.13,6-4.06,9-6a7.38,7.38,0,0,1,9.18.62c1.85,1.48,3.75,2.9,6.16,4.76Zm22.68,7.11c-2.64-1.8-4.63-3.05-6.49-4.46a3.41,3.41,0,0,0-4-.22c-2.21,1.35-4.23,3-6.47,4.62,2.05,1.74,3.82,3.33,5.71,4.76.43.33,1.26.17,1.9.19C712.17,619.09,714.32,616.12,717.68,614.11Zm-43,.34,8.32,5.63a30.82,30.82,0,0,0,4.42-3.13c1.16-1.17,3.75-.84,3.55-3.38-1.7-1.06-3.71-1.83-5-3.24-1.79-1.92-3.33-1.45-5-.31C678.89,611.39,676.91,612.88,674.71,614.45Zm12.8,21.19,8.23,5.36a21.67,21.67,0,0,0,7.8-5.06,3.33,3.33,0,0,0,.35-.93l-7.69-5.19Zm18.73,4.11L703,642c-1.68,1.17-4.1,2-4.84,3.6s0,4.14.15,6.25c2.82-.88,7.86-3.59,8.21-5a34,34,0,0,0,.42-6.33C707,640.39,706.76,640.27,706.24,639.75Zm-21-8.34,7.13-4.41a2.61,2.61,0,0,0,.75-.6c.35-.51.86-1.06.88-1.61.07-1.94,0-3.88-.1-6.53-1.57,1.21-2.51,2-3.54,2.73-1.68,1.14-4.12,1.84-4.92,3.41S685.2,628.53,685.2,631.41Zm12.93-12.9c0,2.39-.16,4.34-.09,6.28a2.32,2.32,0,0,0,.89,1.59c2.45,1.66,5,3.22,7.94,5.11,0-2.39.16-4.34.09-6.28a2.32,2.32,0,0,0-.89-1.59C703.62,622,701.11,620.4,698.13,618.51ZM685,641.07a40.38,40.38,0,0,0,0,4.42,3.46,3.46,0,0,0,1,2,25.93,25.93,0,0,0,7.71,4.78v-7C690.7,644.5,689.08,640.63,685,641.07Zm-4-9.29a26.88,26.88,0,0,1,0-4.81c.49-2.22-.77-3.52-2.23-4.58-1.71-1.24-3.64-2.19-5.82-3.46a47.81,47.81,0,0,1,0,5.11,3,3,0,0,0,1.49,2.89C676.32,628.37,678.25,629.75,681,631.78Zm38.16-12.87c-1.21.57-1.79.78-2.31,1.1-5.91,3.58-5.91,3.58-5.83,9.11,0,.27.26.54.48.94,2.93,0,4.83-2.08,6.67-3.86S718.55,621.6,719.16,618.91Z",
    "M500,604c.88-.08,2.19.43,2-1.25s.69-1.93,2-1.75c0,1,0,2,.1,3.45-.16.1-.36-.17-.57-.45-.17.23-.51.47-.5.69a5.55,5.55,0,0,0,.38,1.22,3.19,3.19,0,0,0,.69-1.46A6.22,6.22,0,0,1,506,602c.48-.33,3.69-1.73,4-2a14.13,14.13,0,0,1,1.87-1.33A13.22,13.22,0,0,1,514,598c1.5.09.85,1.24,1,2-1.42,1-2.8,2.06-4.27,3-1.15.73-2,1.53-1.73,3-.76.15-1.91-.5-2,1.22V607a2.68,2.68,0,0,0-.76.3c-.06.05.11.4.17.61a1.91,1.91,0,0,0,.59-.69c.76-.37,1.91.28,2-1.22,2.31.5,2.95-2.23,5-2.56.78-.14,1.27-.51,2.09,0,4,2.76,8.06,5.42,12.08,8.14a4.39,4.39,0,0,1,1.93,4.21c-.15,4.15,0,8.31,0,12.61-3.59,2.29-7.3,4.56-10.89,7a4.47,4.47,0,0,0-2.18,4.6c.31,2.29-.18,4.68.14,7a4.42,4.42,0,0,1-2.22,4.58c-3.6,2.47-7.28,4.83-11.05,7a3.51,3.51,0,0,1-4.05-.29c-2.9-2.13-6-4-9-6-1.3-.89-3.06-1.63-3.65-2.89s-.14-3.26-.14-4.92a33.17,33.17,0,0,1,0-4c.31-2.6-.81-4.18-3-5.52-3.49-2.18-6.8-4.65-10.06-6.9,0-4.25.19-8.07-.07-11.86a5.24,5.24,0,0,1,2.82-5.21c2.63-1.68,5.28-3.34,7.85-5.11,3.87-2.67,6.75-2.58,10.23.46.5.43.9,1,1.42,1.39,1,.72,1.86.16,2.8-1.12A3.29,3.29,0,0,0,500,604Zm6.46,10c1.75,1.37,3.46,2.29,4.6,3.68a4.24,4.24,0,0,0,5.36,1.13c2.28-1.42,5.32-2.13,6.85-4.93l-5.92-4c-1.74-1.18-3-1.15-4.76.06S509,612.34,506.46,614Zm-25.5.55c2.59,1.84,4.86,3.51,7.21,5.07a1.88,1.88,0,0,0,1.65,0c2.12-1.32,4.18-2.74,6.21-4.19a10.47,10.47,0,0,0,1.46-1.75,11.54,11.54,0,0,1-2.27-1c-2-1.51-3.76-4.14-6.38-3.52-2.28.53-4.25,2.47-6.32,3.84A11.6,11.6,0,0,0,481,614.54Zm21.18,15.26-8.53,5.91c2.51,1.6,4.84,2.7,6.65,4.36,1.54,1.41,2.51.73,3.7-.08,2.07-1.4,4.12-2.84,6.54-4.52Zm10.22,10.06c-.46.24-1,.48-1.5.79-.67.42-1.28.92-1.95,1.35-5.14,3.27-5.15,3.26-4.89,9.12,0,.28.27.55.42.82,3.07-1.14,8-3.91,8.21-5.19a40.47,40.47,0,0,0,.25-6.34C512.9,640.3,512.68,640.18,512.36,639.86ZM504,618.37c0,2.61,0,4.56,0,6.5a1.73,1.73,0,0,0,.6,1.22c2.56,1.75,5.16,3.43,8.37,5.54,0-2.61,0-4.56,0-6.5a1.73,1.73,0,0,0-.6-1.22C509.81,622.16,507.21,620.48,504,618.37Zm-12.47,12.84L495,629c5.16-3.26,5.16-3.26,5-9,0-.28-.23-.56-.51-1.17L496,621c-5.16,3.26-5.16,3.26-5,9C491,630.32,491.25,630.6,491.53,631.21Zm8.3,14.2c-1.53-.88-2.87-1.61-4.16-2.42s-2.3-2.94-4.67-1.57a36.59,36.59,0,0,0,0,3.76,3.34,3.34,0,0,0,.81,2.09,23,23,0,0,0,8,4.93ZM479,618.75c0,2.28-.05,3.93,0,5.58a2.53,2.53,0,0,0,.59,1.72c2.17,1.82,4.44,3.51,6.84,5.38,1-6.81,1-6.82-3.88-10.34C481.57,620.37,480.5,619.73,479,618.75Zm38.38,11.42a9.85,9.85,0,0,0,7.1-4.32c1.31-2,.55-4.51.26-7a25.84,25.84,0,0,1-3.4,2.24C517.56,622.8,516.07,625.54,517.38,630.17Z",
    "M1074,604c2.62,3.19,6.45,4.71,9.76,7,.14.09.81-.62,1.24-1,.73-.23,1.67-.26,2.17-.74a33.12,33.12,0,0,1,8.64-5.65c.77-.37,1.2-.87,2.1-.24,4.12,2.87,8.3,5.64,12.43,8.49a4,4,0,0,1,1.71,3.79c-.15,3.82-.11,7.65,0,11.47a2.65,2.65,0,0,1-1.19,2.51c-3.52,2.29-7.08,4.53-10.85,6.93,0,2.57-.39,5.45.1,8.16.61,3.44-1.28,5.37-3.47,7.07-2.84,2.2-5.92,4.09-9,6a6.23,6.23,0,0,1-7.45-.08c-3-2.06-6-3.91-9-6-1.42-1-2.59-2.29-2.34-4.53a49.9,49.9,0,0,0,0-8.47,3.57,3.57,0,0,0-1.25-2.42,75,75,0,0,0-9.41-6.16c-1.8-.91-2.33-1.83-2.3-3.64.07-4.32,0-8.64,0-13.45,3.9-2.78,7.9-5.95,12.23-8.55C1069.71,603.58,1072.05,604.11,1074,604Zm31.61,10.11c-2.61-1.81-4.58-3.08-6.45-4.48a3.41,3.41,0,0,0-4-.19c-2.19,1.35-4.21,3-6.46,4.61,2.46,3,5.62,4.37,8.36,6.08Zm-42.92.33,8.63,5.83c2.08-3,6.16-3.29,7.89-6.57-1.91-1.18-3.91-2-5.23-3.37-1.79-1.91-3.32-1.46-5-.32C1066.89,611.39,1064.91,612.87,1062.69,614.44Zm29.24,20.87-7.93-5.37-8,5.42c1.91,2,7.31,5.91,8,5.6a24.75,24.75,0,0,0,7.74-5.22A1.52,1.52,0,0,0,1091.93,635.31Zm-10.55-16.71c-2.41,1.53-4.69,2.88-6.82,4.42a3.61,3.61,0,0,0-1.48,2.32,14.54,14.54,0,0,0,.4,6.13c1.32-1,2.29-1.76,3.32-2.46,1.68-1.16,4-1.91,4.91-3.5s.26-3.86.28-5.84C1082,619.53,1081.84,619.4,1081.38,618.6Zm5,33.42c2.3-.07,3.57-1.8,5.21-3,3.23-2.32,3.44-2.23,3.4-3.54-.07-1.85.48-3.81-.57-5.86L1091,642c-1.68,1.17-4.1,2-4.84,3.6S1086.24,649.74,1086.36,652Zm-.24-33.52c0,2.38-.15,4.32-.08,6.25a2.33,2.33,0,0,0,.86,1.6c2.45,1.66,5,3.22,8,5.15,0-2.38.15-4.32.08-6.25a2.33,2.33,0,0,0-.86-1.6C1091.65,622,1089.14,620.43,1086.12,618.5Zm-4.37,34.19v-7.2c-1.78-1.19-3.67-2.28-5.33-3.64-1.17-1-2.16-1.25-3.42-.4a27,27,0,0,1,0,3.49,2.82,2.82,0,0,0,1.38,2.89C1076.63,649.38,1079,650.86,1081.75,652.69ZM1061,618.81c0,2.11,0,3.9,0,5.69a2,2,0,0,0,.36,1.33,52.46,52.46,0,0,0,7.62,5.71,37.28,37.28,0,0,1,0-4,5,5,0,0,0-3-5.52C1064.44,621.12,1063,620,1061,618.81Zm46.2,0c-1.21.62-1.79.85-2.3,1.18-3.3,2.14-7.36,3.81-5.89,9.06a8,8,0,0,0,.44,1c3,.11,4.83-2,6.69-3.79C1108.17,624.33,1106.51,621.64,1107.2,618.83Z",
];


const TripleRectangle = ({ color, toggle, init }) => {
	
    const shapeRef = useRef(null);

	const animationFillStyle = useSpring({
        from: { fillColor: "#b8b8c6" },
        to: { fillColor: color }, 
		config: { duration: 1000 },
		delay: 5000,
        reset: init,
	});

	// useEffect(() => {
	//     if(init && shapeRef && shapeRef.current){
	//         shapeRef.current.style.fill = "#b8b8c6";
	//     }
	// } ,[init]);

	return (
		<>
			{/* <g
				id="그룹_329"
				data-name="그룹 329"
				transform="translate(1170 2702.626)"
			>
				<g
					id="그룹_315-2"
					data-name="그룹 315"
					transform="translate(0 0)"
					clip-path="url(#clip-path)"
				>
					<animated.path
                        style={{
                            ...animationFillStyle,
                        }}
						id="패스_540-2"
						data-name="패스 540"
                        transform="translate(1170 2702.626)"
						d="M28.05,8.72c0,1-.01,1.993,0,2.99a1.387,1.387,0,0,1-.692,1.283c-1.82,1.177-3.624,2.377-5.442,3.557a.538.538,0,0,0-.288.521c.013,1.774,0,3.548.012,5.323A1.329,1.329,0,0,1,21,23.6q-3.142,2.066-6.28,4.138a1.3,1.3,0,0,1-1.586-.023q-3-2.049-6-4.079a1.439,1.439,0,0,1-.689-1.32c.021-1.719,0-3.439.013-5.158a.524.524,0,0,0-.266-.5c-1.82-1.217-3.626-2.454-5.45-3.664A1.5,1.5,0,0,1,0,11.6c.024-1.993.016-3.987,0-5.98A1.326,1.326,0,0,1,.651,4.418Q3.795,2.355,6.93.278A1.251,1.251,0,0,1,8.476.293c1.732,1.19,3.476,2.362,5.2,3.559a.512.512,0,0,0,.684-.005C16.128,2.667,17.9,1.5,19.675.333a1.242,1.242,0,0,1,1.709.015c1.975,1.34,3.944,2.688,5.925,4.019a1.525,1.525,0,0,1,.746,1.4c-.02.985-.005,1.972-.005,2.957M7.668,2.609,3.279,5.494c.1.075.171.128.242.176,1.242.838,2.488,1.671,3.724,2.519a.39.39,0,0,0,.519,0c1.281-.858,2.572-1.7,3.859-2.552.079-.052.152-.112.25-.185l-4.2-2.848M24.757,5.465c-1.36-.915-2.679-1.8-3.986-2.692a.391.391,0,0,0-.52.01c-1.274.85-2.555,1.689-3.833,2.532-.085.056-.164.121-.264.2l4.2,2.845,4.4-2.891M13.914,19.038l4.365-2.859-4.234-2.872L9.7,16.179l4.218,2.858m5.357-.691c-.092.047-.131.063-.166.086-1.244.816-2.49,1.628-3.726,2.456a.514.514,0,0,0-.175.372c-.014,1.018-.008,2.036-.007,3.054,0,.091.012.182.021.313,1.334-.877,2.632-1.727,3.924-2.585a.329.329,0,0,0,.124-.235c.008-1.136.005-2.273.005-3.461m-10.517.008c0,1.164.007,2.248-.006,3.331a.467.467,0,0,0,.245.446c1.19.8,2.371,1.61,3.556,2.416.077.052.161.1.279.165,0-1.18.005-2.316-.01-3.452,0-.1-.125-.218-.221-.284-1.063-.733-2.131-1.457-3.2-2.183l-.645-.44m12.872-4.467c.084-.042.134-.061.177-.089,1.23-.8,2.463-1.592,3.685-2.4a.512.512,0,0,0,.184-.369c.015-1.018.009-2.037.007-3.055a2.549,2.549,0,0,0-.033-.276c-.125.075-.218.128-.307.186-1.153.756-2.3,1.518-3.461,2.266a.516.516,0,0,0-.276.5c.014.963.005,1.927.006,2.891,0,.1.01.209.017.349M12.859,7.694a1.636,1.636,0,0,0-.169.079c-1.244.815-2.49,1.627-3.724,2.455a.52.52,0,0,0-.17.377c-.014,1-.008,1.991-.006,2.986,0,.089.018.179.033.314,1.331-.875,2.619-1.72,3.9-2.572a.336.336,0,0,0,.13-.237c.008-1.115.006-2.229.006-3.4m-10.48.021a1.667,1.667,0,0,0-.032.206c0,1.04-.008,2.081.008,3.121a.525.525,0,0,0,.216.355c1.188.823,2.384,1.632,3.579,2.444.068.046.144.081.226.127a.512.512,0,0,0,.036-.115c0-1.084.007-2.168,0-3.252a.334.334,0,0,0-.127-.237C5,9.487,3.714,8.619,2.379,7.716M19.271,13.96c0-1.124-.006-2.174.005-3.223a.468.468,0,0,0-.236-.451c-1.2-.8-2.393-1.615-3.588-2.423-.069-.046-.141-.087-.256-.157,0,1.107.007,2.164-.006,3.221a.468.468,0,0,0,.249.446c.974.648,1.94,1.308,2.909,1.964l.923.624"
					/>
				</g>
			</g> */}
			<animated.path
                ref={shapeRef}
                fill={animationFillStyle.fillColor}
				id="패스_540-2"
				data-name="패스 540"
				transform="translate(1170 2702.626)"
				d="M28.05,8.72c0,1-.01,1.993,0,2.99a1.387,1.387,0,0,1-.692,1.283c-1.82,1.177-3.624,2.377-5.442,3.557a.538.538,0,0,0-.288.521c.013,1.774,0,3.548.012,5.323A1.329,1.329,0,0,1,21,23.6q-3.142,2.066-6.28,4.138a1.3,1.3,0,0,1-1.586-.023q-3-2.049-6-4.079a1.439,1.439,0,0,1-.689-1.32c.021-1.719,0-3.439.013-5.158a.524.524,0,0,0-.266-.5c-1.82-1.217-3.626-2.454-5.45-3.664A1.5,1.5,0,0,1,0,11.6c.024-1.993.016-3.987,0-5.98A1.326,1.326,0,0,1,.651,4.418Q3.795,2.355,6.93.278A1.251,1.251,0,0,1,8.476.293c1.732,1.19,3.476,2.362,5.2,3.559a.512.512,0,0,0,.684-.005C16.128,2.667,17.9,1.5,19.675.333a1.242,1.242,0,0,1,1.709.015c1.975,1.34,3.944,2.688,5.925,4.019a1.525,1.525,0,0,1,.746,1.4c-.02.985-.005,1.972-.005,2.957M7.668,2.609,3.279,5.494c.1.075.171.128.242.176,1.242.838,2.488,1.671,3.724,2.519a.39.39,0,0,0,.519,0c1.281-.858,2.572-1.7,3.859-2.552.079-.052.152-.112.25-.185l-4.2-2.848M24.757,5.465c-1.36-.915-2.679-1.8-3.986-2.692a.391.391,0,0,0-.52.01c-1.274.85-2.555,1.689-3.833,2.532-.085.056-.164.121-.264.2l4.2,2.845,4.4-2.891M13.914,19.038l4.365-2.859-4.234-2.872L9.7,16.179l4.218,2.858m5.357-.691c-.092.047-.131.063-.166.086-1.244.816-2.49,1.628-3.726,2.456a.514.514,0,0,0-.175.372c-.014,1.018-.008,2.036-.007,3.054,0,.091.012.182.021.313,1.334-.877,2.632-1.727,3.924-2.585a.329.329,0,0,0,.124-.235c.008-1.136.005-2.273.005-3.461m-10.517.008c0,1.164.007,2.248-.006,3.331a.467.467,0,0,0,.245.446c1.19.8,2.371,1.61,3.556,2.416.077.052.161.1.279.165,0-1.18.005-2.316-.01-3.452,0-.1-.125-.218-.221-.284-1.063-.733-2.131-1.457-3.2-2.183l-.645-.44m12.872-4.467c.084-.042.134-.061.177-.089,1.23-.8,2.463-1.592,3.685-2.4a.512.512,0,0,0,.184-.369c.015-1.018.009-2.037.007-3.055a2.549,2.549,0,0,0-.033-.276c-.125.075-.218.128-.307.186-1.153.756-2.3,1.518-3.461,2.266a.516.516,0,0,0-.276.5c.014.963.005,1.927.006,2.891,0,.1.01.209.017.349M12.859,7.694a1.636,1.636,0,0,0-.169.079c-1.244.815-2.49,1.627-3.724,2.455a.52.52,0,0,0-.17.377c-.014,1-.008,1.991-.006,2.986,0,.089.018.179.033.314,1.331-.875,2.619-1.72,3.9-2.572a.336.336,0,0,0,.13-.237c.008-1.115.006-2.229.006-3.4m-10.48.021a1.667,1.667,0,0,0-.032.206c0,1.04-.008,2.081.008,3.121a.525.525,0,0,0,.216.355c1.188.823,2.384,1.632,3.579,2.444.068.046.144.081.226.127a.512.512,0,0,0,.036-.115c0-1.084.007-2.168,0-3.252a.334.334,0,0,0-.127-.237C5,9.487,3.714,8.619,2.379,7.716M19.271,13.96c0-1.124-.006-2.174.005-3.223a.468.468,0,0,0-.236-.451c-1.2-.8-2.393-1.615-3.588-2.423-.069-.046-.141-.087-.256-.157,0,1.107.007,2.164-.006,3.221a.468.468,0,0,0,.249.446c.974.648,1.94,1.308,2.909,1.964l.923.624"
			/>
		</>
	);
};

export default TripleRectangle;
