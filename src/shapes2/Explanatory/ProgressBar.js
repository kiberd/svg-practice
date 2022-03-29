import React, { useEffect, useState, useRef } from "react";
import { animated, useSpring } from "react-spring";

const ProgressBar = ( { info, barIndex, targetIndex } ) => {


    const animationProgressStyle = useSpring({
        from: { width: 0 },
        to: { width: info.width },
        config: { duration: 1000 },
        delay: 7500,
    });

    const animationFillStyle = useSpring({
        from: { fillColor: "#b8b8c6" },
        to: { fillColor: "#1210c9" },
        config: { duration: 1000 },
        delay: 9500,
    });


	return (
		<>
            <animated.rect
                width={animationProgressStyle.width}
				height="10"
				rx="5"
				transform={info.transform}
                fill={targetIndex[barIndex] ? animationFillStyle.fillColor : "#b8b8c6"}
			/>
		</>
	);
};

export default React.memo(ProgressBar);
