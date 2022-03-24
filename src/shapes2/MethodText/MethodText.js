import React from "react";
import { animated, useSpring } from "react-spring";



const MethodText = () => {

    const animationFillStyle = useSpring({
        from: { fillColor: "transparent" },
        to: { fillColor: "#1210c9" },
        config: { duration: 1000 },
        delay: 3500,
    });

	return (
		<>
        {/* transparent */}
        {/* 5a5a77 */}
			{/* <text
				id="AI_Supervision_Method"
				data-name="AI Supervision Method"
				transform="translate(1159 3388.5)"
				fill="transparent"
				font-size="14"
				font-family="Pretendard-Bold, Pretendard"
				font-weight="700"
			>
				<tspan x="0" y="0">
					AI Supervision Method
				</tspan>
			</text> */}
			<animated.text
				id="P4P"
				transform="translate(1159 3485.098)"
				fill="transparent"
				font-size="14"
				font-family="Pretendard-Regular, Pretendard"
			>
				<tspan x="0" y="0">
					P4P
				</tspan>
			</animated.text>
			<animated.text
				id="Reference_Model"
				data-name="Reference Model"
				transform="translate(1159 3733.098)"
				// fill="transparent"
                fill={animationFillStyle.fillColor}
				font-size="14"
				font-family="Pretendard-Bold, Pretendard"
				// font-weight="700"
			>
				<tspan x="0" y="0">
					Reference Model
				</tspan>
			</animated.text>
			<animated.text
				id="Doppelganger"
				transform="translate(1159 3547.098)"
				fill="transparent"
				font-size="14"
				font-family="Pretendard-Regular, Pretendard"
			>
				<tspan x="0" y="0">
					Doppelganger
				</tspan>
			</animated.text>
			<animated.text
				id="Victory_Road"
				data-name="Victory Road"
				transform="translate(1159 3796.098)"
				fill={animationFillStyle.fillColor}
				font-size="14"
				font-family="Pretendard-Bold, Pretendard"
				// font-weight="700"
			>
				<tspan x="0" y="0">
					Victory Road
				</tspan>
			</animated.text>
			<animated.text
				id="Judgement_Day"
				data-name="Judgement Day"
				transform="translate(1159 3609.098)"
				fill="transparent"
				font-size="14"
				font-family="Pretendard-Regular, Pretendard"
			>
				<tspan x="0" y="0">
					Judgement Day
				</tspan>
			</animated.text>
			<animated.text
				id="Tech_Scanner"
				data-name="Tech Scanner"
				transform="translate(1159 3858.098)"
				fill={animationFillStyle.fillColor}
				font-size="14"
				font-family="Pretendard-Bold, Pretendard"
				// font-weight="700"
			>
				<tspan x="0" y="0">
					Tech Scanner
				</tspan>
			</animated.text>
			<animated.text
				id="PULSE"
				transform="translate(1159 3982.098)"
				fill="transparent"
				font-size="14"
				font-family="Pretendard-Regular, Pretendard"
			>
				<tspan x="0" y="0">
					PULSE
				</tspan>
			</animated.text>
			<animated.text
				id="Impact_Count-Up"
				data-name="Impact Count-Up"
				transform="translate(1159 3671.098)"
				fill="transparent"
				font-size="14"
				font-family="Pretendard-Regular, Pretendard"
			>
				<tspan x="0" y="0">
					Impact Count-Up
				</tspan>
			</animated.text>
			<animated.text
				id="ESG_Breakdown"
				data-name="ESG Breakdown"
				transform="translate(1159 3920.098)"
				fill="transparent"
				font-size="14"
				font-family="Pretendard-Regular, Pretendard"
			>
				<tspan x="0" y="0">
					ESG Breakdown
				</tspan>
			</animated.text>
			<animated.text
				id="Scanner_Tech"
				data-name="Scanner Tech"
				transform="translate(1159 4044.098)"
				fill="transparent"
				font-size="14"
				font-family="Pretendard-Regular, Pretendard"
			>
				<tspan x="0" y="0">
					Scanner Tech
				</tspan>
			</animated.text>
		</>
	);
};

export default MethodText;
