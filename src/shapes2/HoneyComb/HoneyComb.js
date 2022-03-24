import React from "react";
import HoneyCombUnit from "./HoneyCombUnit";

const HoneyComb = ({ honeyCombInfo }) => {
	return (
		<>
			{honeyCombInfo &&
				honeyCombInfo.transform.map((translate, objIndex) => (
					<g transform={translate}>
						<g transform="translate(966 3615)">
							{
								honeyCombInfo.elements.map((element, elementIndex) => (
										<HoneyCombUnit
											key={elementIndex}
											element={element}
											elementIndex={honeyCombInfo.colorIndexInfo[objIndex][elementIndex]}
										/>
								))
                            }
						</g>
					</g>
				))}
		</>
	);
};

export default HoneyComb;
