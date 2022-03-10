import React, { useState, useRef, useEffect } from "react";
import { animated, useSpring } from "react-spring";

import { useAnimatedPath } from "../CustomHooks";

const Rectangle = ({ color, toggle }) => {

    const animationStrokeProps = useAnimatedPath({ toggle });
    const animationFillStyle = useSpring({
        fill: toggle ? color : "#b8b8c6",
        config: { duration: 1000 },
        delay: 0,
    })

	return (
		<>
			<animated.path
                style={{
                    ...animationStrokeProps.style,
                    ...animationFillStyle
                }}
                fill={color}
                stroke={"#fff"}
                strokeWidth={2}
				d="M913.92,48.17V97.83H864.5c-.73-4-1-34.15-.34-49.66Z"
			/>
		</>
	);
};

export default Rectangle;
