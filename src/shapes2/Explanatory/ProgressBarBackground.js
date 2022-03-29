import React, { useEffect, useState, useRef } from "react";
import ProgressBar from "./ProgressBar";

const ProgressBarBackground = ({ onHandleRankInfo, rest }) => {

	const progressBarRef = useRef(null);
	const [progressBarArry, setProgressBarArry] = useState();

	const [rankInfo, setRankInfo] = useState();

	const [targetIndex, setTargetIndex] = useState();

	useEffect(() => {
		if (progressBarRef && progressBarRef.current && !rest) {
			const progressBarArry = [];
			const widthArry = [];

			progressBarRef.current.childNodes.forEach((node, index) => {
				const progressBarObj = {};
				const transform = node.getAttribute("transform");

				widthArry.push(Math.random() * 141);

				// Set random width each progress bar
				progressBarObj.width = Math.random() * 141;
				progressBarObj.transform = transform;
				progressBarObj.index = index;

				progressBarArry.push(progressBarObj);
			});

			setProgressBarArry(progressBarArry);
		}
	}, [progressBarRef, rest]);

	useEffect(() => {
		if (progressBarArry) {

			const arry = [...progressBarArry];

            const firstArry = [arry[0], arry[1], arry[2], arry[3]];
            const secondArry = [arry[4], arry[5], arry[6], arry[7]];
            const thirdArry = [arry[8], arry[9], arry[10], arry[11]];

			let firstSortResult;
            let secondSortResult;
            let thirdSortResult;

			firstSortResult = firstArry.sort((a, b) => {
				return b.width - a.width;
			});
            secondSortResult = secondArry.sort((a, b) => {
				return b.width - a.width;
			});
            thirdSortResult = thirdArry.sort((a, b) => {
				return b.width - a.width;
			});

			const rankInfo = {};
			rankInfo.first = firstSortResult[0].index;
			rankInfo.second = secondSortResult[0].index;
			rankInfo.third = thirdSortResult[0].index;

			setRankInfo(rankInfo);
		}
	}, [progressBarArry]);

	useEffect(() => {
		if (rankInfo) {
			onHandleRankInfo(rankInfo);

			const matchIndex = [];
            const matchArry =  new Array(progressBarArry.length).fill(false);

			Object.values(rankInfo).map((rank) => {
				progressBarArry.map((bar) => {
					if (rank === bar.index) {
						matchIndex.push(rank);
					}
				});
			});

			matchIndex.map((index) => {
				matchArry[index] = true;
			});

			setTargetIndex(matchArry);
		}
	}, [rankInfo]);

	const ProgressBarContents = () => {
		if (rest) {
			return null;
		} else {
			return (
				progressBarArry &&
				targetIndex &&
				progressBarArry.map((info, index) => (
					<ProgressBar
						key={index}
						info={info}
						barIndex={index}
						targetIndex={targetIndex}
					/>
				))
			);
		}
	};

	return (
		<>
			<g ref={progressBarRef}>
				<rect
					id="사각형_467"
					data-name="사각형 467"
					width="141"
					height="10"
					rx="5"
					transform="translate(1594 3472)"
					fill="#e9e8e8"
				/>
				<rect
					id="사각형_468"
					data-name="사각형 468"
					width="141"
					height="10"
					rx="5"
					transform="translate(1594 3516)"
					fill="#e9e8e8"
				/>
				<rect
					id="사각형_469"
					data-name="사각형 469"
					width="141"
					height="10"
					rx="5"
					transform="translate(1594 3560)"
					fill="#e9e8e8"
				/>
				<rect
					id="사각형_470"
					data-name="사각형 470"
					width="141"
					height="10"
					rx="5"
					transform="translate(1594 3604)"
					fill="#e9e8e8"
				/>

				<rect
					id="사각형_474"
					data-name="사각형 474"
					width="141"
					height="10"
					rx="5"
					transform="translate(1594 3688)"
					fill="#e9e8e8"
				/>
				<rect
					id="사각형_473"
					data-name="사각형 473"
					width="141"
					height="10"
					rx="5"
					transform="translate(1594 3732)"
					fill="#e9e8e8"
				/>
				<rect
					id="사각형_472"
					data-name="사각형 472"
					width="141"
					height="10"
					rx="5"
					transform="translate(1594 3776)"
					fill="#e9e8e8"
				/>
				<rect
					id="사각형_471"
					data-name="사각형 471"
					width="141"
					height="10"
					rx="5"
					transform="translate(1594 3820)"
					fill="#e9e8e8"
				/>

				<rect
					id="사각형_478"
					data-name="사각형 478"
					width="141"
					height="10"
					rx="5"
					transform="translate(1594 3904)"
					fill="#e9e8e8"
				/>
				<rect
					id="사각형_477"
					data-name="사각형 477"
					width="141"
					height="10"
					rx="5"
					transform="translate(1594 3948)"
					fill="#e9e8e8"
				/>
				<rect
					id="사각형_476"
					data-name="사각형 476"
					width="141"
					height="10"
					rx="5"
					transform="translate(1594 3992)"
					fill="#e9e8e8"
				/>
				<rect
					id="사각형_475"
					data-name="사각형 475"
					width="141"
					height="10"
					rx="5"
					transform="translate(1594 4036)"
					fill="#e9e8e8"
				/>
			</g>
			<g>{ProgressBarContents()}</g>
		</>
	);
};

export default React.memo(ProgressBarBackground);
