import Map from "./Map";
import Map2 from "./Map2";
import Map3 from "./Map3";
import Map4 from "./Map4";
import React, { useState } from "react";

function App() {

    const [reset ,setReset] = useState(true);

	return (
        
		<>
            {/* <button
				type="button"
				onClick={() => {
					setReset(!reset);
				}}
			>
				Reset
			</button>	 */}
			{/* <Map/> */}
			{/* <Map2 /> */}
            {/* <Map3 reset={reset}/> */}
            <Map4 />

		</>
	);
}

export default App;
