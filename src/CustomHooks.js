import React, { useState, useRef, useEffect } from "react";
import { useSpring } from "react-spring";

export const useAnimatedPath = ({ toggle, delay, config }) => {

    const [length, setLength] = useState(null);



    const animatedStyle = useSpring({
        strokeDasharray: length,
        strokeDashoffset: toggle ? 0 : length,
        delay,
        config 
    });    

    return {
        style: animatedStyle,
        ref: (ref) => {
            if (ref) {
                setLength(ref.getTotalLength());
            }
        }
    }

}