import React, { useEffect, useState, useRef } from "react";

const shapes = {
    rectangle: {
        id: "",
        transform: "",
    },

    circle: {
        id: "",
        transform: "",
    },

    tripleRectangle: {
        id: "",
        transform: "",
        d: "",
    },

    quadCircle: {
        id: "",
        transform: "",
        d: "",
    }
};

const texts = {
    firstText: {
        id: "",
        transform: "",
    },
    secondText: {
        id: "",
        transform: "",
    },
    thirdText: {
        id: "",
        transform: "",
    }
};

const lines = {

    firstLine: {
        id: "",
        transform: "",
        d: "",
    },
    secondLine: {
        id: "",
        transform: "",
        d: "",
    },
    thirdLine: {
        id: "",
        transform: "",
        d: "",
    }

};

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


const Background = ({ rest, svgRefState, onHandleCoordinate }) => {

    const [coordinateDataSet, setCoordinateDataSet] = useState();


    useEffect(() => {

        
        

        if (rest && svgRefState){

            const coordinateData = {};

            const firstLines = [];
            const secondLines = [];
            const thirdLines = [];
            
            svgRefState.childNodes.forEach((node) => {
                if (node.tagName === "path"){

                    // Get Y transform coordinate
                    const yCoord =  Number(node.getAttribute("transform").split(' ')[1].slice(0, -1));

                    // Filter node by layer (1, 2, 3)
                    switch (yCoord) {
                        case 4.501:
                            firstLines.push(node);
                            break;
                        case 159:
                            secondLines.push(node);
                            break;
                        case 302:
                            thirdLines.push(node);
                            break;
                        default:
                            break;
                    }
                }
            });


            // Set firstLine (random number)
            const firstLineElement = firstLines[rand(0, firstLines.length - 1)];

            console.log(firstLineElement);

            const firstLineObj = {};
            firstLineObj.id = firstLineElement.getAttribute("id");
            firstLineObj.transform = firstLineElement.getAttribute("transform");
            firstLineObj.d = firstLineElement.getAttribute("d");

            coordinateData.firstLine = firstLineObj;

            
            // 먼저 firstLineElement의 translate x 값을 구함 
            const firstLineTranslateX = Number(firstLineElement.getAttribute("transform").split(' ')[0].slice(10, firstLineElement.length));
            // firstLineElement 의 path moveTo 의 x 값을 구함 
            const firstLineMoveToX = Number(firstLineElement.getAttribute("d").substring(0, 13).split(',')[0].slice(1));

            
            // start 구하기 위한 x
            const firstLineStartOffset = firstLineTranslateX + firstLineMoveToX;

            // end 구하기 위한 x
            let firstLineEndOffset;

            // Curve direction
            let curveDirection;
            const pathId = firstLineElement.getAttribute("id").split("_")[1];
            // 86, 140, 249 -> 이상한 값
            if(pathId === "86"){
                curveDirection = 0;
            } else {
                curveDirection = Number(firstLineElement.getAttribute("d").split('s')[1].split(',')[0]);
            }
            
            if (curveDirection < - 0.1) {
                firstLineEndOffset = firstLineTranslateX + firstLineMoveToX - firstLineElement.getBoundingClientRect().width;
            } else {
                firstLineEndOffset = firstLineTranslateX + firstLineMoveToX + firstLineElement.getBoundingClientRect().width;
            }

  
            // Set Rectangle 
            let targetRectangleElement;
            svgRefState.childNodes.forEach((node) => {
                
                // 맨 처음 사각형
                if (node.tagName === "rect" && node.getAttribute("data-name").split(' ')[0] === "사각형" && !node.getAttribute("rx") ){

                    const transformText = node.getAttribute("transform").split(' ')[0];
                    const rectangleTranslateX = Number(node.getAttribute("transform").split(' ')[0].slice(10, transformText.length));

                    // 간격에 들어오면
                    if (firstLineStartOffset - 50 < rectangleTranslateX && rectangleTranslateX < firstLineStartOffset + 50){
                        targetRectangleElement = node;
                    }

                }
            });

            const rectangleObj = {};
            rectangleObj.id = targetRectangleElement.getAttribute("id");
            rectangleObj.transform = targetRectangleElement.getAttribute("transform");

            coordinateData.rectangle = rectangleObj;



            // Set First Text
            let targetFirstTextElement;
            svgRefState.childNodes.forEach((node) => {
                // First text
                if (node.tagName === "text" && Number(node.getAttribute("transform").split(' ')[1].slice(0, -1)) === 2471){

                    const firstTextTranslateX = Number(node.getAttribute("transform").split(' ')[0].slice(10, 14));
                    // 간격에 들어오면
                    if (firstLineStartOffset - 50 < firstTextTranslateX && firstTextTranslateX < firstLineStartOffset + 50){
                        targetFirstTextElement = node;
                    }
                }
            });

            const firstTextObj = {};
            firstTextObj.id = targetFirstTextElement.getAttribute("id");
            firstTextObj.transform = targetFirstTextElement.getAttribute("transform");

            coordinateData.firstText = firstTextObj;








            let targetCircleElement;
            svgRefState.childNodes.forEach((node) => {
                // First text
                if (node.tagName === "rect" && node.getAttribute("data-name").split(' ')[0] === "사각형" && node.getAttribute("rx") ){

                    const transformText = node.getAttribute("transform").split(' ')[0];
                    const circleTranslateX = node.getAttribute("transform").split(' ')[0].slice(10, transformText.length);

                    // 간격에 들어오면
                    if (firstLineEndOffset - 50 < circleTranslateX && circleTranslateX < firstLineEndOffset + 50){
                        targetCircleElement = node;
                    }
                }
            });

            // console.log(targetCircleElement);

            const circleObj = {};
            circleObj.id = targetCircleElement.getAttribute("id");
            circleObj.transform = targetCircleElement.getAttribute("transform");

            coordinateData.circle = circleObj;






            // Set Second Text
            let targetSecondTextElement;
            svgRefState.childNodes.forEach((node) => {
                // Second text
                if (node.tagName === "text" && Number(node.getAttribute("transform").split(' ')[1].slice(0, -1)) === 2609){

                    const secondTextTranslateX = Number(node.getAttribute("transform").split(' ')[0].slice(10, 14));
                    
                    // 간격에 들어오면
                    if (firstLineEndOffset - 50 < secondTextTranslateX && secondTextTranslateX < firstLineEndOffset + 50){
                        targetSecondTextElement = node;
                    }
                }
            });

            const secondTextObj = {};
            secondTextObj.id = targetSecondTextElement.getAttribute("id");
            secondTextObj.transform = targetSecondTextElement.getAttribute("transform");

            coordinateData.secondText = secondTextObj;















            // Set Second Line
            let secondLineElement;
            let secondLineCandidate = [];
            secondLines.forEach((line) => {

                const lineMoveToText = line.getAttribute("d").split(",")[0];
                const lineMoveToX = Number(line.getAttribute("d").split(",")[0].substring(1, lineMoveToText.length));
 
                const lineTranslateText = line.getAttribute("transform").split(' ')[0];
                const lineTranslateX = Number(line.getAttribute("transform").split(' ')[0].substring(10, lineTranslateText.length));

                if (firstLineEndOffset - 50 < lineMoveToX + lineTranslateX && lineMoveToX + lineTranslateX < firstLineEndOffset + 50){
                    secondLineCandidate.push(line);
                }

            });

            // console.log(secondLineCandidate);

            secondLineElement = secondLineCandidate[rand(0, secondLineCandidate.length - 1)];

            const secondLineObj = {};
            secondLineObj.id = secondLineElement.getAttribute("id");
            secondLineObj.transform = secondLineElement.getAttribute("transform");
            secondLineObj.d = secondLineElement.getAttribute("d");

            coordinateData.secondLine = secondLineObj;


            const secondLineMoveToText = secondLineElement.getAttribute("d").split(",")[0];
            const secondLineMoveToX = Number(secondLineElement.getAttribute("d").split(",")[0].substring(1, secondLineMoveToText.length));
 
            const secondLineTranslateText = secondLineElement.getAttribute("transform").split(' ')[0];
            const secondLineTranslateX = Number(secondLineElement.getAttribute("transform").split(' ')[0].substring(10, secondLineTranslateText.length));


            // end 구하기 위한 x
            let secondLineEndOffset;

            // Curve direction
            let secondLineCurveDirection;
            const secondPathId = secondLineElement.getAttribute("id").split("_")[1];
            // 86, 140, 249 -> 이상한 값
            if(secondPathId === "140"){
                secondLineCurveDirection = 0;
            } else {
                secondLineCurveDirection = Number(secondLineElement.getAttribute("d").split('s')[1].split(',')[0]);
            }
            
            if (secondLineCurveDirection < - 0.1) {
                secondLineEndOffset = secondLineTranslateX + secondLineMoveToX - secondLineElement.getBoundingClientRect().width;
            } else {
                secondLineEndOffset = secondLineTranslateX + secondLineMoveToX + secondLineElement.getBoundingClientRect().width;
            }






            // Set TripleRectangle
            let targetTripleRectangleElement;
            svgRefState.childNodes.forEach((node) => {

                
                if (node.tagName === "g" && node.childNodes[0].childNodes[0].getAttribute("data-name").split(' ')[1] === "540"){
                    
                    const transformText = node.getAttribute("transform").split(' ')[0];
                    const tripleRectangleTranslateX = node.getAttribute("transform").split(' ')[0].slice(10, transformText.length);

                    // 간격에 들어오면
                    if (secondLineEndOffset - 50 < tripleRectangleTranslateX && tripleRectangleTranslateX < secondLineEndOffset + 50){
                        targetTripleRectangleElement = node;
                    }
                }

            });

            const tripleRectangleObj = {};
            tripleRectangleObj.id = targetTripleRectangleElement.childNodes[0].childNodes[0].getAttribute("id");
            tripleRectangleObj.transform = targetTripleRectangleElement.getAttribute("transform");
            tripleRectangleObj.d = targetTripleRectangleElement.childNodes[0].childNodes[0].getAttribute("d");
            coordinateData.tripleRectangle = tripleRectangleObj;

            // console.log(targetTripleRectangleElement);

            
            // Set ThirdText
            let targetThirdTextElement;
            svgRefState.childNodes.forEach((node) => {
                // Second text
                if (node.tagName === "text" && Number(node.getAttribute("transform").split(' ')[1].slice(0, -1)) === 2749){

                    const thirdTextTranslateX = Number(node.getAttribute("transform").split(' ')[0].slice(10, 14));
                    
                    // 간격에 들어오면
                    if (secondLineEndOffset - 50 < thirdTextTranslateX && thirdTextTranslateX < secondLineEndOffset + 50){
                        targetThirdTextElement = node;
                    }
                }
            });

            const thirdTextObj = {};
            thirdTextObj.id = targetThirdTextElement.getAttribute("id");
            thirdTextObj.transform = targetThirdTextElement.getAttribute("transform");

            coordinateData.thirdText = thirdTextObj;

            // console.log(targetThirdTextElement);




            
            // Set third Line
            let thirdLineElement;
            let thirdLineCandidate = [];
            thirdLines.forEach((line) => {

                const lineMoveToText = line.getAttribute("d").split(",")[0];
                const lineMoveToX = Number(line.getAttribute("d").split(",")[0].substring(1, lineMoveToText.length));
 
                const lineTranslateText = line.getAttribute("transform").split(' ')[0];
                const lineTranslateX = Number(line.getAttribute("transform").split(' ')[0].substring(10, lineTranslateText.length));

                if (secondLineEndOffset - 50 < lineMoveToX + lineTranslateX && lineMoveToX + lineTranslateX < secondLineEndOffset + 50){
                    thirdLineCandidate.push(line);
                }

            });

            thirdLineElement = thirdLineCandidate[rand(0, thirdLineCandidate.length - 1)];

            const thirdLineObj = {};
            thirdLineObj.id = thirdLineElement.getAttribute("id");
            thirdLineObj.transform = thirdLineElement.getAttribute("transform");
            thirdLineObj.d = thirdLineElement.getAttribute("d");

            // console.log(thirdLineElement);

            coordinateData.thirdLine = thirdLineObj;




            const thirdLineMoveToText = thirdLineElement.getAttribute("d").split(",")[0];
            const thirdLineMoveToX = Number(thirdLineElement.getAttribute("d").split(",")[0].substring(1, thirdLineMoveToText.length));
 
            const thirdLineTranslateText = thirdLineElement.getAttribute("transform").split(' ')[0];
            const thirdLineTranslateX = Number(thirdLineElement.getAttribute("transform").split(' ')[0].substring(10, thirdLineTranslateText.length));


            // end 구하기 위한 x
            let thirdLineEndOffset;

            // Curve direction
            let thirdLineCurveDirection;
            const thirdPathId = thirdLineElement.getAttribute("id").split("_")[1];
            // 86, 140, 249 -> 이상한 값
            if(thirdPathId === "249"){
                thirdLineCurveDirection = 0;
            } else {
                thirdLineCurveDirection = Number(thirdLineElement.getAttribute("d").split('s')[1].split(',')[0]);
            }
            
            if (thirdLineCurveDirection < - 0.1) {
                thirdLineEndOffset = thirdLineTranslateX + thirdLineMoveToX - thirdLineElement.getBoundingClientRect().width;
            } else {
                thirdLineEndOffset = thirdLineTranslateX + thirdLineMoveToX + thirdLineElement.getBoundingClientRect().width;
            }




            // Set QuadCircle
            let targetQuadCircleElement;
            svgRefState.childNodes.forEach((node) => {

                
                if (node.tagName === "g" && node.childNodes[0].childNodes[0].getAttribute("data-name").split(' ')[1] === "541"){
                    
                    const transformText = node.getAttribute("transform").split(' ')[0];
                    const quadCircleTranslateX = node.getAttribute("transform").split(' ')[0].slice(10, transformText.length);

                    // 간격에 들어오면
                    if (thirdLineEndOffset - 50 < quadCircleTranslateX && quadCircleTranslateX < thirdLineEndOffset + 50){
                        targetQuadCircleElement = node;
                    }
                }

            });

            const quadCircleObj = {};
            quadCircleObj.id = targetQuadCircleElement.childNodes[0].childNodes[0].getAttribute("id");
            quadCircleObj.transform = targetQuadCircleElement.getAttribute("transform");
            quadCircleObj.d = targetQuadCircleElement.childNodes[0].childNodes[0].getAttribute("d");
            coordinateData.quadCircle = quadCircleObj;

            // console.log(targetQuadCircleElement);



             // Set FourthText
             let targetFourthTextElement;
             svgRefState.childNodes.forEach((node) => {
                 // Fourth text
                 if (node.tagName === "text" && Number(node.getAttribute("transform").split(' ')[1].slice(0, -1)) === 2904){
 
                     const fourthTextTranslateX = Number(node.getAttribute("transform").split(' ')[0].slice(10, 14));
                     
                     // 간격에 들어오면
                     if (thirdLineEndOffset - 50 < fourthTextTranslateX && fourthTextTranslateX < thirdLineEndOffset + 50){
                        targetFourthTextElement = node;
                     }
                 }
             });
 
             const fourthTextObj = {};
             fourthTextObj.id = targetFourthTextElement.getAttribute("id");
             fourthTextObj.transform = targetFourthTextElement.getAttribute("transform");
 
             coordinateData.fourthText = fourthTextObj;


             setCoordinateDataSet(coordinateData);

        }
        
    } ,[rest, svgRefState]);

    useEffect(() => {
        if (coordinateDataSet){
            onHandleCoordinate(coordinateDataSet);
        }
    }, [coordinateDataSet])


	return (
		<>
			{/* 네모 */}
			<rect
				id="사각형_59"
				data-name="사각형 59"
				width="25"
				height="25"
				transform="translate(1168 2425)"
				fill="#b8b8c6"
			/>
			<rect
				id="사각형_60"
				data-name="사각형 60"
				width="25"
				height="25"
				transform="translate(1268 2425)"
				fill="#b8b8c6"
			/>
			<rect
				id="사각형_102"
				data-name="사각형 102"
				width="25"
				height="25"
				transform="translate(1365 2425)"
				fill="#b8b8c6"
			/>
			<rect
				id="사각형_61"
				data-name="사각형 61"
				width="25"
				height="25"
				transform="translate(1462 2425)"
				fill="#b8b8c6"
			/>
			<rect
				id="사각형_62"
				data-name="사각형 62"
				width="25"
				height="25"
				transform="translate(1559 2425)"
				fill="#b8b8c6"
			/>

			{/* 네모 텍스트 */}
			<text
				id="상장기업"
				transform="translate(1156 2471)"
				fill="#b8b8c6"
				font-size="14"
				font-family="MalgunGothic, Malgun Gothic"
			>
				<tspan x="0" y="0">
					상장기업
				</tspan>
			</text>
			<text
				id="공모기업"
				transform="translate(1253 2471)"
				fill="#b8b8c6"
				font-size="14"
				font-family="MalgunGothic, Malgun Gothic"
			>
				<tspan x="0" y="0">
					공모기업
				</tspan>
			</text>
			<text
				id="중견기업"
				transform="translate(1350 2471)"
				fill="#b8b8c6"
				font-size="14"
				font-family="MalgunGothic, Malgun Gothic"
			>
				<tspan x="0" y="0">
					중견기업
				</tspan>
			</text>
			<text
				id="중소기업"
				transform="translate(1447 2471)"
				fill="#b8b8c6"
				font-size="14"
				font-family="MalgunGothic, Malgun Gothic"
			>
				<tspan x="0" y="0">
					중소기업
				</tspan>
			</text>
			<text
				id="스타트업"
				transform="translate(1544 2471)"
				fill="#b8b8c6"
				font-size="14"
				font-family="MalgunGothic, Malgun Gothic"
			>
				<tspan x="0" y="0">
					스타트업
				</tspan>
			</text>

			{/* 동그라미 */}
			<rect
				id="사각형_103"
				data-name="사각형 103"
				width="25"
				height="25"
				rx="12.5"
				transform="translate(977 2563.501)"
				fill="#b8b8c6"
			/>
			<rect
				id="사각형_104"
				data-name="사각형 104"
				width="25"
				height="25"
				rx="12.5"
				transform="translate(1074 2563.501)"
				fill="#b8b8c6"
			/>
			<rect
				id="사각형_105"
				data-name="사각형 105"
				width="25"
				height="25"
				rx="12.5"
				transform="translate(1171 2563.501)"
				fill="#b8b8c6"
			/>
			<rect
				id="사각형_106"
				data-name="사각형 106"
				width="25"
				height="25"
				rx="12.5"
				transform="translate(1268 2563.501)"
				fill="#b8b8c6"
			/>
			<rect
				id="사각형_107"
				data-name="사각형 107"
				width="25"
				height="25"
				rx="12.5"
				transform="translate(1365 2563.501)"
				fill="#b8b8c6"
			/>
			<rect
				id="사각형_108"
				data-name="사각형 108"
				width="25"
				height="25"
				rx="12.5"
				transform="translate(1462 2563.501)"
				fill="#b8b8c6"
			/>
			<rect
				id="사각형_109"
				data-name="사각형 109"
				width="25"
				height="25"
				rx="12.5"
				transform="translate(1559 2563.501)"
				fill="#b8b8c6"
			/>
			<rect
				id="사각형_110"
				data-name="사각형 110"
				width="25"
				height="25"
				rx="12.5"
				transform="translate(1656 2563.501)"
				fill="#b8b8c6"
			/>
			<rect
				id="사각형_111"
				data-name="사각형 111"
				width="25"
				height="25"
				rx="12.5"
				transform="translate(1753 2563.501)"
				fill="#b8b8c6"
			/>

			{/* 동그라미 텍스트 */}
			<text
				id="사업_경쟁력"
				data-name="사업경쟁력"
				transform="translate(990 2609)"
				fill="#b8b8c6"
				font-size="14"
				font-family="MalgunGothic, Malgun Gothic"
			>
				<tspan x="-14" y="0">
					사업
				</tspan>
				<tspan y="0" font-family="SegoeUI, Segoe UI"></tspan>
				<tspan x="-21" y="16">
					경쟁력
				</tspan>
			</text>
			<text
				id="경영_안정성"
				data-name="경영안정성"
				transform="translate(1087 2609)"
				fill="#b8b8c6"
				font-size="14"
				font-family="MalgunGothic, Malgun Gothic"
			>
				<tspan x="-14" y="0">
					경영
				</tspan>
				<tspan y="0" font-family="SegoeUI, Segoe UI"></tspan>
				<tspan x="-21" y="16">
					안정성
				</tspan>
			</text>
			<text
				id="경영_리스크"
				data-name="경영리스크"
				transform="translate(1184 2609)"
				fill="#b8b8c6"
				font-size="14"
				font-family="MalgunGothic, Malgun Gothic"
			>
				<tspan x="-14" y="0">
					경영
				</tspan>
				<tspan y="0" font-family="SegoeUI, Segoe UI"></tspan>
				<tspan x="-21" y="16">
					리스크
				</tspan>
			</text>
			<text
				id="성장_잠재성"
				data-name="성장잠재성"
				transform="translate(1281 2609)"
				fill="#b8b8c6"
				font-size="14"
				font-family="MalgunGothic, Malgun Gothic"
			>
				<tspan x="-14" y="0">
					성장
				</tspan>
				<tspan y="0" font-family="SegoeUI, Segoe UI"></tspan>
				<tspan x="-21" y="16">
					잠재성
				</tspan>
			</text>
			<text
				id="기술_혁신성"
				data-name="기술혁신성"
				transform="translate(1378 2609)"
				fill="#b8b8c6"
				font-size="14"
				font-family="MalgunGothic, Malgun Gothic"
			>
				<tspan x="-14" y="0">
					기술
				</tspan>
				<tspan y="0" font-family="SegoeUI, Segoe UI"></tspan>
				<tspan x="-21" y="16">
					혁신성
				</tspan>
			</text>
			<text
				id="가치_적정성"
				data-name="가치적정성"
				transform="translate(1474 2609)"
				fill="#b8b8c6"
				font-size="14"
				font-family="MalgunGothic, Malgun Gothic"
			>
				<tspan x="-14" y="0">
					가치
				</tspan>
				<tspan y="0" font-family="SegoeUI, Segoe UI"></tspan>
				<tspan x="-21" y="16">
					적정성
				</tspan>
			</text>
			<text
				id="지속_가능성"
				data-name="지속가능성"
				transform="translate(1571 2609)"
				fill="#b8b8c6"
				font-size="14"
				font-family="MalgunGothic, Malgun Gothic"
			>
				<tspan x="-14" y="0">
					지속
				</tspan>
				<tspan y="0" font-family="SegoeUI, Segoe UI"></tspan>
				<tspan x="-21" y="16">
					가능성
				</tspan>
			</text>
			<text
				id="조직_생산성"
				data-name="조직생산성"
				transform="translate(1668 2609)"
				fill="#b8b8c6"
				font-size="14"
				font-family="MalgunGothic, Malgun Gothic"
			>
				<tspan x="-14" y="0">
					조직
				</tspan>
				<tspan y="0" font-family="SegoeUI, Segoe UI"></tspan>
				<tspan x="-21" y="16">
					생산성
				</tspan>
			</text>
			<text
				id="사업_수익성"
				data-name="사업수익성"
				transform="translate(1765 2609)"
				fill="#b8b8c6"
				font-size="14"
				font-family="MalgunGothic, Malgun Gothic"
			>
				<tspan x="-14" y="0">
					사업
				</tspan>
				<tspan y="0" font-family="SegoeUI, Segoe UI"></tspan>
				<tspan x="-21" y="16">
					수익성
				</tspan>
			</text>

			{/* 네모 3개 */}
			<g
				id="그룹_316"
				data-name="그룹 316"
				transform="translate(976 2702.626)"
			>
				<g
					id="그룹_315"
					data-name="그룹 315"
					transform="translate(0 0)"
					clip-path="url(#clip-path)"
				>
					<path
						id="패스_540"
						data-name="패스 540"
						d="M28.05,8.72c0,1-.01,1.993,0,2.99a1.387,1.387,0,0,1-.692,1.283c-1.82,1.177-3.624,2.377-5.442,3.557a.538.538,0,0,0-.288.521c.013,1.774,0,3.548.012,5.323A1.329,1.329,0,0,1,21,23.6q-3.142,2.066-6.28,4.138a1.3,1.3,0,0,1-1.586-.023q-3-2.049-6-4.079a1.439,1.439,0,0,1-.689-1.32c.021-1.719,0-3.439.013-5.158a.524.524,0,0,0-.266-.5c-1.82-1.217-3.626-2.454-5.45-3.664A1.5,1.5,0,0,1,0,11.6c.024-1.993.016-3.987,0-5.98A1.326,1.326,0,0,1,.651,4.418Q3.795,2.355,6.93.278A1.251,1.251,0,0,1,8.476.293c1.732,1.19,3.476,2.362,5.2,3.559a.512.512,0,0,0,.684-.005C16.128,2.667,17.9,1.5,19.675.333a1.242,1.242,0,0,1,1.709.015c1.975,1.34,3.944,2.688,5.925,4.019a1.525,1.525,0,0,1,.746,1.4c-.02.985-.005,1.972-.005,2.957M7.668,2.609,3.279,5.494c.1.075.171.128.242.176,1.242.838,2.488,1.671,3.724,2.519a.39.39,0,0,0,.519,0c1.281-.858,2.572-1.7,3.859-2.552.079-.052.152-.112.25-.185l-4.2-2.848M24.757,5.465c-1.36-.915-2.679-1.8-3.986-2.692a.391.391,0,0,0-.52.01c-1.274.85-2.555,1.689-3.833,2.532-.085.056-.164.121-.264.2l4.2,2.845,4.4-2.891M13.914,19.038l4.365-2.859-4.234-2.872L9.7,16.179l4.218,2.858m5.357-.691c-.092.047-.131.063-.166.086-1.244.816-2.49,1.628-3.726,2.456a.514.514,0,0,0-.175.372c-.014,1.018-.008,2.036-.007,3.054,0,.091.012.182.021.313,1.334-.877,2.632-1.727,3.924-2.585a.329.329,0,0,0,.124-.235c.008-1.136.005-2.273.005-3.461m-10.517.008c0,1.164.007,2.248-.006,3.331a.467.467,0,0,0,.245.446c1.19.8,2.371,1.61,3.556,2.416.077.052.161.1.279.165,0-1.18.005-2.316-.01-3.452,0-.1-.125-.218-.221-.284-1.063-.733-2.131-1.457-3.2-2.183l-.645-.44m12.872-4.467c.084-.042.134-.061.177-.089,1.23-.8,2.463-1.592,3.685-2.4a.512.512,0,0,0,.184-.369c.015-1.018.009-2.037.007-3.055a2.549,2.549,0,0,0-.033-.276c-.125.075-.218.128-.307.186-1.153.756-2.3,1.518-3.461,2.266a.516.516,0,0,0-.276.5c.014.963.005,1.927.006,2.891,0,.1.01.209.017.349M12.859,7.694a1.636,1.636,0,0,0-.169.079c-1.244.815-2.49,1.627-3.724,2.455a.52.52,0,0,0-.17.377c-.014,1-.008,1.991-.006,2.986,0,.089.018.179.033.314,1.331-.875,2.619-1.72,3.9-2.572a.336.336,0,0,0,.13-.237c.008-1.115.006-2.229.006-3.4m-10.48.021a1.667,1.667,0,0,0-.032.206c0,1.04-.008,2.081.008,3.121a.525.525,0,0,0,.216.355c1.188.823,2.384,1.632,3.579,2.444.068.046.144.081.226.127a.512.512,0,0,0,.036-.115c0-1.084.007-2.168,0-3.252a.334.334,0,0,0-.127-.237C5,9.487,3.714,8.619,2.379,7.716M19.271,13.96c0-1.124-.006-2.174.005-3.223a.468.468,0,0,0-.236-.451c-1.2-.8-2.393-1.615-3.588-2.423-.069-.046-.141-.087-.256-.157,0,1.107.007,2.164-.006,3.221a.468.468,0,0,0,.249.446c.974.648,1.94,1.308,2.909,1.964l.923.624"
						transform="translate(0 0)"
						fill="#b8b8c6"
					/>
				</g>
			</g>
			<g
				id="그룹_327"
				data-name="그룹 327"
				transform="translate(1073 2702.626)"
			>
				<g
					id="그룹_315-4"
					data-name="그룹 315"
					transform="translate(0 0)"
					clip-path="url(#clip-path)"
				>
					<path
						id="패스_540-4"
						data-name="패스 540"
						d="M28.05,8.72c0,1-.01,1.993,0,2.99a1.387,1.387,0,0,1-.692,1.283c-1.82,1.177-3.624,2.377-5.442,3.557a.538.538,0,0,0-.288.521c.013,1.774,0,3.548.012,5.323A1.329,1.329,0,0,1,21,23.6q-3.142,2.066-6.28,4.138a1.3,1.3,0,0,1-1.586-.023q-3-2.049-6-4.079a1.439,1.439,0,0,1-.689-1.32c.021-1.719,0-3.439.013-5.158a.524.524,0,0,0-.266-.5c-1.82-1.217-3.626-2.454-5.45-3.664A1.5,1.5,0,0,1,0,11.6c.024-1.993.016-3.987,0-5.98A1.326,1.326,0,0,1,.651,4.418Q3.795,2.355,6.93.278A1.251,1.251,0,0,1,8.476.293c1.732,1.19,3.476,2.362,5.2,3.559a.512.512,0,0,0,.684-.005C16.128,2.667,17.9,1.5,19.675.333a1.242,1.242,0,0,1,1.709.015c1.975,1.34,3.944,2.688,5.925,4.019a1.525,1.525,0,0,1,.746,1.4c-.02.985-.005,1.972-.005,2.957M7.668,2.609,3.279,5.494c.1.075.171.128.242.176,1.242.838,2.488,1.671,3.724,2.519a.39.39,0,0,0,.519,0c1.281-.858,2.572-1.7,3.859-2.552.079-.052.152-.112.25-.185l-4.2-2.848M24.757,5.465c-1.36-.915-2.679-1.8-3.986-2.692a.391.391,0,0,0-.52.01c-1.274.85-2.555,1.689-3.833,2.532-.085.056-.164.121-.264.2l4.2,2.845,4.4-2.891M13.914,19.038l4.365-2.859-4.234-2.872L9.7,16.179l4.218,2.858m5.357-.691c-.092.047-.131.063-.166.086-1.244.816-2.49,1.628-3.726,2.456a.514.514,0,0,0-.175.372c-.014,1.018-.008,2.036-.007,3.054,0,.091.012.182.021.313,1.334-.877,2.632-1.727,3.924-2.585a.329.329,0,0,0,.124-.235c.008-1.136.005-2.273.005-3.461m-10.517.008c0,1.164.007,2.248-.006,3.331a.467.467,0,0,0,.245.446c1.19.8,2.371,1.61,3.556,2.416.077.052.161.1.279.165,0-1.18.005-2.316-.01-3.452,0-.1-.125-.218-.221-.284-1.063-.733-2.131-1.457-3.2-2.183l-.645-.44m12.872-4.467c.084-.042.134-.061.177-.089,1.23-.8,2.463-1.592,3.685-2.4a.512.512,0,0,0,.184-.369c.015-1.018.009-2.037.007-3.055a2.549,2.549,0,0,0-.033-.276c-.125.075-.218.128-.307.186-1.153.756-2.3,1.518-3.461,2.266a.516.516,0,0,0-.276.5c.014.963.005,1.927.006,2.891,0,.1.01.209.017.349M12.859,7.694a1.636,1.636,0,0,0-.169.079c-1.244.815-2.49,1.627-3.724,2.455a.52.52,0,0,0-.17.377c-.014,1-.008,1.991-.006,2.986,0,.089.018.179.033.314,1.331-.875,2.619-1.72,3.9-2.572a.336.336,0,0,0,.13-.237c.008-1.115.006-2.229.006-3.4m-10.48.021a1.667,1.667,0,0,0-.032.206c0,1.04-.008,2.081.008,3.121a.525.525,0,0,0,.216.355c1.188.823,2.384,1.632,3.579,2.444.068.046.144.081.226.127a.512.512,0,0,0,.036-.115c0-1.084.007-2.168,0-3.252a.334.334,0,0,0-.127-.237C5,9.487,3.714,8.619,2.379,7.716M19.271,13.96c0-1.124-.006-2.174.005-3.223a.468.468,0,0,0-.236-.451c-1.2-.8-2.393-1.615-3.588-2.423-.069-.046-.141-.087-.256-.157,0,1.107.007,2.164-.006,3.221a.468.468,0,0,0,.249.446c.974.648,1.94,1.308,2.909,1.964l.923.624"
						transform="translate(0 0)"
						fill="#b8b8c6"
					/>
				</g>
			</g>
			<g
				id="그룹_329"
				data-name="그룹 329"
				transform="translate(1170 2702.626)"
			>
				<g
					id="그룹_315-2"
					data-name="그룹 315"
					transform="translate(0 0)"
					clip-path="url(#clip-path)"
				>
					<path
						id="패스_540-2"
						data-name="패스 540"
						d="M28.05,8.72c0,1-.01,1.993,0,2.99a1.387,1.387,0,0,1-.692,1.283c-1.82,1.177-3.624,2.377-5.442,3.557a.538.538,0,0,0-.288.521c.013,1.774,0,3.548.012,5.323A1.329,1.329,0,0,1,21,23.6q-3.142,2.066-6.28,4.138a1.3,1.3,0,0,1-1.586-.023q-3-2.049-6-4.079a1.439,1.439,0,0,1-.689-1.32c.021-1.719,0-3.439.013-5.158a.524.524,0,0,0-.266-.5c-1.82-1.217-3.626-2.454-5.45-3.664A1.5,1.5,0,0,1,0,11.6c.024-1.993.016-3.987,0-5.98A1.326,1.326,0,0,1,.651,4.418Q3.795,2.355,6.93.278A1.251,1.251,0,0,1,8.476.293c1.732,1.19,3.476,2.362,5.2,3.559a.512.512,0,0,0,.684-.005C16.128,2.667,17.9,1.5,19.675.333a1.242,1.242,0,0,1,1.709.015c1.975,1.34,3.944,2.688,5.925,4.019a1.525,1.525,0,0,1,.746,1.4c-.02.985-.005,1.972-.005,2.957M7.668,2.609,3.279,5.494c.1.075.171.128.242.176,1.242.838,2.488,1.671,3.724,2.519a.39.39,0,0,0,.519,0c1.281-.858,2.572-1.7,3.859-2.552.079-.052.152-.112.25-.185l-4.2-2.848M24.757,5.465c-1.36-.915-2.679-1.8-3.986-2.692a.391.391,0,0,0-.52.01c-1.274.85-2.555,1.689-3.833,2.532-.085.056-.164.121-.264.2l4.2,2.845,4.4-2.891M13.914,19.038l4.365-2.859-4.234-2.872L9.7,16.179l4.218,2.858m5.357-.691c-.092.047-.131.063-.166.086-1.244.816-2.49,1.628-3.726,2.456a.514.514,0,0,0-.175.372c-.014,1.018-.008,2.036-.007,3.054,0,.091.012.182.021.313,1.334-.877,2.632-1.727,3.924-2.585a.329.329,0,0,0,.124-.235c.008-1.136.005-2.273.005-3.461m-10.517.008c0,1.164.007,2.248-.006,3.331a.467.467,0,0,0,.245.446c1.19.8,2.371,1.61,3.556,2.416.077.052.161.1.279.165,0-1.18.005-2.316-.01-3.452,0-.1-.125-.218-.221-.284-1.063-.733-2.131-1.457-3.2-2.183l-.645-.44m12.872-4.467c.084-.042.134-.061.177-.089,1.23-.8,2.463-1.592,3.685-2.4a.512.512,0,0,0,.184-.369c.015-1.018.009-2.037.007-3.055a2.549,2.549,0,0,0-.033-.276c-.125.075-.218.128-.307.186-1.153.756-2.3,1.518-3.461,2.266a.516.516,0,0,0-.276.5c.014.963.005,1.927.006,2.891,0,.1.01.209.017.349M12.859,7.694a1.636,1.636,0,0,0-.169.079c-1.244.815-2.49,1.627-3.724,2.455a.52.52,0,0,0-.17.377c-.014,1-.008,1.991-.006,2.986,0,.089.018.179.033.314,1.331-.875,2.619-1.72,3.9-2.572a.336.336,0,0,0,.13-.237c.008-1.115.006-2.229.006-3.4m-10.48.021a1.667,1.667,0,0,0-.032.206c0,1.04-.008,2.081.008,3.121a.525.525,0,0,0,.216.355c1.188.823,2.384,1.632,3.579,2.444.068.046.144.081.226.127a.512.512,0,0,0,.036-.115c0-1.084.007-2.168,0-3.252a.334.334,0,0,0-.127-.237C5,9.487,3.714,8.619,2.379,7.716M19.271,13.96c0-1.124-.006-2.174.005-3.223a.468.468,0,0,0-.236-.451c-1.2-.8-2.393-1.615-3.588-2.423-.069-.046-.141-.087-.256-.157,0,1.107.007,2.164-.006,3.221a.468.468,0,0,0,.249.446c.974.648,1.94,1.308,2.909,1.964l.923.624"
						transform="translate(0 0)"
						fill="#b8b8c6"
					/>
				</g>
			</g>
			<g
				id="그룹_328"
				data-name="그룹 328"
				transform="translate(1267 2702.626)"
			>
				<g
					id="그룹_315-7"
					data-name="그룹 315"
					transform="translate(0 0)"
					clip-path="url(#clip-path)"
				>
					<path
						id="패스_540-7"
						data-name="패스 540"
						d="M28.05,8.72c0,1-.01,1.993,0,2.99a1.387,1.387,0,0,1-.692,1.283c-1.82,1.177-3.624,2.377-5.442,3.557a.538.538,0,0,0-.288.521c.013,1.774,0,3.548.012,5.323A1.329,1.329,0,0,1,21,23.6q-3.142,2.066-6.28,4.138a1.3,1.3,0,0,1-1.586-.023q-3-2.049-6-4.079a1.439,1.439,0,0,1-.689-1.32c.021-1.719,0-3.439.013-5.158a.524.524,0,0,0-.266-.5c-1.82-1.217-3.626-2.454-5.45-3.664A1.5,1.5,0,0,1,0,11.6c.024-1.993.016-3.987,0-5.98A1.326,1.326,0,0,1,.651,4.418Q3.795,2.355,6.93.278A1.251,1.251,0,0,1,8.476.293c1.732,1.19,3.476,2.362,5.2,3.559a.512.512,0,0,0,.684-.005C16.128,2.667,17.9,1.5,19.675.333a1.242,1.242,0,0,1,1.709.015c1.975,1.34,3.944,2.688,5.925,4.019a1.525,1.525,0,0,1,.746,1.4c-.02.985-.005,1.972-.005,2.957M7.668,2.609,3.279,5.494c.1.075.171.128.242.176,1.242.838,2.488,1.671,3.724,2.519a.39.39,0,0,0,.519,0c1.281-.858,2.572-1.7,3.859-2.552.079-.052.152-.112.25-.185l-4.2-2.848M24.757,5.465c-1.36-.915-2.679-1.8-3.986-2.692a.391.391,0,0,0-.52.01c-1.274.85-2.555,1.689-3.833,2.532-.085.056-.164.121-.264.2l4.2,2.845,4.4-2.891M13.914,19.038l4.365-2.859-4.234-2.872L9.7,16.179l4.218,2.858m5.357-.691c-.092.047-.131.063-.166.086-1.244.816-2.49,1.628-3.726,2.456a.514.514,0,0,0-.175.372c-.014,1.018-.008,2.036-.007,3.054,0,.091.012.182.021.313,1.334-.877,2.632-1.727,3.924-2.585a.329.329,0,0,0,.124-.235c.008-1.136.005-2.273.005-3.461m-10.517.008c0,1.164.007,2.248-.006,3.331a.467.467,0,0,0,.245.446c1.19.8,2.371,1.61,3.556,2.416.077.052.161.1.279.165,0-1.18.005-2.316-.01-3.452,0-.1-.125-.218-.221-.284-1.063-.733-2.131-1.457-3.2-2.183l-.645-.44m12.872-4.467c.084-.042.134-.061.177-.089,1.23-.8,2.463-1.592,3.685-2.4a.512.512,0,0,0,.184-.369c.015-1.018.009-2.037.007-3.055a2.549,2.549,0,0,0-.033-.276c-.125.075-.218.128-.307.186-1.153.756-2.3,1.518-3.461,2.266a.516.516,0,0,0-.276.5c.014.963.005,1.927.006,2.891,0,.1.01.209.017.349M12.859,7.694a1.636,1.636,0,0,0-.169.079c-1.244.815-2.49,1.627-3.724,2.455a.52.52,0,0,0-.17.377c-.014,1-.008,1.991-.006,2.986,0,.089.018.179.033.314,1.331-.875,2.619-1.72,3.9-2.572a.336.336,0,0,0,.13-.237c.008-1.115.006-2.229.006-3.4m-10.48.021a1.667,1.667,0,0,0-.032.206c0,1.04-.008,2.081.008,3.121a.525.525,0,0,0,.216.355c1.188.823,2.384,1.632,3.579,2.444.068.046.144.081.226.127a.512.512,0,0,0,.036-.115c0-1.084.007-2.168,0-3.252a.334.334,0,0,0-.127-.237C5,9.487,3.714,8.619,2.379,7.716M19.271,13.96c0-1.124-.006-2.174.005-3.223a.468.468,0,0,0-.236-.451c-1.2-.8-2.393-1.615-3.588-2.423-.069-.046-.141-.087-.256-.157,0,1.107.007,2.164-.006,3.221a.468.468,0,0,0,.249.446c.974.648,1.94,1.308,2.909,1.964l.923.624"
						transform="translate(0 0)"
						fill="#b8b8c6"
					/>
				</g>
			</g>
			<g
				id="그룹_334"
				data-name="그룹 334"
				transform="translate(1364 2702.626)"
			>
				<g
					id="그룹_315-6"
					data-name="그룹 315"
					transform="translate(0 0)"
					clip-path="url(#clip-path-6)"
				>
					<path
						id="패스_540-6"
						data-name="패스 540"
						d="M28.05,8.72c0,1-.01,1.993,0,2.99a1.387,1.387,0,0,1-.692,1.283c-1.82,1.177-3.624,2.377-5.442,3.557a.538.538,0,0,0-.288.521c.013,1.774,0,3.548.012,5.323A1.329,1.329,0,0,1,21,23.6q-3.142,2.066-6.28,4.138a1.3,1.3,0,0,1-1.586-.023q-3-2.049-6-4.079a1.439,1.439,0,0,1-.689-1.32c.021-1.719,0-3.439.013-5.158a.524.524,0,0,0-.266-.5c-1.82-1.217-3.626-2.454-5.45-3.664A1.5,1.5,0,0,1,0,11.6c.024-1.993.016-3.987,0-5.98A1.326,1.326,0,0,1,.651,4.418Q3.795,2.355,6.93.278A1.251,1.251,0,0,1,8.476.293c1.732,1.19,3.476,2.362,5.2,3.559a.512.512,0,0,0,.684-.005C16.128,2.667,17.9,1.5,19.675.333a1.242,1.242,0,0,1,1.709.015c1.975,1.34,3.944,2.688,5.925,4.019a1.525,1.525,0,0,1,.746,1.4c-.02.985-.005,1.972-.005,2.957M7.668,2.609,3.279,5.494c.1.075.171.128.242.176,1.242.838,2.488,1.671,3.724,2.519a.39.39,0,0,0,.519,0c1.281-.858,2.572-1.7,3.859-2.552.079-.052.152-.112.25-.185l-4.2-2.848M24.757,5.465c-1.36-.915-2.679-1.8-3.986-2.692a.391.391,0,0,0-.52.01c-1.274.85-2.555,1.689-3.833,2.532-.085.056-.164.121-.264.2l4.2,2.845,4.4-2.891M13.914,19.038l4.365-2.859-4.234-2.872L9.7,16.179l4.218,2.858m5.357-.691c-.092.047-.131.063-.166.086-1.244.816-2.49,1.628-3.726,2.456a.514.514,0,0,0-.175.372c-.014,1.018-.008,2.036-.007,3.054,0,.091.012.182.021.313,1.334-.877,2.632-1.727,3.924-2.585a.329.329,0,0,0,.124-.235c.008-1.136.005-2.273.005-3.461m-10.517.008c0,1.164.007,2.248-.006,3.331a.467.467,0,0,0,.245.446c1.19.8,2.371,1.61,3.556,2.416.077.052.161.1.279.165,0-1.18.005-2.316-.01-3.452,0-.1-.125-.218-.221-.284-1.063-.733-2.131-1.457-3.2-2.183l-.645-.44m12.872-4.467c.084-.042.134-.061.177-.089,1.23-.8,2.463-1.592,3.685-2.4a.512.512,0,0,0,.184-.369c.015-1.018.009-2.037.007-3.055a2.549,2.549,0,0,0-.033-.276c-.125.075-.218.128-.307.186-1.153.756-2.3,1.518-3.461,2.266a.516.516,0,0,0-.276.5c.014.963.005,1.927.006,2.891,0,.1.01.209.017.349M12.859,7.694a1.636,1.636,0,0,0-.169.079c-1.244.815-2.49,1.627-3.724,2.455a.52.52,0,0,0-.17.377c-.014,1-.008,1.991-.006,2.986,0,.089.018.179.033.314,1.331-.875,2.619-1.72,3.9-2.572a.336.336,0,0,0,.13-.237c.008-1.115.006-2.229.006-3.4m-10.48.021a1.667,1.667,0,0,0-.032.206c0,1.04-.008,2.081.008,3.121a.525.525,0,0,0,.216.355c1.188.823,2.384,1.632,3.579,2.444.068.046.144.081.226.127a.512.512,0,0,0,.036-.115c0-1.084.007-2.168,0-3.252a.334.334,0,0,0-.127-.237C5,9.487,3.714,8.619,2.379,7.716M19.271,13.96c0-1.124-.006-2.174.005-3.223a.468.468,0,0,0-.236-.451c-1.2-.8-2.393-1.615-3.588-2.423-.069-.046-.141-.087-.256-.157,0,1.107.007,2.164-.006,3.221a.468.468,0,0,0,.249.446c.974.648,1.94,1.308,2.909,1.964l.923.624"
						transform="translate(0 0)"
						fill="#b8b8c6"
					/>
				</g>
			</g>
			<g
				id="그룹_332"
				data-name="그룹 332"
				transform="translate(1460 2702.626)"
			>
				<g
					id="그룹_315-5"
					data-name="그룹 315"
					transform="translate(0 0)"
					clip-path="url(#clip-path)"
				>
					<path
						id="패스_540-5"
						data-name="패스 540"
						d="M28.05,8.72c0,1-.01,1.993,0,2.99a1.387,1.387,0,0,1-.692,1.283c-1.82,1.177-3.624,2.377-5.442,3.557a.538.538,0,0,0-.288.521c.013,1.774,0,3.548.012,5.323A1.329,1.329,0,0,1,21,23.6q-3.142,2.066-6.28,4.138a1.3,1.3,0,0,1-1.586-.023q-3-2.049-6-4.079a1.439,1.439,0,0,1-.689-1.32c.021-1.719,0-3.439.013-5.158a.524.524,0,0,0-.266-.5c-1.82-1.217-3.626-2.454-5.45-3.664A1.5,1.5,0,0,1,0,11.6c.024-1.993.016-3.987,0-5.98A1.326,1.326,0,0,1,.651,4.418Q3.795,2.355,6.93.278A1.251,1.251,0,0,1,8.476.293c1.732,1.19,3.476,2.362,5.2,3.559a.512.512,0,0,0,.684-.005C16.128,2.667,17.9,1.5,19.675.333a1.242,1.242,0,0,1,1.709.015c1.975,1.34,3.944,2.688,5.925,4.019a1.525,1.525,0,0,1,.746,1.4c-.02.985-.005,1.972-.005,2.957M7.668,2.609,3.279,5.494c.1.075.171.128.242.176,1.242.838,2.488,1.671,3.724,2.519a.39.39,0,0,0,.519,0c1.281-.858,2.572-1.7,3.859-2.552.079-.052.152-.112.25-.185l-4.2-2.848M24.757,5.465c-1.36-.915-2.679-1.8-3.986-2.692a.391.391,0,0,0-.52.01c-1.274.85-2.555,1.689-3.833,2.532-.085.056-.164.121-.264.2l4.2,2.845,4.4-2.891M13.914,19.038l4.365-2.859-4.234-2.872L9.7,16.179l4.218,2.858m5.357-.691c-.092.047-.131.063-.166.086-1.244.816-2.49,1.628-3.726,2.456a.514.514,0,0,0-.175.372c-.014,1.018-.008,2.036-.007,3.054,0,.091.012.182.021.313,1.334-.877,2.632-1.727,3.924-2.585a.329.329,0,0,0,.124-.235c.008-1.136.005-2.273.005-3.461m-10.517.008c0,1.164.007,2.248-.006,3.331a.467.467,0,0,0,.245.446c1.19.8,2.371,1.61,3.556,2.416.077.052.161.1.279.165,0-1.18.005-2.316-.01-3.452,0-.1-.125-.218-.221-.284-1.063-.733-2.131-1.457-3.2-2.183l-.645-.44m12.872-4.467c.084-.042.134-.061.177-.089,1.23-.8,2.463-1.592,3.685-2.4a.512.512,0,0,0,.184-.369c.015-1.018.009-2.037.007-3.055a2.549,2.549,0,0,0-.033-.276c-.125.075-.218.128-.307.186-1.153.756-2.3,1.518-3.461,2.266a.516.516,0,0,0-.276.5c.014.963.005,1.927.006,2.891,0,.1.01.209.017.349M12.859,7.694a1.636,1.636,0,0,0-.169.079c-1.244.815-2.49,1.627-3.724,2.455a.52.52,0,0,0-.17.377c-.014,1-.008,1.991-.006,2.986,0,.089.018.179.033.314,1.331-.875,2.619-1.72,3.9-2.572a.336.336,0,0,0,.13-.237c.008-1.115.006-2.229.006-3.4m-10.48.021a1.667,1.667,0,0,0-.032.206c0,1.04-.008,2.081.008,3.121a.525.525,0,0,0,.216.355c1.188.823,2.384,1.632,3.579,2.444.068.046.144.081.226.127a.512.512,0,0,0,.036-.115c0-1.084.007-2.168,0-3.252a.334.334,0,0,0-.127-.237C5,9.487,3.714,8.619,2.379,7.716M19.271,13.96c0-1.124-.006-2.174.005-3.223a.468.468,0,0,0-.236-.451c-1.2-.8-2.393-1.615-3.588-2.423-.069-.046-.141-.087-.256-.157,0,1.107.007,2.164-.006,3.221a.468.468,0,0,0,.249.446c.974.648,1.94,1.308,2.909,1.964l.923.624"
						transform="translate(0 0)"
						fill="#b8b8c6"
					/>
				</g>
			</g>
			<g
				id="그룹_331"
				data-name="그룹 331"
				transform="translate(1557 2702.626)"
			>
				<g
					id="그룹_315-3"
					data-name="그룹 315"
					transform="translate(0 0)"
					clip-path="url(#clip-path)"
				>
					<path
						id="패스_540-3"
						data-name="패스 540"
						d="M28.05,8.72c0,1-.01,1.993,0,2.99a1.387,1.387,0,0,1-.692,1.283c-1.82,1.177-3.624,2.377-5.442,3.557a.538.538,0,0,0-.288.521c.013,1.774,0,3.548.012,5.323A1.329,1.329,0,0,1,21,23.6q-3.142,2.066-6.28,4.138a1.3,1.3,0,0,1-1.586-.023q-3-2.049-6-4.079a1.439,1.439,0,0,1-.689-1.32c.021-1.719,0-3.439.013-5.158a.524.524,0,0,0-.266-.5c-1.82-1.217-3.626-2.454-5.45-3.664A1.5,1.5,0,0,1,0,11.6c.024-1.993.016-3.987,0-5.98A1.326,1.326,0,0,1,.651,4.418Q3.795,2.355,6.93.278A1.251,1.251,0,0,1,8.476.293c1.732,1.19,3.476,2.362,5.2,3.559a.512.512,0,0,0,.684-.005C16.128,2.667,17.9,1.5,19.675.333a1.242,1.242,0,0,1,1.709.015c1.975,1.34,3.944,2.688,5.925,4.019a1.525,1.525,0,0,1,.746,1.4c-.02.985-.005,1.972-.005,2.957M7.668,2.609,3.279,5.494c.1.075.171.128.242.176,1.242.838,2.488,1.671,3.724,2.519a.39.39,0,0,0,.519,0c1.281-.858,2.572-1.7,3.859-2.552.079-.052.152-.112.25-.185l-4.2-2.848M24.757,5.465c-1.36-.915-2.679-1.8-3.986-2.692a.391.391,0,0,0-.52.01c-1.274.85-2.555,1.689-3.833,2.532-.085.056-.164.121-.264.2l4.2,2.845,4.4-2.891M13.914,19.038l4.365-2.859-4.234-2.872L9.7,16.179l4.218,2.858m5.357-.691c-.092.047-.131.063-.166.086-1.244.816-2.49,1.628-3.726,2.456a.514.514,0,0,0-.175.372c-.014,1.018-.008,2.036-.007,3.054,0,.091.012.182.021.313,1.334-.877,2.632-1.727,3.924-2.585a.329.329,0,0,0,.124-.235c.008-1.136.005-2.273.005-3.461m-10.517.008c0,1.164.007,2.248-.006,3.331a.467.467,0,0,0,.245.446c1.19.8,2.371,1.61,3.556,2.416.077.052.161.1.279.165,0-1.18.005-2.316-.01-3.452,0-.1-.125-.218-.221-.284-1.063-.733-2.131-1.457-3.2-2.183l-.645-.44m12.872-4.467c.084-.042.134-.061.177-.089,1.23-.8,2.463-1.592,3.685-2.4a.512.512,0,0,0,.184-.369c.015-1.018.009-2.037.007-3.055a2.549,2.549,0,0,0-.033-.276c-.125.075-.218.128-.307.186-1.153.756-2.3,1.518-3.461,2.266a.516.516,0,0,0-.276.5c.014.963.005,1.927.006,2.891,0,.1.01.209.017.349M12.859,7.694a1.636,1.636,0,0,0-.169.079c-1.244.815-2.49,1.627-3.724,2.455a.52.52,0,0,0-.17.377c-.014,1-.008,1.991-.006,2.986,0,.089.018.179.033.314,1.331-.875,2.619-1.72,3.9-2.572a.336.336,0,0,0,.13-.237c.008-1.115.006-2.229.006-3.4m-10.48.021a1.667,1.667,0,0,0-.032.206c0,1.04-.008,2.081.008,3.121a.525.525,0,0,0,.216.355c1.188.823,2.384,1.632,3.579,2.444.068.046.144.081.226.127a.512.512,0,0,0,.036-.115c0-1.084.007-2.168,0-3.252a.334.334,0,0,0-.127-.237C5,9.487,3.714,8.619,2.379,7.716M19.271,13.96c0-1.124-.006-2.174.005-3.223a.468.468,0,0,0-.236-.451c-1.2-.8-2.393-1.615-3.588-2.423-.069-.046-.141-.087-.256-.157,0,1.107.007,2.164-.006,3.221a.468.468,0,0,0,.249.446c.974.648,1.94,1.308,2.909,1.964l.923.624"
						transform="translate(0 0)"
						fill="#b8b8c6"
					/>
				</g>
			</g>

			<g
				id="그룹_330"
				data-name="그룹 330"
				transform="translate(1654 2702.626)"
			>
				<g
					id="그룹_315-8"
					data-name="그룹 315"
					transform="translate(0 0)"
					clip-path="url(#clip-path)"
				>
					<path
						id="패스_540-8"
						data-name="패스 540"
						d="M28.05,8.72c0,1-.01,1.993,0,2.99a1.387,1.387,0,0,1-.692,1.283c-1.82,1.177-3.624,2.377-5.442,3.557a.538.538,0,0,0-.288.521c.013,1.774,0,3.548.012,5.323A1.329,1.329,0,0,1,21,23.6q-3.142,2.066-6.28,4.138a1.3,1.3,0,0,1-1.586-.023q-3-2.049-6-4.079a1.439,1.439,0,0,1-.689-1.32c.021-1.719,0-3.439.013-5.158a.524.524,0,0,0-.266-.5c-1.82-1.217-3.626-2.454-5.45-3.664A1.5,1.5,0,0,1,0,11.6c.024-1.993.016-3.987,0-5.98A1.326,1.326,0,0,1,.651,4.418Q3.795,2.355,6.93.278A1.251,1.251,0,0,1,8.476.293c1.732,1.19,3.476,2.362,5.2,3.559a.512.512,0,0,0,.684-.005C16.128,2.667,17.9,1.5,19.675.333a1.242,1.242,0,0,1,1.709.015c1.975,1.34,3.944,2.688,5.925,4.019a1.525,1.525,0,0,1,.746,1.4c-.02.985-.005,1.972-.005,2.957M7.668,2.609,3.279,5.494c.1.075.171.128.242.176,1.242.838,2.488,1.671,3.724,2.519a.39.39,0,0,0,.519,0c1.281-.858,2.572-1.7,3.859-2.552.079-.052.152-.112.25-.185l-4.2-2.848M24.757,5.465c-1.36-.915-2.679-1.8-3.986-2.692a.391.391,0,0,0-.52.01c-1.274.85-2.555,1.689-3.833,2.532-.085.056-.164.121-.264.2l4.2,2.845,4.4-2.891M13.914,19.038l4.365-2.859-4.234-2.872L9.7,16.179l4.218,2.858m5.357-.691c-.092.047-.131.063-.166.086-1.244.816-2.49,1.628-3.726,2.456a.514.514,0,0,0-.175.372c-.014,1.018-.008,2.036-.007,3.054,0,.091.012.182.021.313,1.334-.877,2.632-1.727,3.924-2.585a.329.329,0,0,0,.124-.235c.008-1.136.005-2.273.005-3.461m-10.517.008c0,1.164.007,2.248-.006,3.331a.467.467,0,0,0,.245.446c1.19.8,2.371,1.61,3.556,2.416.077.052.161.1.279.165,0-1.18.005-2.316-.01-3.452,0-.1-.125-.218-.221-.284-1.063-.733-2.131-1.457-3.2-2.183l-.645-.44m12.872-4.467c.084-.042.134-.061.177-.089,1.23-.8,2.463-1.592,3.685-2.4a.512.512,0,0,0,.184-.369c.015-1.018.009-2.037.007-3.055a2.549,2.549,0,0,0-.033-.276c-.125.075-.218.128-.307.186-1.153.756-2.3,1.518-3.461,2.266a.516.516,0,0,0-.276.5c.014.963.005,1.927.006,2.891,0,.1.01.209.017.349M12.859,7.694a1.636,1.636,0,0,0-.169.079c-1.244.815-2.49,1.627-3.724,2.455a.52.52,0,0,0-.17.377c-.014,1-.008,1.991-.006,2.986,0,.089.018.179.033.314,1.331-.875,2.619-1.72,3.9-2.572a.336.336,0,0,0,.13-.237c.008-1.115.006-2.229.006-3.4m-10.48.021a1.667,1.667,0,0,0-.032.206c0,1.04-.008,2.081.008,3.121a.525.525,0,0,0,.216.355c1.188.823,2.384,1.632,3.579,2.444.068.046.144.081.226.127a.512.512,0,0,0,.036-.115c0-1.084.007-2.168,0-3.252a.334.334,0,0,0-.127-.237C5,9.487,3.714,8.619,2.379,7.716M19.271,13.96c0-1.124-.006-2.174.005-3.223a.468.468,0,0,0-.236-.451c-1.2-.8-2.393-1.615-3.588-2.423-.069-.046-.141-.087-.256-.157,0,1.107.007,2.164-.006,3.221a.468.468,0,0,0,.249.446c.974.648,1.94,1.308,2.909,1.964l.923.624"
						transform="translate(0 0)"
						fill="#b8b8c6"
					/>
				</g>
			</g>
			<g
				id="그룹_333"
				data-name="그룹 333"
				transform="translate(1751 2702.626)"
			>
				<g
					id="그룹_315-9"
					data-name="그룹 315"
					transform="translate(0 0)"
					clip-path="url(#clip-path)"
				>
					<path
						id="패스_540-9"
						data-name="패스 540"
						d="M28.05,8.72c0,1-.01,1.993,0,2.99a1.387,1.387,0,0,1-.692,1.283c-1.82,1.177-3.624,2.377-5.442,3.557a.538.538,0,0,0-.288.521c.013,1.774,0,3.548.012,5.323A1.329,1.329,0,0,1,21,23.6q-3.142,2.066-6.28,4.138a1.3,1.3,0,0,1-1.586-.023q-3-2.049-6-4.079a1.439,1.439,0,0,1-.689-1.32c.021-1.719,0-3.439.013-5.158a.524.524,0,0,0-.266-.5c-1.82-1.217-3.626-2.454-5.45-3.664A1.5,1.5,0,0,1,0,11.6c.024-1.993.016-3.987,0-5.98A1.326,1.326,0,0,1,.651,4.418Q3.795,2.355,6.93.278A1.251,1.251,0,0,1,8.476.293c1.732,1.19,3.476,2.362,5.2,3.559a.512.512,0,0,0,.684-.005C16.128,2.667,17.9,1.5,19.675.333a1.242,1.242,0,0,1,1.709.015c1.975,1.34,3.944,2.688,5.925,4.019a1.525,1.525,0,0,1,.746,1.4c-.02.985-.005,1.972-.005,2.957M7.668,2.609,3.279,5.494c.1.075.171.128.242.176,1.242.838,2.488,1.671,3.724,2.519a.39.39,0,0,0,.519,0c1.281-.858,2.572-1.7,3.859-2.552.079-.052.152-.112.25-.185l-4.2-2.848M24.757,5.465c-1.36-.915-2.679-1.8-3.986-2.692a.391.391,0,0,0-.52.01c-1.274.85-2.555,1.689-3.833,2.532-.085.056-.164.121-.264.2l4.2,2.845,4.4-2.891M13.914,19.038l4.365-2.859-4.234-2.872L9.7,16.179l4.218,2.858m5.357-.691c-.092.047-.131.063-.166.086-1.244.816-2.49,1.628-3.726,2.456a.514.514,0,0,0-.175.372c-.014,1.018-.008,2.036-.007,3.054,0,.091.012.182.021.313,1.334-.877,2.632-1.727,3.924-2.585a.329.329,0,0,0,.124-.235c.008-1.136.005-2.273.005-3.461m-10.517.008c0,1.164.007,2.248-.006,3.331a.467.467,0,0,0,.245.446c1.19.8,2.371,1.61,3.556,2.416.077.052.161.1.279.165,0-1.18.005-2.316-.01-3.452,0-.1-.125-.218-.221-.284-1.063-.733-2.131-1.457-3.2-2.183l-.645-.44m12.872-4.467c.084-.042.134-.061.177-.089,1.23-.8,2.463-1.592,3.685-2.4a.512.512,0,0,0,.184-.369c.015-1.018.009-2.037.007-3.055a2.549,2.549,0,0,0-.033-.276c-.125.075-.218.128-.307.186-1.153.756-2.3,1.518-3.461,2.266a.516.516,0,0,0-.276.5c.014.963.005,1.927.006,2.891,0,.1.01.209.017.349M12.859,7.694a1.636,1.636,0,0,0-.169.079c-1.244.815-2.49,1.627-3.724,2.455a.52.52,0,0,0-.17.377c-.014,1-.008,1.991-.006,2.986,0,.089.018.179.033.314,1.331-.875,2.619-1.72,3.9-2.572a.336.336,0,0,0,.13-.237c.008-1.115.006-2.229.006-3.4m-10.48.021a1.667,1.667,0,0,0-.032.206c0,1.04-.008,2.081.008,3.121a.525.525,0,0,0,.216.355c1.188.823,2.384,1.632,3.579,2.444.068.046.144.081.226.127a.512.512,0,0,0,.036-.115c0-1.084.007-2.168,0-3.252a.334.334,0,0,0-.127-.237C5,9.487,3.714,8.619,2.379,7.716M19.271,13.96c0-1.124-.006-2.174.005-3.223a.468.468,0,0,0-.236-.451c-1.2-.8-2.393-1.615-3.588-2.423-.069-.046-.141-.087-.256-.157,0,1.107.007,2.164-.006,3.221a.468.468,0,0,0,.249.446c.974.648,1.94,1.308,2.909,1.964l.923.624"
						transform="translate(0 0)"
						fill="#b8b8c6"
					/>
				</g>
			</g>

			{/* 네모 3개 텍스트 */}
			<text
				id="AI_모형_01"
				data-name="AI 모형01"
				transform="translate(990 2749)"
				fill="#b8b8c6"
				font-size="14"
				font-family="SegoeUI, Segoe UI"
			>
				<tspan x="-22.295" y="0">
					AI{" "}
				</tspan>
				<tspan y="0" font-family="MalgunGothic, Malgun Gothic">
					모형
				</tspan>
				<tspan y="0"></tspan>
				<tspan x="-7.547" y="16">
					01
				</tspan>
			</text>
			<text
				id="AI_모형_02"
				data-name="AI 모형02"
				transform="translate(1087 2749)"
				fill="#b8b8c6"
				font-size="14"
				font-family="SegoeUI, Segoe UI"
			>
				<tspan x="-22.295" y="0">
					AI{" "}
				</tspan>
				<tspan y="0" font-family="MalgunGothic, Malgun Gothic">
					모형
				</tspan>
				<tspan y="0"></tspan>
				<tspan x="-7.547" y="16">
					02
				</tspan>
			</text>
			<text
				id="AI_모형_03"
				data-name="AI 모형03"
				transform="translate(1183 2749)"
				fill="#b8b8c6"
				font-size="14"
				font-family="SegoeUI, Segoe UI"
			>
				<tspan x="-22.295" y="0">
					AI{" "}
				</tspan>
				<tspan y="0" font-family="MalgunGothic, Malgun Gothic">
					모형
				</tspan>
				<tspan y="0"></tspan>
				<tspan x="-7.547" y="16">
					03
				</tspan>
			</text>
			<text
				id="AI_모형_04"
				data-name="AI 모형04"
				transform="translate(1281 2749)"
				fill="#b8b8c6"
				font-size="14"
				font-family="SegoeUI, Segoe UI"
			>
				<tspan x="-22.295" y="0">
					AI{" "}
				</tspan>
				<tspan y="0" font-family="MalgunGothic, Malgun Gothic">
					모형
				</tspan>
				<tspan y="0"></tspan>
				<tspan x="-7.547" y="16">
					04
				</tspan>
			</text>
			<text
				id="AI_모형_05"
				data-name="AI 모형05"
				transform="translate(1378 2749)"
				fill="#b8b8c6"
				font-size="14"
				font-family="SegoeUI, Segoe UI"
			>
				<tspan x="-22.295" y="0">
					AI{" "}
				</tspan>
				<tspan y="0" font-family="MalgunGothic, Malgun Gothic">
					모형
				</tspan>
				<tspan y="0"></tspan>
				<tspan x="-7.547" y="16">
					05
				</tspan>
			</text>
			<text
				id="AI_모형_06"
				data-name="AI 모형06"
				transform="translate(1475 2749)"
				fill="#b8b8c6"
				font-size="14"
				font-family="SegoeUI, Segoe UI"
			>
				<tspan x="-22.295" y="0">
					AI{" "}
				</tspan>
				<tspan y="0" font-family="MalgunGothic, Malgun Gothic">
					모형
				</tspan>
				<tspan y="0"></tspan>
				<tspan x="-7.547" y="16">
					06
				</tspan>
			</text>
			<text
				id="AI_모형_07"
				data-name="AI 모형07"
				transform="translate(1572 2749)"
				fill="#b8b8c6"
				font-size="14"
				font-family="SegoeUI, Segoe UI"
			>
				<tspan x="-22.295" y="0">
					AI{" "}
				</tspan>
				<tspan y="0" font-family="MalgunGothic, Malgun Gothic">
					모형
				</tspan>
				<tspan y="0"></tspan>
				<tspan x="-7.547" y="16">
					07
				</tspan>
			</text>
			<text
				id="AI_모형_08"
				data-name="AI 모형08"
				transform="translate(1669 2749)"
				fill="#b8b8c6"
				font-size="14"
				font-family="SegoeUI, Segoe UI"
			>
				<tspan x="-22.295" y="0">
					AI{" "}
				</tspan>
				<tspan y="0" font-family="MalgunGothic, Malgun Gothic">
					모형
				</tspan>
				<tspan y="0"></tspan>
				<tspan x="-7.547" y="16">
					08
				</tspan>
			</text>
			<text
				id="AI_모형_n"
				data-name="AI 모형n"
				transform="translate(1766 2749)"
				fill="#b8b8c6"
				font-size="14"
				font-family="SegoeUI, Segoe UI"
			>
				<tspan x="-22.295" y="0">
					AI{" "}
				</tspan>
				<tspan y="0" font-family="MalgunGothic, Malgun Gothic">
					모형
				</tspan>
				<tspan y="0"></tspan>
				<tspan x="-3.961" y="16">
					n
				</tspan>
			</text>

			{/* 동그라미 4개 */}
			<g
				id="그룹_318"
				data-name="그룹 318"
				transform="translate(978.28 2858.168)"
			>
				<g
					id="그룹_317"
					data-name="그룹 317"
					transform="translate(0 0)"
					clip-path="url(#clip-path-10)"
				>
					<path
						id="패스_541"
						data-name="패스 541"
						d="M23.477,16.2q0-1.1,0-2.194c0-.72,0-1.439-.007-2.159-.009-1.662-.018-3.381.022-5.068a4.757,4.757,0,0,0-2-4.078A11.834,11.834,0,0,0,17,.642,21.536,21.536,0,0,0,11.789,0,22.609,22.609,0,0,0,7.836.355,13.525,13.525,0,0,0,2.425,2.4,5.014,5.014,0,0,0,0,6.826c.051,4.407.034,8.891.017,13.226L.012,21.43a4.587,4.587,0,0,0,1.807,3.7,11.485,11.485,0,0,0,4.714,2.23A21.127,21.127,0,0,0,11.7,28a22.3,22.3,0,0,0,3.964-.362,12.467,12.467,0,0,0,6.058-2.546,4.456,4.456,0,0,0,1.763-3.618c-.013-1.759-.011-3.548-.008-5.278m-3.606,7.68a10.627,10.627,0,0,1-3.819,1.535,19.516,19.516,0,0,1-4.25.469c-.461,0-.93-.016-1.394-.049a16.258,16.258,0,0,1-5.577-1.282,5.636,5.636,0,0,1-2.267-1.66,1.908,1.908,0,0,1-.436-1.173c-.005-.5,0-1.01,0-1.523a12.926,12.926,0,0,0,5.64,2.256,21.312,21.312,0,0,0,3.9.365q.4,0,.81-.016a17.7,17.7,0,0,0,7.168-1.568,15.127,15.127,0,0,0,1.628-.959l.1-.064c.011.547.022,1.112-.021,1.664a2.748,2.748,0,0,1-1.475,2M20.927,5.1a1.7,1.7,0,0,1,.019,2.239,6.422,6.422,0,0,1-2.985,1.976,18.051,18.051,0,0,1-6.375,1.055,16.846,16.846,0,0,1-6.8-1.373,6.189,6.189,0,0,1-1.929-1.3,1.849,1.849,0,0,1,.012-2.936A7.853,7.853,0,0,1,6.222,2.909a18.064,18.064,0,0,1,5.452-.788c.427,0,.869.012,1.313.037A16.328,16.328,0,0,1,18.02,3.17,6.441,6.441,0,0,1,20.927,5.1M11.8,20.716a19.758,19.758,0,0,1-1.979-.1,13.978,13.978,0,0,1-5.64-1.574,4.459,4.459,0,0,1-1.634-1.379,2.165,2.165,0,0,1-.381-.931c-.044-.554-.037-1.113-.028-1.7a14.313,14.313,0,0,0,6.505,2.384,21.175,21.175,0,0,0,3.071.223c.7,0,1.416-.034,2.128-.1a15.084,15.084,0,0,0,6.987-2.137c.172-.11.338-.227.5-.345v.042a15.54,15.54,0,0,1-.033,1.888,2.22,2.22,0,0,1-.964,1.36,9.761,9.761,0,0,1-3.981,1.821,18.905,18.905,0,0,1-4.55.555m9.563-9.292a2.329,2.329,0,0,1-1.048,1.756,10.325,10.325,0,0,1-4.189,1.859,18.686,18.686,0,0,1-4.319.5,20.545,20.545,0,0,1-2.148-.115,13.816,13.816,0,0,1-5.469-1.566A4.436,4.436,0,0,1,2.55,12.491a2.268,2.268,0,0,1-.387-.968c-.045-.546-.037-1.094-.028-1.673.159.118.323.234.49.343A14.243,14.243,0,0,0,7.989,12.14a21.265,21.265,0,0,0,3.707.324,22.518,22.518,0,0,0,2.316-.121,14.772,14.772,0,0,0,7.361-2.49c0,.543.007,1.058-.009,1.571"
						transform="translate(0 0)"
						fill="#b8b8c6"
					/>
				</g>
			</g>
			<g
				id="그룹_319"
				data-name="그룹 319"
				transform="translate(1075.28 2858.168)"
			>
				<g
					id="그룹_317-2"
					data-name="그룹 317"
					transform="translate(0 0)"
					clip-path="url(#clip-path-10)"
				>
					<path
						id="패스_541-2"
						data-name="패스 541"
						d="M23.477,16.2q0-1.1,0-2.194c0-.72,0-1.439-.007-2.159-.009-1.662-.018-3.381.022-5.068a4.757,4.757,0,0,0-2-4.078A11.834,11.834,0,0,0,17,.642,21.536,21.536,0,0,0,11.789,0,22.609,22.609,0,0,0,7.836.355,13.525,13.525,0,0,0,2.425,2.4,5.014,5.014,0,0,0,0,6.826c.051,4.407.034,8.891.017,13.226L.012,21.43a4.587,4.587,0,0,0,1.807,3.7,11.485,11.485,0,0,0,4.714,2.23A21.127,21.127,0,0,0,11.7,28a22.3,22.3,0,0,0,3.964-.362,12.467,12.467,0,0,0,6.058-2.546,4.456,4.456,0,0,0,1.763-3.618c-.013-1.759-.011-3.548-.008-5.278m-3.606,7.68a10.627,10.627,0,0,1-3.819,1.535,19.516,19.516,0,0,1-4.25.469c-.461,0-.93-.016-1.394-.049a16.258,16.258,0,0,1-5.577-1.282,5.636,5.636,0,0,1-2.267-1.66,1.908,1.908,0,0,1-.436-1.173c-.005-.5,0-1.01,0-1.523a12.926,12.926,0,0,0,5.64,2.256,21.312,21.312,0,0,0,3.9.365q.4,0,.81-.016a17.7,17.7,0,0,0,7.168-1.568,15.127,15.127,0,0,0,1.628-.959l.1-.064c.011.547.022,1.112-.021,1.664a2.748,2.748,0,0,1-1.475,2M20.927,5.1a1.7,1.7,0,0,1,.019,2.239,6.422,6.422,0,0,1-2.985,1.976,18.051,18.051,0,0,1-6.375,1.055,16.846,16.846,0,0,1-6.8-1.373,6.189,6.189,0,0,1-1.929-1.3,1.849,1.849,0,0,1,.012-2.936A7.853,7.853,0,0,1,6.222,2.909a18.064,18.064,0,0,1,5.452-.788c.427,0,.869.012,1.313.037A16.328,16.328,0,0,1,18.02,3.17,6.441,6.441,0,0,1,20.927,5.1M11.8,20.716a19.758,19.758,0,0,1-1.979-.1,13.978,13.978,0,0,1-5.64-1.574,4.459,4.459,0,0,1-1.634-1.379,2.165,2.165,0,0,1-.381-.931c-.044-.554-.037-1.113-.028-1.7a14.313,14.313,0,0,0,6.505,2.384,21.175,21.175,0,0,0,3.071.223c.7,0,1.416-.034,2.128-.1a15.084,15.084,0,0,0,6.987-2.137c.172-.11.338-.227.5-.345v.042a15.54,15.54,0,0,1-.033,1.888,2.22,2.22,0,0,1-.964,1.36,9.761,9.761,0,0,1-3.981,1.821,18.905,18.905,0,0,1-4.55.555m9.563-9.292a2.329,2.329,0,0,1-1.048,1.756,10.325,10.325,0,0,1-4.189,1.859,18.686,18.686,0,0,1-4.319.5,20.545,20.545,0,0,1-2.148-.115,13.816,13.816,0,0,1-5.469-1.566A4.436,4.436,0,0,1,2.55,12.491a2.268,2.268,0,0,1-.387-.968c-.045-.546-.037-1.094-.028-1.673.159.118.323.234.49.343A14.243,14.243,0,0,0,7.989,12.14a21.265,21.265,0,0,0,3.707.324,22.518,22.518,0,0,0,2.316-.121,14.772,14.772,0,0,0,7.361-2.49c0,.543.007,1.058-.009,1.571"
						transform="translate(0 0)"
						fill="#b8b8c6"
					/>
				</g>
			</g>
			<g
				id="그룹_320"
				data-name="그룹 320"
				transform="translate(1172.28 2858.168)"
			>
				<g
					id="그룹_317-3"
					data-name="그룹 317"
					transform="translate(0 0)"
					clip-path="url(#clip-path-10)"
				>
					<path
						id="패스_541-3"
						data-name="패스 541"
						d="M23.477,16.2q0-1.1,0-2.194c0-.72,0-1.439-.007-2.159-.009-1.662-.018-3.381.022-5.068a4.757,4.757,0,0,0-2-4.078A11.834,11.834,0,0,0,17,.642,21.536,21.536,0,0,0,11.789,0,22.609,22.609,0,0,0,7.836.355,13.525,13.525,0,0,0,2.425,2.4,5.014,5.014,0,0,0,0,6.826c.051,4.407.034,8.891.017,13.226L.012,21.43a4.587,4.587,0,0,0,1.807,3.7,11.485,11.485,0,0,0,4.714,2.23A21.127,21.127,0,0,0,11.7,28a22.3,22.3,0,0,0,3.964-.362,12.467,12.467,0,0,0,6.058-2.546,4.456,4.456,0,0,0,1.763-3.618c-.013-1.759-.011-3.548-.008-5.278m-3.606,7.68a10.627,10.627,0,0,1-3.819,1.535,19.516,19.516,0,0,1-4.25.469c-.461,0-.93-.016-1.394-.049a16.258,16.258,0,0,1-5.577-1.282,5.636,5.636,0,0,1-2.267-1.66,1.908,1.908,0,0,1-.436-1.173c-.005-.5,0-1.01,0-1.523a12.926,12.926,0,0,0,5.64,2.256,21.312,21.312,0,0,0,3.9.365q.4,0,.81-.016a17.7,17.7,0,0,0,7.168-1.568,15.127,15.127,0,0,0,1.628-.959l.1-.064c.011.547.022,1.112-.021,1.664a2.748,2.748,0,0,1-1.475,2M20.927,5.1a1.7,1.7,0,0,1,.019,2.239,6.422,6.422,0,0,1-2.985,1.976,18.051,18.051,0,0,1-6.375,1.055,16.846,16.846,0,0,1-6.8-1.373,6.189,6.189,0,0,1-1.929-1.3,1.849,1.849,0,0,1,.012-2.936A7.853,7.853,0,0,1,6.222,2.909a18.064,18.064,0,0,1,5.452-.788c.427,0,.869.012,1.313.037A16.328,16.328,0,0,1,18.02,3.17,6.441,6.441,0,0,1,20.927,5.1M11.8,20.716a19.758,19.758,0,0,1-1.979-.1,13.978,13.978,0,0,1-5.64-1.574,4.459,4.459,0,0,1-1.634-1.379,2.165,2.165,0,0,1-.381-.931c-.044-.554-.037-1.113-.028-1.7a14.313,14.313,0,0,0,6.505,2.384,21.175,21.175,0,0,0,3.071.223c.7,0,1.416-.034,2.128-.1a15.084,15.084,0,0,0,6.987-2.137c.172-.11.338-.227.5-.345v.042a15.54,15.54,0,0,1-.033,1.888,2.22,2.22,0,0,1-.964,1.36,9.761,9.761,0,0,1-3.981,1.821,18.905,18.905,0,0,1-4.55.555m9.563-9.292a2.329,2.329,0,0,1-1.048,1.756,10.325,10.325,0,0,1-4.189,1.859,18.686,18.686,0,0,1-4.319.5,20.545,20.545,0,0,1-2.148-.115,13.816,13.816,0,0,1-5.469-1.566A4.436,4.436,0,0,1,2.55,12.491a2.268,2.268,0,0,1-.387-.968c-.045-.546-.037-1.094-.028-1.673.159.118.323.234.49.343A14.243,14.243,0,0,0,7.989,12.14a21.265,21.265,0,0,0,3.707.324,22.518,22.518,0,0,0,2.316-.121,14.772,14.772,0,0,0,7.361-2.49c0,.543.007,1.058-.009,1.571"
						transform="translate(0 0)"
						fill="#b8b8c6"
					/>
				</g>
			</g>
			<g
				id="그룹_321"
				data-name="그룹 321"
				transform="translate(1269.28 2858.168)"
			>
				<g
					id="그룹_317-4"
					data-name="그룹 317"
					transform="translate(0 0)"
					clip-path="url(#clip-path-10)"
				>
					<path
						id="패스_541-4"
						data-name="패스 541"
						d="M23.477,16.2q0-1.1,0-2.194c0-.72,0-1.439-.007-2.159-.009-1.662-.018-3.381.022-5.068a4.757,4.757,0,0,0-2-4.078A11.834,11.834,0,0,0,17,.642,21.536,21.536,0,0,0,11.789,0,22.609,22.609,0,0,0,7.836.355,13.525,13.525,0,0,0,2.425,2.4,5.014,5.014,0,0,0,0,6.826c.051,4.407.034,8.891.017,13.226L.012,21.43a4.587,4.587,0,0,0,1.807,3.7,11.485,11.485,0,0,0,4.714,2.23A21.127,21.127,0,0,0,11.7,28a22.3,22.3,0,0,0,3.964-.362,12.467,12.467,0,0,0,6.058-2.546,4.456,4.456,0,0,0,1.763-3.618c-.013-1.759-.011-3.548-.008-5.278m-3.606,7.68a10.627,10.627,0,0,1-3.819,1.535,19.516,19.516,0,0,1-4.25.469c-.461,0-.93-.016-1.394-.049a16.258,16.258,0,0,1-5.577-1.282,5.636,5.636,0,0,1-2.267-1.66,1.908,1.908,0,0,1-.436-1.173c-.005-.5,0-1.01,0-1.523a12.926,12.926,0,0,0,5.64,2.256,21.312,21.312,0,0,0,3.9.365q.4,0,.81-.016a17.7,17.7,0,0,0,7.168-1.568,15.127,15.127,0,0,0,1.628-.959l.1-.064c.011.547.022,1.112-.021,1.664a2.748,2.748,0,0,1-1.475,2M20.927,5.1a1.7,1.7,0,0,1,.019,2.239,6.422,6.422,0,0,1-2.985,1.976,18.051,18.051,0,0,1-6.375,1.055,16.846,16.846,0,0,1-6.8-1.373,6.189,6.189,0,0,1-1.929-1.3,1.849,1.849,0,0,1,.012-2.936A7.853,7.853,0,0,1,6.222,2.909a18.064,18.064,0,0,1,5.452-.788c.427,0,.869.012,1.313.037A16.328,16.328,0,0,1,18.02,3.17,6.441,6.441,0,0,1,20.927,5.1M11.8,20.716a19.758,19.758,0,0,1-1.979-.1,13.978,13.978,0,0,1-5.64-1.574,4.459,4.459,0,0,1-1.634-1.379,2.165,2.165,0,0,1-.381-.931c-.044-.554-.037-1.113-.028-1.7a14.313,14.313,0,0,0,6.505,2.384,21.175,21.175,0,0,0,3.071.223c.7,0,1.416-.034,2.128-.1a15.084,15.084,0,0,0,6.987-2.137c.172-.11.338-.227.5-.345v.042a15.54,15.54,0,0,1-.033,1.888,2.22,2.22,0,0,1-.964,1.36,9.761,9.761,0,0,1-3.981,1.821,18.905,18.905,0,0,1-4.55.555m9.563-9.292a2.329,2.329,0,0,1-1.048,1.756,10.325,10.325,0,0,1-4.189,1.859,18.686,18.686,0,0,1-4.319.5,20.545,20.545,0,0,1-2.148-.115,13.816,13.816,0,0,1-5.469-1.566A4.436,4.436,0,0,1,2.55,12.491a2.268,2.268,0,0,1-.387-.968c-.045-.546-.037-1.094-.028-1.673.159.118.323.234.49.343A14.243,14.243,0,0,0,7.989,12.14a21.265,21.265,0,0,0,3.707.324,22.518,22.518,0,0,0,2.316-.121,14.772,14.772,0,0,0,7.361-2.49c0,.543.007,1.058-.009,1.571"
						transform="translate(0 0)"
						fill="#b8b8c6"
					/>
				</g>
			</g>
			<g
				id="그룹_322"
				data-name="그룹 322"
				transform="translate(1366.28 2858.168)"
			>
				<g
					id="그룹_317-5"
					data-name="그룹 317"
					transform="translate(0 0)"
					clip-path="url(#clip-path-10)"
				>
					<path
						id="패스_541-5"
						data-name="패스 541"
						d="M23.477,16.2q0-1.1,0-2.194c0-.72,0-1.439-.007-2.159-.009-1.662-.018-3.381.022-5.068a4.757,4.757,0,0,0-2-4.078A11.834,11.834,0,0,0,17,.642,21.536,21.536,0,0,0,11.789,0,22.609,22.609,0,0,0,7.836.355,13.525,13.525,0,0,0,2.425,2.4,5.014,5.014,0,0,0,0,6.826c.051,4.407.034,8.891.017,13.226L.012,21.43a4.587,4.587,0,0,0,1.807,3.7,11.485,11.485,0,0,0,4.714,2.23A21.127,21.127,0,0,0,11.7,28a22.3,22.3,0,0,0,3.964-.362,12.467,12.467,0,0,0,6.058-2.546,4.456,4.456,0,0,0,1.763-3.618c-.013-1.759-.011-3.548-.008-5.278m-3.606,7.68a10.627,10.627,0,0,1-3.819,1.535,19.516,19.516,0,0,1-4.25.469c-.461,0-.93-.016-1.394-.049a16.258,16.258,0,0,1-5.577-1.282,5.636,5.636,0,0,1-2.267-1.66,1.908,1.908,0,0,1-.436-1.173c-.005-.5,0-1.01,0-1.523a12.926,12.926,0,0,0,5.64,2.256,21.312,21.312,0,0,0,3.9.365q.4,0,.81-.016a17.7,17.7,0,0,0,7.168-1.568,15.127,15.127,0,0,0,1.628-.959l.1-.064c.011.547.022,1.112-.021,1.664a2.748,2.748,0,0,1-1.475,2M20.927,5.1a1.7,1.7,0,0,1,.019,2.239,6.422,6.422,0,0,1-2.985,1.976,18.051,18.051,0,0,1-6.375,1.055,16.846,16.846,0,0,1-6.8-1.373,6.189,6.189,0,0,1-1.929-1.3,1.849,1.849,0,0,1,.012-2.936A7.853,7.853,0,0,1,6.222,2.909a18.064,18.064,0,0,1,5.452-.788c.427,0,.869.012,1.313.037A16.328,16.328,0,0,1,18.02,3.17,6.441,6.441,0,0,1,20.927,5.1M11.8,20.716a19.758,19.758,0,0,1-1.979-.1,13.978,13.978,0,0,1-5.64-1.574,4.459,4.459,0,0,1-1.634-1.379,2.165,2.165,0,0,1-.381-.931c-.044-.554-.037-1.113-.028-1.7a14.313,14.313,0,0,0,6.505,2.384,21.175,21.175,0,0,0,3.071.223c.7,0,1.416-.034,2.128-.1a15.084,15.084,0,0,0,6.987-2.137c.172-.11.338-.227.5-.345v.042a15.54,15.54,0,0,1-.033,1.888,2.22,2.22,0,0,1-.964,1.36,9.761,9.761,0,0,1-3.981,1.821,18.905,18.905,0,0,1-4.55.555m9.563-9.292a2.329,2.329,0,0,1-1.048,1.756,10.325,10.325,0,0,1-4.189,1.859,18.686,18.686,0,0,1-4.319.5,20.545,20.545,0,0,1-2.148-.115,13.816,13.816,0,0,1-5.469-1.566A4.436,4.436,0,0,1,2.55,12.491a2.268,2.268,0,0,1-.387-.968c-.045-.546-.037-1.094-.028-1.673.159.118.323.234.49.343A14.243,14.243,0,0,0,7.989,12.14a21.265,21.265,0,0,0,3.707.324,22.518,22.518,0,0,0,2.316-.121,14.772,14.772,0,0,0,7.361-2.49c0,.543.007,1.058-.009,1.571"
						transform="translate(0 0)"
						fill="#b8b8c6"
					/>
				</g>
			</g>
			<g
				id="그룹_323"
				data-name="그룹 323"
				transform="translate(1463.28 2858.168)"
			>
				<g
					id="그룹_317-6"
					data-name="그룹 317"
					transform="translate(0 0)"
					clip-path="url(#clip-path-10)"
				>
					<path
						id="패스_541-6"
						data-name="패스 541"
						d="M23.477,16.2q0-1.1,0-2.194c0-.72,0-1.439-.007-2.159-.009-1.662-.018-3.381.022-5.068a4.757,4.757,0,0,0-2-4.078A11.834,11.834,0,0,0,17,.642,21.536,21.536,0,0,0,11.789,0,22.609,22.609,0,0,0,7.836.355,13.525,13.525,0,0,0,2.425,2.4,5.014,5.014,0,0,0,0,6.826c.051,4.407.034,8.891.017,13.226L.012,21.43a4.587,4.587,0,0,0,1.807,3.7,11.485,11.485,0,0,0,4.714,2.23A21.127,21.127,0,0,0,11.7,28a22.3,22.3,0,0,0,3.964-.362,12.467,12.467,0,0,0,6.058-2.546,4.456,4.456,0,0,0,1.763-3.618c-.013-1.759-.011-3.548-.008-5.278m-3.606,7.68a10.627,10.627,0,0,1-3.819,1.535,19.516,19.516,0,0,1-4.25.469c-.461,0-.93-.016-1.394-.049a16.258,16.258,0,0,1-5.577-1.282,5.636,5.636,0,0,1-2.267-1.66,1.908,1.908,0,0,1-.436-1.173c-.005-.5,0-1.01,0-1.523a12.926,12.926,0,0,0,5.64,2.256,21.312,21.312,0,0,0,3.9.365q.4,0,.81-.016a17.7,17.7,0,0,0,7.168-1.568,15.127,15.127,0,0,0,1.628-.959l.1-.064c.011.547.022,1.112-.021,1.664a2.748,2.748,0,0,1-1.475,2M20.927,5.1a1.7,1.7,0,0,1,.019,2.239,6.422,6.422,0,0,1-2.985,1.976,18.051,18.051,0,0,1-6.375,1.055,16.846,16.846,0,0,1-6.8-1.373,6.189,6.189,0,0,1-1.929-1.3,1.849,1.849,0,0,1,.012-2.936A7.853,7.853,0,0,1,6.222,2.909a18.064,18.064,0,0,1,5.452-.788c.427,0,.869.012,1.313.037A16.328,16.328,0,0,1,18.02,3.17,6.441,6.441,0,0,1,20.927,5.1M11.8,20.716a19.758,19.758,0,0,1-1.979-.1,13.978,13.978,0,0,1-5.64-1.574,4.459,4.459,0,0,1-1.634-1.379,2.165,2.165,0,0,1-.381-.931c-.044-.554-.037-1.113-.028-1.7a14.313,14.313,0,0,0,6.505,2.384,21.175,21.175,0,0,0,3.071.223c.7,0,1.416-.034,2.128-.1a15.084,15.084,0,0,0,6.987-2.137c.172-.11.338-.227.5-.345v.042a15.54,15.54,0,0,1-.033,1.888,2.22,2.22,0,0,1-.964,1.36,9.761,9.761,0,0,1-3.981,1.821,18.905,18.905,0,0,1-4.55.555m9.563-9.292a2.329,2.329,0,0,1-1.048,1.756,10.325,10.325,0,0,1-4.189,1.859,18.686,18.686,0,0,1-4.319.5,20.545,20.545,0,0,1-2.148-.115,13.816,13.816,0,0,1-5.469-1.566A4.436,4.436,0,0,1,2.55,12.491a2.268,2.268,0,0,1-.387-.968c-.045-.546-.037-1.094-.028-1.673.159.118.323.234.49.343A14.243,14.243,0,0,0,7.989,12.14a21.265,21.265,0,0,0,3.707.324,22.518,22.518,0,0,0,2.316-.121,14.772,14.772,0,0,0,7.361-2.49c0,.543.007,1.058-.009,1.571"
						transform="translate(0 0)"
						fill="#b8b8c6"
					/>
				</g>
			</g>
			<g
				id="그룹_324"
				data-name="그룹 324"
				transform="translate(1753.28 2858.168)"
			>
				<g
					id="그룹_317-7"
					data-name="그룹 317"
					transform="translate(0 0)"
					clip-path="url(#clip-path-10)"
				>
					<path
						id="패스_541-7"
						data-name="패스 541"
						d="M23.477,16.2q0-1.1,0-2.194c0-.72,0-1.439-.007-2.159-.009-1.662-.018-3.381.022-5.068a4.757,4.757,0,0,0-2-4.078A11.834,11.834,0,0,0,17,.642,21.536,21.536,0,0,0,11.789,0,22.609,22.609,0,0,0,7.836.355,13.525,13.525,0,0,0,2.425,2.4,5.014,5.014,0,0,0,0,6.826c.051,4.407.034,8.891.017,13.226L.012,21.43a4.587,4.587,0,0,0,1.807,3.7,11.485,11.485,0,0,0,4.714,2.23A21.127,21.127,0,0,0,11.7,28a22.3,22.3,0,0,0,3.964-.362,12.467,12.467,0,0,0,6.058-2.546,4.456,4.456,0,0,0,1.763-3.618c-.013-1.759-.011-3.548-.008-5.278m-3.606,7.68a10.627,10.627,0,0,1-3.819,1.535,19.516,19.516,0,0,1-4.25.469c-.461,0-.93-.016-1.394-.049a16.258,16.258,0,0,1-5.577-1.282,5.636,5.636,0,0,1-2.267-1.66,1.908,1.908,0,0,1-.436-1.173c-.005-.5,0-1.01,0-1.523a12.926,12.926,0,0,0,5.64,2.256,21.312,21.312,0,0,0,3.9.365q.4,0,.81-.016a17.7,17.7,0,0,0,7.168-1.568,15.127,15.127,0,0,0,1.628-.959l.1-.064c.011.547.022,1.112-.021,1.664a2.748,2.748,0,0,1-1.475,2M20.927,5.1a1.7,1.7,0,0,1,.019,2.239,6.422,6.422,0,0,1-2.985,1.976,18.051,18.051,0,0,1-6.375,1.055,16.846,16.846,0,0,1-6.8-1.373,6.189,6.189,0,0,1-1.929-1.3,1.849,1.849,0,0,1,.012-2.936A7.853,7.853,0,0,1,6.222,2.909a18.064,18.064,0,0,1,5.452-.788c.427,0,.869.012,1.313.037A16.328,16.328,0,0,1,18.02,3.17,6.441,6.441,0,0,1,20.927,5.1M11.8,20.716a19.758,19.758,0,0,1-1.979-.1,13.978,13.978,0,0,1-5.64-1.574,4.459,4.459,0,0,1-1.634-1.379,2.165,2.165,0,0,1-.381-.931c-.044-.554-.037-1.113-.028-1.7a14.313,14.313,0,0,0,6.505,2.384,21.175,21.175,0,0,0,3.071.223c.7,0,1.416-.034,2.128-.1a15.084,15.084,0,0,0,6.987-2.137c.172-.11.338-.227.5-.345v.042a15.54,15.54,0,0,1-.033,1.888,2.22,2.22,0,0,1-.964,1.36,9.761,9.761,0,0,1-3.981,1.821,18.905,18.905,0,0,1-4.55.555m9.563-9.292a2.329,2.329,0,0,1-1.048,1.756,10.325,10.325,0,0,1-4.189,1.859,18.686,18.686,0,0,1-4.319.5,20.545,20.545,0,0,1-2.148-.115,13.816,13.816,0,0,1-5.469-1.566A4.436,4.436,0,0,1,2.55,12.491a2.268,2.268,0,0,1-.387-.968c-.045-.546-.037-1.094-.028-1.673.159.118.323.234.49.343A14.243,14.243,0,0,0,7.989,12.14a21.265,21.265,0,0,0,3.707.324,22.518,22.518,0,0,0,2.316-.121,14.772,14.772,0,0,0,7.361-2.49c0,.543.007,1.058-.009,1.571"
						transform="translate(0 0)"
						fill="#b8b8c6"
					/>
				</g>
			</g>
			<g
				id="그룹_325"
				data-name="그룹 325"
				transform="translate(1656.28 2858.168)"
			>
				<g
					id="그룹_317-8"
					data-name="그룹 317"
					transform="translate(0 0)"
					clip-path="url(#clip-path-10)"
				>
					<path
						id="패스_541-8"
						data-name="패스 541"
						d="M23.477,16.2q0-1.1,0-2.194c0-.72,0-1.439-.007-2.159-.009-1.662-.018-3.381.022-5.068a4.757,4.757,0,0,0-2-4.078A11.834,11.834,0,0,0,17,.642,21.536,21.536,0,0,0,11.789,0,22.609,22.609,0,0,0,7.836.355,13.525,13.525,0,0,0,2.425,2.4,5.014,5.014,0,0,0,0,6.826c.051,4.407.034,8.891.017,13.226L.012,21.43a4.587,4.587,0,0,0,1.807,3.7,11.485,11.485,0,0,0,4.714,2.23A21.127,21.127,0,0,0,11.7,28a22.3,22.3,0,0,0,3.964-.362,12.467,12.467,0,0,0,6.058-2.546,4.456,4.456,0,0,0,1.763-3.618c-.013-1.759-.011-3.548-.008-5.278m-3.606,7.68a10.627,10.627,0,0,1-3.819,1.535,19.516,19.516,0,0,1-4.25.469c-.461,0-.93-.016-1.394-.049a16.258,16.258,0,0,1-5.577-1.282,5.636,5.636,0,0,1-2.267-1.66,1.908,1.908,0,0,1-.436-1.173c-.005-.5,0-1.01,0-1.523a12.926,12.926,0,0,0,5.64,2.256,21.312,21.312,0,0,0,3.9.365q.4,0,.81-.016a17.7,17.7,0,0,0,7.168-1.568,15.127,15.127,0,0,0,1.628-.959l.1-.064c.011.547.022,1.112-.021,1.664a2.748,2.748,0,0,1-1.475,2M20.927,5.1a1.7,1.7,0,0,1,.019,2.239,6.422,6.422,0,0,1-2.985,1.976,18.051,18.051,0,0,1-6.375,1.055,16.846,16.846,0,0,1-6.8-1.373,6.189,6.189,0,0,1-1.929-1.3,1.849,1.849,0,0,1,.012-2.936A7.853,7.853,0,0,1,6.222,2.909a18.064,18.064,0,0,1,5.452-.788c.427,0,.869.012,1.313.037A16.328,16.328,0,0,1,18.02,3.17,6.441,6.441,0,0,1,20.927,5.1M11.8,20.716a19.758,19.758,0,0,1-1.979-.1,13.978,13.978,0,0,1-5.64-1.574,4.459,4.459,0,0,1-1.634-1.379,2.165,2.165,0,0,1-.381-.931c-.044-.554-.037-1.113-.028-1.7a14.313,14.313,0,0,0,6.505,2.384,21.175,21.175,0,0,0,3.071.223c.7,0,1.416-.034,2.128-.1a15.084,15.084,0,0,0,6.987-2.137c.172-.11.338-.227.5-.345v.042a15.54,15.54,0,0,1-.033,1.888,2.22,2.22,0,0,1-.964,1.36,9.761,9.761,0,0,1-3.981,1.821,18.905,18.905,0,0,1-4.55.555m9.563-9.292a2.329,2.329,0,0,1-1.048,1.756,10.325,10.325,0,0,1-4.189,1.859,18.686,18.686,0,0,1-4.319.5,20.545,20.545,0,0,1-2.148-.115,13.816,13.816,0,0,1-5.469-1.566A4.436,4.436,0,0,1,2.55,12.491a2.268,2.268,0,0,1-.387-.968c-.045-.546-.037-1.094-.028-1.673.159.118.323.234.49.343A14.243,14.243,0,0,0,7.989,12.14a21.265,21.265,0,0,0,3.707.324,22.518,22.518,0,0,0,2.316-.121,14.772,14.772,0,0,0,7.361-2.49c0,.543.007,1.058-.009,1.571"
						transform="translate(0 0)"
						fill="#b8b8c6"
					/>
				</g>
			</g>
			<g
				id="그룹_326"
				data-name="그룹 326"
				transform="translate(1559.28 2858.168)"
			>
				<g
					id="그룹_317-9"
					data-name="그룹 317"
					transform="translate(0 0)"
					clip-path="url(#clip-path-18)"
				>
					<path
						id="패스_541-9"
						data-name="패스 541"
						d="M23.477,16.2q0-1.1,0-2.194c0-.72,0-1.439-.007-2.159-.009-1.662-.018-3.381.022-5.068a4.757,4.757,0,0,0-2-4.078A11.834,11.834,0,0,0,17,.642,21.536,21.536,0,0,0,11.789,0,22.609,22.609,0,0,0,7.836.355,13.525,13.525,0,0,0,2.425,2.4,5.014,5.014,0,0,0,0,6.826c.051,4.407.034,8.891.017,13.226L.012,21.43a4.587,4.587,0,0,0,1.807,3.7,11.485,11.485,0,0,0,4.714,2.23A21.127,21.127,0,0,0,11.7,28a22.3,22.3,0,0,0,3.964-.362,12.467,12.467,0,0,0,6.058-2.546,4.456,4.456,0,0,0,1.763-3.618c-.013-1.759-.011-3.548-.008-5.278m-3.606,7.68a10.627,10.627,0,0,1-3.819,1.535,19.516,19.516,0,0,1-4.25.469c-.461,0-.93-.016-1.394-.049a16.258,16.258,0,0,1-5.577-1.282,5.636,5.636,0,0,1-2.267-1.66,1.908,1.908,0,0,1-.436-1.173c-.005-.5,0-1.01,0-1.523a12.926,12.926,0,0,0,5.64,2.256,21.312,21.312,0,0,0,3.9.365q.4,0,.81-.016a17.7,17.7,0,0,0,7.168-1.568,15.127,15.127,0,0,0,1.628-.959l.1-.064c.011.547.022,1.112-.021,1.664a2.748,2.748,0,0,1-1.475,2M20.927,5.1a1.7,1.7,0,0,1,.019,2.239,6.422,6.422,0,0,1-2.985,1.976,18.051,18.051,0,0,1-6.375,1.055,16.846,16.846,0,0,1-6.8-1.373,6.189,6.189,0,0,1-1.929-1.3,1.849,1.849,0,0,1,.012-2.936A7.853,7.853,0,0,1,6.222,2.909a18.064,18.064,0,0,1,5.452-.788c.427,0,.869.012,1.313.037A16.328,16.328,0,0,1,18.02,3.17,6.441,6.441,0,0,1,20.927,5.1M11.8,20.716a19.758,19.758,0,0,1-1.979-.1,13.978,13.978,0,0,1-5.64-1.574,4.459,4.459,0,0,1-1.634-1.379,2.165,2.165,0,0,1-.381-.931c-.044-.554-.037-1.113-.028-1.7a14.313,14.313,0,0,0,6.505,2.384,21.175,21.175,0,0,0,3.071.223c.7,0,1.416-.034,2.128-.1a15.084,15.084,0,0,0,6.987-2.137c.172-.11.338-.227.5-.345v.042a15.54,15.54,0,0,1-.033,1.888,2.22,2.22,0,0,1-.964,1.36,9.761,9.761,0,0,1-3.981,1.821,18.905,18.905,0,0,1-4.55.555m9.563-9.292a2.329,2.329,0,0,1-1.048,1.756,10.325,10.325,0,0,1-4.189,1.859,18.686,18.686,0,0,1-4.319.5,20.545,20.545,0,0,1-2.148-.115,13.816,13.816,0,0,1-5.469-1.566A4.436,4.436,0,0,1,2.55,12.491a2.268,2.268,0,0,1-.387-.968c-.045-.546-.037-1.094-.028-1.673.159.118.323.234.49.343A14.243,14.243,0,0,0,7.989,12.14a21.265,21.265,0,0,0,3.707.324,22.518,22.518,0,0,0,2.316-.121,14.772,14.772,0,0,0,7.361-2.49c0,.543.007,1.058-.009,1.571"
						transform="translate(0 0)"
						fill="#b8b8c6"
					/>
				</g>
			</g>

			{/* 동그라미 4개 텍스트 */}
			<text
				id="Data_Set_01"
				data-name="Data Set 01"
				transform="translate(990 2904)"
				fill="#b8b8c6"
				font-size="14"
				font-family="SegoeUI, Segoe UI"
			>
				<tspan x="-26.072" y="0">
					Data Set
				</tspan>
				<tspan x="-7.547" y="16">
					01
				</tspan>
			</text>
            <text
				id="Data_Set_02"
				data-name="Data Set 02"
				transform="translate(1087 2904)"
				fill="#b8b8c6"
				font-size="14"
				font-family="SegoeUI, Segoe UI"
			>
				<tspan x="-26.072" y="0">
					Data Set
				</tspan>
				<tspan x="-7.547" y="16">
					02
				</tspan>
			</text>
			<text
				id="Data_Set_03"
				data-name="Data Set 03"
				transform="translate(1184 2904)"
				fill="#b8b8c6"
				font-size="14"
				font-family="SegoeUI, Segoe UI"
			>
				<tspan x="-26.072" y="0">
					Data Set
				</tspan>
				<tspan x="-7.547" y="16">
					03
				</tspan>
			</text>
            <text
				id="Data_Set_04"
				data-name="Data Set 04"
				transform="translate(1281 2904)"
				fill="#b8b8c6"
				font-size="14"
				font-family="SegoeUI, Segoe UI"
			>
				<tspan x="-26.072" y="0">
					Data Set
				</tspan>
				<tspan x="-7.547" y="16">
					04
				</tspan>
			</text>
			<text
				id="Data_Set_05"
				data-name="Data Set 05"
				transform="translate(1378 2904)"
				fill="#b8b8c6"
				font-size="14"
				font-family="SegoeUI, Segoe UI"
			>
				<tspan x="-26.072" y="0">
					Data Set
				</tspan>
				<tspan x="-7.547" y="16">
					05
				</tspan>
			</text>
            <text
				id="Data_Set_06"
				data-name="Data Set 06"
				transform="translate(1475 2904)"
				fill="#b8b8c6"
				font-size="14"
				font-family="SegoeUI, Segoe UI"
			>
				<tspan x="-26.072" y="0">
					Data Set
				</tspan>
				<tspan x="-7.547" y="16">
					06
				</tspan>
			</text>
			<text
				id="Data_Set_07"
				data-name="Data Set 07"
				transform="translate(1572 2904)"
				fill="#b8b8c6"
				font-size="14"
				font-family="SegoeUI, Segoe UI"
			>
				<tspan x="-26.072" y="0">
					Data Set
				</tspan>
				<tspan x="-7.547" y="16">
					07
				</tspan>
			</text>
			<text
				id="Data_Set_08"
				data-name="Data Set 08"
				transform="translate(1669 2904)"
				fill="#b8b8c6"
				font-size="14"
				font-family="SegoeUI, Segoe UI"
			>
				<tspan x="-26.072" y="0">
					Data Set
				</tspan>
				<tspan x="-7.547" y="16">
					08
				</tspan>
			</text>
			<text
				id="Data_Set_n"
				data-name="Data Set n"
				transform="translate(1766 2904)"
				fill="#b8b8c6"
				font-size="14"
				font-family="SegoeUI, Segoe UI"
			>
				<tspan x="-26.072" y="0">
					Data Set
				</tspan>
				<tspan x="-3.961" y="16">
					n
				</tspan>
			</text>

			{/* Paths */}
			<path
				id="패스_55"
				data-name="패스 55"
				d="M1668.658,2723.428h38.783"
				transform="translate(29.074 -4)"
				fill="none"
				stroke="#b8b8c6"
				stroke-linecap="round"
				stroke-width="2"
				stroke-dasharray="1 5"
			/>
			<path
				id="패스_57"
				data-name="패스 57"
				d="M1272.5,2476.5s-4.49,29.784-46.5,33.991S1178.5,2560,1178.5,2560"
				transform="translate(-92 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_104"
				data-name="패스 104"
				d="M1272.5,2476.5s-4.49,25.5-46.5,29.1-47.5,42.4-47.5,42.4"
				transform="translate(-92 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_182"
				data-name="패스 182"
				d="M1272.5,2476.5s-4.49,28.76-46.5,32.822-47.5,47.812-47.5,47.812"
				transform="translate(-92 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_58"
				data-name="패스 58"
				d="M1178.5,2476.5s3.515,33.829,145.676,33.991S1473,2560,1473,2560"
				transform="translate(2 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_111"
				data-name="패스 111"
				d="M1178.5,2476.5s3.515,28.966,145.676,29.1S1473,2548,1473,2548"
				transform="translate(2 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_214"
				data-name="패스 214"
				d="M1178.5,2476.5s3.515,32.666,145.676,32.822S1473,2557.133,1473,2557.133"
				transform="translate(2 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_59"
				data-name="패스 59"
				d="M1178.5,2476.5s4.672,33.829,193.658,33.991S1570,2560,1570,2560"
                transform="translate(2 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_112"
				data-name="패스 112"
				d="M1178.5,2476.5s4.672,28.966,193.658,29.1S1570,2548,1570,2548"
				transform="translate(2 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_215"
				data-name="패스 215"
				d="M1178.5,2476.5s4.672,32.666,193.658,32.822S1570,2557.133,1570,2557.133"
				transform="translate(2 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_60"
				data-name="패스 60"
				d="M1178.5,2476.5s5.824,33.829,241.392,33.991S1666.5,2560,1666.5,2560"
				transform="translate(2 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_113"
				data-name="패스 113"
				d="M1178.5,2476.5s5.824,28.966,241.392,29.1S1666.5,2548,1666.5,2548"
				transform="translate(2 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_216"
				data-name="패스 216"
				d="M1178.5,2476.5s5.824,32.666,241.392,32.822,246.608,47.812,246.608,47.812"
				transform="translate(2 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_61"
				data-name="패스 61"
				d="M1178.5,2476.5s6.981,33.829,289.374,33.991S1763.5,2560,1763.5,2560"
				transform="translate(2 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_114"
				data-name="패스 114"
				d="M1178.5,2476.5s6.981,28.966,289.374,29.1S1763.5,2548,1763.5,2548"
				transform="translate(2 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_217"
				data-name="패스 217"
				d="M1178.5,2476.5s6.981,32.666,289.374,32.822,295.626,47.812,295.626,47.812"
				transform="translate(2 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_62"
				data-name="패스 62"
				d="M1369.5,2476.5s-2.28,33.829-94.479,33.991S1178.5,2560,1178.5,2560"
				transform="translate(-189 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_101"
				data-name="패스 101"
				d="M1369.5,2476.5s-2.28,28.966-94.479,29.1S1178.5,2548,1178.5,2548"
				transform="translate(-189 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_183"
				data-name="패스 183"
				d="M1369.5,2476.5s-2.28,32.666-94.479,32.822-96.521,47.812-96.521,47.812"
				transform="translate(-189 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_63"
				data-name="패스 63"
				d="M1178.5,2476.5s2.357,33.829,97.694,33.991S1376,2560,1376,2560"
				transform="translate(2 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_115"
				data-name="패스 115"
				d="M1178.5,2476.5s2.357,28.966,97.694,29.1S1376,2548,1376,2548"
				transform="translate(2 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_218"
				data-name="패스 218"
				d="M1178.5,2476.5s2.357,32.666,97.694,32.822S1376,2557.133,1376,2557.133"
				transform="translate(2 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_64"
				data-name="패스 64"
				d="M1178.5,2476.5s1.205,33.829,49.96,33.991S1279.5,2560,1279.5,2560"
				transform="translate(2 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_116"
				data-name="패스 116"
				d="M1178.5,2476.5s1.205,28.966,49.96,29.1,51.04,42.4,51.04,42.4"
				transform="translate(2 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_219"
				data-name="패스 219"
				d="M1178.5,2476.5s1.205,32.666,49.96,32.822,51.04,47.812,51.04,47.812"
				transform="translate(2 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_65"
				data-name="패스 65"
				d="M1178.5,2476.5s.048,33.829,1.979,33.991S1182.5,2560,1182.5,2560"
				transform="translate(2 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_117"
				data-name="패스 117"
				d="M1178.5,2476.5s.048,28.966,1.979,29.1,2.021,42.4,2.021,42.4"
				transform="translate(2 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_220"
				data-name="패스 220"
				d="M1178.5,2476.5s.048,32.666,1.979,32.822,2.021,47.812,2.021,47.812"
				transform="translate(2 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_66"
				data-name="패스 66"
				d="M1178.5,2476.5s5.788,33.829,239.908,33.991S1663.5,2560,1663.5,2560"
				transform="translate(102 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_121"
				data-name="패스 121"
				d="M1178.5,2476.5s5.788,28.966,239.908,29.1S1663.5,2548,1663.5,2548"
				transform="translate(102 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_226"
				data-name="패스 226"
				d="M1178.5,2476.5s5.788,32.666,239.908,32.822,245.092,47.812,245.092,47.812"
				transform="translate(102 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_67"
				data-name="패스 67"
				d="M1178.5,2476.5s4.636,33.829,192.174,33.991S1567,2560,1567,2560"
				transform="translate(102 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_122"
				data-name="패스 122"
				d="M1178.5,2476.5s4.636,28.966,192.174,29.1S1567,2548,1567,2548"
				transform="translate(102 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_227"
				data-name="패스 227"
				d="M1178.5,2476.5s4.636,32.666,192.174,32.822S1567,2557.133,1567,2557.133"
				transform="translate(102 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_68"
				data-name="패스 68"
				d="M1178.5,2476.5s3.479,33.829,144.192,33.991S1470,2560,1470,2560"
				transform="translate(102 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_123"
				data-name="패스 123"
				d="M1178.5,2476.5s3.479,28.966,144.192,29.1S1470,2548,1470,2548"
				transform="translate(102 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_228"
				data-name="패스 228"
				d="M1178.5,2476.5s3.479,32.666,144.192,32.822S1470,2557.133,1470,2557.133"
				transform="translate(102 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_69"
				data-name="패스 69"
				d="M1178.5,2476.5s2.321,33.829,96.21,33.991S1373,2560,1373,2560"
				transform="translate(102 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_124"
				data-name="패스 124"
				d="M1178.5,2476.5s2.321,28.966,96.21,29.1S1373,2548,1373,2548"
				transform="translate(102 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_229"
				data-name="패스 229"
				d="M1178.5,2476.5s2.321,32.666,96.21,32.822,98.29,47.812,98.29,47.812"
				transform="translate(102 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_70"
				data-name="패스 70"
				d="M1178.5,2476.5s1.164,33.829,48.229,33.991S1276,2560,1276,2560"
				transform="translate(102 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_125"
				data-name="패스 125"
				d="M1178.5,2476.5s1.164,28.966,48.229,29.1S1276,2548,1276,2548"
				transform="translate(102 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_230"
				data-name="패스 230"
				d="M1178.5,2476.5s1.164,32.666,48.229,32.822S1276,2557.133,1276,2557.133"
				transform="translate(102 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_71"
				data-name="패스 71"
				d="M1178.5,2476.5s.012,33.829.495,33.991.505,49.514.505,49.514"
				transform="translate(102 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_126"
				data-name="패스 126"
				d="M1178.5,2476.5s.012,28.966.495,29.1.505,42.4.505,42.4"
				transform="translate(102 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_231"
				data-name="패스 231"
				d="M1178.5,2476.5s.012,32.666.495,32.822.505,47.812.505,47.812"
				transform="translate(102 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_72"
				data-name="패스 72"
				d="M1274.5,2476.5s-1.146,33.829-47.487,33.991S1178.5,2560,1178.5,2560"
				transform="translate(6 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_118"
				data-name="패스 118"
				d="M1274.5,2476.5s-1.146,28.966-47.487,29.1S1178.5,2548,1178.5,2548"
				transform="translate(6 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_221"
				data-name="패스 221"
				d="M1274.5,2476.5s-1.146,32.666-47.487,32.822-48.513,47.812-48.513,47.812"
				transform="translate(6 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_73"
				data-name="패스 73"
				d="M1371.5,2476.5s-2.3,33.829-95.469,33.991S1178.5,2560,1178.5,2560"
				transform="translate(-91 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_105"
				data-name="패스 105"
				d="M1371.5,2476.5s-2.3,28.966-95.469,29.1S1178.5,2548,1178.5,2548"
				transform="translate(-91 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_184"
				data-name="패스 184"
				d="M1371.5,2476.5s-2.3,32.666-95.469,32.822-97.531,47.812-97.531,47.812"
				transform="translate(-91 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_102"
				data-name="패스 102"
				d="M1469.5,2476.5s-3.473,28.966-143.945,29.1S1178.5,2548,1178.5,2548"
				transform="translate(-189 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_185"
				data-name="패스 185"
				d="M1469.5,2476.5s-3.473,32.666-143.945,32.822-147.055,47.812-147.055,47.812"
				transform="translate(-189 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_75"
				data-name="패스 75"
				d="M1178.5,2476.5s4.625,33.829,191.679,33.991S1566,2560,1566,2560"
				transform="translate(199.5 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_130"
				data-name="패스 130"
				d="M1178.5,2476.5s4.625,28.966,191.679,29.1S1566,2548,1566,2548"
				transform="translate(199.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_237"
				data-name="패스 237"
				d="M1178.5,2476.5s4.625,32.666,191.679,32.822S1566,2557.133,1566,2557.133"
				transform="translate(199.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_76"
				data-name="패스 76"
				d="M1178.5,2476.5s3.461,33.829,143.45,33.991S1468.5,2560,1468.5,2560"
				transform="translate(199.5 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_131"
				data-name="패스 131"
				d="M1178.5,2476.5s3.461,28.966,143.45,29.1S1468.5,2548,1468.5,2548"
				transform="translate(199.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_238"
				data-name="패스 238"
				d="M1178.5,2476.5s3.461,32.666,143.45,32.822,146.55,47.812,146.55,47.812"
				transform="translate(199.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_77"
				data-name="패스 77"
				d="M1178.5,2476.5s2.315,33.829,95.963,33.991S1372.5,2560,1372.5,2560"
				transform="translate(199.5 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_132"
				data-name="패스 132"
				d="M1178.5,2476.5s2.315,28.966,95.963,29.1S1372.5,2548,1372.5,2548"
				transform="translate(199.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_78"
				data-name="패스 78"
				d="M1178.5,2476.5s1.158,33.829,47.982,33.991S1275.5,2560,1275.5,2560"
				transform="translate(199.5 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_133"
				data-name="패스 133"
				d="M1178.5,2476.5s1.158,28.966,47.982,29.1S1275.5,2548,1275.5,2548"
				transform="translate(199.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_240"
				data-name="패스 240"
				d="M1178.5,2476.5s1.158,32.666,47.982,32.822,49.018,47.812,49.018,47.812"
				transform="translate(199.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_79"
				data-name="패스 79"
				d="M1179,2476.5s-.006,33.829-.247,33.991S1178.5,2560,1178.5,2560"
				transform="translate(199 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_134"
				data-name="패스 134"
				d="M1179,2476.5s-.006,28.966-.247,29.1-.253,42.4-.253,42.4"
				transform="translate(199 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_241"
				data-name="패스 241"
				d="M1179,2476.5s-.006,32.666-.247,32.822-.253,47.812-.253,47.812"
				transform="translate(199 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_80"
				data-name="패스 80"
				d="M1275,2476.5s-1.152,33.829-47.734,33.991S1178.5,2560,1178.5,2560"
				transform="translate(103 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_127"
				data-name="패스 127"
				d="M1275,2476.5s-1.152,28.966-47.734,29.1S1178.5,2548,1178.5,2548"
				transform="translate(103 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_232"
				data-name="패스 232"
				d="M1275,2476.5s-1.152,32.666-47.734,32.822-48.766,47.812-48.766,47.812"
				transform="translate(103 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_81"
				data-name="패스 81"
				d="M1471.5,2476.5s-3.5,33.829-144.934,33.991S1178.5,2560,1178.5,2560"
				transform="translate(-93.5 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_106"
				data-name="패스 106"
				d="M1471.5,2476.5s-3.5,28.966-144.934,29.1S1178.5,2548,1178.5,2548"
				transform="translate(-93.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_186"
				data-name="패스 186"
				d="M1471.5,2476.5s-3.5,32.666-144.934,32.822-148.066,47.812-148.066,47.812"
				transform="translate(-93.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_82"
				data-name="패스 82"
				d="M1566,2476.5s-4.625,33.829-191.679,33.991S1178.5,2560,1178.5,2560"
				transform="translate(-188 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_103"
				data-name="패스 103"
				d="M1566,2476.5s-4.625,28.966-191.679,29.1S1178.5,2548,1178.5,2548"
				transform="translate(-188 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_187"
				data-name="패스 187"
				d="M1566,2476.5s-4.625,32.666-191.679,32.822-195.821,47.812-195.821,47.812"
				transform="translate(-188 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_83"
				data-name="패스 83"
				d="M1178.5,2476.5s3.467,33.829,143.7,33.991S1469,2560,1469,2560"
				transform="translate(296.5 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_137"
				data-name="패스 137"
				d="M1178.5,2476.5s3.467,28.966,143.7,29.1S1469,2548,1469,2548"
				transform="translate(296.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_246"
				data-name="패스 246"
				d="M1178.5,2476.5s3.467,32.666,143.7,32.822,146.8,47.812,146.8,47.812"
				transform="translate(296.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_84"
				data-name="패스 84"
				d="M1178.5,2476.5s2.3,33.829,95.469,33.991S1371.5,2560,1371.5,2560"
				transform="translate(296.5 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_138"
				data-name="패스 138"
				d="M1178.5,2476.5s2.3,28.966,95.469,29.1S1371.5,2548,1371.5,2548"
				transform="translate(296.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_247"
				data-name="패스 247"
				d="M1178.5,2476.5s2.3,32.666,95.469,32.822,97.531,47.812,97.531,47.812"
				transform="translate(296.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_85"
				data-name="패스 85"
				d="M1178.5,2476.5s1.158,33.829,47.982,33.991S1275.5,2560,1275.5,2560"
				transform="translate(296.5 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_139"
				data-name="패스 139"
				d="M1178.5,2476.5s1.158,28.966,47.982,29.1S1275.5,2548,1275.5,2548"
				transform="translate(296.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_248"
				data-name="패스 248"
				d="M1178.5,2476.5s1.158,32.666,47.982,32.822,49.018,47.812,49.018,47.812"
				transform="translate(296.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_86"
				data-name="패스 86"
				d="M1178.5,2476.5V2560"
				transform="translate(296.5 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_140"
				data-name="패스 140"
				d="M1178.5,2476.5V2548"
				transform="translate(296.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_249"
				data-name="패스 249"
				d="M1178.5,2476.5v80.634"
				transform="translate(296.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_87"
				data-name="패스 87"
				d="M1276.5,2476.5s-1.17,33.829-48.476,33.991S1178.5,2560,1178.5,2560"
				transform="translate(198.5 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_135"
				data-name="패스 135"
				d="M1276.5,2476.5s-1.17,28.966-48.476,29.1S1178.5,2548,1178.5,2548"
				transform="translate(198.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_242"
				data-name="패스 242"
				d="M1276.5,2476.5s-1.17,32.666-48.476,32.822-49.524,47.812-49.524,47.812"
				transform="translate(198.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_88"
				data-name="패스 88"
				d="M1372,2476.5s-2.309,33.829-95.716,33.991S1178.5,2560,1178.5,2560"
				transform="translate(103 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_128"
				data-name="패스 128"
				d="M1372,2476.5s-2.309,28.966-95.716,29.1S1178.5,2548,1178.5,2548"
				transform="translate(103 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_233"
				data-name="패스 233"
				d="M1372,2476.5s-2.309,32.666-95.716,32.822-97.784,47.812-97.784,47.812"
				transform="translate(103 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_89"
				data-name="패스 89"
				d="M1469,2476.5s-3.467,33.829-143.7,33.991S1178.5,2560,1178.5,2560"
				transform="translate(6 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_119"
				data-name="패스 119"
				d="M1469,2476.5s-3.467,28.966-143.7,29.1-146.8,42.4-146.8,42.4"
				transform="translate(6 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_222"
				data-name="패스 222"
				d="M1469,2476.5s-3.467,32.666-143.7,32.822-146.8,47.812-146.8,47.812"
				transform="translate(6 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_90"
				data-name="패스 90"
				d="M1567,2476.5s-4.636,33.829-192.174,33.991S1178.5,2560,1178.5,2560"
				transform="translate(-92 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_107"
				data-name="패스 107"
				d="M1567,2476.5s-4.636,28.966-192.174,29.1S1178.5,2548,1178.5,2548"
				transform="translate(-92 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_188"
				data-name="패스 188"
				d="M1567,2476.5s-4.636,32.666-192.174,32.822-196.326,47.812-196.326,47.812"
				transform="translate(-92 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_91"
				data-name="패스 91"
				d="M1663,2476.5s-5.782,33.829-239.661,33.991S1178.5,2560,1178.5,2560"
				transform="translate(-188 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_108"
				data-name="패스 108"
				d="M1663,2476.5s-5.782,28.966-239.661,29.1S1178.5,2548,1178.5,2548"
				transform="translate(-188 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_189"
				data-name="패스 189"
				d="M1663,2476.5s-5.782,32.666-239.661,32.822-244.84,47.812-244.84,47.812"
				transform="translate(-188 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_92"
				data-name="패스 92"
				d="M1178.5,2476.5s2.321,33.829,96.21,33.991S1373,2560,1373,2560"
				transform="translate(392.5 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_142"
				data-name="패스 142"
				d="M1178.5,2476.5s2.321,28.966,96.21,29.1S1373,2548,1373,2548"
				transform="translate(392.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_253"
				data-name="패스 253"
				d="M1178.5,2476.5s2.321,32.666,96.21,32.822,98.29,47.812,98.29,47.812"
				transform="translate(392.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_93"
				data-name="패스 93"
				d="M1178.5,2476.5s1.164,33.829,48.229,33.991S1276,2560,1276,2560"
				transform="translate(392.5 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_143"
				data-name="패스 143"
				d="M1178.5,2476.5s1.164,28.966,48.229,29.1S1276,2548,1276,2548"
				transform="translate(392.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_254"
				data-name="패스 254"
				d="M1178.5,2476.5s1.164,32.666,48.229,32.822S1276,2557.133,1276,2557.133"
				transform="translate(392.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			{/* <path
				id="패스_94"
				data-name="패스 94"
				d="M1178.5,2476.5s.006,33.829.247,33.991S1179,2560,1179,2560"
				transform="translate(392.5 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_144"
				data-name="패스 144"
				d="M1178.5,2476.5s.006,28.966.247,29.1.253,42.4.253,42.4"
				transform="translate(392.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_255"
				data-name="패스 255"
				d="M1178.5,2476.5s.006,32.666.247,32.822.253,47.812.253,47.812"
				transform="translate(392.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/> */}
            <path
				id="패스_94"
				data-name="패스 94"
				d="M1178.5,2476.5s.006,33.829.247,33.991S1179,2560,1179,2560"
				transform="translate(392.5 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_144"
				data-name="패스 144"
				d="M1178.5,2476.5s.006,28.966.247,29.1.253,42.4.253,42.4"
				transform="translate(392.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_255"
				data-name="패스 255"
				d="M1178.5,2476.5s.006,32.666.247,32.822.253,47.812.253,47.812"
				transform="translate(392.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_95"
				data-name="패스 95"
				d="M1274.5,2476.5s-1.146,33.829-47.487,33.991S1178.5,2560,1178.5,2560"
				transform="translate(296.5 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_141"
				data-name="패스 141"
				d="M1274.5,2476.5s-1.146,28.966-47.487,29.1S1178.5,2548,1178.5,2548"
				transform="translate(296.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_250"
				data-name="패스 250"
				d="M1274.5,2476.5s-1.146,32.666-47.487,32.822-48.513,47.812-48.513,47.812"
				transform="translate(296.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_96"
				data-name="패스 96"
				d="M1371.5,2476.5s-2.3,33.829-95.468,33.991S1178.5,2560,1178.5,2560"
				transform="translate(199.5 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_136"
				data-name="패스 136"
				d="M1371.5,2476.5s-2.3,28.966-95.468,29.1S1178.5,2548,1178.5,2548"
				transform="translate(199.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_243"
				data-name="패스 243"
				d="M1371.5,2476.5s-2.3,32.666-95.468,32.822-97.531,47.812-97.531,47.812"
				transform="translate(199.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_97"
				data-name="패스 97"
				d="M1469,2476.5s-3.467,33.829-143.7,33.991S1178.5,2560,1178.5,2560"
				transform="translate(102 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_129"
				data-name="패스 129"
				d="M1469,2476.5s-3.467,28.966-143.7,29.1-146.8,42.4-146.8,42.4"
				transform="translate(102 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_234"
				data-name="패스 234"
				d="M1469,2476.5s-3.467,32.666-143.7,32.822-146.8,47.812-146.8,47.812"
				transform="translate(102 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_98"
				data-name="패스 98"
				d="M1565,2476.5s-4.613,33.829-191.184,33.991S1178.5,2560,1178.5,2560"
				transform="translate(6 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_120"
				data-name="패스 120"
				d="M1565,2476.5s-4.613,28.966-191.184,29.1S1178.5,2548,1178.5,2548"
				transform="translate(6 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_223"
				data-name="패스 223"
				d="M1565,2476.5s-4.613,32.666-191.184,32.822-195.316,47.812-195.316,47.812"
				transform="translate(6 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_99"
				data-name="패스 99"
				d="M1662,2476.5s-5.77,33.829-239.166,33.991S1178.5,2560,1178.5,2560"
				transform="translate(-91 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_109"
				data-name="패스 109"
				d="M1662,2476.5s-5.77,28.966-239.166,29.1S1178.5,2548,1178.5,2548"
				transform="translate(-91 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_190"
				data-name="패스 190"
				d="M1662,2476.5s-5.77,32.666-239.166,32.822-244.334,47.812-244.334,47.812"
				transform="translate(-91 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_100"
				data-name="패스 100"
				d="M1759,2476.5s-6.928,33.829-287.147,33.991S1178.5,2560,1178.5,2560"
				transform="translate(-188 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_110"
				data-name="패스 110"
				d="M1759,2476.5s-6.928,28.966-287.147,29.1S1178.5,2548,1178.5,2548"
				transform="translate(-188 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_191"
				data-name="패스 191"
				d="M1759,2476.5s-6.928,32.666-287.147,32.822-293.352,47.812-293.352,47.812"
				transform="translate(-188 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_145"
				data-name="패스 145"
				d="M1274,2476.5s-2.408,21.636-47.24,29.1-48.26,42.4-48.26,42.4"
				transform="translate(-189 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_192"
				data-name="패스 192"
				d="M1274,2476.5s-2.408,24.4-47.24,32.822-48.26,47.812-48.26,47.812"
				transform="translate(-189 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_146"
				data-name="패스 146"
				d="M1178.5,2476.5s.024,28.966.989,29.1,1.011,42.4,1.011,42.4"
				transform="translate(-93.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_193"
				data-name="패스 193"
				d="M1178.5,2476.5s.024,32.666.989,32.822,1.011,47.812,1.011,47.812"
				transform="translate(-93.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_147"
				data-name="패스 147"
				d="M1178.5,2476.5s1.188,28.966,49.218,29.1S1278,2548,1278,2548"
				transform="translate(-93.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_194"
				data-name="패스 194"
				d="M1178.5,2476.5s1.188,32.666,49.218,32.822S1278,2557.133,1278,2557.133"
				transform="translate(-93.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_148"
				data-name="패스 148"
				d="M1178.5,2476.5s2.345,28.966,97.2,29.1S1375,2548,1375,2548"
				transform="translate(-93.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_195"
				data-name="패스 195"
				d="M1178.5,2476.5s2.345,32.666,97.2,32.822,99.3,47.812,99.3,47.812"
				transform="translate(-93.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_149"
				data-name="패스 149"
				d="M1178.5,2476.5s3.5,28.966,145.058,29.1S1471.75,2548,1471.75,2548"
				transform="translate(-93.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_196"
				data-name="패스 196"
				d="M1178.5,2476.5s3.5,32.666,145.058,32.822,148.192,47.812,148.192,47.812"
				transform="translate(-93.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_150"
				data-name="패스 150"
				d="M1178.5,2476.5s4.654,28.966,192.916,29.1S1568.5,2548,1568.5,2548"
				transform="translate(-93.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_197"
				data-name="패스 197"
				d="M1178.5,2476.5s4.654,32.666,192.916,32.822,197.084,47.812,197.084,47.812"
				transform="translate(-93.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_151"
				data-name="패스 151"
				d="M1178.5,2476.5s5.813,28.966,240.9,29.1,246.1,42.4,246.1,42.4"
				transform="translate(-93.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_198"
				data-name="패스 198"
				d="M1178.5,2476.5s5.813,32.666,240.9,32.822,246.1,47.812,246.1,47.812"
				transform="translate(-93.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_152"
				data-name="패스 152"
				d="M1178.5,2476.5s6.964,28.966,288.631,29.1S1762,2548,1762,2548"
				transform="translate(-93.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_199"
				data-name="패스 199"
				d="M1178.5,2476.5s6.964,32.666,288.631,32.822S1762,2557.133,1762,2557.133"
				transform="translate(-93.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_153"
				data-name="패스 153"
				d="M1178.5,2476.5s8.116,28.966,336.366,29.1S1858.5,2548,1858.5,2548"
				transform="translate(-93.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_200"
				data-name="패스 200"
				d="M1178.5,2476.5s8.116,32.666,336.366,32.822,343.634,47.812,343.634,47.812"
				transform="translate(-93.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_154"
				data-name="패스 154"
				d="M1179,2476.5s-.013,21.636-.247,29.1-.253,42.4-.253,42.4"
				transform="translate(-189 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_201"
				data-name="패스 201"
				d="M1179,2476.5s-.013,24.4-.247,32.822-.253,47.812-.253,47.812"
				transform="translate(-189 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_155"
				data-name="패스 155"
				d="M1178.5,2476.5s2.445,21.636,47.982,29.1S1275.5,2548,1275.5,2548"
				transform="translate(-188.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_202"
				data-name="패스 202"
				d="M1178.5,2476.5s2.445,24.4,47.982,32.822,49.018,47.812,49.018,47.812"
				transform="translate(-188.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_156"
				data-name="패스 156"
				d="M1178.5,2476.5s4.9,21.636,96.211,29.1S1373,2548,1373,2548"
				transform="translate(-188.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_203"
				data-name="패스 203"
				d="M1178.5,2476.5s4.9,24.4,96.211,32.822,98.29,47.812,98.29,47.812"
				transform="translate(-188.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_157"
				data-name="패스 157"
				d="M1178.5,2476.5s7.349,21.636,144.192,29.1S1470,2548,1470,2548"
				transform="translate(-188.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_204"
				data-name="패스 204"
				d="M1178.5,2476.5s7.349,24.4,144.192,32.822S1470,2557.133,1470,2557.133"
				transform="translate(-188.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_205"
				data-name="패스 205"
				d="M1178.5,2476.5s9.788,24.4,192.05,32.822,196.2,47.812,196.2,47.812"
				transform="translate(-188.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_159"
				data-name="패스 159"
				d="M1178.5,2476.5s12.227,21.636,239.908,29.1S1663.5,2548,1663.5,2548"
				transform="translate(-188.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_206"
				data-name="패스 206"
				d="M1178.5,2476.5s12.227,24.4,239.908,32.822,245.092,47.812,245.092,47.812"
				transform="translate(-188.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_160"
				data-name="패스 160"
				d="M1178.5,2476.5s14.672,21.636,287.89,29.1S1760.5,2548,1760.5,2548"
				transform="translate(-188.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_207"
				data-name="패스 207"
				d="M1178.5,2476.5s14.672,24.4,287.89,32.822,294.11,47.812,294.11,47.812"
				transform="translate(-188.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_161"
				data-name="패스 161"
				d="M1178.5,2476.5s17.117,21.636,335.871,29.1S1857.5,2548,1857.5,2548"
				transform="translate(-188.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_208"
				data-name="패스 208"
				d="M1178.5,2476.5s17.117,24.4,335.871,32.822,343.129,47.812,343.129,47.812"
				transform="translate(-188.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_162"
				data-name="패스 162"
				d="M1178.5,2476.5s19.563,21.636,383.854,29.1S1954.5,2548,1954.5,2548"
				transform="translate(-188.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_209"
				data-name="패스 209"
				d="M1178.5,2476.5s19.563,24.4,383.854,32.822,392.146,47.812,392.146,47.812"
				transform="translate(-188.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_163"
				data-name="패스 163"
				d="M1372,2476.5s-2.309,33.829-95.716,33.991S1178.5,2560,1178.5,2560"
				transform="translate(6 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_164"
				data-name="패스 164"
				d="M1178.5,2476.5s1.152,28.966,47.734,29.1S1275,2548,1275,2548"
				transform="translate(490.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_258"
				data-name="패스 258"
				d="M1178.5,2476.5s1.152,32.666,47.734,32.822S1275,2557.133,1275,2557.133"
				transform="translate(490.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			{/* <path
				id="패스_165"
				data-name="패스 165"
				d="M1178.5,2476.5s.006,28.966.247,29.1.253,42.4.253,42.4"
				transform="translate(586.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_261"
				data-name="패스 261"
				d="M1178.5,2476.5s.006,32.666.247,32.822.253,47.812.253,47.812"
				transform="translate(586.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/> */}
            			<path
				id="패스_165"
				data-name="패스 165"
				d="M1178.5,2476.5s.006,28.966.247,29.1.253,42.4.253,42.4"
				transform="translate(586.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_261"
				data-name="패스 261"
				d="M1178.5,2476.5s.006,32.666.247,32.822.253,47.812.253,47.812"
				transform="translate(586.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_166"
				data-name="패스 166"
				d="M1179.5,2476.5s-.012,28.966-.495,29.1-.505,42.4-.505,42.4"
				transform="translate(489.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_259"
				data-name="패스 259"
				d="M1179.5,2476.5s-.012,32.666-.495,32.822-.505,47.812-.505,47.812"
				transform="translate(489.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_167"
				data-name="패스 167"
				d="M1276,2476.5s-1.164,28.966-48.229,29.1S1178.5,2548,1178.5,2548"
				transform="translate(393 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_256"
				data-name="패스 256"
				d="M1276,2476.5s-1.164,32.666-48.229,32.822-49.271,47.812-49.271,47.812"
				transform="translate(393 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_168"
				data-name="패스 168"
				d="M1372.5,2476.5s-2.315,28.966-95.963,29.1S1178.5,2548,1178.5,2548"
				transform="translate(296.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_251"
				data-name="패스 251"
				d="M1372.5,2476.5s-2.315,32.666-95.963,32.822-98.037,47.812-98.037,47.812"
				transform="translate(296.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_169"
				data-name="패스 169"
				d="M1470,2476.5s-3.479,28.966-144.192,29.1S1178.5,2548,1178.5,2548"
				transform="translate(199 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_244"
				data-name="패스 244"
				d="M1470,2476.5s-3.479,32.666-144.192,32.822-147.308,47.812-147.308,47.812"
				transform="translate(199 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_170"
				data-name="패스 170"
				d="M1567.5,2476.5s-4.642,28.966-192.421,29.1S1178.5,2548,1178.5,2548"
				transform="translate(101.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_235"
				data-name="패스 235"
				d="M1567.5,2476.5s-4.642,32.666-192.421,32.822-196.579,47.812-196.579,47.812"
				transform="translate(101.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_171"
				data-name="패스 171"
				d="M1663,2476.5s-5.782,28.966-239.661,29.1S1178.5,2548,1178.5,2548"
				transform="translate(6 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_224"
				data-name="패스 224"
				d="M1663,2476.5s-5.782,32.666-239.661,32.822-244.839,47.812-244.839,47.812"
				transform="translate(6 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_172"
				data-name="패스 172"
				d="M1761,2476.5s-6.952,28.966-288.137,29.1S1178.5,2548,1178.5,2548"
				transform="translate(-92 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_210"
				data-name="패스 210"
				d="M1761,2476.5s-6.952,32.666-288.137,32.822-294.363,47.812-294.363,47.812"
				transform="translate(-92 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_173"
				data-name="패스 173"
				d="M1857.5,2476.5s-8.1,28.966-335.871,29.1S1178.5,2548,1178.5,2548"
				transform="translate(-188.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_211"
				data-name="패스 211"
				d="M1857.5,2476.5s-8.1,32.666-335.871,32.822-343.129,47.812-343.129,47.812"
				transform="translate(-188.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_174"
				data-name="패스 174"
				d="M1372.75,2476.5s-2.318,28.966-96.087,29.1S1178.5,2548,1178.5,2548"
				transform="translate(392.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_257"
				data-name="패스 257"
				d="M1372.75,2476.5s-2.318,32.666-96.087,32.822-98.164,47.812-98.164,47.812"
				transform="translate(392.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_175"
				data-name="패스 175"
				d="M1275.75,2476.5s-1.161,28.966-48.105,29.1S1178.5,2548,1178.5,2548"
				transform="translate(489.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_260"
				data-name="패스 260"
				d="M1275.75,2476.5s-1.161,32.666-48.105,32.822-49.145,47.812-49.145,47.812"
				transform="translate(489.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_176"
				data-name="패스 176"
				d="M1468.75,2476.5s-3.464,28.966-143.573,29.1S1178.5,2548,1178.5,2548"
				transform="translate(296.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_252"
				data-name="패스 252"
				d="M1468.75,2476.5s-3.464,32.666-143.573,32.822-146.677,47.812-146.677,47.812"
				transform="translate(296.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_177"
				data-name="패스 177"
				d="M1566.25,2476.5s-4.627,28.966-191.8,29.1S1178.5,2548,1178.5,2548"
				transform="translate(199 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_245"
				data-name="패스 245"
				d="M1566.25,2476.5s-4.627,32.666-191.8,32.822-195.948,47.812-195.948,47.812"
				transform="translate(199 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_178"
				data-name="패스 178"
				d="M1662.75,2476.5s-5.779,28.966-239.537,29.1S1178.5,2548,1178.5,2548"
				transform="translate(102.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_236"
				data-name="패스 236"
				d="M1662.75,2476.5s-5.779,32.666-239.537,32.822-244.713,47.812-244.713,47.812"
				transform="translate(102.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_179"
				data-name="패스 179"
				d="M1760.5,2476.5s-6.945,28.966-287.889,29.1S1178.5,2548,1178.5,2548"
				transform="translate(4.75 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_225"
				data-name="패스 225"
				d="M1760.5,2476.5s-6.945,32.666-287.889,32.822-294.111,47.812-294.111,47.812"
				transform="translate(4.75 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_180"
				data-name="패스 180"
				d="M1857.25,2476.5s-8.1,28.966-335.747,29.1-343,42.4-343,42.4"
				transform="translate(-92 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_212"
				data-name="패스 212"
				d="M1857.25,2476.5s-8.1,32.666-335.747,32.822-343,47.812-343,47.812"
				transform="translate(-92 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_181"
				data-name="패스 181"
				d="M1954.25,2476.5s-9.258,28.966-383.729,29.1S1178.5,2548,1178.5,2548"
				transform="translate(-189 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_213"
				data-name="패스 213"
				d="M1954.25,2476.5s-9.258,32.666-383.729,32.822-392.021,47.812-392.021, 47.812"
				transform="translate(-189 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="패스_56"
				data-name="패스 56"
				d="M1668.658,2723.428h38.783"
				transform="translate(29.074 139.072)"
				fill="none"
				stroke="#b8b8c6"
				stroke-linecap="round"
				stroke-width="2"
				stroke-dasharray="1 5"
			/>
		</>
	);
};

export default Background;
