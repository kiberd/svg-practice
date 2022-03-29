import React, { useEffect, useState } from "react";

import Category from "./shapes2/Category";

import ObjectTextBackground from "./shapes2/ObjectText/ObjectTextBackground";
import ObjectText from "./shapes2/ObjectText/ObjectText";

import HoneyCombBackground from "./shapes2/HoneyComb/HoneyCombBackground";
import HoneyComb from "./shapes2/HoneyComb/HoneyComb";

import FirstLine from "./shapes2/FirstLines/FirstLine";
import FirstLineArrow from "./shapes2/FirstLines/FirstLineArrow";

import MethodText from "./shapes2/MethodText/MethodText";

import FirstGroup from "./shapes2/SecondLines/FirstGroup/FirstGroup";
import SecondGroup from "./shapes2/SecondLines/SecondGroup/SecondGroup";
import ThirdGroup from "./shapes2/SecondLines/ThirdGroup/ThirdGroup";

import FirstLibrary from "./shapes2/LibraryText/FirstGroup/FirstLibrary";
import SecondLibrary from "./shapes2/LibraryText/SecondGroup/SecondLibrary";
import ThirdLibrary from "./shapes2/LibraryText/ThirdGroup/ThirdLibrary";

import ProgressBarBackground from "./shapes2/Explanatory/ProgressBarBackground";

import ChampionText from "./shapes2/Explanatory/ChampionText";
import Badge from "./shapes2/Explanatory/Badge";

const Map4 = () => {

	const [honeyCombInfo, setHoneyCombInfo] = useState();
	const [rankInfo, setRankInfo] = useState();

	const [init, setInit] = useState(false);
	const [rest, setRest] = useState(false);
	const [visable, setVisable] = useState(true);

	useEffect(() => {
		if (rest && !init) {
			setTimeout(animationStart, 3000);
		}
	}, [rest, init]);

	const handleRest = () => {
		setTimeout(animationStop, 3000);
	};

	const handleHoneyCombInfo = (honeyCombInfoData) => {
		setHoneyCombInfo(honeyCombInfoData);
	};

	const handleRankInfo = (rankInfoData) => {
		setRankInfo(rankInfoData);
	};

	const animationStart = () => {
        setVisable(true);
		setRest(false);
		setInit(true);
	};

	const animationStop = () => {
        setVisable(false);
		setRest(true);
		setInit(false);
	};


	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="939.396"
				height="677.402"
				viewBox="0 0 939.396 677.402"
			>
				<g
					id="그룹_936"
					data-name="그룹 936"
					transform="translate(-828.5 -3375.5)"
				>
                    <Category />
					<HoneyCombBackground onHandleHoneyCombInfo={handleHoneyCombInfo} rest={rest} />
					<ProgressBarBackground onHandleRankInfo={handleRankInfo} rest={rest} />

					{visable && !rest ? (
						<>
							{/* Objective .. */}
							<ObjectTextBackground />
							<ObjectText init={init} />

							{/* AI Data Set */}
							<HoneyComb honeyCombInfo={honeyCombInfo} init={init} />

							{/* First Lines */}
							<FirstLine init={init} />
							<FirstLineArrow init={init} />

							{/* AI Supervision Method */}
							<MethodText init={init} />

							{/* Second Lines */}
							<FirstGroup init={init} />
							<SecondGroup init={init} />
							<ThirdGroup init={init} />

							{/* AI Algorithm Libarary Group -> First, Second, Third */}
							<FirstLibrary rankInfo={rankInfo} init={init} />
							<SecondLibrary rankInfo={rankInfo} init={init} />
							<ThirdLibrary rankInfo={rankInfo} init={init} />

							{/* AI Explanatory Power */}
							<ChampionText rankInfo={rankInfo} init={init} />
							<Badge rankInfo={rankInfo} init={init} onHandleRest={handleRest} />
						</>
					) : null}
				</g>
			</svg>
		</>
	);
};

export default React.memo(Map4);
