import React, { useState, useRef, useEffect } from "react";
import { useSpring } from "react-spring";

export const useAnimatedPath = ({ toggle, delay, config, init }) => {
	const [length, setLength] = useState(null);

	const animatedStyle = useSpring({
		strokeDasharray: length,
		strokeDashoffset: toggle ? 0 : length,
		// visibility: init ? "hidden" : "visible",
		delay,
		config,
		reset: true,
	});

	return {
		style: animatedStyle,
		ref: (ref) => {
			if (ref) {
				setLength(ref.getTotalLength());
			}
		},
	};
};

export const useWindowFocus = () => {
	// User has switched back to the tab
	const onFocus = () => {
		console.log("Tab is in focus");
	};

	// User has switched away from the tab (AKA tab is hidden)
	const onBlur = () => {
		console.log("Tab is blurred");
	};

	useEffect(() => {
		window.addEventListener("focus", onFocus);
		window.addEventListener("blur", onBlur);
		// Calls onFocus when the window first loads
		onFocus();
		// Specify how to clean up after this effect:
		return () => {
			window.removeEventListener("focus", onFocus);
			window.removeEventListener("blur", onBlur);
		};
	}, []);

    return { onFocus, onBlur };
};

export const useEventListener = (eventName, handler, element = window) => {
    // Create a ref that stores handler
    const savedHandler = useRef();
    // Update ref.current value if handler changes.
    // This allows our effect below to always get latest handler ...
    // ... without us needing to pass it in effect deps array ...
    // ... and potentially cause effect to re-run every render.
    useEffect(() => {
      savedHandler.current = handler;
    }, [handler]);
    useEffect(
      () => {
        // Make sure element supports addEventListener
        // On
        const isSupported = element && element.addEventListener;
        if (!isSupported) return;
        // Create event listener that calls handler function stored in ref
        const eventListener = (event) => savedHandler.current(event);
        // Add event listener
        element.addEventListener(eventName, eventListener);
        // Remove event listener on cleanup
        return () => {
          element.removeEventListener(eventName, eventListener);
        };
      },
      [eventName, element] // Re-run if eventName or element changes
    );
  }


export const useInterval = (callback, delay) => {
	const savedCallback = useRef();

	// Remember the latest callback.
	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	// Set up the interval.
	useEffect(() => {
		function tick() {
			savedCallback.current();
		}
		if (delay !== null) {
			let id = setInterval(tick, delay);
			return () => clearInterval(id);
		}
	}, [delay]);
};
