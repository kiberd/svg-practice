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

            
            // ?????? firstLineElement??? translate x ?????? ?????? 
            const firstLineTranslateX = Number(firstLineElement.getAttribute("transform").split(' ')[0].slice(10, firstLineElement.length));
            // firstLineElement ??? path moveTo ??? x ?????? ?????? 
            const firstLineMoveToX = Number(firstLineElement.getAttribute("d").substring(0, 13).split(',')[0].slice(1));

            
            // start ????????? ?????? x
            const firstLineStartOffset = firstLineTranslateX + firstLineMoveToX;

            // end ????????? ?????? x
            let firstLineEndOffset;

            // Curve direction
            let curveDirection;
            const pathId = firstLineElement.getAttribute("id").split("_")[1];
            // 86, 140, 249 -> ????????? ???
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
                
                // ??? ?????? ?????????
                if (node.tagName === "rect" && node.getAttribute("data-name").split(' ')[0] === "?????????" && !node.getAttribute("rx") ){

                    const transformText = node.getAttribute("transform").split(' ')[0];
                    const rectangleTranslateX = Number(node.getAttribute("transform").split(' ')[0].slice(10, transformText.length));

                    // ????????? ????????????
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
                    // ????????? ????????????
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
                if (node.tagName === "rect" && node.getAttribute("data-name").split(' ')[0] === "?????????" && node.getAttribute("rx") ){

                    const transformText = node.getAttribute("transform").split(' ')[0];
                    const circleTranslateX = node.getAttribute("transform").split(' ')[0].slice(10, transformText.length);

                    // ????????? ????????????
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
                    
                    // ????????? ????????????
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


            // end ????????? ?????? x
            let secondLineEndOffset;

            // Curve direction
            let secondLineCurveDirection;
            const secondPathId = secondLineElement.getAttribute("id").split("_")[1];
            // 86, 140, 249 -> ????????? ???
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

                    // ????????? ????????????
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
                    
                    // ????????? ????????????
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


            // end ????????? ?????? x
            let thirdLineEndOffset;

            // Curve direction
            let thirdLineCurveDirection;
            const thirdPathId = thirdLineElement.getAttribute("id").split("_")[1];
            // 86, 140, 249 -> ????????? ???
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

                    // ????????? ????????????
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
                     
                     // ????????? ????????????
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
			{/* ?????? */}
			<rect
				id="?????????_59"
				data-name="????????? 59"
				width="25"
				height="25"
				transform="translate(1168 2425)"
				fill="#b8b8c6"
			/>
			<rect
				id="?????????_60"
				data-name="????????? 60"
				width="25"
				height="25"
				transform="translate(1268 2425)"
				fill="#b8b8c6"
			/>
			<rect
				id="?????????_102"
				data-name="????????? 102"
				width="25"
				height="25"
				transform="translate(1365 2425)"
				fill="#b8b8c6"
			/>
			<rect
				id="?????????_61"
				data-name="????????? 61"
				width="25"
				height="25"
				transform="translate(1462 2425)"
				fill="#b8b8c6"
			/>
			<rect
				id="?????????_62"
				data-name="????????? 62"
				width="25"
				height="25"
				transform="translate(1559 2425)"
				fill="#b8b8c6"
			/>

			{/* ?????? ????????? */}
			<text
				id="????????????"
				transform="translate(1156 2471)"
				fill="#b8b8c6"
				font-size="14"
				font-family="MalgunGothic, Malgun Gothic"
			>
				<tspan x="0" y="0">
					????????????
				</tspan>
			</text>
			<text
				id="????????????"
				transform="translate(1253 2471)"
				fill="#b8b8c6"
				font-size="14"
				font-family="MalgunGothic, Malgun Gothic"
			>
				<tspan x="0" y="0">
					????????????
				</tspan>
			</text>
			<text
				id="????????????"
				transform="translate(1350 2471)"
				fill="#b8b8c6"
				font-size="14"
				font-family="MalgunGothic, Malgun Gothic"
			>
				<tspan x="0" y="0">
					????????????
				</tspan>
			</text>
			<text
				id="????????????"
				transform="translate(1447 2471)"
				fill="#b8b8c6"
				font-size="14"
				font-family="MalgunGothic, Malgun Gothic"
			>
				<tspan x="0" y="0">
					????????????
				</tspan>
			</text>
			<text
				id="????????????"
				transform="translate(1544 2471)"
				fill="#b8b8c6"
				font-size="14"
				font-family="MalgunGothic, Malgun Gothic"
			>
				<tspan x="0" y="0">
					????????????
				</tspan>
			</text>

			{/* ???????????? */}
			<rect
				id="?????????_103"
				data-name="????????? 103"
				width="25"
				height="25"
				rx="12.5"
				transform="translate(977 2563.501)"
				fill="#b8b8c6"
			/>
			<rect
				id="?????????_104"
				data-name="????????? 104"
				width="25"
				height="25"
				rx="12.5"
				transform="translate(1074 2563.501)"
				fill="#b8b8c6"
			/>
			<rect
				id="?????????_105"
				data-name="????????? 105"
				width="25"
				height="25"
				rx="12.5"
				transform="translate(1171 2563.501)"
				fill="#b8b8c6"
			/>
			<rect
				id="?????????_106"
				data-name="????????? 106"
				width="25"
				height="25"
				rx="12.5"
				transform="translate(1268 2563.501)"
				fill="#b8b8c6"
			/>
			<rect
				id="?????????_107"
				data-name="????????? 107"
				width="25"
				height="25"
				rx="12.5"
				transform="translate(1365 2563.501)"
				fill="#b8b8c6"
			/>
			<rect
				id="?????????_108"
				data-name="????????? 108"
				width="25"
				height="25"
				rx="12.5"
				transform="translate(1462 2563.501)"
				fill="#b8b8c6"
			/>
			<rect
				id="?????????_109"
				data-name="????????? 109"
				width="25"
				height="25"
				rx="12.5"
				transform="translate(1559 2563.501)"
				fill="#b8b8c6"
			/>
			<rect
				id="?????????_110"
				data-name="????????? 110"
				width="25"
				height="25"
				rx="12.5"
				transform="translate(1656 2563.501)"
				fill="#b8b8c6"
			/>
			<rect
				id="?????????_111"
				data-name="????????? 111"
				width="25"
				height="25"
				rx="12.5"
				transform="translate(1753 2563.501)"
				fill="#b8b8c6"
			/>

			{/* ???????????? ????????? */}
			<text
				id="??????_?????????"
				data-name="???????????????"
				transform="translate(990 2609)"
				fill="#b8b8c6"
				font-size="14"
				font-family="MalgunGothic, Malgun Gothic"
			>
				<tspan x="-14" y="0">
					??????
				</tspan>
				<tspan y="0" font-family="SegoeUI, Segoe UI"></tspan>
				<tspan x="-21" y="16">
					?????????
				</tspan>
			</text>
			<text
				id="??????_?????????"
				data-name="???????????????"
				transform="translate(1087 2609)"
				fill="#b8b8c6"
				font-size="14"
				font-family="MalgunGothic, Malgun Gothic"
			>
				<tspan x="-14" y="0">
					??????
				</tspan>
				<tspan y="0" font-family="SegoeUI, Segoe UI"></tspan>
				<tspan x="-21" y="16">
					?????????
				</tspan>
			</text>
			<text
				id="??????_?????????"
				data-name="???????????????"
				transform="translate(1184 2609)"
				fill="#b8b8c6"
				font-size="14"
				font-family="MalgunGothic, Malgun Gothic"
			>
				<tspan x="-14" y="0">
					??????
				</tspan>
				<tspan y="0" font-family="SegoeUI, Segoe UI"></tspan>
				<tspan x="-21" y="16">
					?????????
				</tspan>
			</text>
			<text
				id="??????_?????????"
				data-name="???????????????"
				transform="translate(1281 2609)"
				fill="#b8b8c6"
				font-size="14"
				font-family="MalgunGothic, Malgun Gothic"
			>
				<tspan x="-14" y="0">
					??????
				</tspan>
				<tspan y="0" font-family="SegoeUI, Segoe UI"></tspan>
				<tspan x="-21" y="16">
					?????????
				</tspan>
			</text>
			<text
				id="??????_?????????"
				data-name="???????????????"
				transform="translate(1378 2609)"
				fill="#b8b8c6"
				font-size="14"
				font-family="MalgunGothic, Malgun Gothic"
			>
				<tspan x="-14" y="0">
					??????
				</tspan>
				<tspan y="0" font-family="SegoeUI, Segoe UI"></tspan>
				<tspan x="-21" y="16">
					?????????
				</tspan>
			</text>
			<text
				id="??????_?????????"
				data-name="???????????????"
				transform="translate(1474 2609)"
				fill="#b8b8c6"
				font-size="14"
				font-family="MalgunGothic, Malgun Gothic"
			>
				<tspan x="-14" y="0">
					??????
				</tspan>
				<tspan y="0" font-family="SegoeUI, Segoe UI"></tspan>
				<tspan x="-21" y="16">
					?????????
				</tspan>
			</text>
			<text
				id="??????_?????????"
				data-name="???????????????"
				transform="translate(1571 2609)"
				fill="#b8b8c6"
				font-size="14"
				font-family="MalgunGothic, Malgun Gothic"
			>
				<tspan x="-14" y="0">
					??????
				</tspan>
				<tspan y="0" font-family="SegoeUI, Segoe UI"></tspan>
				<tspan x="-21" y="16">
					?????????
				</tspan>
			</text>
			<text
				id="??????_?????????"
				data-name="???????????????"
				transform="translate(1668 2609)"
				fill="#b8b8c6"
				font-size="14"
				font-family="MalgunGothic, Malgun Gothic"
			>
				<tspan x="-14" y="0">
					??????
				</tspan>
				<tspan y="0" font-family="SegoeUI, Segoe UI"></tspan>
				<tspan x="-21" y="16">
					?????????
				</tspan>
			</text>
			<text
				id="??????_?????????"
				data-name="???????????????"
				transform="translate(1765 2609)"
				fill="#b8b8c6"
				font-size="14"
				font-family="MalgunGothic, Malgun Gothic"
			>
				<tspan x="-14" y="0">
					??????
				</tspan>
				<tspan y="0" font-family="SegoeUI, Segoe UI"></tspan>
				<tspan x="-21" y="16">
					?????????
				</tspan>
			</text>

			{/* ?????? 3??? */}
			<g
				id="??????_316"
				data-name="?????? 316"
				transform="translate(976 2702.626)"
			>
				<g
					id="??????_315"
					data-name="?????? 315"
					transform="translate(0 0)"
					clip-path="url(#clip-path)"
				>
					<path
						id="??????_540"
						data-name="?????? 540"
						d="M28.05,8.72c0,1-.01,1.993,0,2.99a1.387,1.387,0,0,1-.692,1.283c-1.82,1.177-3.624,2.377-5.442,3.557a.538.538,0,0,0-.288.521c.013,1.774,0,3.548.012,5.323A1.329,1.329,0,0,1,21,23.6q-3.142,2.066-6.28,4.138a1.3,1.3,0,0,1-1.586-.023q-3-2.049-6-4.079a1.439,1.439,0,0,1-.689-1.32c.021-1.719,0-3.439.013-5.158a.524.524,0,0,0-.266-.5c-1.82-1.217-3.626-2.454-5.45-3.664A1.5,1.5,0,0,1,0,11.6c.024-1.993.016-3.987,0-5.98A1.326,1.326,0,0,1,.651,4.418Q3.795,2.355,6.93.278A1.251,1.251,0,0,1,8.476.293c1.732,1.19,3.476,2.362,5.2,3.559a.512.512,0,0,0,.684-.005C16.128,2.667,17.9,1.5,19.675.333a1.242,1.242,0,0,1,1.709.015c1.975,1.34,3.944,2.688,5.925,4.019a1.525,1.525,0,0,1,.746,1.4c-.02.985-.005,1.972-.005,2.957M7.668,2.609,3.279,5.494c.1.075.171.128.242.176,1.242.838,2.488,1.671,3.724,2.519a.39.39,0,0,0,.519,0c1.281-.858,2.572-1.7,3.859-2.552.079-.052.152-.112.25-.185l-4.2-2.848M24.757,5.465c-1.36-.915-2.679-1.8-3.986-2.692a.391.391,0,0,0-.52.01c-1.274.85-2.555,1.689-3.833,2.532-.085.056-.164.121-.264.2l4.2,2.845,4.4-2.891M13.914,19.038l4.365-2.859-4.234-2.872L9.7,16.179l4.218,2.858m5.357-.691c-.092.047-.131.063-.166.086-1.244.816-2.49,1.628-3.726,2.456a.514.514,0,0,0-.175.372c-.014,1.018-.008,2.036-.007,3.054,0,.091.012.182.021.313,1.334-.877,2.632-1.727,3.924-2.585a.329.329,0,0,0,.124-.235c.008-1.136.005-2.273.005-3.461m-10.517.008c0,1.164.007,2.248-.006,3.331a.467.467,0,0,0,.245.446c1.19.8,2.371,1.61,3.556,2.416.077.052.161.1.279.165,0-1.18.005-2.316-.01-3.452,0-.1-.125-.218-.221-.284-1.063-.733-2.131-1.457-3.2-2.183l-.645-.44m12.872-4.467c.084-.042.134-.061.177-.089,1.23-.8,2.463-1.592,3.685-2.4a.512.512,0,0,0,.184-.369c.015-1.018.009-2.037.007-3.055a2.549,2.549,0,0,0-.033-.276c-.125.075-.218.128-.307.186-1.153.756-2.3,1.518-3.461,2.266a.516.516,0,0,0-.276.5c.014.963.005,1.927.006,2.891,0,.1.01.209.017.349M12.859,7.694a1.636,1.636,0,0,0-.169.079c-1.244.815-2.49,1.627-3.724,2.455a.52.52,0,0,0-.17.377c-.014,1-.008,1.991-.006,2.986,0,.089.018.179.033.314,1.331-.875,2.619-1.72,3.9-2.572a.336.336,0,0,0,.13-.237c.008-1.115.006-2.229.006-3.4m-10.48.021a1.667,1.667,0,0,0-.032.206c0,1.04-.008,2.081.008,3.121a.525.525,0,0,0,.216.355c1.188.823,2.384,1.632,3.579,2.444.068.046.144.081.226.127a.512.512,0,0,0,.036-.115c0-1.084.007-2.168,0-3.252a.334.334,0,0,0-.127-.237C5,9.487,3.714,8.619,2.379,7.716M19.271,13.96c0-1.124-.006-2.174.005-3.223a.468.468,0,0,0-.236-.451c-1.2-.8-2.393-1.615-3.588-2.423-.069-.046-.141-.087-.256-.157,0,1.107.007,2.164-.006,3.221a.468.468,0,0,0,.249.446c.974.648,1.94,1.308,2.909,1.964l.923.624"
						transform="translate(0 0)"
						fill="#b8b8c6"
					/>
				</g>
			</g>
			<g
				id="??????_327"
				data-name="?????? 327"
				transform="translate(1073 2702.626)"
			>
				<g
					id="??????_315-4"
					data-name="?????? 315"
					transform="translate(0 0)"
					clip-path="url(#clip-path)"
				>
					<path
						id="??????_540-4"
						data-name="?????? 540"
						d="M28.05,8.72c0,1-.01,1.993,0,2.99a1.387,1.387,0,0,1-.692,1.283c-1.82,1.177-3.624,2.377-5.442,3.557a.538.538,0,0,0-.288.521c.013,1.774,0,3.548.012,5.323A1.329,1.329,0,0,1,21,23.6q-3.142,2.066-6.28,4.138a1.3,1.3,0,0,1-1.586-.023q-3-2.049-6-4.079a1.439,1.439,0,0,1-.689-1.32c.021-1.719,0-3.439.013-5.158a.524.524,0,0,0-.266-.5c-1.82-1.217-3.626-2.454-5.45-3.664A1.5,1.5,0,0,1,0,11.6c.024-1.993.016-3.987,0-5.98A1.326,1.326,0,0,1,.651,4.418Q3.795,2.355,6.93.278A1.251,1.251,0,0,1,8.476.293c1.732,1.19,3.476,2.362,5.2,3.559a.512.512,0,0,0,.684-.005C16.128,2.667,17.9,1.5,19.675.333a1.242,1.242,0,0,1,1.709.015c1.975,1.34,3.944,2.688,5.925,4.019a1.525,1.525,0,0,1,.746,1.4c-.02.985-.005,1.972-.005,2.957M7.668,2.609,3.279,5.494c.1.075.171.128.242.176,1.242.838,2.488,1.671,3.724,2.519a.39.39,0,0,0,.519,0c1.281-.858,2.572-1.7,3.859-2.552.079-.052.152-.112.25-.185l-4.2-2.848M24.757,5.465c-1.36-.915-2.679-1.8-3.986-2.692a.391.391,0,0,0-.52.01c-1.274.85-2.555,1.689-3.833,2.532-.085.056-.164.121-.264.2l4.2,2.845,4.4-2.891M13.914,19.038l4.365-2.859-4.234-2.872L9.7,16.179l4.218,2.858m5.357-.691c-.092.047-.131.063-.166.086-1.244.816-2.49,1.628-3.726,2.456a.514.514,0,0,0-.175.372c-.014,1.018-.008,2.036-.007,3.054,0,.091.012.182.021.313,1.334-.877,2.632-1.727,3.924-2.585a.329.329,0,0,0,.124-.235c.008-1.136.005-2.273.005-3.461m-10.517.008c0,1.164.007,2.248-.006,3.331a.467.467,0,0,0,.245.446c1.19.8,2.371,1.61,3.556,2.416.077.052.161.1.279.165,0-1.18.005-2.316-.01-3.452,0-.1-.125-.218-.221-.284-1.063-.733-2.131-1.457-3.2-2.183l-.645-.44m12.872-4.467c.084-.042.134-.061.177-.089,1.23-.8,2.463-1.592,3.685-2.4a.512.512,0,0,0,.184-.369c.015-1.018.009-2.037.007-3.055a2.549,2.549,0,0,0-.033-.276c-.125.075-.218.128-.307.186-1.153.756-2.3,1.518-3.461,2.266a.516.516,0,0,0-.276.5c.014.963.005,1.927.006,2.891,0,.1.01.209.017.349M12.859,7.694a1.636,1.636,0,0,0-.169.079c-1.244.815-2.49,1.627-3.724,2.455a.52.52,0,0,0-.17.377c-.014,1-.008,1.991-.006,2.986,0,.089.018.179.033.314,1.331-.875,2.619-1.72,3.9-2.572a.336.336,0,0,0,.13-.237c.008-1.115.006-2.229.006-3.4m-10.48.021a1.667,1.667,0,0,0-.032.206c0,1.04-.008,2.081.008,3.121a.525.525,0,0,0,.216.355c1.188.823,2.384,1.632,3.579,2.444.068.046.144.081.226.127a.512.512,0,0,0,.036-.115c0-1.084.007-2.168,0-3.252a.334.334,0,0,0-.127-.237C5,9.487,3.714,8.619,2.379,7.716M19.271,13.96c0-1.124-.006-2.174.005-3.223a.468.468,0,0,0-.236-.451c-1.2-.8-2.393-1.615-3.588-2.423-.069-.046-.141-.087-.256-.157,0,1.107.007,2.164-.006,3.221a.468.468,0,0,0,.249.446c.974.648,1.94,1.308,2.909,1.964l.923.624"
						transform="translate(0 0)"
						fill="#b8b8c6"
					/>
				</g>
			</g>
			<g
				id="??????_329"
				data-name="?????? 329"
				transform="translate(1170 2702.626)"
			>
				<g
					id="??????_315-2"
					data-name="?????? 315"
					transform="translate(0 0)"
					clip-path="url(#clip-path)"
				>
					<path
						id="??????_540-2"
						data-name="?????? 540"
						d="M28.05,8.72c0,1-.01,1.993,0,2.99a1.387,1.387,0,0,1-.692,1.283c-1.82,1.177-3.624,2.377-5.442,3.557a.538.538,0,0,0-.288.521c.013,1.774,0,3.548.012,5.323A1.329,1.329,0,0,1,21,23.6q-3.142,2.066-6.28,4.138a1.3,1.3,0,0,1-1.586-.023q-3-2.049-6-4.079a1.439,1.439,0,0,1-.689-1.32c.021-1.719,0-3.439.013-5.158a.524.524,0,0,0-.266-.5c-1.82-1.217-3.626-2.454-5.45-3.664A1.5,1.5,0,0,1,0,11.6c.024-1.993.016-3.987,0-5.98A1.326,1.326,0,0,1,.651,4.418Q3.795,2.355,6.93.278A1.251,1.251,0,0,1,8.476.293c1.732,1.19,3.476,2.362,5.2,3.559a.512.512,0,0,0,.684-.005C16.128,2.667,17.9,1.5,19.675.333a1.242,1.242,0,0,1,1.709.015c1.975,1.34,3.944,2.688,5.925,4.019a1.525,1.525,0,0,1,.746,1.4c-.02.985-.005,1.972-.005,2.957M7.668,2.609,3.279,5.494c.1.075.171.128.242.176,1.242.838,2.488,1.671,3.724,2.519a.39.39,0,0,0,.519,0c1.281-.858,2.572-1.7,3.859-2.552.079-.052.152-.112.25-.185l-4.2-2.848M24.757,5.465c-1.36-.915-2.679-1.8-3.986-2.692a.391.391,0,0,0-.52.01c-1.274.85-2.555,1.689-3.833,2.532-.085.056-.164.121-.264.2l4.2,2.845,4.4-2.891M13.914,19.038l4.365-2.859-4.234-2.872L9.7,16.179l4.218,2.858m5.357-.691c-.092.047-.131.063-.166.086-1.244.816-2.49,1.628-3.726,2.456a.514.514,0,0,0-.175.372c-.014,1.018-.008,2.036-.007,3.054,0,.091.012.182.021.313,1.334-.877,2.632-1.727,3.924-2.585a.329.329,0,0,0,.124-.235c.008-1.136.005-2.273.005-3.461m-10.517.008c0,1.164.007,2.248-.006,3.331a.467.467,0,0,0,.245.446c1.19.8,2.371,1.61,3.556,2.416.077.052.161.1.279.165,0-1.18.005-2.316-.01-3.452,0-.1-.125-.218-.221-.284-1.063-.733-2.131-1.457-3.2-2.183l-.645-.44m12.872-4.467c.084-.042.134-.061.177-.089,1.23-.8,2.463-1.592,3.685-2.4a.512.512,0,0,0,.184-.369c.015-1.018.009-2.037.007-3.055a2.549,2.549,0,0,0-.033-.276c-.125.075-.218.128-.307.186-1.153.756-2.3,1.518-3.461,2.266a.516.516,0,0,0-.276.5c.014.963.005,1.927.006,2.891,0,.1.01.209.017.349M12.859,7.694a1.636,1.636,0,0,0-.169.079c-1.244.815-2.49,1.627-3.724,2.455a.52.52,0,0,0-.17.377c-.014,1-.008,1.991-.006,2.986,0,.089.018.179.033.314,1.331-.875,2.619-1.72,3.9-2.572a.336.336,0,0,0,.13-.237c.008-1.115.006-2.229.006-3.4m-10.48.021a1.667,1.667,0,0,0-.032.206c0,1.04-.008,2.081.008,3.121a.525.525,0,0,0,.216.355c1.188.823,2.384,1.632,3.579,2.444.068.046.144.081.226.127a.512.512,0,0,0,.036-.115c0-1.084.007-2.168,0-3.252a.334.334,0,0,0-.127-.237C5,9.487,3.714,8.619,2.379,7.716M19.271,13.96c0-1.124-.006-2.174.005-3.223a.468.468,0,0,0-.236-.451c-1.2-.8-2.393-1.615-3.588-2.423-.069-.046-.141-.087-.256-.157,0,1.107.007,2.164-.006,3.221a.468.468,0,0,0,.249.446c.974.648,1.94,1.308,2.909,1.964l.923.624"
						transform="translate(0 0)"
						fill="#b8b8c6"
					/>
				</g>
			</g>
			<g
				id="??????_328"
				data-name="?????? 328"
				transform="translate(1267 2702.626)"
			>
				<g
					id="??????_315-7"
					data-name="?????? 315"
					transform="translate(0 0)"
					clip-path="url(#clip-path)"
				>
					<path
						id="??????_540-7"
						data-name="?????? 540"
						d="M28.05,8.72c0,1-.01,1.993,0,2.99a1.387,1.387,0,0,1-.692,1.283c-1.82,1.177-3.624,2.377-5.442,3.557a.538.538,0,0,0-.288.521c.013,1.774,0,3.548.012,5.323A1.329,1.329,0,0,1,21,23.6q-3.142,2.066-6.28,4.138a1.3,1.3,0,0,1-1.586-.023q-3-2.049-6-4.079a1.439,1.439,0,0,1-.689-1.32c.021-1.719,0-3.439.013-5.158a.524.524,0,0,0-.266-.5c-1.82-1.217-3.626-2.454-5.45-3.664A1.5,1.5,0,0,1,0,11.6c.024-1.993.016-3.987,0-5.98A1.326,1.326,0,0,1,.651,4.418Q3.795,2.355,6.93.278A1.251,1.251,0,0,1,8.476.293c1.732,1.19,3.476,2.362,5.2,3.559a.512.512,0,0,0,.684-.005C16.128,2.667,17.9,1.5,19.675.333a1.242,1.242,0,0,1,1.709.015c1.975,1.34,3.944,2.688,5.925,4.019a1.525,1.525,0,0,1,.746,1.4c-.02.985-.005,1.972-.005,2.957M7.668,2.609,3.279,5.494c.1.075.171.128.242.176,1.242.838,2.488,1.671,3.724,2.519a.39.39,0,0,0,.519,0c1.281-.858,2.572-1.7,3.859-2.552.079-.052.152-.112.25-.185l-4.2-2.848M24.757,5.465c-1.36-.915-2.679-1.8-3.986-2.692a.391.391,0,0,0-.52.01c-1.274.85-2.555,1.689-3.833,2.532-.085.056-.164.121-.264.2l4.2,2.845,4.4-2.891M13.914,19.038l4.365-2.859-4.234-2.872L9.7,16.179l4.218,2.858m5.357-.691c-.092.047-.131.063-.166.086-1.244.816-2.49,1.628-3.726,2.456a.514.514,0,0,0-.175.372c-.014,1.018-.008,2.036-.007,3.054,0,.091.012.182.021.313,1.334-.877,2.632-1.727,3.924-2.585a.329.329,0,0,0,.124-.235c.008-1.136.005-2.273.005-3.461m-10.517.008c0,1.164.007,2.248-.006,3.331a.467.467,0,0,0,.245.446c1.19.8,2.371,1.61,3.556,2.416.077.052.161.1.279.165,0-1.18.005-2.316-.01-3.452,0-.1-.125-.218-.221-.284-1.063-.733-2.131-1.457-3.2-2.183l-.645-.44m12.872-4.467c.084-.042.134-.061.177-.089,1.23-.8,2.463-1.592,3.685-2.4a.512.512,0,0,0,.184-.369c.015-1.018.009-2.037.007-3.055a2.549,2.549,0,0,0-.033-.276c-.125.075-.218.128-.307.186-1.153.756-2.3,1.518-3.461,2.266a.516.516,0,0,0-.276.5c.014.963.005,1.927.006,2.891,0,.1.01.209.017.349M12.859,7.694a1.636,1.636,0,0,0-.169.079c-1.244.815-2.49,1.627-3.724,2.455a.52.52,0,0,0-.17.377c-.014,1-.008,1.991-.006,2.986,0,.089.018.179.033.314,1.331-.875,2.619-1.72,3.9-2.572a.336.336,0,0,0,.13-.237c.008-1.115.006-2.229.006-3.4m-10.48.021a1.667,1.667,0,0,0-.032.206c0,1.04-.008,2.081.008,3.121a.525.525,0,0,0,.216.355c1.188.823,2.384,1.632,3.579,2.444.068.046.144.081.226.127a.512.512,0,0,0,.036-.115c0-1.084.007-2.168,0-3.252a.334.334,0,0,0-.127-.237C5,9.487,3.714,8.619,2.379,7.716M19.271,13.96c0-1.124-.006-2.174.005-3.223a.468.468,0,0,0-.236-.451c-1.2-.8-2.393-1.615-3.588-2.423-.069-.046-.141-.087-.256-.157,0,1.107.007,2.164-.006,3.221a.468.468,0,0,0,.249.446c.974.648,1.94,1.308,2.909,1.964l.923.624"
						transform="translate(0 0)"
						fill="#b8b8c6"
					/>
				</g>
			</g>
			<g
				id="??????_334"
				data-name="?????? 334"
				transform="translate(1364 2702.626)"
			>
				<g
					id="??????_315-6"
					data-name="?????? 315"
					transform="translate(0 0)"
					clip-path="url(#clip-path-6)"
				>
					<path
						id="??????_540-6"
						data-name="?????? 540"
						d="M28.05,8.72c0,1-.01,1.993,0,2.99a1.387,1.387,0,0,1-.692,1.283c-1.82,1.177-3.624,2.377-5.442,3.557a.538.538,0,0,0-.288.521c.013,1.774,0,3.548.012,5.323A1.329,1.329,0,0,1,21,23.6q-3.142,2.066-6.28,4.138a1.3,1.3,0,0,1-1.586-.023q-3-2.049-6-4.079a1.439,1.439,0,0,1-.689-1.32c.021-1.719,0-3.439.013-5.158a.524.524,0,0,0-.266-.5c-1.82-1.217-3.626-2.454-5.45-3.664A1.5,1.5,0,0,1,0,11.6c.024-1.993.016-3.987,0-5.98A1.326,1.326,0,0,1,.651,4.418Q3.795,2.355,6.93.278A1.251,1.251,0,0,1,8.476.293c1.732,1.19,3.476,2.362,5.2,3.559a.512.512,0,0,0,.684-.005C16.128,2.667,17.9,1.5,19.675.333a1.242,1.242,0,0,1,1.709.015c1.975,1.34,3.944,2.688,5.925,4.019a1.525,1.525,0,0,1,.746,1.4c-.02.985-.005,1.972-.005,2.957M7.668,2.609,3.279,5.494c.1.075.171.128.242.176,1.242.838,2.488,1.671,3.724,2.519a.39.39,0,0,0,.519,0c1.281-.858,2.572-1.7,3.859-2.552.079-.052.152-.112.25-.185l-4.2-2.848M24.757,5.465c-1.36-.915-2.679-1.8-3.986-2.692a.391.391,0,0,0-.52.01c-1.274.85-2.555,1.689-3.833,2.532-.085.056-.164.121-.264.2l4.2,2.845,4.4-2.891M13.914,19.038l4.365-2.859-4.234-2.872L9.7,16.179l4.218,2.858m5.357-.691c-.092.047-.131.063-.166.086-1.244.816-2.49,1.628-3.726,2.456a.514.514,0,0,0-.175.372c-.014,1.018-.008,2.036-.007,3.054,0,.091.012.182.021.313,1.334-.877,2.632-1.727,3.924-2.585a.329.329,0,0,0,.124-.235c.008-1.136.005-2.273.005-3.461m-10.517.008c0,1.164.007,2.248-.006,3.331a.467.467,0,0,0,.245.446c1.19.8,2.371,1.61,3.556,2.416.077.052.161.1.279.165,0-1.18.005-2.316-.01-3.452,0-.1-.125-.218-.221-.284-1.063-.733-2.131-1.457-3.2-2.183l-.645-.44m12.872-4.467c.084-.042.134-.061.177-.089,1.23-.8,2.463-1.592,3.685-2.4a.512.512,0,0,0,.184-.369c.015-1.018.009-2.037.007-3.055a2.549,2.549,0,0,0-.033-.276c-.125.075-.218.128-.307.186-1.153.756-2.3,1.518-3.461,2.266a.516.516,0,0,0-.276.5c.014.963.005,1.927.006,2.891,0,.1.01.209.017.349M12.859,7.694a1.636,1.636,0,0,0-.169.079c-1.244.815-2.49,1.627-3.724,2.455a.52.52,0,0,0-.17.377c-.014,1-.008,1.991-.006,2.986,0,.089.018.179.033.314,1.331-.875,2.619-1.72,3.9-2.572a.336.336,0,0,0,.13-.237c.008-1.115.006-2.229.006-3.4m-10.48.021a1.667,1.667,0,0,0-.032.206c0,1.04-.008,2.081.008,3.121a.525.525,0,0,0,.216.355c1.188.823,2.384,1.632,3.579,2.444.068.046.144.081.226.127a.512.512,0,0,0,.036-.115c0-1.084.007-2.168,0-3.252a.334.334,0,0,0-.127-.237C5,9.487,3.714,8.619,2.379,7.716M19.271,13.96c0-1.124-.006-2.174.005-3.223a.468.468,0,0,0-.236-.451c-1.2-.8-2.393-1.615-3.588-2.423-.069-.046-.141-.087-.256-.157,0,1.107.007,2.164-.006,3.221a.468.468,0,0,0,.249.446c.974.648,1.94,1.308,2.909,1.964l.923.624"
						transform="translate(0 0)"
						fill="#b8b8c6"
					/>
				</g>
			</g>
			<g
				id="??????_332"
				data-name="?????? 332"
				transform="translate(1460 2702.626)"
			>
				<g
					id="??????_315-5"
					data-name="?????? 315"
					transform="translate(0 0)"
					clip-path="url(#clip-path)"
				>
					<path
						id="??????_540-5"
						data-name="?????? 540"
						d="M28.05,8.72c0,1-.01,1.993,0,2.99a1.387,1.387,0,0,1-.692,1.283c-1.82,1.177-3.624,2.377-5.442,3.557a.538.538,0,0,0-.288.521c.013,1.774,0,3.548.012,5.323A1.329,1.329,0,0,1,21,23.6q-3.142,2.066-6.28,4.138a1.3,1.3,0,0,1-1.586-.023q-3-2.049-6-4.079a1.439,1.439,0,0,1-.689-1.32c.021-1.719,0-3.439.013-5.158a.524.524,0,0,0-.266-.5c-1.82-1.217-3.626-2.454-5.45-3.664A1.5,1.5,0,0,1,0,11.6c.024-1.993.016-3.987,0-5.98A1.326,1.326,0,0,1,.651,4.418Q3.795,2.355,6.93.278A1.251,1.251,0,0,1,8.476.293c1.732,1.19,3.476,2.362,5.2,3.559a.512.512,0,0,0,.684-.005C16.128,2.667,17.9,1.5,19.675.333a1.242,1.242,0,0,1,1.709.015c1.975,1.34,3.944,2.688,5.925,4.019a1.525,1.525,0,0,1,.746,1.4c-.02.985-.005,1.972-.005,2.957M7.668,2.609,3.279,5.494c.1.075.171.128.242.176,1.242.838,2.488,1.671,3.724,2.519a.39.39,0,0,0,.519,0c1.281-.858,2.572-1.7,3.859-2.552.079-.052.152-.112.25-.185l-4.2-2.848M24.757,5.465c-1.36-.915-2.679-1.8-3.986-2.692a.391.391,0,0,0-.52.01c-1.274.85-2.555,1.689-3.833,2.532-.085.056-.164.121-.264.2l4.2,2.845,4.4-2.891M13.914,19.038l4.365-2.859-4.234-2.872L9.7,16.179l4.218,2.858m5.357-.691c-.092.047-.131.063-.166.086-1.244.816-2.49,1.628-3.726,2.456a.514.514,0,0,0-.175.372c-.014,1.018-.008,2.036-.007,3.054,0,.091.012.182.021.313,1.334-.877,2.632-1.727,3.924-2.585a.329.329,0,0,0,.124-.235c.008-1.136.005-2.273.005-3.461m-10.517.008c0,1.164.007,2.248-.006,3.331a.467.467,0,0,0,.245.446c1.19.8,2.371,1.61,3.556,2.416.077.052.161.1.279.165,0-1.18.005-2.316-.01-3.452,0-.1-.125-.218-.221-.284-1.063-.733-2.131-1.457-3.2-2.183l-.645-.44m12.872-4.467c.084-.042.134-.061.177-.089,1.23-.8,2.463-1.592,3.685-2.4a.512.512,0,0,0,.184-.369c.015-1.018.009-2.037.007-3.055a2.549,2.549,0,0,0-.033-.276c-.125.075-.218.128-.307.186-1.153.756-2.3,1.518-3.461,2.266a.516.516,0,0,0-.276.5c.014.963.005,1.927.006,2.891,0,.1.01.209.017.349M12.859,7.694a1.636,1.636,0,0,0-.169.079c-1.244.815-2.49,1.627-3.724,2.455a.52.52,0,0,0-.17.377c-.014,1-.008,1.991-.006,2.986,0,.089.018.179.033.314,1.331-.875,2.619-1.72,3.9-2.572a.336.336,0,0,0,.13-.237c.008-1.115.006-2.229.006-3.4m-10.48.021a1.667,1.667,0,0,0-.032.206c0,1.04-.008,2.081.008,3.121a.525.525,0,0,0,.216.355c1.188.823,2.384,1.632,3.579,2.444.068.046.144.081.226.127a.512.512,0,0,0,.036-.115c0-1.084.007-2.168,0-3.252a.334.334,0,0,0-.127-.237C5,9.487,3.714,8.619,2.379,7.716M19.271,13.96c0-1.124-.006-2.174.005-3.223a.468.468,0,0,0-.236-.451c-1.2-.8-2.393-1.615-3.588-2.423-.069-.046-.141-.087-.256-.157,0,1.107.007,2.164-.006,3.221a.468.468,0,0,0,.249.446c.974.648,1.94,1.308,2.909,1.964l.923.624"
						transform="translate(0 0)"
						fill="#b8b8c6"
					/>
				</g>
			</g>
			<g
				id="??????_331"
				data-name="?????? 331"
				transform="translate(1557 2702.626)"
			>
				<g
					id="??????_315-3"
					data-name="?????? 315"
					transform="translate(0 0)"
					clip-path="url(#clip-path)"
				>
					<path
						id="??????_540-3"
						data-name="?????? 540"
						d="M28.05,8.72c0,1-.01,1.993,0,2.99a1.387,1.387,0,0,1-.692,1.283c-1.82,1.177-3.624,2.377-5.442,3.557a.538.538,0,0,0-.288.521c.013,1.774,0,3.548.012,5.323A1.329,1.329,0,0,1,21,23.6q-3.142,2.066-6.28,4.138a1.3,1.3,0,0,1-1.586-.023q-3-2.049-6-4.079a1.439,1.439,0,0,1-.689-1.32c.021-1.719,0-3.439.013-5.158a.524.524,0,0,0-.266-.5c-1.82-1.217-3.626-2.454-5.45-3.664A1.5,1.5,0,0,1,0,11.6c.024-1.993.016-3.987,0-5.98A1.326,1.326,0,0,1,.651,4.418Q3.795,2.355,6.93.278A1.251,1.251,0,0,1,8.476.293c1.732,1.19,3.476,2.362,5.2,3.559a.512.512,0,0,0,.684-.005C16.128,2.667,17.9,1.5,19.675.333a1.242,1.242,0,0,1,1.709.015c1.975,1.34,3.944,2.688,5.925,4.019a1.525,1.525,0,0,1,.746,1.4c-.02.985-.005,1.972-.005,2.957M7.668,2.609,3.279,5.494c.1.075.171.128.242.176,1.242.838,2.488,1.671,3.724,2.519a.39.39,0,0,0,.519,0c1.281-.858,2.572-1.7,3.859-2.552.079-.052.152-.112.25-.185l-4.2-2.848M24.757,5.465c-1.36-.915-2.679-1.8-3.986-2.692a.391.391,0,0,0-.52.01c-1.274.85-2.555,1.689-3.833,2.532-.085.056-.164.121-.264.2l4.2,2.845,4.4-2.891M13.914,19.038l4.365-2.859-4.234-2.872L9.7,16.179l4.218,2.858m5.357-.691c-.092.047-.131.063-.166.086-1.244.816-2.49,1.628-3.726,2.456a.514.514,0,0,0-.175.372c-.014,1.018-.008,2.036-.007,3.054,0,.091.012.182.021.313,1.334-.877,2.632-1.727,3.924-2.585a.329.329,0,0,0,.124-.235c.008-1.136.005-2.273.005-3.461m-10.517.008c0,1.164.007,2.248-.006,3.331a.467.467,0,0,0,.245.446c1.19.8,2.371,1.61,3.556,2.416.077.052.161.1.279.165,0-1.18.005-2.316-.01-3.452,0-.1-.125-.218-.221-.284-1.063-.733-2.131-1.457-3.2-2.183l-.645-.44m12.872-4.467c.084-.042.134-.061.177-.089,1.23-.8,2.463-1.592,3.685-2.4a.512.512,0,0,0,.184-.369c.015-1.018.009-2.037.007-3.055a2.549,2.549,0,0,0-.033-.276c-.125.075-.218.128-.307.186-1.153.756-2.3,1.518-3.461,2.266a.516.516,0,0,0-.276.5c.014.963.005,1.927.006,2.891,0,.1.01.209.017.349M12.859,7.694a1.636,1.636,0,0,0-.169.079c-1.244.815-2.49,1.627-3.724,2.455a.52.52,0,0,0-.17.377c-.014,1-.008,1.991-.006,2.986,0,.089.018.179.033.314,1.331-.875,2.619-1.72,3.9-2.572a.336.336,0,0,0,.13-.237c.008-1.115.006-2.229.006-3.4m-10.48.021a1.667,1.667,0,0,0-.032.206c0,1.04-.008,2.081.008,3.121a.525.525,0,0,0,.216.355c1.188.823,2.384,1.632,3.579,2.444.068.046.144.081.226.127a.512.512,0,0,0,.036-.115c0-1.084.007-2.168,0-3.252a.334.334,0,0,0-.127-.237C5,9.487,3.714,8.619,2.379,7.716M19.271,13.96c0-1.124-.006-2.174.005-3.223a.468.468,0,0,0-.236-.451c-1.2-.8-2.393-1.615-3.588-2.423-.069-.046-.141-.087-.256-.157,0,1.107.007,2.164-.006,3.221a.468.468,0,0,0,.249.446c.974.648,1.94,1.308,2.909,1.964l.923.624"
						transform="translate(0 0)"
						fill="#b8b8c6"
					/>
				</g>
			</g>

			<g
				id="??????_330"
				data-name="?????? 330"
				transform="translate(1654 2702.626)"
			>
				<g
					id="??????_315-8"
					data-name="?????? 315"
					transform="translate(0 0)"
					clip-path="url(#clip-path)"
				>
					<path
						id="??????_540-8"
						data-name="?????? 540"
						d="M28.05,8.72c0,1-.01,1.993,0,2.99a1.387,1.387,0,0,1-.692,1.283c-1.82,1.177-3.624,2.377-5.442,3.557a.538.538,0,0,0-.288.521c.013,1.774,0,3.548.012,5.323A1.329,1.329,0,0,1,21,23.6q-3.142,2.066-6.28,4.138a1.3,1.3,0,0,1-1.586-.023q-3-2.049-6-4.079a1.439,1.439,0,0,1-.689-1.32c.021-1.719,0-3.439.013-5.158a.524.524,0,0,0-.266-.5c-1.82-1.217-3.626-2.454-5.45-3.664A1.5,1.5,0,0,1,0,11.6c.024-1.993.016-3.987,0-5.98A1.326,1.326,0,0,1,.651,4.418Q3.795,2.355,6.93.278A1.251,1.251,0,0,1,8.476.293c1.732,1.19,3.476,2.362,5.2,3.559a.512.512,0,0,0,.684-.005C16.128,2.667,17.9,1.5,19.675.333a1.242,1.242,0,0,1,1.709.015c1.975,1.34,3.944,2.688,5.925,4.019a1.525,1.525,0,0,1,.746,1.4c-.02.985-.005,1.972-.005,2.957M7.668,2.609,3.279,5.494c.1.075.171.128.242.176,1.242.838,2.488,1.671,3.724,2.519a.39.39,0,0,0,.519,0c1.281-.858,2.572-1.7,3.859-2.552.079-.052.152-.112.25-.185l-4.2-2.848M24.757,5.465c-1.36-.915-2.679-1.8-3.986-2.692a.391.391,0,0,0-.52.01c-1.274.85-2.555,1.689-3.833,2.532-.085.056-.164.121-.264.2l4.2,2.845,4.4-2.891M13.914,19.038l4.365-2.859-4.234-2.872L9.7,16.179l4.218,2.858m5.357-.691c-.092.047-.131.063-.166.086-1.244.816-2.49,1.628-3.726,2.456a.514.514,0,0,0-.175.372c-.014,1.018-.008,2.036-.007,3.054,0,.091.012.182.021.313,1.334-.877,2.632-1.727,3.924-2.585a.329.329,0,0,0,.124-.235c.008-1.136.005-2.273.005-3.461m-10.517.008c0,1.164.007,2.248-.006,3.331a.467.467,0,0,0,.245.446c1.19.8,2.371,1.61,3.556,2.416.077.052.161.1.279.165,0-1.18.005-2.316-.01-3.452,0-.1-.125-.218-.221-.284-1.063-.733-2.131-1.457-3.2-2.183l-.645-.44m12.872-4.467c.084-.042.134-.061.177-.089,1.23-.8,2.463-1.592,3.685-2.4a.512.512,0,0,0,.184-.369c.015-1.018.009-2.037.007-3.055a2.549,2.549,0,0,0-.033-.276c-.125.075-.218.128-.307.186-1.153.756-2.3,1.518-3.461,2.266a.516.516,0,0,0-.276.5c.014.963.005,1.927.006,2.891,0,.1.01.209.017.349M12.859,7.694a1.636,1.636,0,0,0-.169.079c-1.244.815-2.49,1.627-3.724,2.455a.52.52,0,0,0-.17.377c-.014,1-.008,1.991-.006,2.986,0,.089.018.179.033.314,1.331-.875,2.619-1.72,3.9-2.572a.336.336,0,0,0,.13-.237c.008-1.115.006-2.229.006-3.4m-10.48.021a1.667,1.667,0,0,0-.032.206c0,1.04-.008,2.081.008,3.121a.525.525,0,0,0,.216.355c1.188.823,2.384,1.632,3.579,2.444.068.046.144.081.226.127a.512.512,0,0,0,.036-.115c0-1.084.007-2.168,0-3.252a.334.334,0,0,0-.127-.237C5,9.487,3.714,8.619,2.379,7.716M19.271,13.96c0-1.124-.006-2.174.005-3.223a.468.468,0,0,0-.236-.451c-1.2-.8-2.393-1.615-3.588-2.423-.069-.046-.141-.087-.256-.157,0,1.107.007,2.164-.006,3.221a.468.468,0,0,0,.249.446c.974.648,1.94,1.308,2.909,1.964l.923.624"
						transform="translate(0 0)"
						fill="#b8b8c6"
					/>
				</g>
			</g>
			<g
				id="??????_333"
				data-name="?????? 333"
				transform="translate(1751 2702.626)"
			>
				<g
					id="??????_315-9"
					data-name="?????? 315"
					transform="translate(0 0)"
					clip-path="url(#clip-path)"
				>
					<path
						id="??????_540-9"
						data-name="?????? 540"
						d="M28.05,8.72c0,1-.01,1.993,0,2.99a1.387,1.387,0,0,1-.692,1.283c-1.82,1.177-3.624,2.377-5.442,3.557a.538.538,0,0,0-.288.521c.013,1.774,0,3.548.012,5.323A1.329,1.329,0,0,1,21,23.6q-3.142,2.066-6.28,4.138a1.3,1.3,0,0,1-1.586-.023q-3-2.049-6-4.079a1.439,1.439,0,0,1-.689-1.32c.021-1.719,0-3.439.013-5.158a.524.524,0,0,0-.266-.5c-1.82-1.217-3.626-2.454-5.45-3.664A1.5,1.5,0,0,1,0,11.6c.024-1.993.016-3.987,0-5.98A1.326,1.326,0,0,1,.651,4.418Q3.795,2.355,6.93.278A1.251,1.251,0,0,1,8.476.293c1.732,1.19,3.476,2.362,5.2,3.559a.512.512,0,0,0,.684-.005C16.128,2.667,17.9,1.5,19.675.333a1.242,1.242,0,0,1,1.709.015c1.975,1.34,3.944,2.688,5.925,4.019a1.525,1.525,0,0,1,.746,1.4c-.02.985-.005,1.972-.005,2.957M7.668,2.609,3.279,5.494c.1.075.171.128.242.176,1.242.838,2.488,1.671,3.724,2.519a.39.39,0,0,0,.519,0c1.281-.858,2.572-1.7,3.859-2.552.079-.052.152-.112.25-.185l-4.2-2.848M24.757,5.465c-1.36-.915-2.679-1.8-3.986-2.692a.391.391,0,0,0-.52.01c-1.274.85-2.555,1.689-3.833,2.532-.085.056-.164.121-.264.2l4.2,2.845,4.4-2.891M13.914,19.038l4.365-2.859-4.234-2.872L9.7,16.179l4.218,2.858m5.357-.691c-.092.047-.131.063-.166.086-1.244.816-2.49,1.628-3.726,2.456a.514.514,0,0,0-.175.372c-.014,1.018-.008,2.036-.007,3.054,0,.091.012.182.021.313,1.334-.877,2.632-1.727,3.924-2.585a.329.329,0,0,0,.124-.235c.008-1.136.005-2.273.005-3.461m-10.517.008c0,1.164.007,2.248-.006,3.331a.467.467,0,0,0,.245.446c1.19.8,2.371,1.61,3.556,2.416.077.052.161.1.279.165,0-1.18.005-2.316-.01-3.452,0-.1-.125-.218-.221-.284-1.063-.733-2.131-1.457-3.2-2.183l-.645-.44m12.872-4.467c.084-.042.134-.061.177-.089,1.23-.8,2.463-1.592,3.685-2.4a.512.512,0,0,0,.184-.369c.015-1.018.009-2.037.007-3.055a2.549,2.549,0,0,0-.033-.276c-.125.075-.218.128-.307.186-1.153.756-2.3,1.518-3.461,2.266a.516.516,0,0,0-.276.5c.014.963.005,1.927.006,2.891,0,.1.01.209.017.349M12.859,7.694a1.636,1.636,0,0,0-.169.079c-1.244.815-2.49,1.627-3.724,2.455a.52.52,0,0,0-.17.377c-.014,1-.008,1.991-.006,2.986,0,.089.018.179.033.314,1.331-.875,2.619-1.72,3.9-2.572a.336.336,0,0,0,.13-.237c.008-1.115.006-2.229.006-3.4m-10.48.021a1.667,1.667,0,0,0-.032.206c0,1.04-.008,2.081.008,3.121a.525.525,0,0,0,.216.355c1.188.823,2.384,1.632,3.579,2.444.068.046.144.081.226.127a.512.512,0,0,0,.036-.115c0-1.084.007-2.168,0-3.252a.334.334,0,0,0-.127-.237C5,9.487,3.714,8.619,2.379,7.716M19.271,13.96c0-1.124-.006-2.174.005-3.223a.468.468,0,0,0-.236-.451c-1.2-.8-2.393-1.615-3.588-2.423-.069-.046-.141-.087-.256-.157,0,1.107.007,2.164-.006,3.221a.468.468,0,0,0,.249.446c.974.648,1.94,1.308,2.909,1.964l.923.624"
						transform="translate(0 0)"
						fill="#b8b8c6"
					/>
				</g>
			</g>

			{/* ?????? 3??? ????????? */}
			<text
				id="AI_??????_01"
				data-name="AI ??????01"
				transform="translate(990 2749)"
				fill="#b8b8c6"
				font-size="14"
				font-family="SegoeUI, Segoe UI"
			>
				<tspan x="-22.295" y="0">
					AI{" "}
				</tspan>
				<tspan y="0" font-family="MalgunGothic, Malgun Gothic">
					??????
				</tspan>
				<tspan y="0"></tspan>
				<tspan x="-7.547" y="16">
					01
				</tspan>
			</text>
			<text
				id="AI_??????_02"
				data-name="AI ??????02"
				transform="translate(1087 2749)"
				fill="#b8b8c6"
				font-size="14"
				font-family="SegoeUI, Segoe UI"
			>
				<tspan x="-22.295" y="0">
					AI{" "}
				</tspan>
				<tspan y="0" font-family="MalgunGothic, Malgun Gothic">
					??????
				</tspan>
				<tspan y="0"></tspan>
				<tspan x="-7.547" y="16">
					02
				</tspan>
			</text>
			<text
				id="AI_??????_03"
				data-name="AI ??????03"
				transform="translate(1183 2749)"
				fill="#b8b8c6"
				font-size="14"
				font-family="SegoeUI, Segoe UI"
			>
				<tspan x="-22.295" y="0">
					AI{" "}
				</tspan>
				<tspan y="0" font-family="MalgunGothic, Malgun Gothic">
					??????
				</tspan>
				<tspan y="0"></tspan>
				<tspan x="-7.547" y="16">
					03
				</tspan>
			</text>
			<text
				id="AI_??????_04"
				data-name="AI ??????04"
				transform="translate(1281 2749)"
				fill="#b8b8c6"
				font-size="14"
				font-family="SegoeUI, Segoe UI"
			>
				<tspan x="-22.295" y="0">
					AI{" "}
				</tspan>
				<tspan y="0" font-family="MalgunGothic, Malgun Gothic">
					??????
				</tspan>
				<tspan y="0"></tspan>
				<tspan x="-7.547" y="16">
					04
				</tspan>
			</text>
			<text
				id="AI_??????_05"
				data-name="AI ??????05"
				transform="translate(1378 2749)"
				fill="#b8b8c6"
				font-size="14"
				font-family="SegoeUI, Segoe UI"
			>
				<tspan x="-22.295" y="0">
					AI{" "}
				</tspan>
				<tspan y="0" font-family="MalgunGothic, Malgun Gothic">
					??????
				</tspan>
				<tspan y="0"></tspan>
				<tspan x="-7.547" y="16">
					05
				</tspan>
			</text>
			<text
				id="AI_??????_06"
				data-name="AI ??????06"
				transform="translate(1475 2749)"
				fill="#b8b8c6"
				font-size="14"
				font-family="SegoeUI, Segoe UI"
			>
				<tspan x="-22.295" y="0">
					AI{" "}
				</tspan>
				<tspan y="0" font-family="MalgunGothic, Malgun Gothic">
					??????
				</tspan>
				<tspan y="0"></tspan>
				<tspan x="-7.547" y="16">
					06
				</tspan>
			</text>
			<text
				id="AI_??????_07"
				data-name="AI ??????07"
				transform="translate(1572 2749)"
				fill="#b8b8c6"
				font-size="14"
				font-family="SegoeUI, Segoe UI"
			>
				<tspan x="-22.295" y="0">
					AI{" "}
				</tspan>
				<tspan y="0" font-family="MalgunGothic, Malgun Gothic">
					??????
				</tspan>
				<tspan y="0"></tspan>
				<tspan x="-7.547" y="16">
					07
				</tspan>
			</text>
			<text
				id="AI_??????_08"
				data-name="AI ??????08"
				transform="translate(1669 2749)"
				fill="#b8b8c6"
				font-size="14"
				font-family="SegoeUI, Segoe UI"
			>
				<tspan x="-22.295" y="0">
					AI{" "}
				</tspan>
				<tspan y="0" font-family="MalgunGothic, Malgun Gothic">
					??????
				</tspan>
				<tspan y="0"></tspan>
				<tspan x="-7.547" y="16">
					08
				</tspan>
			</text>
			<text
				id="AI_??????_n"
				data-name="AI ??????n"
				transform="translate(1766 2749)"
				fill="#b8b8c6"
				font-size="14"
				font-family="SegoeUI, Segoe UI"
			>
				<tspan x="-22.295" y="0">
					AI{" "}
				</tspan>
				<tspan y="0" font-family="MalgunGothic, Malgun Gothic">
					??????
				</tspan>
				<tspan y="0"></tspan>
				<tspan x="-3.961" y="16">
					n
				</tspan>
			</text>

			{/* ???????????? 4??? */}
			<g
				id="??????_318"
				data-name="?????? 318"
				transform="translate(978.28 2858.168)"
			>
				<g
					id="??????_317"
					data-name="?????? 317"
					transform="translate(0 0)"
					clip-path="url(#clip-path-10)"
				>
					<path
						id="??????_541"
						data-name="?????? 541"
						d="M23.477,16.2q0-1.1,0-2.194c0-.72,0-1.439-.007-2.159-.009-1.662-.018-3.381.022-5.068a4.757,4.757,0,0,0-2-4.078A11.834,11.834,0,0,0,17,.642,21.536,21.536,0,0,0,11.789,0,22.609,22.609,0,0,0,7.836.355,13.525,13.525,0,0,0,2.425,2.4,5.014,5.014,0,0,0,0,6.826c.051,4.407.034,8.891.017,13.226L.012,21.43a4.587,4.587,0,0,0,1.807,3.7,11.485,11.485,0,0,0,4.714,2.23A21.127,21.127,0,0,0,11.7,28a22.3,22.3,0,0,0,3.964-.362,12.467,12.467,0,0,0,6.058-2.546,4.456,4.456,0,0,0,1.763-3.618c-.013-1.759-.011-3.548-.008-5.278m-3.606,7.68a10.627,10.627,0,0,1-3.819,1.535,19.516,19.516,0,0,1-4.25.469c-.461,0-.93-.016-1.394-.049a16.258,16.258,0,0,1-5.577-1.282,5.636,5.636,0,0,1-2.267-1.66,1.908,1.908,0,0,1-.436-1.173c-.005-.5,0-1.01,0-1.523a12.926,12.926,0,0,0,5.64,2.256,21.312,21.312,0,0,0,3.9.365q.4,0,.81-.016a17.7,17.7,0,0,0,7.168-1.568,15.127,15.127,0,0,0,1.628-.959l.1-.064c.011.547.022,1.112-.021,1.664a2.748,2.748,0,0,1-1.475,2M20.927,5.1a1.7,1.7,0,0,1,.019,2.239,6.422,6.422,0,0,1-2.985,1.976,18.051,18.051,0,0,1-6.375,1.055,16.846,16.846,0,0,1-6.8-1.373,6.189,6.189,0,0,1-1.929-1.3,1.849,1.849,0,0,1,.012-2.936A7.853,7.853,0,0,1,6.222,2.909a18.064,18.064,0,0,1,5.452-.788c.427,0,.869.012,1.313.037A16.328,16.328,0,0,1,18.02,3.17,6.441,6.441,0,0,1,20.927,5.1M11.8,20.716a19.758,19.758,0,0,1-1.979-.1,13.978,13.978,0,0,1-5.64-1.574,4.459,4.459,0,0,1-1.634-1.379,2.165,2.165,0,0,1-.381-.931c-.044-.554-.037-1.113-.028-1.7a14.313,14.313,0,0,0,6.505,2.384,21.175,21.175,0,0,0,3.071.223c.7,0,1.416-.034,2.128-.1a15.084,15.084,0,0,0,6.987-2.137c.172-.11.338-.227.5-.345v.042a15.54,15.54,0,0,1-.033,1.888,2.22,2.22,0,0,1-.964,1.36,9.761,9.761,0,0,1-3.981,1.821,18.905,18.905,0,0,1-4.55.555m9.563-9.292a2.329,2.329,0,0,1-1.048,1.756,10.325,10.325,0,0,1-4.189,1.859,18.686,18.686,0,0,1-4.319.5,20.545,20.545,0,0,1-2.148-.115,13.816,13.816,0,0,1-5.469-1.566A4.436,4.436,0,0,1,2.55,12.491a2.268,2.268,0,0,1-.387-.968c-.045-.546-.037-1.094-.028-1.673.159.118.323.234.49.343A14.243,14.243,0,0,0,7.989,12.14a21.265,21.265,0,0,0,3.707.324,22.518,22.518,0,0,0,2.316-.121,14.772,14.772,0,0,0,7.361-2.49c0,.543.007,1.058-.009,1.571"
						transform="translate(0 0)"
						fill="#b8b8c6"
					/>
				</g>
			</g>
			<g
				id="??????_319"
				data-name="?????? 319"
				transform="translate(1075.28 2858.168)"
			>
				<g
					id="??????_317-2"
					data-name="?????? 317"
					transform="translate(0 0)"
					clip-path="url(#clip-path-10)"
				>
					<path
						id="??????_541-2"
						data-name="?????? 541"
						d="M23.477,16.2q0-1.1,0-2.194c0-.72,0-1.439-.007-2.159-.009-1.662-.018-3.381.022-5.068a4.757,4.757,0,0,0-2-4.078A11.834,11.834,0,0,0,17,.642,21.536,21.536,0,0,0,11.789,0,22.609,22.609,0,0,0,7.836.355,13.525,13.525,0,0,0,2.425,2.4,5.014,5.014,0,0,0,0,6.826c.051,4.407.034,8.891.017,13.226L.012,21.43a4.587,4.587,0,0,0,1.807,3.7,11.485,11.485,0,0,0,4.714,2.23A21.127,21.127,0,0,0,11.7,28a22.3,22.3,0,0,0,3.964-.362,12.467,12.467,0,0,0,6.058-2.546,4.456,4.456,0,0,0,1.763-3.618c-.013-1.759-.011-3.548-.008-5.278m-3.606,7.68a10.627,10.627,0,0,1-3.819,1.535,19.516,19.516,0,0,1-4.25.469c-.461,0-.93-.016-1.394-.049a16.258,16.258,0,0,1-5.577-1.282,5.636,5.636,0,0,1-2.267-1.66,1.908,1.908,0,0,1-.436-1.173c-.005-.5,0-1.01,0-1.523a12.926,12.926,0,0,0,5.64,2.256,21.312,21.312,0,0,0,3.9.365q.4,0,.81-.016a17.7,17.7,0,0,0,7.168-1.568,15.127,15.127,0,0,0,1.628-.959l.1-.064c.011.547.022,1.112-.021,1.664a2.748,2.748,0,0,1-1.475,2M20.927,5.1a1.7,1.7,0,0,1,.019,2.239,6.422,6.422,0,0,1-2.985,1.976,18.051,18.051,0,0,1-6.375,1.055,16.846,16.846,0,0,1-6.8-1.373,6.189,6.189,0,0,1-1.929-1.3,1.849,1.849,0,0,1,.012-2.936A7.853,7.853,0,0,1,6.222,2.909a18.064,18.064,0,0,1,5.452-.788c.427,0,.869.012,1.313.037A16.328,16.328,0,0,1,18.02,3.17,6.441,6.441,0,0,1,20.927,5.1M11.8,20.716a19.758,19.758,0,0,1-1.979-.1,13.978,13.978,0,0,1-5.64-1.574,4.459,4.459,0,0,1-1.634-1.379,2.165,2.165,0,0,1-.381-.931c-.044-.554-.037-1.113-.028-1.7a14.313,14.313,0,0,0,6.505,2.384,21.175,21.175,0,0,0,3.071.223c.7,0,1.416-.034,2.128-.1a15.084,15.084,0,0,0,6.987-2.137c.172-.11.338-.227.5-.345v.042a15.54,15.54,0,0,1-.033,1.888,2.22,2.22,0,0,1-.964,1.36,9.761,9.761,0,0,1-3.981,1.821,18.905,18.905,0,0,1-4.55.555m9.563-9.292a2.329,2.329,0,0,1-1.048,1.756,10.325,10.325,0,0,1-4.189,1.859,18.686,18.686,0,0,1-4.319.5,20.545,20.545,0,0,1-2.148-.115,13.816,13.816,0,0,1-5.469-1.566A4.436,4.436,0,0,1,2.55,12.491a2.268,2.268,0,0,1-.387-.968c-.045-.546-.037-1.094-.028-1.673.159.118.323.234.49.343A14.243,14.243,0,0,0,7.989,12.14a21.265,21.265,0,0,0,3.707.324,22.518,22.518,0,0,0,2.316-.121,14.772,14.772,0,0,0,7.361-2.49c0,.543.007,1.058-.009,1.571"
						transform="translate(0 0)"
						fill="#b8b8c6"
					/>
				</g>
			</g>
			<g
				id="??????_320"
				data-name="?????? 320"
				transform="translate(1172.28 2858.168)"
			>
				<g
					id="??????_317-3"
					data-name="?????? 317"
					transform="translate(0 0)"
					clip-path="url(#clip-path-10)"
				>
					<path
						id="??????_541-3"
						data-name="?????? 541"
						d="M23.477,16.2q0-1.1,0-2.194c0-.72,0-1.439-.007-2.159-.009-1.662-.018-3.381.022-5.068a4.757,4.757,0,0,0-2-4.078A11.834,11.834,0,0,0,17,.642,21.536,21.536,0,0,0,11.789,0,22.609,22.609,0,0,0,7.836.355,13.525,13.525,0,0,0,2.425,2.4,5.014,5.014,0,0,0,0,6.826c.051,4.407.034,8.891.017,13.226L.012,21.43a4.587,4.587,0,0,0,1.807,3.7,11.485,11.485,0,0,0,4.714,2.23A21.127,21.127,0,0,0,11.7,28a22.3,22.3,0,0,0,3.964-.362,12.467,12.467,0,0,0,6.058-2.546,4.456,4.456,0,0,0,1.763-3.618c-.013-1.759-.011-3.548-.008-5.278m-3.606,7.68a10.627,10.627,0,0,1-3.819,1.535,19.516,19.516,0,0,1-4.25.469c-.461,0-.93-.016-1.394-.049a16.258,16.258,0,0,1-5.577-1.282,5.636,5.636,0,0,1-2.267-1.66,1.908,1.908,0,0,1-.436-1.173c-.005-.5,0-1.01,0-1.523a12.926,12.926,0,0,0,5.64,2.256,21.312,21.312,0,0,0,3.9.365q.4,0,.81-.016a17.7,17.7,0,0,0,7.168-1.568,15.127,15.127,0,0,0,1.628-.959l.1-.064c.011.547.022,1.112-.021,1.664a2.748,2.748,0,0,1-1.475,2M20.927,5.1a1.7,1.7,0,0,1,.019,2.239,6.422,6.422,0,0,1-2.985,1.976,18.051,18.051,0,0,1-6.375,1.055,16.846,16.846,0,0,1-6.8-1.373,6.189,6.189,0,0,1-1.929-1.3,1.849,1.849,0,0,1,.012-2.936A7.853,7.853,0,0,1,6.222,2.909a18.064,18.064,0,0,1,5.452-.788c.427,0,.869.012,1.313.037A16.328,16.328,0,0,1,18.02,3.17,6.441,6.441,0,0,1,20.927,5.1M11.8,20.716a19.758,19.758,0,0,1-1.979-.1,13.978,13.978,0,0,1-5.64-1.574,4.459,4.459,0,0,1-1.634-1.379,2.165,2.165,0,0,1-.381-.931c-.044-.554-.037-1.113-.028-1.7a14.313,14.313,0,0,0,6.505,2.384,21.175,21.175,0,0,0,3.071.223c.7,0,1.416-.034,2.128-.1a15.084,15.084,0,0,0,6.987-2.137c.172-.11.338-.227.5-.345v.042a15.54,15.54,0,0,1-.033,1.888,2.22,2.22,0,0,1-.964,1.36,9.761,9.761,0,0,1-3.981,1.821,18.905,18.905,0,0,1-4.55.555m9.563-9.292a2.329,2.329,0,0,1-1.048,1.756,10.325,10.325,0,0,1-4.189,1.859,18.686,18.686,0,0,1-4.319.5,20.545,20.545,0,0,1-2.148-.115,13.816,13.816,0,0,1-5.469-1.566A4.436,4.436,0,0,1,2.55,12.491a2.268,2.268,0,0,1-.387-.968c-.045-.546-.037-1.094-.028-1.673.159.118.323.234.49.343A14.243,14.243,0,0,0,7.989,12.14a21.265,21.265,0,0,0,3.707.324,22.518,22.518,0,0,0,2.316-.121,14.772,14.772,0,0,0,7.361-2.49c0,.543.007,1.058-.009,1.571"
						transform="translate(0 0)"
						fill="#b8b8c6"
					/>
				</g>
			</g>
			<g
				id="??????_321"
				data-name="?????? 321"
				transform="translate(1269.28 2858.168)"
			>
				<g
					id="??????_317-4"
					data-name="?????? 317"
					transform="translate(0 0)"
					clip-path="url(#clip-path-10)"
				>
					<path
						id="??????_541-4"
						data-name="?????? 541"
						d="M23.477,16.2q0-1.1,0-2.194c0-.72,0-1.439-.007-2.159-.009-1.662-.018-3.381.022-5.068a4.757,4.757,0,0,0-2-4.078A11.834,11.834,0,0,0,17,.642,21.536,21.536,0,0,0,11.789,0,22.609,22.609,0,0,0,7.836.355,13.525,13.525,0,0,0,2.425,2.4,5.014,5.014,0,0,0,0,6.826c.051,4.407.034,8.891.017,13.226L.012,21.43a4.587,4.587,0,0,0,1.807,3.7,11.485,11.485,0,0,0,4.714,2.23A21.127,21.127,0,0,0,11.7,28a22.3,22.3,0,0,0,3.964-.362,12.467,12.467,0,0,0,6.058-2.546,4.456,4.456,0,0,0,1.763-3.618c-.013-1.759-.011-3.548-.008-5.278m-3.606,7.68a10.627,10.627,0,0,1-3.819,1.535,19.516,19.516,0,0,1-4.25.469c-.461,0-.93-.016-1.394-.049a16.258,16.258,0,0,1-5.577-1.282,5.636,5.636,0,0,1-2.267-1.66,1.908,1.908,0,0,1-.436-1.173c-.005-.5,0-1.01,0-1.523a12.926,12.926,0,0,0,5.64,2.256,21.312,21.312,0,0,0,3.9.365q.4,0,.81-.016a17.7,17.7,0,0,0,7.168-1.568,15.127,15.127,0,0,0,1.628-.959l.1-.064c.011.547.022,1.112-.021,1.664a2.748,2.748,0,0,1-1.475,2M20.927,5.1a1.7,1.7,0,0,1,.019,2.239,6.422,6.422,0,0,1-2.985,1.976,18.051,18.051,0,0,1-6.375,1.055,16.846,16.846,0,0,1-6.8-1.373,6.189,6.189,0,0,1-1.929-1.3,1.849,1.849,0,0,1,.012-2.936A7.853,7.853,0,0,1,6.222,2.909a18.064,18.064,0,0,1,5.452-.788c.427,0,.869.012,1.313.037A16.328,16.328,0,0,1,18.02,3.17,6.441,6.441,0,0,1,20.927,5.1M11.8,20.716a19.758,19.758,0,0,1-1.979-.1,13.978,13.978,0,0,1-5.64-1.574,4.459,4.459,0,0,1-1.634-1.379,2.165,2.165,0,0,1-.381-.931c-.044-.554-.037-1.113-.028-1.7a14.313,14.313,0,0,0,6.505,2.384,21.175,21.175,0,0,0,3.071.223c.7,0,1.416-.034,2.128-.1a15.084,15.084,0,0,0,6.987-2.137c.172-.11.338-.227.5-.345v.042a15.54,15.54,0,0,1-.033,1.888,2.22,2.22,0,0,1-.964,1.36,9.761,9.761,0,0,1-3.981,1.821,18.905,18.905,0,0,1-4.55.555m9.563-9.292a2.329,2.329,0,0,1-1.048,1.756,10.325,10.325,0,0,1-4.189,1.859,18.686,18.686,0,0,1-4.319.5,20.545,20.545,0,0,1-2.148-.115,13.816,13.816,0,0,1-5.469-1.566A4.436,4.436,0,0,1,2.55,12.491a2.268,2.268,0,0,1-.387-.968c-.045-.546-.037-1.094-.028-1.673.159.118.323.234.49.343A14.243,14.243,0,0,0,7.989,12.14a21.265,21.265,0,0,0,3.707.324,22.518,22.518,0,0,0,2.316-.121,14.772,14.772,0,0,0,7.361-2.49c0,.543.007,1.058-.009,1.571"
						transform="translate(0 0)"
						fill="#b8b8c6"
					/>
				</g>
			</g>
			<g
				id="??????_322"
				data-name="?????? 322"
				transform="translate(1366.28 2858.168)"
			>
				<g
					id="??????_317-5"
					data-name="?????? 317"
					transform="translate(0 0)"
					clip-path="url(#clip-path-10)"
				>
					<path
						id="??????_541-5"
						data-name="?????? 541"
						d="M23.477,16.2q0-1.1,0-2.194c0-.72,0-1.439-.007-2.159-.009-1.662-.018-3.381.022-5.068a4.757,4.757,0,0,0-2-4.078A11.834,11.834,0,0,0,17,.642,21.536,21.536,0,0,0,11.789,0,22.609,22.609,0,0,0,7.836.355,13.525,13.525,0,0,0,2.425,2.4,5.014,5.014,0,0,0,0,6.826c.051,4.407.034,8.891.017,13.226L.012,21.43a4.587,4.587,0,0,0,1.807,3.7,11.485,11.485,0,0,0,4.714,2.23A21.127,21.127,0,0,0,11.7,28a22.3,22.3,0,0,0,3.964-.362,12.467,12.467,0,0,0,6.058-2.546,4.456,4.456,0,0,0,1.763-3.618c-.013-1.759-.011-3.548-.008-5.278m-3.606,7.68a10.627,10.627,0,0,1-3.819,1.535,19.516,19.516,0,0,1-4.25.469c-.461,0-.93-.016-1.394-.049a16.258,16.258,0,0,1-5.577-1.282,5.636,5.636,0,0,1-2.267-1.66,1.908,1.908,0,0,1-.436-1.173c-.005-.5,0-1.01,0-1.523a12.926,12.926,0,0,0,5.64,2.256,21.312,21.312,0,0,0,3.9.365q.4,0,.81-.016a17.7,17.7,0,0,0,7.168-1.568,15.127,15.127,0,0,0,1.628-.959l.1-.064c.011.547.022,1.112-.021,1.664a2.748,2.748,0,0,1-1.475,2M20.927,5.1a1.7,1.7,0,0,1,.019,2.239,6.422,6.422,0,0,1-2.985,1.976,18.051,18.051,0,0,1-6.375,1.055,16.846,16.846,0,0,1-6.8-1.373,6.189,6.189,0,0,1-1.929-1.3,1.849,1.849,0,0,1,.012-2.936A7.853,7.853,0,0,1,6.222,2.909a18.064,18.064,0,0,1,5.452-.788c.427,0,.869.012,1.313.037A16.328,16.328,0,0,1,18.02,3.17,6.441,6.441,0,0,1,20.927,5.1M11.8,20.716a19.758,19.758,0,0,1-1.979-.1,13.978,13.978,0,0,1-5.64-1.574,4.459,4.459,0,0,1-1.634-1.379,2.165,2.165,0,0,1-.381-.931c-.044-.554-.037-1.113-.028-1.7a14.313,14.313,0,0,0,6.505,2.384,21.175,21.175,0,0,0,3.071.223c.7,0,1.416-.034,2.128-.1a15.084,15.084,0,0,0,6.987-2.137c.172-.11.338-.227.5-.345v.042a15.54,15.54,0,0,1-.033,1.888,2.22,2.22,0,0,1-.964,1.36,9.761,9.761,0,0,1-3.981,1.821,18.905,18.905,0,0,1-4.55.555m9.563-9.292a2.329,2.329,0,0,1-1.048,1.756,10.325,10.325,0,0,1-4.189,1.859,18.686,18.686,0,0,1-4.319.5,20.545,20.545,0,0,1-2.148-.115,13.816,13.816,0,0,1-5.469-1.566A4.436,4.436,0,0,1,2.55,12.491a2.268,2.268,0,0,1-.387-.968c-.045-.546-.037-1.094-.028-1.673.159.118.323.234.49.343A14.243,14.243,0,0,0,7.989,12.14a21.265,21.265,0,0,0,3.707.324,22.518,22.518,0,0,0,2.316-.121,14.772,14.772,0,0,0,7.361-2.49c0,.543.007,1.058-.009,1.571"
						transform="translate(0 0)"
						fill="#b8b8c6"
					/>
				</g>
			</g>
			<g
				id="??????_323"
				data-name="?????? 323"
				transform="translate(1463.28 2858.168)"
			>
				<g
					id="??????_317-6"
					data-name="?????? 317"
					transform="translate(0 0)"
					clip-path="url(#clip-path-10)"
				>
					<path
						id="??????_541-6"
						data-name="?????? 541"
						d="M23.477,16.2q0-1.1,0-2.194c0-.72,0-1.439-.007-2.159-.009-1.662-.018-3.381.022-5.068a4.757,4.757,0,0,0-2-4.078A11.834,11.834,0,0,0,17,.642,21.536,21.536,0,0,0,11.789,0,22.609,22.609,0,0,0,7.836.355,13.525,13.525,0,0,0,2.425,2.4,5.014,5.014,0,0,0,0,6.826c.051,4.407.034,8.891.017,13.226L.012,21.43a4.587,4.587,0,0,0,1.807,3.7,11.485,11.485,0,0,0,4.714,2.23A21.127,21.127,0,0,0,11.7,28a22.3,22.3,0,0,0,3.964-.362,12.467,12.467,0,0,0,6.058-2.546,4.456,4.456,0,0,0,1.763-3.618c-.013-1.759-.011-3.548-.008-5.278m-3.606,7.68a10.627,10.627,0,0,1-3.819,1.535,19.516,19.516,0,0,1-4.25.469c-.461,0-.93-.016-1.394-.049a16.258,16.258,0,0,1-5.577-1.282,5.636,5.636,0,0,1-2.267-1.66,1.908,1.908,0,0,1-.436-1.173c-.005-.5,0-1.01,0-1.523a12.926,12.926,0,0,0,5.64,2.256,21.312,21.312,0,0,0,3.9.365q.4,0,.81-.016a17.7,17.7,0,0,0,7.168-1.568,15.127,15.127,0,0,0,1.628-.959l.1-.064c.011.547.022,1.112-.021,1.664a2.748,2.748,0,0,1-1.475,2M20.927,5.1a1.7,1.7,0,0,1,.019,2.239,6.422,6.422,0,0,1-2.985,1.976,18.051,18.051,0,0,1-6.375,1.055,16.846,16.846,0,0,1-6.8-1.373,6.189,6.189,0,0,1-1.929-1.3,1.849,1.849,0,0,1,.012-2.936A7.853,7.853,0,0,1,6.222,2.909a18.064,18.064,0,0,1,5.452-.788c.427,0,.869.012,1.313.037A16.328,16.328,0,0,1,18.02,3.17,6.441,6.441,0,0,1,20.927,5.1M11.8,20.716a19.758,19.758,0,0,1-1.979-.1,13.978,13.978,0,0,1-5.64-1.574,4.459,4.459,0,0,1-1.634-1.379,2.165,2.165,0,0,1-.381-.931c-.044-.554-.037-1.113-.028-1.7a14.313,14.313,0,0,0,6.505,2.384,21.175,21.175,0,0,0,3.071.223c.7,0,1.416-.034,2.128-.1a15.084,15.084,0,0,0,6.987-2.137c.172-.11.338-.227.5-.345v.042a15.54,15.54,0,0,1-.033,1.888,2.22,2.22,0,0,1-.964,1.36,9.761,9.761,0,0,1-3.981,1.821,18.905,18.905,0,0,1-4.55.555m9.563-9.292a2.329,2.329,0,0,1-1.048,1.756,10.325,10.325,0,0,1-4.189,1.859,18.686,18.686,0,0,1-4.319.5,20.545,20.545,0,0,1-2.148-.115,13.816,13.816,0,0,1-5.469-1.566A4.436,4.436,0,0,1,2.55,12.491a2.268,2.268,0,0,1-.387-.968c-.045-.546-.037-1.094-.028-1.673.159.118.323.234.49.343A14.243,14.243,0,0,0,7.989,12.14a21.265,21.265,0,0,0,3.707.324,22.518,22.518,0,0,0,2.316-.121,14.772,14.772,0,0,0,7.361-2.49c0,.543.007,1.058-.009,1.571"
						transform="translate(0 0)"
						fill="#b8b8c6"
					/>
				</g>
			</g>
			<g
				id="??????_324"
				data-name="?????? 324"
				transform="translate(1753.28 2858.168)"
			>
				<g
					id="??????_317-7"
					data-name="?????? 317"
					transform="translate(0 0)"
					clip-path="url(#clip-path-10)"
				>
					<path
						id="??????_541-7"
						data-name="?????? 541"
						d="M23.477,16.2q0-1.1,0-2.194c0-.72,0-1.439-.007-2.159-.009-1.662-.018-3.381.022-5.068a4.757,4.757,0,0,0-2-4.078A11.834,11.834,0,0,0,17,.642,21.536,21.536,0,0,0,11.789,0,22.609,22.609,0,0,0,7.836.355,13.525,13.525,0,0,0,2.425,2.4,5.014,5.014,0,0,0,0,6.826c.051,4.407.034,8.891.017,13.226L.012,21.43a4.587,4.587,0,0,0,1.807,3.7,11.485,11.485,0,0,0,4.714,2.23A21.127,21.127,0,0,0,11.7,28a22.3,22.3,0,0,0,3.964-.362,12.467,12.467,0,0,0,6.058-2.546,4.456,4.456,0,0,0,1.763-3.618c-.013-1.759-.011-3.548-.008-5.278m-3.606,7.68a10.627,10.627,0,0,1-3.819,1.535,19.516,19.516,0,0,1-4.25.469c-.461,0-.93-.016-1.394-.049a16.258,16.258,0,0,1-5.577-1.282,5.636,5.636,0,0,1-2.267-1.66,1.908,1.908,0,0,1-.436-1.173c-.005-.5,0-1.01,0-1.523a12.926,12.926,0,0,0,5.64,2.256,21.312,21.312,0,0,0,3.9.365q.4,0,.81-.016a17.7,17.7,0,0,0,7.168-1.568,15.127,15.127,0,0,0,1.628-.959l.1-.064c.011.547.022,1.112-.021,1.664a2.748,2.748,0,0,1-1.475,2M20.927,5.1a1.7,1.7,0,0,1,.019,2.239,6.422,6.422,0,0,1-2.985,1.976,18.051,18.051,0,0,1-6.375,1.055,16.846,16.846,0,0,1-6.8-1.373,6.189,6.189,0,0,1-1.929-1.3,1.849,1.849,0,0,1,.012-2.936A7.853,7.853,0,0,1,6.222,2.909a18.064,18.064,0,0,1,5.452-.788c.427,0,.869.012,1.313.037A16.328,16.328,0,0,1,18.02,3.17,6.441,6.441,0,0,1,20.927,5.1M11.8,20.716a19.758,19.758,0,0,1-1.979-.1,13.978,13.978,0,0,1-5.64-1.574,4.459,4.459,0,0,1-1.634-1.379,2.165,2.165,0,0,1-.381-.931c-.044-.554-.037-1.113-.028-1.7a14.313,14.313,0,0,0,6.505,2.384,21.175,21.175,0,0,0,3.071.223c.7,0,1.416-.034,2.128-.1a15.084,15.084,0,0,0,6.987-2.137c.172-.11.338-.227.5-.345v.042a15.54,15.54,0,0,1-.033,1.888,2.22,2.22,0,0,1-.964,1.36,9.761,9.761,0,0,1-3.981,1.821,18.905,18.905,0,0,1-4.55.555m9.563-9.292a2.329,2.329,0,0,1-1.048,1.756,10.325,10.325,0,0,1-4.189,1.859,18.686,18.686,0,0,1-4.319.5,20.545,20.545,0,0,1-2.148-.115,13.816,13.816,0,0,1-5.469-1.566A4.436,4.436,0,0,1,2.55,12.491a2.268,2.268,0,0,1-.387-.968c-.045-.546-.037-1.094-.028-1.673.159.118.323.234.49.343A14.243,14.243,0,0,0,7.989,12.14a21.265,21.265,0,0,0,3.707.324,22.518,22.518,0,0,0,2.316-.121,14.772,14.772,0,0,0,7.361-2.49c0,.543.007,1.058-.009,1.571"
						transform="translate(0 0)"
						fill="#b8b8c6"
					/>
				</g>
			</g>
			<g
				id="??????_325"
				data-name="?????? 325"
				transform="translate(1656.28 2858.168)"
			>
				<g
					id="??????_317-8"
					data-name="?????? 317"
					transform="translate(0 0)"
					clip-path="url(#clip-path-10)"
				>
					<path
						id="??????_541-8"
						data-name="?????? 541"
						d="M23.477,16.2q0-1.1,0-2.194c0-.72,0-1.439-.007-2.159-.009-1.662-.018-3.381.022-5.068a4.757,4.757,0,0,0-2-4.078A11.834,11.834,0,0,0,17,.642,21.536,21.536,0,0,0,11.789,0,22.609,22.609,0,0,0,7.836.355,13.525,13.525,0,0,0,2.425,2.4,5.014,5.014,0,0,0,0,6.826c.051,4.407.034,8.891.017,13.226L.012,21.43a4.587,4.587,0,0,0,1.807,3.7,11.485,11.485,0,0,0,4.714,2.23A21.127,21.127,0,0,0,11.7,28a22.3,22.3,0,0,0,3.964-.362,12.467,12.467,0,0,0,6.058-2.546,4.456,4.456,0,0,0,1.763-3.618c-.013-1.759-.011-3.548-.008-5.278m-3.606,7.68a10.627,10.627,0,0,1-3.819,1.535,19.516,19.516,0,0,1-4.25.469c-.461,0-.93-.016-1.394-.049a16.258,16.258,0,0,1-5.577-1.282,5.636,5.636,0,0,1-2.267-1.66,1.908,1.908,0,0,1-.436-1.173c-.005-.5,0-1.01,0-1.523a12.926,12.926,0,0,0,5.64,2.256,21.312,21.312,0,0,0,3.9.365q.4,0,.81-.016a17.7,17.7,0,0,0,7.168-1.568,15.127,15.127,0,0,0,1.628-.959l.1-.064c.011.547.022,1.112-.021,1.664a2.748,2.748,0,0,1-1.475,2M20.927,5.1a1.7,1.7,0,0,1,.019,2.239,6.422,6.422,0,0,1-2.985,1.976,18.051,18.051,0,0,1-6.375,1.055,16.846,16.846,0,0,1-6.8-1.373,6.189,6.189,0,0,1-1.929-1.3,1.849,1.849,0,0,1,.012-2.936A7.853,7.853,0,0,1,6.222,2.909a18.064,18.064,0,0,1,5.452-.788c.427,0,.869.012,1.313.037A16.328,16.328,0,0,1,18.02,3.17,6.441,6.441,0,0,1,20.927,5.1M11.8,20.716a19.758,19.758,0,0,1-1.979-.1,13.978,13.978,0,0,1-5.64-1.574,4.459,4.459,0,0,1-1.634-1.379,2.165,2.165,0,0,1-.381-.931c-.044-.554-.037-1.113-.028-1.7a14.313,14.313,0,0,0,6.505,2.384,21.175,21.175,0,0,0,3.071.223c.7,0,1.416-.034,2.128-.1a15.084,15.084,0,0,0,6.987-2.137c.172-.11.338-.227.5-.345v.042a15.54,15.54,0,0,1-.033,1.888,2.22,2.22,0,0,1-.964,1.36,9.761,9.761,0,0,1-3.981,1.821,18.905,18.905,0,0,1-4.55.555m9.563-9.292a2.329,2.329,0,0,1-1.048,1.756,10.325,10.325,0,0,1-4.189,1.859,18.686,18.686,0,0,1-4.319.5,20.545,20.545,0,0,1-2.148-.115,13.816,13.816,0,0,1-5.469-1.566A4.436,4.436,0,0,1,2.55,12.491a2.268,2.268,0,0,1-.387-.968c-.045-.546-.037-1.094-.028-1.673.159.118.323.234.49.343A14.243,14.243,0,0,0,7.989,12.14a21.265,21.265,0,0,0,3.707.324,22.518,22.518,0,0,0,2.316-.121,14.772,14.772,0,0,0,7.361-2.49c0,.543.007,1.058-.009,1.571"
						transform="translate(0 0)"
						fill="#b8b8c6"
					/>
				</g>
			</g>
			<g
				id="??????_326"
				data-name="?????? 326"
				transform="translate(1559.28 2858.168)"
			>
				<g
					id="??????_317-9"
					data-name="?????? 317"
					transform="translate(0 0)"
					clip-path="url(#clip-path-18)"
				>
					<path
						id="??????_541-9"
						data-name="?????? 541"
						d="M23.477,16.2q0-1.1,0-2.194c0-.72,0-1.439-.007-2.159-.009-1.662-.018-3.381.022-5.068a4.757,4.757,0,0,0-2-4.078A11.834,11.834,0,0,0,17,.642,21.536,21.536,0,0,0,11.789,0,22.609,22.609,0,0,0,7.836.355,13.525,13.525,0,0,0,2.425,2.4,5.014,5.014,0,0,0,0,6.826c.051,4.407.034,8.891.017,13.226L.012,21.43a4.587,4.587,0,0,0,1.807,3.7,11.485,11.485,0,0,0,4.714,2.23A21.127,21.127,0,0,0,11.7,28a22.3,22.3,0,0,0,3.964-.362,12.467,12.467,0,0,0,6.058-2.546,4.456,4.456,0,0,0,1.763-3.618c-.013-1.759-.011-3.548-.008-5.278m-3.606,7.68a10.627,10.627,0,0,1-3.819,1.535,19.516,19.516,0,0,1-4.25.469c-.461,0-.93-.016-1.394-.049a16.258,16.258,0,0,1-5.577-1.282,5.636,5.636,0,0,1-2.267-1.66,1.908,1.908,0,0,1-.436-1.173c-.005-.5,0-1.01,0-1.523a12.926,12.926,0,0,0,5.64,2.256,21.312,21.312,0,0,0,3.9.365q.4,0,.81-.016a17.7,17.7,0,0,0,7.168-1.568,15.127,15.127,0,0,0,1.628-.959l.1-.064c.011.547.022,1.112-.021,1.664a2.748,2.748,0,0,1-1.475,2M20.927,5.1a1.7,1.7,0,0,1,.019,2.239,6.422,6.422,0,0,1-2.985,1.976,18.051,18.051,0,0,1-6.375,1.055,16.846,16.846,0,0,1-6.8-1.373,6.189,6.189,0,0,1-1.929-1.3,1.849,1.849,0,0,1,.012-2.936A7.853,7.853,0,0,1,6.222,2.909a18.064,18.064,0,0,1,5.452-.788c.427,0,.869.012,1.313.037A16.328,16.328,0,0,1,18.02,3.17,6.441,6.441,0,0,1,20.927,5.1M11.8,20.716a19.758,19.758,0,0,1-1.979-.1,13.978,13.978,0,0,1-5.64-1.574,4.459,4.459,0,0,1-1.634-1.379,2.165,2.165,0,0,1-.381-.931c-.044-.554-.037-1.113-.028-1.7a14.313,14.313,0,0,0,6.505,2.384,21.175,21.175,0,0,0,3.071.223c.7,0,1.416-.034,2.128-.1a15.084,15.084,0,0,0,6.987-2.137c.172-.11.338-.227.5-.345v.042a15.54,15.54,0,0,1-.033,1.888,2.22,2.22,0,0,1-.964,1.36,9.761,9.761,0,0,1-3.981,1.821,18.905,18.905,0,0,1-4.55.555m9.563-9.292a2.329,2.329,0,0,1-1.048,1.756,10.325,10.325,0,0,1-4.189,1.859,18.686,18.686,0,0,1-4.319.5,20.545,20.545,0,0,1-2.148-.115,13.816,13.816,0,0,1-5.469-1.566A4.436,4.436,0,0,1,2.55,12.491a2.268,2.268,0,0,1-.387-.968c-.045-.546-.037-1.094-.028-1.673.159.118.323.234.49.343A14.243,14.243,0,0,0,7.989,12.14a21.265,21.265,0,0,0,3.707.324,22.518,22.518,0,0,0,2.316-.121,14.772,14.772,0,0,0,7.361-2.49c0,.543.007,1.058-.009,1.571"
						transform="translate(0 0)"
						fill="#b8b8c6"
					/>
				</g>
			</g>

			{/* ???????????? 4??? ????????? */}
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
				id="??????_55"
				data-name="?????? 55"
				d="M1668.658,2723.428h38.783"
				transform="translate(29.074 -4)"
				fill="none"
				stroke="#b8b8c6"
				stroke-linecap="round"
				stroke-width="2"
				stroke-dasharray="1 5"
			/>
			<path
				id="??????_57"
				data-name="?????? 57"
				d="M1272.5,2476.5s-4.49,29.784-46.5,33.991S1178.5,2560,1178.5,2560"
				transform="translate(-92 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_104"
				data-name="?????? 104"
				d="M1272.5,2476.5s-4.49,25.5-46.5,29.1-47.5,42.4-47.5,42.4"
				transform="translate(-92 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_182"
				data-name="?????? 182"
				d="M1272.5,2476.5s-4.49,28.76-46.5,32.822-47.5,47.812-47.5,47.812"
				transform="translate(-92 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_58"
				data-name="?????? 58"
				d="M1178.5,2476.5s3.515,33.829,145.676,33.991S1473,2560,1473,2560"
				transform="translate(2 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_111"
				data-name="?????? 111"
				d="M1178.5,2476.5s3.515,28.966,145.676,29.1S1473,2548,1473,2548"
				transform="translate(2 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_214"
				data-name="?????? 214"
				d="M1178.5,2476.5s3.515,32.666,145.676,32.822S1473,2557.133,1473,2557.133"
				transform="translate(2 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_59"
				data-name="?????? 59"
				d="M1178.5,2476.5s4.672,33.829,193.658,33.991S1570,2560,1570,2560"
                transform="translate(2 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_112"
				data-name="?????? 112"
				d="M1178.5,2476.5s4.672,28.966,193.658,29.1S1570,2548,1570,2548"
				transform="translate(2 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_215"
				data-name="?????? 215"
				d="M1178.5,2476.5s4.672,32.666,193.658,32.822S1570,2557.133,1570,2557.133"
				transform="translate(2 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_60"
				data-name="?????? 60"
				d="M1178.5,2476.5s5.824,33.829,241.392,33.991S1666.5,2560,1666.5,2560"
				transform="translate(2 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_113"
				data-name="?????? 113"
				d="M1178.5,2476.5s5.824,28.966,241.392,29.1S1666.5,2548,1666.5,2548"
				transform="translate(2 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_216"
				data-name="?????? 216"
				d="M1178.5,2476.5s5.824,32.666,241.392,32.822,246.608,47.812,246.608,47.812"
				transform="translate(2 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_61"
				data-name="?????? 61"
				d="M1178.5,2476.5s6.981,33.829,289.374,33.991S1763.5,2560,1763.5,2560"
				transform="translate(2 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_114"
				data-name="?????? 114"
				d="M1178.5,2476.5s6.981,28.966,289.374,29.1S1763.5,2548,1763.5,2548"
				transform="translate(2 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_217"
				data-name="?????? 217"
				d="M1178.5,2476.5s6.981,32.666,289.374,32.822,295.626,47.812,295.626,47.812"
				transform="translate(2 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_62"
				data-name="?????? 62"
				d="M1369.5,2476.5s-2.28,33.829-94.479,33.991S1178.5,2560,1178.5,2560"
				transform="translate(-189 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_101"
				data-name="?????? 101"
				d="M1369.5,2476.5s-2.28,28.966-94.479,29.1S1178.5,2548,1178.5,2548"
				transform="translate(-189 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_183"
				data-name="?????? 183"
				d="M1369.5,2476.5s-2.28,32.666-94.479,32.822-96.521,47.812-96.521,47.812"
				transform="translate(-189 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_63"
				data-name="?????? 63"
				d="M1178.5,2476.5s2.357,33.829,97.694,33.991S1376,2560,1376,2560"
				transform="translate(2 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_115"
				data-name="?????? 115"
				d="M1178.5,2476.5s2.357,28.966,97.694,29.1S1376,2548,1376,2548"
				transform="translate(2 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_218"
				data-name="?????? 218"
				d="M1178.5,2476.5s2.357,32.666,97.694,32.822S1376,2557.133,1376,2557.133"
				transform="translate(2 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_64"
				data-name="?????? 64"
				d="M1178.5,2476.5s1.205,33.829,49.96,33.991S1279.5,2560,1279.5,2560"
				transform="translate(2 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_116"
				data-name="?????? 116"
				d="M1178.5,2476.5s1.205,28.966,49.96,29.1,51.04,42.4,51.04,42.4"
				transform="translate(2 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_219"
				data-name="?????? 219"
				d="M1178.5,2476.5s1.205,32.666,49.96,32.822,51.04,47.812,51.04,47.812"
				transform="translate(2 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_65"
				data-name="?????? 65"
				d="M1178.5,2476.5s.048,33.829,1.979,33.991S1182.5,2560,1182.5,2560"
				transform="translate(2 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_117"
				data-name="?????? 117"
				d="M1178.5,2476.5s.048,28.966,1.979,29.1,2.021,42.4,2.021,42.4"
				transform="translate(2 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_220"
				data-name="?????? 220"
				d="M1178.5,2476.5s.048,32.666,1.979,32.822,2.021,47.812,2.021,47.812"
				transform="translate(2 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_66"
				data-name="?????? 66"
				d="M1178.5,2476.5s5.788,33.829,239.908,33.991S1663.5,2560,1663.5,2560"
				transform="translate(102 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_121"
				data-name="?????? 121"
				d="M1178.5,2476.5s5.788,28.966,239.908,29.1S1663.5,2548,1663.5,2548"
				transform="translate(102 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_226"
				data-name="?????? 226"
				d="M1178.5,2476.5s5.788,32.666,239.908,32.822,245.092,47.812,245.092,47.812"
				transform="translate(102 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_67"
				data-name="?????? 67"
				d="M1178.5,2476.5s4.636,33.829,192.174,33.991S1567,2560,1567,2560"
				transform="translate(102 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_122"
				data-name="?????? 122"
				d="M1178.5,2476.5s4.636,28.966,192.174,29.1S1567,2548,1567,2548"
				transform="translate(102 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_227"
				data-name="?????? 227"
				d="M1178.5,2476.5s4.636,32.666,192.174,32.822S1567,2557.133,1567,2557.133"
				transform="translate(102 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_68"
				data-name="?????? 68"
				d="M1178.5,2476.5s3.479,33.829,144.192,33.991S1470,2560,1470,2560"
				transform="translate(102 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_123"
				data-name="?????? 123"
				d="M1178.5,2476.5s3.479,28.966,144.192,29.1S1470,2548,1470,2548"
				transform="translate(102 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_228"
				data-name="?????? 228"
				d="M1178.5,2476.5s3.479,32.666,144.192,32.822S1470,2557.133,1470,2557.133"
				transform="translate(102 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_69"
				data-name="?????? 69"
				d="M1178.5,2476.5s2.321,33.829,96.21,33.991S1373,2560,1373,2560"
				transform="translate(102 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_124"
				data-name="?????? 124"
				d="M1178.5,2476.5s2.321,28.966,96.21,29.1S1373,2548,1373,2548"
				transform="translate(102 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_229"
				data-name="?????? 229"
				d="M1178.5,2476.5s2.321,32.666,96.21,32.822,98.29,47.812,98.29,47.812"
				transform="translate(102 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_70"
				data-name="?????? 70"
				d="M1178.5,2476.5s1.164,33.829,48.229,33.991S1276,2560,1276,2560"
				transform="translate(102 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_125"
				data-name="?????? 125"
				d="M1178.5,2476.5s1.164,28.966,48.229,29.1S1276,2548,1276,2548"
				transform="translate(102 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_230"
				data-name="?????? 230"
				d="M1178.5,2476.5s1.164,32.666,48.229,32.822S1276,2557.133,1276,2557.133"
				transform="translate(102 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_71"
				data-name="?????? 71"
				d="M1178.5,2476.5s.012,33.829.495,33.991.505,49.514.505,49.514"
				transform="translate(102 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_126"
				data-name="?????? 126"
				d="M1178.5,2476.5s.012,28.966.495,29.1.505,42.4.505,42.4"
				transform="translate(102 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_231"
				data-name="?????? 231"
				d="M1178.5,2476.5s.012,32.666.495,32.822.505,47.812.505,47.812"
				transform="translate(102 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_72"
				data-name="?????? 72"
				d="M1274.5,2476.5s-1.146,33.829-47.487,33.991S1178.5,2560,1178.5,2560"
				transform="translate(6 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_118"
				data-name="?????? 118"
				d="M1274.5,2476.5s-1.146,28.966-47.487,29.1S1178.5,2548,1178.5,2548"
				transform="translate(6 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_221"
				data-name="?????? 221"
				d="M1274.5,2476.5s-1.146,32.666-47.487,32.822-48.513,47.812-48.513,47.812"
				transform="translate(6 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_73"
				data-name="?????? 73"
				d="M1371.5,2476.5s-2.3,33.829-95.469,33.991S1178.5,2560,1178.5,2560"
				transform="translate(-91 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_105"
				data-name="?????? 105"
				d="M1371.5,2476.5s-2.3,28.966-95.469,29.1S1178.5,2548,1178.5,2548"
				transform="translate(-91 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_184"
				data-name="?????? 184"
				d="M1371.5,2476.5s-2.3,32.666-95.469,32.822-97.531,47.812-97.531,47.812"
				transform="translate(-91 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_102"
				data-name="?????? 102"
				d="M1469.5,2476.5s-3.473,28.966-143.945,29.1S1178.5,2548,1178.5,2548"
				transform="translate(-189 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_185"
				data-name="?????? 185"
				d="M1469.5,2476.5s-3.473,32.666-143.945,32.822-147.055,47.812-147.055,47.812"
				transform="translate(-189 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_75"
				data-name="?????? 75"
				d="M1178.5,2476.5s4.625,33.829,191.679,33.991S1566,2560,1566,2560"
				transform="translate(199.5 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_130"
				data-name="?????? 130"
				d="M1178.5,2476.5s4.625,28.966,191.679,29.1S1566,2548,1566,2548"
				transform="translate(199.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_237"
				data-name="?????? 237"
				d="M1178.5,2476.5s4.625,32.666,191.679,32.822S1566,2557.133,1566,2557.133"
				transform="translate(199.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_76"
				data-name="?????? 76"
				d="M1178.5,2476.5s3.461,33.829,143.45,33.991S1468.5,2560,1468.5,2560"
				transform="translate(199.5 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_131"
				data-name="?????? 131"
				d="M1178.5,2476.5s3.461,28.966,143.45,29.1S1468.5,2548,1468.5,2548"
				transform="translate(199.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_238"
				data-name="?????? 238"
				d="M1178.5,2476.5s3.461,32.666,143.45,32.822,146.55,47.812,146.55,47.812"
				transform="translate(199.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_77"
				data-name="?????? 77"
				d="M1178.5,2476.5s2.315,33.829,95.963,33.991S1372.5,2560,1372.5,2560"
				transform="translate(199.5 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_132"
				data-name="?????? 132"
				d="M1178.5,2476.5s2.315,28.966,95.963,29.1S1372.5,2548,1372.5,2548"
				transform="translate(199.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_78"
				data-name="?????? 78"
				d="M1178.5,2476.5s1.158,33.829,47.982,33.991S1275.5,2560,1275.5,2560"
				transform="translate(199.5 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_133"
				data-name="?????? 133"
				d="M1178.5,2476.5s1.158,28.966,47.982,29.1S1275.5,2548,1275.5,2548"
				transform="translate(199.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_240"
				data-name="?????? 240"
				d="M1178.5,2476.5s1.158,32.666,47.982,32.822,49.018,47.812,49.018,47.812"
				transform="translate(199.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_79"
				data-name="?????? 79"
				d="M1179,2476.5s-.006,33.829-.247,33.991S1178.5,2560,1178.5,2560"
				transform="translate(199 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_134"
				data-name="?????? 134"
				d="M1179,2476.5s-.006,28.966-.247,29.1-.253,42.4-.253,42.4"
				transform="translate(199 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_241"
				data-name="?????? 241"
				d="M1179,2476.5s-.006,32.666-.247,32.822-.253,47.812-.253,47.812"
				transform="translate(199 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_80"
				data-name="?????? 80"
				d="M1275,2476.5s-1.152,33.829-47.734,33.991S1178.5,2560,1178.5,2560"
				transform="translate(103 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_127"
				data-name="?????? 127"
				d="M1275,2476.5s-1.152,28.966-47.734,29.1S1178.5,2548,1178.5,2548"
				transform="translate(103 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_232"
				data-name="?????? 232"
				d="M1275,2476.5s-1.152,32.666-47.734,32.822-48.766,47.812-48.766,47.812"
				transform="translate(103 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_81"
				data-name="?????? 81"
				d="M1471.5,2476.5s-3.5,33.829-144.934,33.991S1178.5,2560,1178.5,2560"
				transform="translate(-93.5 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_106"
				data-name="?????? 106"
				d="M1471.5,2476.5s-3.5,28.966-144.934,29.1S1178.5,2548,1178.5,2548"
				transform="translate(-93.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_186"
				data-name="?????? 186"
				d="M1471.5,2476.5s-3.5,32.666-144.934,32.822-148.066,47.812-148.066,47.812"
				transform="translate(-93.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_82"
				data-name="?????? 82"
				d="M1566,2476.5s-4.625,33.829-191.679,33.991S1178.5,2560,1178.5,2560"
				transform="translate(-188 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_103"
				data-name="?????? 103"
				d="M1566,2476.5s-4.625,28.966-191.679,29.1S1178.5,2548,1178.5,2548"
				transform="translate(-188 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_187"
				data-name="?????? 187"
				d="M1566,2476.5s-4.625,32.666-191.679,32.822-195.821,47.812-195.821,47.812"
				transform="translate(-188 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_83"
				data-name="?????? 83"
				d="M1178.5,2476.5s3.467,33.829,143.7,33.991S1469,2560,1469,2560"
				transform="translate(296.5 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_137"
				data-name="?????? 137"
				d="M1178.5,2476.5s3.467,28.966,143.7,29.1S1469,2548,1469,2548"
				transform="translate(296.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_246"
				data-name="?????? 246"
				d="M1178.5,2476.5s3.467,32.666,143.7,32.822,146.8,47.812,146.8,47.812"
				transform="translate(296.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_84"
				data-name="?????? 84"
				d="M1178.5,2476.5s2.3,33.829,95.469,33.991S1371.5,2560,1371.5,2560"
				transform="translate(296.5 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_138"
				data-name="?????? 138"
				d="M1178.5,2476.5s2.3,28.966,95.469,29.1S1371.5,2548,1371.5,2548"
				transform="translate(296.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_247"
				data-name="?????? 247"
				d="M1178.5,2476.5s2.3,32.666,95.469,32.822,97.531,47.812,97.531,47.812"
				transform="translate(296.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_85"
				data-name="?????? 85"
				d="M1178.5,2476.5s1.158,33.829,47.982,33.991S1275.5,2560,1275.5,2560"
				transform="translate(296.5 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_139"
				data-name="?????? 139"
				d="M1178.5,2476.5s1.158,28.966,47.982,29.1S1275.5,2548,1275.5,2548"
				transform="translate(296.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_248"
				data-name="?????? 248"
				d="M1178.5,2476.5s1.158,32.666,47.982,32.822,49.018,47.812,49.018,47.812"
				transform="translate(296.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_86"
				data-name="?????? 86"
				d="M1178.5,2476.5V2560"
				transform="translate(296.5 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_140"
				data-name="?????? 140"
				d="M1178.5,2476.5V2548"
				transform="translate(296.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_249"
				data-name="?????? 249"
				d="M1178.5,2476.5v80.634"
				transform="translate(296.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_87"
				data-name="?????? 87"
				d="M1276.5,2476.5s-1.17,33.829-48.476,33.991S1178.5,2560,1178.5,2560"
				transform="translate(198.5 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_135"
				data-name="?????? 135"
				d="M1276.5,2476.5s-1.17,28.966-48.476,29.1S1178.5,2548,1178.5,2548"
				transform="translate(198.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_242"
				data-name="?????? 242"
				d="M1276.5,2476.5s-1.17,32.666-48.476,32.822-49.524,47.812-49.524,47.812"
				transform="translate(198.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_88"
				data-name="?????? 88"
				d="M1372,2476.5s-2.309,33.829-95.716,33.991S1178.5,2560,1178.5,2560"
				transform="translate(103 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_128"
				data-name="?????? 128"
				d="M1372,2476.5s-2.309,28.966-95.716,29.1S1178.5,2548,1178.5,2548"
				transform="translate(103 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_233"
				data-name="?????? 233"
				d="M1372,2476.5s-2.309,32.666-95.716,32.822-97.784,47.812-97.784,47.812"
				transform="translate(103 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_89"
				data-name="?????? 89"
				d="M1469,2476.5s-3.467,33.829-143.7,33.991S1178.5,2560,1178.5,2560"
				transform="translate(6 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_119"
				data-name="?????? 119"
				d="M1469,2476.5s-3.467,28.966-143.7,29.1-146.8,42.4-146.8,42.4"
				transform="translate(6 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_222"
				data-name="?????? 222"
				d="M1469,2476.5s-3.467,32.666-143.7,32.822-146.8,47.812-146.8,47.812"
				transform="translate(6 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_90"
				data-name="?????? 90"
				d="M1567,2476.5s-4.636,33.829-192.174,33.991S1178.5,2560,1178.5,2560"
				transform="translate(-92 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_107"
				data-name="?????? 107"
				d="M1567,2476.5s-4.636,28.966-192.174,29.1S1178.5,2548,1178.5,2548"
				transform="translate(-92 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_188"
				data-name="?????? 188"
				d="M1567,2476.5s-4.636,32.666-192.174,32.822-196.326,47.812-196.326,47.812"
				transform="translate(-92 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_91"
				data-name="?????? 91"
				d="M1663,2476.5s-5.782,33.829-239.661,33.991S1178.5,2560,1178.5,2560"
				transform="translate(-188 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_108"
				data-name="?????? 108"
				d="M1663,2476.5s-5.782,28.966-239.661,29.1S1178.5,2548,1178.5,2548"
				transform="translate(-188 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_189"
				data-name="?????? 189"
				d="M1663,2476.5s-5.782,32.666-239.661,32.822-244.84,47.812-244.84,47.812"
				transform="translate(-188 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_92"
				data-name="?????? 92"
				d="M1178.5,2476.5s2.321,33.829,96.21,33.991S1373,2560,1373,2560"
				transform="translate(392.5 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_142"
				data-name="?????? 142"
				d="M1178.5,2476.5s2.321,28.966,96.21,29.1S1373,2548,1373,2548"
				transform="translate(392.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_253"
				data-name="?????? 253"
				d="M1178.5,2476.5s2.321,32.666,96.21,32.822,98.29,47.812,98.29,47.812"
				transform="translate(392.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_93"
				data-name="?????? 93"
				d="M1178.5,2476.5s1.164,33.829,48.229,33.991S1276,2560,1276,2560"
				transform="translate(392.5 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_143"
				data-name="?????? 143"
				d="M1178.5,2476.5s1.164,28.966,48.229,29.1S1276,2548,1276,2548"
				transform="translate(392.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_254"
				data-name="?????? 254"
				d="M1178.5,2476.5s1.164,32.666,48.229,32.822S1276,2557.133,1276,2557.133"
				transform="translate(392.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			{/* <path
				id="??????_94"
				data-name="?????? 94"
				d="M1178.5,2476.5s.006,33.829.247,33.991S1179,2560,1179,2560"
				transform="translate(392.5 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_144"
				data-name="?????? 144"
				d="M1178.5,2476.5s.006,28.966.247,29.1.253,42.4.253,42.4"
				transform="translate(392.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_255"
				data-name="?????? 255"
				d="M1178.5,2476.5s.006,32.666.247,32.822.253,47.812.253,47.812"
				transform="translate(392.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/> */}
            <path
				id="??????_94"
				data-name="?????? 94"
				d="M1178.5,2476.5s.006,33.829.247,33.991S1179,2560,1179,2560"
				transform="translate(392.5 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_144"
				data-name="?????? 144"
				d="M1178.5,2476.5s.006,28.966.247,29.1.253,42.4.253,42.4"
				transform="translate(392.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_255"
				data-name="?????? 255"
				d="M1178.5,2476.5s.006,32.666.247,32.822.253,47.812.253,47.812"
				transform="translate(392.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_95"
				data-name="?????? 95"
				d="M1274.5,2476.5s-1.146,33.829-47.487,33.991S1178.5,2560,1178.5,2560"
				transform="translate(296.5 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_141"
				data-name="?????? 141"
				d="M1274.5,2476.5s-1.146,28.966-47.487,29.1S1178.5,2548,1178.5,2548"
				transform="translate(296.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_250"
				data-name="?????? 250"
				d="M1274.5,2476.5s-1.146,32.666-47.487,32.822-48.513,47.812-48.513,47.812"
				transform="translate(296.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_96"
				data-name="?????? 96"
				d="M1371.5,2476.5s-2.3,33.829-95.468,33.991S1178.5,2560,1178.5,2560"
				transform="translate(199.5 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_136"
				data-name="?????? 136"
				d="M1371.5,2476.5s-2.3,28.966-95.468,29.1S1178.5,2548,1178.5,2548"
				transform="translate(199.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_243"
				data-name="?????? 243"
				d="M1371.5,2476.5s-2.3,32.666-95.468,32.822-97.531,47.812-97.531,47.812"
				transform="translate(199.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_97"
				data-name="?????? 97"
				d="M1469,2476.5s-3.467,33.829-143.7,33.991S1178.5,2560,1178.5,2560"
				transform="translate(102 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_129"
				data-name="?????? 129"
				d="M1469,2476.5s-3.467,28.966-143.7,29.1-146.8,42.4-146.8,42.4"
				transform="translate(102 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_234"
				data-name="?????? 234"
				d="M1469,2476.5s-3.467,32.666-143.7,32.822-146.8,47.812-146.8,47.812"
				transform="translate(102 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_98"
				data-name="?????? 98"
				d="M1565,2476.5s-4.613,33.829-191.184,33.991S1178.5,2560,1178.5,2560"
				transform="translate(6 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_120"
				data-name="?????? 120"
				d="M1565,2476.5s-4.613,28.966-191.184,29.1S1178.5,2548,1178.5,2548"
				transform="translate(6 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_223"
				data-name="?????? 223"
				d="M1565,2476.5s-4.613,32.666-191.184,32.822-195.316,47.812-195.316,47.812"
				transform="translate(6 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_99"
				data-name="?????? 99"
				d="M1662,2476.5s-5.77,33.829-239.166,33.991S1178.5,2560,1178.5,2560"
				transform="translate(-91 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_109"
				data-name="?????? 109"
				d="M1662,2476.5s-5.77,28.966-239.166,29.1S1178.5,2548,1178.5,2548"
				transform="translate(-91 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_190"
				data-name="?????? 190"
				d="M1662,2476.5s-5.77,32.666-239.166,32.822-244.334,47.812-244.334,47.812"
				transform="translate(-91 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_100"
				data-name="?????? 100"
				d="M1759,2476.5s-6.928,33.829-287.147,33.991S1178.5,2560,1178.5,2560"
				transform="translate(-188 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_110"
				data-name="?????? 110"
				d="M1759,2476.5s-6.928,28.966-287.147,29.1S1178.5,2548,1178.5,2548"
				transform="translate(-188 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_191"
				data-name="?????? 191"
				d="M1759,2476.5s-6.928,32.666-287.147,32.822-293.352,47.812-293.352,47.812"
				transform="translate(-188 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_145"
				data-name="?????? 145"
				d="M1274,2476.5s-2.408,21.636-47.24,29.1-48.26,42.4-48.26,42.4"
				transform="translate(-189 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_192"
				data-name="?????? 192"
				d="M1274,2476.5s-2.408,24.4-47.24,32.822-48.26,47.812-48.26,47.812"
				transform="translate(-189 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_146"
				data-name="?????? 146"
				d="M1178.5,2476.5s.024,28.966.989,29.1,1.011,42.4,1.011,42.4"
				transform="translate(-93.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_193"
				data-name="?????? 193"
				d="M1178.5,2476.5s.024,32.666.989,32.822,1.011,47.812,1.011,47.812"
				transform="translate(-93.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_147"
				data-name="?????? 147"
				d="M1178.5,2476.5s1.188,28.966,49.218,29.1S1278,2548,1278,2548"
				transform="translate(-93.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_194"
				data-name="?????? 194"
				d="M1178.5,2476.5s1.188,32.666,49.218,32.822S1278,2557.133,1278,2557.133"
				transform="translate(-93.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_148"
				data-name="?????? 148"
				d="M1178.5,2476.5s2.345,28.966,97.2,29.1S1375,2548,1375,2548"
				transform="translate(-93.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_195"
				data-name="?????? 195"
				d="M1178.5,2476.5s2.345,32.666,97.2,32.822,99.3,47.812,99.3,47.812"
				transform="translate(-93.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_149"
				data-name="?????? 149"
				d="M1178.5,2476.5s3.5,28.966,145.058,29.1S1471.75,2548,1471.75,2548"
				transform="translate(-93.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_196"
				data-name="?????? 196"
				d="M1178.5,2476.5s3.5,32.666,145.058,32.822,148.192,47.812,148.192,47.812"
				transform="translate(-93.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_150"
				data-name="?????? 150"
				d="M1178.5,2476.5s4.654,28.966,192.916,29.1S1568.5,2548,1568.5,2548"
				transform="translate(-93.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_197"
				data-name="?????? 197"
				d="M1178.5,2476.5s4.654,32.666,192.916,32.822,197.084,47.812,197.084,47.812"
				transform="translate(-93.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_151"
				data-name="?????? 151"
				d="M1178.5,2476.5s5.813,28.966,240.9,29.1,246.1,42.4,246.1,42.4"
				transform="translate(-93.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_198"
				data-name="?????? 198"
				d="M1178.5,2476.5s5.813,32.666,240.9,32.822,246.1,47.812,246.1,47.812"
				transform="translate(-93.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_152"
				data-name="?????? 152"
				d="M1178.5,2476.5s6.964,28.966,288.631,29.1S1762,2548,1762,2548"
				transform="translate(-93.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_199"
				data-name="?????? 199"
				d="M1178.5,2476.5s6.964,32.666,288.631,32.822S1762,2557.133,1762,2557.133"
				transform="translate(-93.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_153"
				data-name="?????? 153"
				d="M1178.5,2476.5s8.116,28.966,336.366,29.1S1858.5,2548,1858.5,2548"
				transform="translate(-93.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_200"
				data-name="?????? 200"
				d="M1178.5,2476.5s8.116,32.666,336.366,32.822,343.634,47.812,343.634,47.812"
				transform="translate(-93.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_154"
				data-name="?????? 154"
				d="M1179,2476.5s-.013,21.636-.247,29.1-.253,42.4-.253,42.4"
				transform="translate(-189 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_201"
				data-name="?????? 201"
				d="M1179,2476.5s-.013,24.4-.247,32.822-.253,47.812-.253,47.812"
				transform="translate(-189 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_155"
				data-name="?????? 155"
				d="M1178.5,2476.5s2.445,21.636,47.982,29.1S1275.5,2548,1275.5,2548"
				transform="translate(-188.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_202"
				data-name="?????? 202"
				d="M1178.5,2476.5s2.445,24.4,47.982,32.822,49.018,47.812,49.018,47.812"
				transform="translate(-188.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_156"
				data-name="?????? 156"
				d="M1178.5,2476.5s4.9,21.636,96.211,29.1S1373,2548,1373,2548"
				transform="translate(-188.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_203"
				data-name="?????? 203"
				d="M1178.5,2476.5s4.9,24.4,96.211,32.822,98.29,47.812,98.29,47.812"
				transform="translate(-188.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_157"
				data-name="?????? 157"
				d="M1178.5,2476.5s7.349,21.636,144.192,29.1S1470,2548,1470,2548"
				transform="translate(-188.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_204"
				data-name="?????? 204"
				d="M1178.5,2476.5s7.349,24.4,144.192,32.822S1470,2557.133,1470,2557.133"
				transform="translate(-188.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_205"
				data-name="?????? 205"
				d="M1178.5,2476.5s9.788,24.4,192.05,32.822,196.2,47.812,196.2,47.812"
				transform="translate(-188.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_159"
				data-name="?????? 159"
				d="M1178.5,2476.5s12.227,21.636,239.908,29.1S1663.5,2548,1663.5,2548"
				transform="translate(-188.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_206"
				data-name="?????? 206"
				d="M1178.5,2476.5s12.227,24.4,239.908,32.822,245.092,47.812,245.092,47.812"
				transform="translate(-188.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_160"
				data-name="?????? 160"
				d="M1178.5,2476.5s14.672,21.636,287.89,29.1S1760.5,2548,1760.5,2548"
				transform="translate(-188.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_207"
				data-name="?????? 207"
				d="M1178.5,2476.5s14.672,24.4,287.89,32.822,294.11,47.812,294.11,47.812"
				transform="translate(-188.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_161"
				data-name="?????? 161"
				d="M1178.5,2476.5s17.117,21.636,335.871,29.1S1857.5,2548,1857.5,2548"
				transform="translate(-188.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_208"
				data-name="?????? 208"
				d="M1178.5,2476.5s17.117,24.4,335.871,32.822,343.129,47.812,343.129,47.812"
				transform="translate(-188.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_162"
				data-name="?????? 162"
				d="M1178.5,2476.5s19.563,21.636,383.854,29.1S1954.5,2548,1954.5,2548"
				transform="translate(-188.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_209"
				data-name="?????? 209"
				d="M1178.5,2476.5s19.563,24.4,383.854,32.822,392.146,47.812,392.146,47.812"
				transform="translate(-188.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_163"
				data-name="?????? 163"
				d="M1372,2476.5s-2.309,33.829-95.716,33.991S1178.5,2560,1178.5,2560"
				transform="translate(6 4.501)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_164"
				data-name="?????? 164"
				d="M1178.5,2476.5s1.152,28.966,47.734,29.1S1275,2548,1275,2548"
				transform="translate(490.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_258"
				data-name="?????? 258"
				d="M1178.5,2476.5s1.152,32.666,47.734,32.822S1275,2557.133,1275,2557.133"
				transform="translate(490.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			{/* <path
				id="??????_165"
				data-name="?????? 165"
				d="M1178.5,2476.5s.006,28.966.247,29.1.253,42.4.253,42.4"
				transform="translate(586.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_261"
				data-name="?????? 261"
				d="M1178.5,2476.5s.006,32.666.247,32.822.253,47.812.253,47.812"
				transform="translate(586.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/> */}
            			<path
				id="??????_165"
				data-name="?????? 165"
				d="M1178.5,2476.5s.006,28.966.247,29.1.253,42.4.253,42.4"
				transform="translate(586.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_261"
				data-name="?????? 261"
				d="M1178.5,2476.5s.006,32.666.247,32.822.253,47.812.253,47.812"
				transform="translate(586.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_166"
				data-name="?????? 166"
				d="M1179.5,2476.5s-.012,28.966-.495,29.1-.505,42.4-.505,42.4"
				transform="translate(489.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_259"
				data-name="?????? 259"
				d="M1179.5,2476.5s-.012,32.666-.495,32.822-.505,47.812-.505,47.812"
				transform="translate(489.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_167"
				data-name="?????? 167"
				d="M1276,2476.5s-1.164,28.966-48.229,29.1S1178.5,2548,1178.5,2548"
				transform="translate(393 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_256"
				data-name="?????? 256"
				d="M1276,2476.5s-1.164,32.666-48.229,32.822-49.271,47.812-49.271,47.812"
				transform="translate(393 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_168"
				data-name="?????? 168"
				d="M1372.5,2476.5s-2.315,28.966-95.963,29.1S1178.5,2548,1178.5,2548"
				transform="translate(296.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_251"
				data-name="?????? 251"
				d="M1372.5,2476.5s-2.315,32.666-95.963,32.822-98.037,47.812-98.037,47.812"
				transform="translate(296.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_169"
				data-name="?????? 169"
				d="M1470,2476.5s-3.479,28.966-144.192,29.1S1178.5,2548,1178.5,2548"
				transform="translate(199 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_244"
				data-name="?????? 244"
				d="M1470,2476.5s-3.479,32.666-144.192,32.822-147.308,47.812-147.308,47.812"
				transform="translate(199 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_170"
				data-name="?????? 170"
				d="M1567.5,2476.5s-4.642,28.966-192.421,29.1S1178.5,2548,1178.5,2548"
				transform="translate(101.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_235"
				data-name="?????? 235"
				d="M1567.5,2476.5s-4.642,32.666-192.421,32.822-196.579,47.812-196.579,47.812"
				transform="translate(101.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_171"
				data-name="?????? 171"
				d="M1663,2476.5s-5.782,28.966-239.661,29.1S1178.5,2548,1178.5,2548"
				transform="translate(6 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_224"
				data-name="?????? 224"
				d="M1663,2476.5s-5.782,32.666-239.661,32.822-244.839,47.812-244.839,47.812"
				transform="translate(6 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_172"
				data-name="?????? 172"
				d="M1761,2476.5s-6.952,28.966-288.137,29.1S1178.5,2548,1178.5,2548"
				transform="translate(-92 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_210"
				data-name="?????? 210"
				d="M1761,2476.5s-6.952,32.666-288.137,32.822-294.363,47.812-294.363,47.812"
				transform="translate(-92 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_173"
				data-name="?????? 173"
				d="M1857.5,2476.5s-8.1,28.966-335.871,29.1S1178.5,2548,1178.5,2548"
				transform="translate(-188.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_211"
				data-name="?????? 211"
				d="M1857.5,2476.5s-8.1,32.666-335.871,32.822-343.129,47.812-343.129,47.812"
				transform="translate(-188.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_174"
				data-name="?????? 174"
				d="M1372.75,2476.5s-2.318,28.966-96.087,29.1S1178.5,2548,1178.5,2548"
				transform="translate(392.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_257"
				data-name="?????? 257"
				d="M1372.75,2476.5s-2.318,32.666-96.087,32.822-98.164,47.812-98.164,47.812"
				transform="translate(392.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_175"
				data-name="?????? 175"
				d="M1275.75,2476.5s-1.161,28.966-48.105,29.1S1178.5,2548,1178.5,2548"
				transform="translate(489.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_260"
				data-name="?????? 260"
				d="M1275.75,2476.5s-1.161,32.666-48.105,32.822-49.145,47.812-49.145,47.812"
				transform="translate(489.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_176"
				data-name="?????? 176"
				d="M1468.75,2476.5s-3.464,28.966-143.573,29.1S1178.5,2548,1178.5,2548"
				transform="translate(296.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_252"
				data-name="?????? 252"
				d="M1468.75,2476.5s-3.464,32.666-143.573,32.822-146.677,47.812-146.677,47.812"
				transform="translate(296.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_177"
				data-name="?????? 177"
				d="M1566.25,2476.5s-4.627,28.966-191.8,29.1S1178.5,2548,1178.5,2548"
				transform="translate(199 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_245"
				data-name="?????? 245"
				d="M1566.25,2476.5s-4.627,32.666-191.8,32.822-195.948,47.812-195.948,47.812"
				transform="translate(199 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_178"
				data-name="?????? 178"
				d="M1662.75,2476.5s-5.779,28.966-239.537,29.1S1178.5,2548,1178.5,2548"
				transform="translate(102.5 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_236"
				data-name="?????? 236"
				d="M1662.75,2476.5s-5.779,32.666-239.537,32.822-244.713,47.812-244.713,47.812"
				transform="translate(102.5 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_179"
				data-name="?????? 179"
				d="M1760.5,2476.5s-6.945,28.966-287.889,29.1S1178.5,2548,1178.5,2548"
				transform="translate(4.75 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_225"
				data-name="?????? 225"
				d="M1760.5,2476.5s-6.945,32.666-287.889,32.822-294.111,47.812-294.111,47.812"
				transform="translate(4.75 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_180"
				data-name="?????? 180"
				d="M1857.25,2476.5s-8.1,28.966-335.747,29.1-343,42.4-343,42.4"
				transform="translate(-92 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_212"
				data-name="?????? 212"
				d="M1857.25,2476.5s-8.1,32.666-335.747,32.822-343,47.812-343,47.812"
				transform="translate(-92 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_181"
				data-name="?????? 181"
				d="M1954.25,2476.5s-9.258,28.966-383.729,29.1S1178.5,2548,1178.5,2548"
				transform="translate(-189 159)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_213"
				data-name="?????? 213"
				d="M1954.25,2476.5s-9.258,32.666-383.729,32.822-392.021,47.812-392.021, 47.812"
				transform="translate(-189 302)"
				fill="none"
				stroke="#b8b8c6"
				stroke-width="0.6"
			/>
			<path
				id="??????_56"
				data-name="?????? 56"
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
