import React, { useState } from "react";

import { animated, useSpring } from "react-spring";

import TextLoop from "@kelvinkhai/react-text-loop";

import styledComponents from "styled-components";

const RowWrapper = styledComponents.div`
    display: flex;
    flex-direction: column;
`;

const ColumnWrapper = styledComponents.div`
    display: flex;
    flex-direction: column;
    margin: 1%;
`;

const MobileLanding = () => {
	const [firstInterval, setFirstInterval] = useState(200);
	const [secondInterval, setSecondInterval] = useState(200);
	const [thirdInterval, setThirdInterval] = useState(200);
	const [fourthInterval, setFourthInterval] = useState(200);

	const setTimeoutStop = () => {
		setFirstInterval(0);
		setTimeout(() => setSecondInterval(0), 2000);
		setTimeout(() => setThirdInterval(0), 4000);
		setTimeout(() => setFourthInterval(0), 6000);
	};

	const start = () => {
		setFirstInterval(200);
		setSecondInterval(200);
		setThirdInterval(200);
		setFourthInterval(200);
	};

	return (
		<>
			<button onClick={() => start()}>Start</button>
			<button onClick={() => setTimeoutStop()}>Stop</button>
			<ColumnWrapper>
				<ColumnWrapper>
					<div>
						<TextLoop
							interval={firstInterval}
							mask={false}
							fade={true}
							noWrap={true}
							springConfig={{ stiffness: 180, damping: 8 }}
						>
							<svg width="100" height="110">
								<rect fill="#1816c9" width="100" height="100" />
							</svg>
						</TextLoop>
					</div>

					<div>
						<TextLoop
							interval={firstInterval}
							mask={false}
							fade={true}
							noWrap={true}
							springConfig={{ stiffness: 180, damping: 8 }}
						>
							<span>상장기업</span>
							<span>공모기업</span>
							<span>중견기업</span>
							<span>중소기업</span>
							<span>스타트업</span>
						</TextLoop>
					</div>
				</ColumnWrapper>
				<ColumnWrapper>
					<div>
						<svg width="100" height="110">
							<rect
								fill="#1816c9"
								width="100"
								height="100"
								rx="50"
							/>
						</svg>
					</div>

					<div>
						<TextLoop
							interval={secondInterval}
							mask={false}
							fade={true}
							noWrap={true}
							springConfig={{ stiffness: 180, damping: 8 }}
						>
							<span>사업경쟁력</span>
							<span>경영안정성</span>
							<span>경영리스크</span>
							<span>성장잠재성</span>
							<span>기술혁신성</span>
							<span>가치적정성</span>
							<span>지속가능성</span>
							<span>조직생산성</span>
							<span>사업수익성</span>
						</TextLoop>
					</div>
				</ColumnWrapper>

				<ColumnWrapper>
					<div>
						<svg width="100" height="110">
							<rect
								fill="#1816c9"
								width="100"
								height="100"
								rx="50"
							/>
						</svg>
					</div>

					<div>
						<TextLoop
							interval={thirdInterval}
							mask={false}
							fade={true}
							noWrap={true}
							springConfig={{ stiffness: 180, damping: 8 }}
						>
							<span>AI 모형 01</span>
							<span>AI 모형 02</span>
							<span>AI 모형 03</span>
							<span>AI 모형 04</span>
							<span>AI 모형 05</span>
                            <span>AI 모형 06</span>
                            <span>AI 모형 07</span>
                            <span>AI 모형 08</span>
						</TextLoop>
					</div>
				</ColumnWrapper>
				<ColumnWrapper>
					<div>
						<svg width="100" height="110">
							<rect
								fill="#1816c9"
								width="100"
								height="100"
								rx="50"
							/>
						</svg>
					</div>

					<div>
						<TextLoop
							interval={fourthInterval}
							mask={false}
							fade={true}
							noWrap={true}
							springConfig={{ stiffness: 180, damping: 8 }}
						>
							<span>Data Set 01</span>
							<span>Data Set 02</span>
							<span>Data Set 03</span>
                            <span>Data Set 04</span>
                            <span>Data Set 05</span>
                            <span>Data Set 06</span>
                            <span>Data Set 07</span>
                            <span>Data Set 08</span>
						</TextLoop>
					</div>
				</ColumnWrapper>
			</ColumnWrapper>
		</>
	);
};

export default MobileLanding;
