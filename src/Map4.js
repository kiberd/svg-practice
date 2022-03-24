import React, { useEffect, useRef, useState } from "react";

import ObjectTextBackground from "./shapes2/ObjectText/ObjectTextBackground.js";
import ObjectText from "./shapes2/ObjectText/ObjectText.js";

import HoneyCombBackground from "./shapes2/HoneyComb/HoneyCombBackground.js";
import HoneyComb from "./shapes2/HoneyComb/HoneyComb.js";

import FirstLineBackground from "./shapes2/FirstLines/FirstLineBackground.js";
import FirstLine from "./shapes2/FirstLines/FirstLine.js";


import FirstLineArrowBackground from "./shapes2/FirstLines/FirstLineArrowBackground.js";
import FirstLineArrow from "./shapes2/FirstLines/FirstLineArrow.js";

import MethodTextBackground from "./shapes2/MethodText/MethodTextBackground.js";
import MethodText from "./shapes2/MethodText/MethodText.js";

import FirstGroupBackground from "./shapes2/SecondLines/FirstGroup/FirstGroupBackground.js";
import FirstGroup from "./shapes2/SecondLines/FirstGroup/FirstGroup.js";

import SecondGroupBackground from "./shapes2/SecondLines/SecondGroup/SecondGroupBackground.js";
import SecondGroup from "./shapes2/SecondLines/SecondGroup/SecondGroup.js";

import ThirdGroupBackground from "./shapes2/SecondLines/ThirdGroup/ThirdGroupBackground.js";
import ThirdGroup from "./shapes2/SecondLines/ThirdGroup/ThirdGroup.js";

import FirstLibraryGroupBackground from "./shapes2/LibraryText/FirstGroup/FirstLibraryGroupBackground.js";
import FirstLibrary from "./shapes2/LibraryText/FirstGroup/FirstLibrary.js";

import SecondLibraryGroupBackground from "./shapes2/LibraryText/SecondGroup/SecondLibraryGroupBackground.js";

import ThridLibraryGroupBackground from "./shapes2/LibraryText/ThirdGroup/ThridLibraryGroupBackground.js";

import Rectangles from "./shapes2/Explanatory/Rectangles.js";




const Map4 = () => {

    const [honeyCombInfo, setHoneyCombInfo] = useState();

    const handleHoneyCombInfo = (data) => {

        // console.log(data);
        setHoneyCombInfo(data);
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
					<text
						id="AI_Data_Set"
						data-name="AI Data Set"
						transform="translate(947 3388.5)"
						fill="#5a5a77"
						font-size="14"
						font-family="Pretendard-Bold, Pretendard"
						font-weight="700"
					>
						<tspan x="0" y="0">
							AI Data Set
						</tspan>
					</text>
					<text
						id="AI_Algorithm_Libarary"
						data-name="AI Algorithm Libarary"
						transform="translate(1389 3388.5)"
						fill="#5a5a77"
						font-size="14"
						font-family="Pretendard-Bold, Pretendard"
						font-weight="700"
					>
						<tspan x="0" y="0">
							AI Algorithm Libarary
						</tspan>
					</text>
					<text
						id="AI_Explanatory_Power"
						data-name="AI Explanatory Power"
						transform="translate(1594 3388.5)"
						fill="#5a5a77"
						font-size="14"
						font-family="Pretendard-Bold, Pretendard"
						font-weight="700"
					>
						<tspan x="0" y="0">
							AI Explanatory Power
						</tspan>
					</text>
					<text
						id="Champion_M1"
						data-name="Champion M1"
						transform="translate(1665 3550.598)"
						fill="#e9e8e8"
						font-size="11"
						font-family="Pretendard-Bold, Pretendard"
						font-weight="700"
					>
						<tspan x="0" y="0">
							Champion M1
						</tspan>
					</text>
					<text
						id="Champion_M2"
						data-name="Champion M2"
						transform="translate(1665 3679.5)"
						fill="#e9e8e8"
						font-size="11"
						font-family="Pretendard-Bold, Pretendard"
						font-weight="700"
					>
						<tspan x="0" y="0">
							Champion M2
						</tspan>
					</text>
					<text
						id="Champion_M3"
						data-name="Champion M3"
						transform="translate(1665 4027.5)"
						fill="#e9e8e8"
						font-size="11"
						font-family="Pretendard-Bold, Pretendard"
						font-weight="700"
					>
						<tspan x="0" y="0">
							Champion M3
						</tspan>
					</text>



                    <ObjectTextBackground />
                    <ObjectText />




                    <FirstLibraryGroupBackground />
                    <FirstLibrary />

                    
                    <SecondLibraryGroupBackground />
                    
                    
                    <ThridLibraryGroupBackground />




                    <MethodTextBackground />
                    <MethodText />



                    <HoneyCombBackground onHandleHoneyCombInfo={handleHoneyCombInfo}/>
                    <HoneyComb honeyCombInfo={honeyCombInfo} />








                    {/* <FirstLineBackground /> */}
                    <FirstLine />

                    {/* <FirstLineArrowBackground /> */}
                    <FirstLineArrow />



					<g
						id="그룹_924"
						data-name="그룹 924"
						transform="translate(-15 -66.902)"
					>
						<g
							id="그룹_919"
							data-name="그룹 919"
							transform="translate(1404 3536.065)"
						>
							<g
								id="그룹_890"
								data-name="그룹 890"
								transform="translate(0.132 6.646)"
							>
								<g
									id="그룹_889"
									data-name="그룹 889"
									clip-path="url(#clip-path)"
								>
									<path
										id="패스_10314"
										data-name="패스 10314"
										d="M14.6,60.073l2.826,7.011-5.313,4.992-8.14-2.019L1.149,63.046l5.313-4.992Z"
										transform="translate(-1.149 -58.054)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_892" data-name="그룹 892">
								<g
									id="그룹_891"
									data-name="그룹 891"
									clip-path="url(#clip-path-2)"
								>
									<path
										id="패스_10316"
										data-name="패스 10316"
										d="M14.6,60.073l2.826,7.011-5.313,4.992-8.14-2.019L1.149,63.046l5.313-4.992Z"
										transform="translate(-1.018 -51.408)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_894"
								data-name="그룹 894"
								transform="translate(2.391 0.202)"
							>
								<g
									id="그룹_893"
									data-name="그룹 893"
									clip-path="url(#clip-path-3)"
								>
									<path
										id="패스_10317"
										data-name="패스 10317"
										d="M34.337,3.784l2.826,7.011L31.85,15.787l-8.14-2.019L20.885,6.757,26.2,1.765Z"
										transform="translate(-20.885 -1.765)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_896" data-name="그룹 896">
								<g
									id="그룹_895"
									data-name="그룹 895"
									clip-path="url(#clip-path-2)"
								>
									<path
										id="패스_10319"
										data-name="패스 10319"
										d="M34.337,3.784l2.826,7.011L31.85,15.787l-8.14-2.019L20.885,6.757,26.2,1.765Z"
										transform="translate(-18.494 -1.563)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_898"
								data-name="그룹 898"
								transform="translate(13.584 2.221)"
							>
								<g
									id="그룹_897"
									data-name="그룹 897"
									clip-path="url(#clip-path-5)"
								>
									<path
										id="패스_10320"
										data-name="패스 10320"
										d="M120.927,19.4l2.826,7.011-2.259,6.444-2.826-7.011Z"
										transform="translate(-118.668 -19.402)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_900" data-name="그룹 900">
								<g
									id="그룹_899"
									data-name="그룹 899"
									clip-path="url(#clip-path-2)"
								>
									<path
										id="패스_10322"
										data-name="패스 10322"
										d="M120.927,19.4l2.826,7.011-2.259,6.444-2.826-7.011Z"
										transform="translate(-105.083 -17.181)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_902"
								data-name="그룹 902"
								transform="translate(11.097 9.232)"
							>
								<g
									id="그룹_901"
									data-name="그룹 901"
									clip-path="url(#clip-path-7)"
								>
									<path
										id="패스_10323"
										data-name="패스 10323"
										d="M104.511,80.646l-2.259,6.444-5.313,4.992L99.2,85.638Z"
										transform="translate(-96.939 -80.646)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_904" data-name="그룹 904">
								<g
									id="그룹_903"
									data-name="그룹 903"
									clip-path="url(#clip-path-2)"
								>
									<path
										id="패스_10325"
										data-name="패스 10325"
										d="M104.511,80.646l-2.259,6.444-5.313,4.992L99.2,85.638Z"
										transform="translate(-85.842 -71.414)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_906"
								data-name="그룹 906"
								transform="translate(2.957 12.205)"
							>
								<g
									id="그룹_905"
									data-name="그룹 905"
									clip-path="url(#clip-path-9)"
								>
									<path
										id="패스_10326"
										data-name="패스 10326"
										d="M36.233,108.638l-2.259,6.444-8.14-2.019,2.259-6.444Z"
										transform="translate(-25.834 -106.619)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_908" data-name="그룹 908">
								<g
									id="그룹_907"
									data-name="그룹 907"
									clip-path="url(#clip-path-2)"
								>
									<path
										id="패스_10328"
										data-name="패스 10328"
										d="M36.233,108.638l-2.259,6.444-8.14-2.019,2.259-6.444Z"
										transform="translate(-22.877 -94.414)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_910"
								data-name="그룹 910"
								transform="translate(0.132 5.194)"
							>
								<g
									id="그룹_909"
									data-name="그룹 909"
									clip-path="url(#clip-path-11)"
								>
									<path
										id="패스_10329"
										data-name="패스 10329"
										d="M6.234,52.386,3.975,58.829,1.149,51.819l2.259-6.444Z"
										transform="translate(-1.149 -45.375)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_912" data-name="그룹 912">
								<g
									id="그룹_911"
									data-name="그룹 911"
									clip-path="url(#clip-path-2)"
								>
									<path
										id="패스_10331"
										data-name="패스 10331"
										d="M6.234,52.386,3.975,58.829,1.149,51.819l2.259-6.444Z"
										transform="translate(-1.017 -40.181)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_914"
								data-name="그룹 914"
								transform="translate(0.132 0.202)"
							>
								<g
									id="그룹_913"
									data-name="그룹 913"
									clip-path="url(#clip-path-13)"
								>
									<path
										id="패스_10332"
										data-name="패스 10332"
										d="M3.408,6.757,8.721,1.765,6.462,8.209,1.149,13.2Z"
										transform="translate(-1.149 -1.765)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_916" data-name="그룹 916">
								<g
									id="그룹_915"
									data-name="그룹 915"
									clip-path="url(#clip-path-2)"
								>
									<path
										id="패스_10334"
										data-name="패스 10334"
										d="M3.408,6.757,8.721,1.765,6.462,8.209,1.149,13.2Z"
										transform="translate(-1.018 -1.563)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_918"
								data-name="그룹 918"
								transform="translate(5.444 0.202)"
							>
								<g
									id="그룹_917"
									data-name="그룹 917"
									clip-path="url(#clip-path-15)"
								>
									<path
										id="패스_10335"
										data-name="패스 10335"
										d="M49.821,1.765l8.14,2.019L55.7,10.228l-8.14-2.019Z"
										transform="translate(-47.562 -1.765)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<path
								id="패스_10337"
								data-name="패스 10337"
								d="M49.821,1.765l8.14,2.019L55.7,10.228l-8.14-2.019Z"
								transform="translate(-42.117 -1.563)"
								fill="none"
								stroke="#ffdede"
								stroke-miterlimit="10"
								stroke-width="1"
							/>
						</g>
						<g
							id="그룹_920"
							data-name="그룹 920"
							transform="translate(1404 3579.065)"
						>
							<g
								id="그룹_890-2"
								data-name="그룹 890"
								transform="translate(0.132 6.646)"
							>
								<g
									id="그룹_889-2"
									data-name="그룹 889"
									clip-path="url(#clip-path)"
								>
									<path
										id="패스_10314-2"
										data-name="패스 10314"
										d="M14.6,60.073l2.826,7.011-5.313,4.992-8.14-2.019L1.149,63.046l5.313-4.992Z"
										transform="translate(-1.149 -58.054)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_892-2" data-name="그룹 892">
								<g
									id="그룹_891-2"
									data-name="그룹 891"
									clip-path="url(#clip-path-2)"
								>
									<path
										id="패스_10316-2"
										data-name="패스 10316"
										d="M14.6,60.073l2.826,7.011-5.313,4.992-8.14-2.019L1.149,63.046l5.313-4.992Z"
										transform="translate(-1.018 -51.408)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_894-2"
								data-name="그룹 894"
								transform="translate(2.391 0.202)"
							>
								<g
									id="그룹_893-2"
									data-name="그룹 893"
									clip-path="url(#clip-path-3)"
								>
									<path
										id="패스_10317-2"
										data-name="패스 10317"
										d="M34.337,3.784l2.826,7.011L31.85,15.787l-8.14-2.019L20.885,6.757,26.2,1.765Z"
										transform="translate(-20.885 -1.765)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_896-2" data-name="그룹 896">
								<g
									id="그룹_895-2"
									data-name="그룹 895"
									clip-path="url(#clip-path-2)"
								>
									<path
										id="패스_10319-2"
										data-name="패스 10319"
										d="M34.337,3.784l2.826,7.011L31.85,15.787l-8.14-2.019L20.885,6.757,26.2,1.765Z"
										transform="translate(-18.494 -1.563)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_898-2"
								data-name="그룹 898"
								transform="translate(13.584 2.221)"
							>
								<g
									id="그룹_897-2"
									data-name="그룹 897"
									clip-path="url(#clip-path-5)"
								>
									<path
										id="패스_10320-2"
										data-name="패스 10320"
										d="M120.927,19.4l2.826,7.011-2.259,6.444-2.826-7.011Z"
										transform="translate(-118.668 -19.402)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_900-2" data-name="그룹 900">
								<g
									id="그룹_899-2"
									data-name="그룹 899"
									clip-path="url(#clip-path-2)"
								>
									<path
										id="패스_10322-2"
										data-name="패스 10322"
										d="M120.927,19.4l2.826,7.011-2.259,6.444-2.826-7.011Z"
										transform="translate(-105.083 -17.181)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_902-2"
								data-name="그룹 902"
								transform="translate(11.097 9.232)"
							>
								<g
									id="그룹_901-2"
									data-name="그룹 901"
									clip-path="url(#clip-path-7)"
								>
									<path
										id="패스_10323-2"
										data-name="패스 10323"
										d="M104.511,80.646l-2.259,6.444-5.313,4.992L99.2,85.638Z"
										transform="translate(-96.939 -80.646)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_904-2" data-name="그룹 904">
								<g
									id="그룹_903-2"
									data-name="그룹 903"
									clip-path="url(#clip-path-2)"
								>
									<path
										id="패스_10325-2"
										data-name="패스 10325"
										d="M104.511,80.646l-2.259,6.444-5.313,4.992L99.2,85.638Z"
										transform="translate(-85.842 -71.414)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_906-2"
								data-name="그룹 906"
								transform="translate(2.957 12.205)"
							>
								<g
									id="그룹_905-2"
									data-name="그룹 905"
									clip-path="url(#clip-path-9)"
								>
									<path
										id="패스_10326-2"
										data-name="패스 10326"
										d="M36.233,108.638l-2.259,6.444-8.14-2.019,2.259-6.444Z"
										transform="translate(-25.834 -106.619)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_908-2" data-name="그룹 908">
								<g
									id="그룹_907-2"
									data-name="그룹 907"
									clip-path="url(#clip-path-2)"
								>
									<path
										id="패스_10328-2"
										data-name="패스 10328"
										d="M36.233,108.638l-2.259,6.444-8.14-2.019,2.259-6.444Z"
										transform="translate(-22.877 -94.414)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_910-2"
								data-name="그룹 910"
								transform="translate(0.132 5.194)"
							>
								<g
									id="그룹_909-2"
									data-name="그룹 909"
									clip-path="url(#clip-path-11)"
								>
									<path
										id="패스_10329-2"
										data-name="패스 10329"
										d="M6.234,52.386,3.975,58.829,1.149,51.819l2.259-6.444Z"
										transform="translate(-1.149 -45.375)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_912-2" data-name="그룹 912">
								<g
									id="그룹_911-2"
									data-name="그룹 911"
									clip-path="url(#clip-path-2)"
								>
									<path
										id="패스_10331-2"
										data-name="패스 10331"
										d="M6.234,52.386,3.975,58.829,1.149,51.819l2.259-6.444Z"
										transform="translate(-1.017 -40.181)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_914-2"
								data-name="그룹 914"
								transform="translate(0.132 0.202)"
							>
								<g
									id="그룹_913-2"
									data-name="그룹 913"
									clip-path="url(#clip-path-13)"
								>
									<path
										id="패스_10332-2"
										data-name="패스 10332"
										d="M3.408,6.757,8.721,1.765,6.462,8.209,1.149,13.2Z"
										transform="translate(-1.149 -1.765)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_916-2" data-name="그룹 916">
								<g
									id="그룹_915-2"
									data-name="그룹 915"
									clip-path="url(#clip-path-2)"
								>
									<path
										id="패스_10334-2"
										data-name="패스 10334"
										d="M3.408,6.757,8.721,1.765,6.462,8.209,1.149,13.2Z"
										transform="translate(-1.018 -1.563)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_918-2"
								data-name="그룹 918"
								transform="translate(5.444 0.202)"
							>
								<g
									id="그룹_917-2"
									data-name="그룹 917"
									clip-path="url(#clip-path-15)"
								>
									<path
										id="패스_10335-2"
										data-name="패스 10335"
										d="M49.821,1.765l8.14,2.019L55.7,10.228l-8.14-2.019Z"
										transform="translate(-47.562 -1.765)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<path
								id="패스_10337-2"
								data-name="패스 10337"
								d="M49.821,1.765l8.14,2.019L55.7,10.228l-8.14-2.019Z"
								transform="translate(-42.117 -1.563)"
								fill="none"
								stroke="#ffdede"
								stroke-miterlimit="10"
								stroke-width="1"
							/>
						</g>
						<g
							id="그룹_921"
							data-name="그룹 921"
							transform="translate(1404 3622.065)"
						>
							<g
								id="그룹_890-3"
								data-name="그룹 890"
								transform="translate(0.132 6.646)"
							>
								<g
									id="그룹_889-3"
									data-name="그룹 889"
									clip-path="url(#clip-path)"
								>
									<path
										id="패스_10314-3"
										data-name="패스 10314"
										d="M14.6,60.073l2.826,7.011-5.313,4.992-8.14-2.019L1.149,63.046l5.313-4.992Z"
										transform="translate(-1.149 -58.054)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_892-3" data-name="그룹 892">
								<g
									id="그룹_891-3"
									data-name="그룹 891"
									clip-path="url(#clip-path-2)"
								>
									<path
										id="패스_10316-3"
										data-name="패스 10316"
										d="M14.6,60.073l2.826,7.011-5.313,4.992-8.14-2.019L1.149,63.046l5.313-4.992Z"
										transform="translate(-1.018 -51.408)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_894-3"
								data-name="그룹 894"
								transform="translate(2.391 0.202)"
							>
								<g
									id="그룹_893-3"
									data-name="그룹 893"
									clip-path="url(#clip-path-3)"
								>
									<path
										id="패스_10317-3"
										data-name="패스 10317"
										d="M34.337,3.784l2.826,7.011L31.85,15.787l-8.14-2.019L20.885,6.757,26.2,1.765Z"
										transform="translate(-20.885 -1.765)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_896-3" data-name="그룹 896">
								<g
									id="그룹_895-3"
									data-name="그룹 895"
									clip-path="url(#clip-path-2)"
								>
									<path
										id="패스_10319-3"
										data-name="패스 10319"
										d="M34.337,3.784l2.826,7.011L31.85,15.787l-8.14-2.019L20.885,6.757,26.2,1.765Z"
										transform="translate(-18.494 -1.563)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_898-3"
								data-name="그룹 898"
								transform="translate(13.584 2.221)"
							>
								<g
									id="그룹_897-3"
									data-name="그룹 897"
									clip-path="url(#clip-path-5)"
								>
									<path
										id="패스_10320-3"
										data-name="패스 10320"
										d="M120.927,19.4l2.826,7.011-2.259,6.444-2.826-7.011Z"
										transform="translate(-118.668 -19.402)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_900-3" data-name="그룹 900">
								<g
									id="그룹_899-3"
									data-name="그룹 899"
									clip-path="url(#clip-path-2)"
								>
									<path
										id="패스_10322-3"
										data-name="패스 10322"
										d="M120.927,19.4l2.826,7.011-2.259,6.444-2.826-7.011Z"
										transform="translate(-105.083 -17.181)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_902-3"
								data-name="그룹 902"
								transform="translate(11.097 9.232)"
							>
								<g
									id="그룹_901-3"
									data-name="그룹 901"
									clip-path="url(#clip-path-7)"
								>
									<path
										id="패스_10323-3"
										data-name="패스 10323"
										d="M104.511,80.646l-2.259,6.444-5.313,4.992L99.2,85.638Z"
										transform="translate(-96.939 -80.646)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_904-3" data-name="그룹 904">
								<g
									id="그룹_903-3"
									data-name="그룹 903"
									clip-path="url(#clip-path-2)"
								>
									<path
										id="패스_10325-3"
										data-name="패스 10325"
										d="M104.511,80.646l-2.259,6.444-5.313,4.992L99.2,85.638Z"
										transform="translate(-85.842 -71.414)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_906-3"
								data-name="그룹 906"
								transform="translate(2.957 12.205)"
							>
								<g
									id="그룹_905-3"
									data-name="그룹 905"
									clip-path="url(#clip-path-9)"
								>
									<path
										id="패스_10326-3"
										data-name="패스 10326"
										d="M36.233,108.638l-2.259,6.444-8.14-2.019,2.259-6.444Z"
										transform="translate(-25.834 -106.619)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_908-3" data-name="그룹 908">
								<g
									id="그룹_907-3"
									data-name="그룹 907"
									clip-path="url(#clip-path-2)"
								>
									<path
										id="패스_10328-3"
										data-name="패스 10328"
										d="M36.233,108.638l-2.259,6.444-8.14-2.019,2.259-6.444Z"
										transform="translate(-22.877 -94.414)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_910-3"
								data-name="그룹 910"
								transform="translate(0.132 5.194)"
							>
								<g
									id="그룹_909-3"
									data-name="그룹 909"
									clip-path="url(#clip-path-11)"
								>
									<path
										id="패스_10329-3"
										data-name="패스 10329"
										d="M6.234,52.386,3.975,58.829,1.149,51.819l2.259-6.444Z"
										transform="translate(-1.149 -45.375)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_912-3" data-name="그룹 912">
								<g
									id="그룹_911-3"
									data-name="그룹 911"
									clip-path="url(#clip-path-2)"
								>
									<path
										id="패스_10331-3"
										data-name="패스 10331"
										d="M6.234,52.386,3.975,58.829,1.149,51.819l2.259-6.444Z"
										transform="translate(-1.017 -40.181)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_914-3"
								data-name="그룹 914"
								transform="translate(0.132 0.202)"
							>
								<g
									id="그룹_913-3"
									data-name="그룹 913"
									clip-path="url(#clip-path-13)"
								>
									<path
										id="패스_10332-3"
										data-name="패스 10332"
										d="M3.408,6.757,8.721,1.765,6.462,8.209,1.149,13.2Z"
										transform="translate(-1.149 -1.765)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_916-3" data-name="그룹 916">
								<g
									id="그룹_915-3"
									data-name="그룹 915"
									clip-path="url(#clip-path-2)"
								>
									<path
										id="패스_10334-3"
										data-name="패스 10334"
										d="M3.408,6.757,8.721,1.765,6.462,8.209,1.149,13.2Z"
										transform="translate(-1.018 -1.563)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_918-3"
								data-name="그룹 918"
								transform="translate(5.444 0.202)"
							>
								<g
									id="그룹_917-3"
									data-name="그룹 917"
									clip-path="url(#clip-path-15)"
								>
									<path
										id="패스_10335-3"
										data-name="패스 10335"
										d="M49.821,1.765l8.14,2.019L55.7,10.228l-8.14-2.019Z"
										transform="translate(-47.562 -1.765)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<path
								id="패스_10337-3"
								data-name="패스 10337"
								d="M49.821,1.765l8.14,2.019L55.7,10.228l-8.14-2.019Z"
								transform="translate(-42.117 -1.563)"
								fill="none"
								stroke="#ffdede"
								stroke-miterlimit="10"
								stroke-width="1"
							/>
						</g>
						<g
							id="그룹_922"
							data-name="그룹 922"
							transform="translate(1404 3665.065)"
						>
							<g
								id="그룹_890-4"
								data-name="그룹 890"
								transform="translate(0.132 6.646)"
							>
								<g
									id="그룹_889-4"
									data-name="그룹 889"
									clip-path="url(#clip-path)"
								>
									<path
										id="패스_10314-4"
										data-name="패스 10314"
										d="M14.6,60.073l2.826,7.011-5.313,4.992-8.14-2.019L1.149,63.046l5.313-4.992Z"
										transform="translate(-1.149 -58.054)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_892-4" data-name="그룹 892">
								<g
									id="그룹_891-4"
									data-name="그룹 891"
									clip-path="url(#clip-path-2)"
								>
									<path
										id="패스_10316-4"
										data-name="패스 10316"
										d="M14.6,60.073l2.826,7.011-5.313,4.992-8.14-2.019L1.149,63.046l5.313-4.992Z"
										transform="translate(-1.018 -51.408)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_894-4"
								data-name="그룹 894"
								transform="translate(2.391 0.202)"
							>
								<g
									id="그룹_893-4"
									data-name="그룹 893"
									clip-path="url(#clip-path-3)"
								>
									<path
										id="패스_10317-4"
										data-name="패스 10317"
										d="M34.337,3.784l2.826,7.011L31.85,15.787l-8.14-2.019L20.885,6.757,26.2,1.765Z"
										transform="translate(-20.885 -1.765)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_896-4" data-name="그룹 896">
								<g
									id="그룹_895-4"
									data-name="그룹 895"
									clip-path="url(#clip-path-2)"
								>
									<path
										id="패스_10319-4"
										data-name="패스 10319"
										d="M34.337,3.784l2.826,7.011L31.85,15.787l-8.14-2.019L20.885,6.757,26.2,1.765Z"
										transform="translate(-18.494 -1.563)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_898-4"
								data-name="그룹 898"
								transform="translate(13.584 2.221)"
							>
								<g
									id="그룹_897-4"
									data-name="그룹 897"
									clip-path="url(#clip-path-5)"
								>
									<path
										id="패스_10320-4"
										data-name="패스 10320"
										d="M120.927,19.4l2.826,7.011-2.259,6.444-2.826-7.011Z"
										transform="translate(-118.668 -19.402)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_900-4" data-name="그룹 900">
								<g
									id="그룹_899-4"
									data-name="그룹 899"
									clip-path="url(#clip-path-2)"
								>
									<path
										id="패스_10322-4"
										data-name="패스 10322"
										d="M120.927,19.4l2.826,7.011-2.259,6.444-2.826-7.011Z"
										transform="translate(-105.083 -17.181)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_902-4"
								data-name="그룹 902"
								transform="translate(11.097 9.232)"
							>
								<g
									id="그룹_901-4"
									data-name="그룹 901"
									clip-path="url(#clip-path-7)"
								>
									<path
										id="패스_10323-4"
										data-name="패스 10323"
										d="M104.511,80.646l-2.259,6.444-5.313,4.992L99.2,85.638Z"
										transform="translate(-96.939 -80.646)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_904-4" data-name="그룹 904">
								<g
									id="그룹_903-4"
									data-name="그룹 903"
									clip-path="url(#clip-path-2)"
								>
									<path
										id="패스_10325-4"
										data-name="패스 10325"
										d="M104.511,80.646l-2.259,6.444-5.313,4.992L99.2,85.638Z"
										transform="translate(-85.842 -71.414)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_906-4"
								data-name="그룹 906"
								transform="translate(2.957 12.205)"
							>
								<g
									id="그룹_905-4"
									data-name="그룹 905"
									clip-path="url(#clip-path-9)"
								>
									<path
										id="패스_10326-4"
										data-name="패스 10326"
										d="M36.233,108.638l-2.259,6.444-8.14-2.019,2.259-6.444Z"
										transform="translate(-25.834 -106.619)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_908-4" data-name="그룹 908">
								<g
									id="그룹_907-4"
									data-name="그룹 907"
									clip-path="url(#clip-path-2)"
								>
									<path
										id="패스_10328-4"
										data-name="패스 10328"
										d="M36.233,108.638l-2.259,6.444-8.14-2.019,2.259-6.444Z"
										transform="translate(-22.877 -94.414)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_910-4"
								data-name="그룹 910"
								transform="translate(0.132 5.194)"
							>
								<g
									id="그룹_909-4"
									data-name="그룹 909"
									clip-path="url(#clip-path-11)"
								>
									<path
										id="패스_10329-4"
										data-name="패스 10329"
										d="M6.234,52.386,3.975,58.829,1.149,51.819l2.259-6.444Z"
										transform="translate(-1.149 -45.375)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_912-4" data-name="그룹 912">
								<g
									id="그룹_911-4"
									data-name="그룹 911"
									clip-path="url(#clip-path-2)"
								>
									<path
										id="패스_10331-4"
										data-name="패스 10331"
										d="M6.234,52.386,3.975,58.829,1.149,51.819l2.259-6.444Z"
										transform="translate(-1.017 -40.181)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_914-4"
								data-name="그룹 914"
								transform="translate(0.132 0.202)"
							>
								<g
									id="그룹_913-4"
									data-name="그룹 913"
									clip-path="url(#clip-path-13)"
								>
									<path
										id="패스_10332-4"
										data-name="패스 10332"
										d="M3.408,6.757,8.721,1.765,6.462,8.209,1.149,13.2Z"
										transform="translate(-1.149 -1.765)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_916-4" data-name="그룹 916">
								<g
									id="그룹_915-4"
									data-name="그룹 915"
									clip-path="url(#clip-path-2)"
								>
									<path
										id="패스_10334-4"
										data-name="패스 10334"
										d="M3.408,6.757,8.721,1.765,6.462,8.209,1.149,13.2Z"
										transform="translate(-1.018 -1.563)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_918-4"
								data-name="그룹 918"
								transform="translate(5.444 0.202)"
							>
								<g
									id="그룹_917-4"
									data-name="그룹 917"
									clip-path="url(#clip-path-15)"
								>
									<path
										id="패스_10335-4"
										data-name="패스 10335"
										d="M49.821,1.765l8.14,2.019L55.7,10.228l-8.14-2.019Z"
										transform="translate(-47.562 -1.765)"
										fill="none"
										stroke="#ffdede"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<path
								id="패스_10337-4"
								data-name="패스 10337"
								d="M49.821,1.765l8.14,2.019L55.7,10.228l-8.14-2.019Z"
								transform="translate(-42.117 -1.563)"
								fill="none"
								stroke="#ffdede"
								stroke-miterlimit="10"
								stroke-width="1"
							/>
						</g>
					</g>


					<g
						id="그룹_925"
						data-name="그룹 925"
						transform="translate(-15 150.032)"
					>
						<g
							id="그룹_919-2"
							data-name="그룹 919"
							transform="translate(1404 3536.065)"
						>
							<g
								id="그룹_890-5"
								data-name="그룹 890"
								transform="translate(0.132 6.646)"
							>
								<g
									id="그룹_889-5"
									data-name="그룹 889"
									clip-path="url(#clip-path-61)"
								>
									<path
										id="패스_10314-5"
										data-name="패스 10314"
										d="M14.6,60.073l2.826,7.011-5.313,4.992-8.14-2.019L1.149,63.046l5.313-4.992Z"
										transform="translate(-1.149 -58.054)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_892-5" data-name="그룹 892">
								<g
									id="그룹_891-5"
									data-name="그룹 891"
									clip-path="url(#clip-path-62)"
								>
									<path
										id="패스_10316-5"
										data-name="패스 10316"
										d="M14.6,60.073l2.826,7.011-5.313,4.992-8.14-2.019L1.149,63.046l5.313-4.992Z"
										transform="translate(-1.018 -51.408)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_894-5"
								data-name="그룹 894"
								transform="translate(2.391 0.202)"
							>
								<g
									id="그룹_893-5"
									data-name="그룹 893"
									clip-path="url(#clip-path-63)"
								>
									<path
										id="패스_10317-5"
										data-name="패스 10317"
										d="M34.337,3.784l2.826,7.011L31.85,15.787l-8.14-2.019L20.885,6.757,26.2,1.765Z"
										transform="translate(-20.885 -1.765)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_896-5" data-name="그룹 896">
								<g
									id="그룹_895-5"
									data-name="그룹 895"
									clip-path="url(#clip-path-62)"
								>
									<path
										id="패스_10319-5"
										data-name="패스 10319"
										d="M34.337,3.784l2.826,7.011L31.85,15.787l-8.14-2.019L20.885,6.757,26.2,1.765Z"
										transform="translate(-18.494 -1.563)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_898-5"
								data-name="그룹 898"
								transform="translate(13.584 2.221)"
							>
								<g
									id="그룹_897-5"
									data-name="그룹 897"
									clip-path="url(#clip-path-65)"
								>
									<path
										id="패스_10320-5"
										data-name="패스 10320"
										d="M120.927,19.4l2.826,7.011-2.259,6.444-2.826-7.011Z"
										transform="translate(-118.668 -19.402)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_900-5" data-name="그룹 900">
								<g
									id="그룹_899-5"
									data-name="그룹 899"
									clip-path="url(#clip-path-62)"
								>
									<path
										id="패스_10322-5"
										data-name="패스 10322"
										d="M120.927,19.4l2.826,7.011-2.259,6.444-2.826-7.011Z"
										transform="translate(-105.083 -17.181)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_902-5"
								data-name="그룹 902"
								transform="translate(11.097 9.232)"
							>
								<g
									id="그룹_901-5"
									data-name="그룹 901"
									clip-path="url(#clip-path-67)"
								>
									<path
										id="패스_10323-5"
										data-name="패스 10323"
										d="M104.511,80.646l-2.259,6.444-5.313,4.992L99.2,85.638Z"
										transform="translate(-96.939 -80.646)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_904-5" data-name="그룹 904">
								<g
									id="그룹_903-5"
									data-name="그룹 903"
									clip-path="url(#clip-path-62)"
								>
									<path
										id="패스_10325-5"
										data-name="패스 10325"
										d="M104.511,80.646l-2.259,6.444-5.313,4.992L99.2,85.638Z"
										transform="translate(-85.842 -71.414)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_906-5"
								data-name="그룹 906"
								transform="translate(2.957 12.205)"
							>
								<g
									id="그룹_905-5"
									data-name="그룹 905"
									clip-path="url(#clip-path-69)"
								>
									<path
										id="패스_10326-5"
										data-name="패스 10326"
										d="M36.233,108.638l-2.259,6.444-8.14-2.019,2.259-6.444Z"
										transform="translate(-25.834 -106.619)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_908-5" data-name="그룹 908">
								<g
									id="그룹_907-5"
									data-name="그룹 907"
									clip-path="url(#clip-path-62)"
								>
									<path
										id="패스_10328-5"
										data-name="패스 10328"
										d="M36.233,108.638l-2.259,6.444-8.14-2.019,2.259-6.444Z"
										transform="translate(-22.877 -94.414)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_910-5"
								data-name="그룹 910"
								transform="translate(0.132 5.194)"
							>
								<g
									id="그룹_909-5"
									data-name="그룹 909"
									clip-path="url(#clip-path-71)"
								>
									<path
										id="패스_10329-5"
										data-name="패스 10329"
										d="M6.234,52.386,3.975,58.829,1.149,51.819l2.259-6.444Z"
										transform="translate(-1.149 -45.375)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_912-5" data-name="그룹 912">
								<g
									id="그룹_911-5"
									data-name="그룹 911"
									clip-path="url(#clip-path-62)"
								>
									<path
										id="패스_10331-5"
										data-name="패스 10331"
										d="M6.234,52.386,3.975,58.829,1.149,51.819l2.259-6.444Z"
										transform="translate(-1.017 -40.181)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_914-5"
								data-name="그룹 914"
								transform="translate(0.132 0.202)"
							>
								<g
									id="그룹_913-5"
									data-name="그룹 913"
									clip-path="url(#clip-path-73)"
								>
									<path
										id="패스_10332-5"
										data-name="패스 10332"
										d="M3.408,6.757,8.721,1.765,6.462,8.209,1.149,13.2Z"
										transform="translate(-1.149 -1.765)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_916-5" data-name="그룹 916">
								<g
									id="그룹_915-5"
									data-name="그룹 915"
									clip-path="url(#clip-path-62)"
								>
									<path
										id="패스_10334-5"
										data-name="패스 10334"
										d="M3.408,6.757,8.721,1.765,6.462,8.209,1.149,13.2Z"
										transform="translate(-1.018 -1.563)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_918-5"
								data-name="그룹 918"
								transform="translate(5.444 0.202)"
							>
								<g
									id="그룹_917-5"
									data-name="그룹 917"
									clip-path="url(#clip-path-75)"
								>
									<path
										id="패스_10335-5"
										data-name="패스 10335"
										d="M49.821,1.765l8.14,2.019L55.7,10.228l-8.14-2.019Z"
										transform="translate(-47.562 -1.765)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<path
								id="패스_10337-5"
								data-name="패스 10337"
								d="M49.821,1.765l8.14,2.019L55.7,10.228l-8.14-2.019Z"
								transform="translate(-42.117 -1.563)"
								fill="none"
								stroke="#d8d8ff"
								stroke-miterlimit="10"
								stroke-width="1"
							/>
						</g>
						<g
							id="그룹_920-2"
							data-name="그룹 920"
							transform="translate(1404 3579.065)"
						>
							<g
								id="그룹_890-6"
								data-name="그룹 890"
								transform="translate(0.132 6.646)"
							>
								<g
									id="그룹_889-6"
									data-name="그룹 889"
									clip-path="url(#clip-path-61)"
								>
									<path
										id="패스_10314-6"
										data-name="패스 10314"
										d="M14.6,60.073l2.826,7.011-5.313,4.992-8.14-2.019L1.149,63.046l5.313-4.992Z"
										transform="translate(-1.149 -58.054)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_892-6" data-name="그룹 892">
								<g
									id="그룹_891-6"
									data-name="그룹 891"
									clip-path="url(#clip-path-62)"
								>
									<path
										id="패스_10316-6"
										data-name="패스 10316"
										d="M14.6,60.073l2.826,7.011-5.313,4.992-8.14-2.019L1.149,63.046l5.313-4.992Z"
										transform="translate(-1.018 -51.408)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_894-6"
								data-name="그룹 894"
								transform="translate(2.391 0.202)"
							>
								<g
									id="그룹_893-6"
									data-name="그룹 893"
									clip-path="url(#clip-path-63)"
								>
									<path
										id="패스_10317-6"
										data-name="패스 10317"
										d="M34.337,3.784l2.826,7.011L31.85,15.787l-8.14-2.019L20.885,6.757,26.2,1.765Z"
										transform="translate(-20.885 -1.765)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_896-6" data-name="그룹 896">
								<g
									id="그룹_895-6"
									data-name="그룹 895"
									clip-path="url(#clip-path-62)"
								>
									<path
										id="패스_10319-6"
										data-name="패스 10319"
										d="M34.337,3.784l2.826,7.011L31.85,15.787l-8.14-2.019L20.885,6.757,26.2,1.765Z"
										transform="translate(-18.494 -1.563)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_898-6"
								data-name="그룹 898"
								transform="translate(13.584 2.221)"
							>
								<g
									id="그룹_897-6"
									data-name="그룹 897"
									clip-path="url(#clip-path-65)"
								>
									<path
										id="패스_10320-6"
										data-name="패스 10320"
										d="M120.927,19.4l2.826,7.011-2.259,6.444-2.826-7.011Z"
										transform="translate(-118.668 -19.402)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_900-6" data-name="그룹 900">
								<g
									id="그룹_899-6"
									data-name="그룹 899"
									clip-path="url(#clip-path-62)"
								>
									<path
										id="패스_10322-6"
										data-name="패스 10322"
										d="M120.927,19.4l2.826,7.011-2.259,6.444-2.826-7.011Z"
										transform="translate(-105.083 -17.181)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_902-6"
								data-name="그룹 902"
								transform="translate(11.097 9.232)"
							>
								<g
									id="그룹_901-6"
									data-name="그룹 901"
									clip-path="url(#clip-path-67)"
								>
									<path
										id="패스_10323-6"
										data-name="패스 10323"
										d="M104.511,80.646l-2.259,6.444-5.313,4.992L99.2,85.638Z"
										transform="translate(-96.939 -80.646)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_904-6" data-name="그룹 904">
								<g
									id="그룹_903-6"
									data-name="그룹 903"
									clip-path="url(#clip-path-62)"
								>
									<path
										id="패스_10325-6"
										data-name="패스 10325"
										d="M104.511,80.646l-2.259,6.444-5.313,4.992L99.2,85.638Z"
										transform="translate(-85.842 -71.414)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_906-6"
								data-name="그룹 906"
								transform="translate(2.957 12.205)"
							>
								<g
									id="그룹_905-6"
									data-name="그룹 905"
									clip-path="url(#clip-path-69)"
								>
									<path
										id="패스_10326-6"
										data-name="패스 10326"
										d="M36.233,108.638l-2.259,6.444-8.14-2.019,2.259-6.444Z"
										transform="translate(-25.834 -106.619)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_908-6" data-name="그룹 908">
								<g
									id="그룹_907-6"
									data-name="그룹 907"
									clip-path="url(#clip-path-62)"
								>
									<path
										id="패스_10328-6"
										data-name="패스 10328"
										d="M36.233,108.638l-2.259,6.444-8.14-2.019,2.259-6.444Z"
										transform="translate(-22.877 -94.414)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_910-6"
								data-name="그룹 910"
								transform="translate(0.132 5.194)"
							>
								<g
									id="그룹_909-6"
									data-name="그룹 909"
									clip-path="url(#clip-path-71)"
								>
									<path
										id="패스_10329-6"
										data-name="패스 10329"
										d="M6.234,52.386,3.975,58.829,1.149,51.819l2.259-6.444Z"
										transform="translate(-1.149 -45.375)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_912-6" data-name="그룹 912">
								<g
									id="그룹_911-6"
									data-name="그룹 911"
									clip-path="url(#clip-path-62)"
								>
									<path
										id="패스_10331-6"
										data-name="패스 10331"
										d="M6.234,52.386,3.975,58.829,1.149,51.819l2.259-6.444Z"
										transform="translate(-1.017 -40.181)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_914-6"
								data-name="그룹 914"
								transform="translate(0.132 0.202)"
							>
								<g
									id="그룹_913-6"
									data-name="그룹 913"
									clip-path="url(#clip-path-73)"
								>
									<path
										id="패스_10332-6"
										data-name="패스 10332"
										d="M3.408,6.757,8.721,1.765,6.462,8.209,1.149,13.2Z"
										transform="translate(-1.149 -1.765)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_916-6" data-name="그룹 916">
								<g
									id="그룹_915-6"
									data-name="그룹 915"
									clip-path="url(#clip-path-62)"
								>
									<path
										id="패스_10334-6"
										data-name="패스 10334"
										d="M3.408,6.757,8.721,1.765,6.462,8.209,1.149,13.2Z"
										transform="translate(-1.018 -1.563)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_918-6"
								data-name="그룹 918"
								transform="translate(5.444 0.202)"
							>
								<g
									id="그룹_917-6"
									data-name="그룹 917"
									clip-path="url(#clip-path-75)"
								>
									<path
										id="패스_10335-6"
										data-name="패스 10335"
										d="M49.821,1.765l8.14,2.019L55.7,10.228l-8.14-2.019Z"
										transform="translate(-47.562 -1.765)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<path
								id="패스_10337-6"
								data-name="패스 10337"
								d="M49.821,1.765l8.14,2.019L55.7,10.228l-8.14-2.019Z"
								transform="translate(-42.117 -1.563)"
								fill="none"
								stroke="#d8d8ff"
								stroke-miterlimit="10"
								stroke-width="1"
							/>
						</g>
						<g
							id="그룹_921-2"
							data-name="그룹 921"
							transform="translate(1404 3622.065)"
						>
							<g
								id="그룹_890-7"
								data-name="그룹 890"
								transform="translate(0.132 6.646)"
							>
								<g
									id="그룹_889-7"
									data-name="그룹 889"
									clip-path="url(#clip-path-61)"
								>
									<path
										id="패스_10314-7"
										data-name="패스 10314"
										d="M14.6,60.073l2.826,7.011-5.313,4.992-8.14-2.019L1.149,63.046l5.313-4.992Z"
										transform="translate(-1.149 -58.054)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_892-7" data-name="그룹 892">
								<g
									id="그룹_891-7"
									data-name="그룹 891"
									clip-path="url(#clip-path-62)"
								>
									<path
										id="패스_10316-7"
										data-name="패스 10316"
										d="M14.6,60.073l2.826,7.011-5.313,4.992-8.14-2.019L1.149,63.046l5.313-4.992Z"
										transform="translate(-1.018 -51.408)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_894-7"
								data-name="그룹 894"
								transform="translate(2.391 0.202)"
							>
								<g
									id="그룹_893-7"
									data-name="그룹 893"
									clip-path="url(#clip-path-63)"
								>
									<path
										id="패스_10317-7"
										data-name="패스 10317"
										d="M34.337,3.784l2.826,7.011L31.85,15.787l-8.14-2.019L20.885,6.757,26.2,1.765Z"
										transform="translate(-20.885 -1.765)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_896-7" data-name="그룹 896">
								<g
									id="그룹_895-7"
									data-name="그룹 895"
									clip-path="url(#clip-path-62)"
								>
									<path
										id="패스_10319-7"
										data-name="패스 10319"
										d="M34.337,3.784l2.826,7.011L31.85,15.787l-8.14-2.019L20.885,6.757,26.2,1.765Z"
										transform="translate(-18.494 -1.563)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_898-7"
								data-name="그룹 898"
								transform="translate(13.584 2.221)"
							>
								<g
									id="그룹_897-7"
									data-name="그룹 897"
									clip-path="url(#clip-path-65)"
								>
									<path
										id="패스_10320-7"
										data-name="패스 10320"
										d="M120.927,19.4l2.826,7.011-2.259,6.444-2.826-7.011Z"
										transform="translate(-118.668 -19.402)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_900-7" data-name="그룹 900">
								<g
									id="그룹_899-7"
									data-name="그룹 899"
									clip-path="url(#clip-path-62)"
								>
									<path
										id="패스_10322-7"
										data-name="패스 10322"
										d="M120.927,19.4l2.826,7.011-2.259,6.444-2.826-7.011Z"
										transform="translate(-105.083 -17.181)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_902-7"
								data-name="그룹 902"
								transform="translate(11.097 9.232)"
							>
								<g
									id="그룹_901-7"
									data-name="그룹 901"
									clip-path="url(#clip-path-67)"
								>
									<path
										id="패스_10323-7"
										data-name="패스 10323"
										d="M104.511,80.646l-2.259,6.444-5.313,4.992L99.2,85.638Z"
										transform="translate(-96.939 -80.646)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_904-7" data-name="그룹 904">
								<g
									id="그룹_903-7"
									data-name="그룹 903"
									clip-path="url(#clip-path-62)"
								>
									<path
										id="패스_10325-7"
										data-name="패스 10325"
										d="M104.511,80.646l-2.259,6.444-5.313,4.992L99.2,85.638Z"
										transform="translate(-85.842 -71.414)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_906-7"
								data-name="그룹 906"
								transform="translate(2.957 12.205)"
							>
								<g
									id="그룹_905-7"
									data-name="그룹 905"
									clip-path="url(#clip-path-69)"
								>
									<path
										id="패스_10326-7"
										data-name="패스 10326"
										d="M36.233,108.638l-2.259,6.444-8.14-2.019,2.259-6.444Z"
										transform="translate(-25.834 -106.619)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_908-7" data-name="그룹 908">
								<g
									id="그룹_907-7"
									data-name="그룹 907"
									clip-path="url(#clip-path-62)"
								>
									<path
										id="패스_10328-7"
										data-name="패스 10328"
										d="M36.233,108.638l-2.259,6.444-8.14-2.019,2.259-6.444Z"
										transform="translate(-22.877 -94.414)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_910-7"
								data-name="그룹 910"
								transform="translate(0.132 5.194)"
							>
								<g
									id="그룹_909-7"
									data-name="그룹 909"
									clip-path="url(#clip-path-71)"
								>
									<path
										id="패스_10329-7"
										data-name="패스 10329"
										d="M6.234,52.386,3.975,58.829,1.149,51.819l2.259-6.444Z"
										transform="translate(-1.149 -45.375)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_912-7" data-name="그룹 912">
								<g
									id="그룹_911-7"
									data-name="그룹 911"
									clip-path="url(#clip-path-62)"
								>
									<path
										id="패스_10331-7"
										data-name="패스 10331"
										d="M6.234,52.386,3.975,58.829,1.149,51.819l2.259-6.444Z"
										transform="translate(-1.017 -40.181)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_914-7"
								data-name="그룹 914"
								transform="translate(0.132 0.202)"
							>
								<g
									id="그룹_913-7"
									data-name="그룹 913"
									clip-path="url(#clip-path-73)"
								>
									<path
										id="패스_10332-7"
										data-name="패스 10332"
										d="M3.408,6.757,8.721,1.765,6.462,8.209,1.149,13.2Z"
										transform="translate(-1.149 -1.765)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_916-7" data-name="그룹 916">
								<g
									id="그룹_915-7"
									data-name="그룹 915"
									clip-path="url(#clip-path-62)"
								>
									<path
										id="패스_10334-7"
										data-name="패스 10334"
										d="M3.408,6.757,8.721,1.765,6.462,8.209,1.149,13.2Z"
										transform="translate(-1.018 -1.563)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_918-7"
								data-name="그룹 918"
								transform="translate(5.444 0.202)"
							>
								<g
									id="그룹_917-7"
									data-name="그룹 917"
									clip-path="url(#clip-path-75)"
								>
									<path
										id="패스_10335-7"
										data-name="패스 10335"
										d="M49.821,1.765l8.14,2.019L55.7,10.228l-8.14-2.019Z"
										transform="translate(-47.562 -1.765)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<path
								id="패스_10337-7"
								data-name="패스 10337"
								d="M49.821,1.765l8.14,2.019L55.7,10.228l-8.14-2.019Z"
								transform="translate(-42.117 -1.563)"
								fill="none"
								stroke="#d8d8ff"
								stroke-miterlimit="10"
								stroke-width="1"
							/>
						</g>
						<g
							id="그룹_922-2"
							data-name="그룹 922"
							transform="translate(1404 3665.065)"
						>
							<g
								id="그룹_890-8"
								data-name="그룹 890"
								transform="translate(0.132 6.646)"
							>
								<g
									id="그룹_889-8"
									data-name="그룹 889"
									clip-path="url(#clip-path-61)"
								>
									<path
										id="패스_10314-8"
										data-name="패스 10314"
										d="M14.6,60.073l2.826,7.011-5.313,4.992-8.14-2.019L1.149,63.046l5.313-4.992Z"
										transform="translate(-1.149 -58.054)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_892-8" data-name="그룹 892">
								<g
									id="그룹_891-8"
									data-name="그룹 891"
									clip-path="url(#clip-path-62)"
								>
									<path
										id="패스_10316-8"
										data-name="패스 10316"
										d="M14.6,60.073l2.826,7.011-5.313,4.992-8.14-2.019L1.149,63.046l5.313-4.992Z"
										transform="translate(-1.018 -51.408)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_894-8"
								data-name="그룹 894"
								transform="translate(2.391 0.202)"
							>
								<g
									id="그룹_893-8"
									data-name="그룹 893"
									clip-path="url(#clip-path-63)"
								>
									<path
										id="패스_10317-8"
										data-name="패스 10317"
										d="M34.337,3.784l2.826,7.011L31.85,15.787l-8.14-2.019L20.885,6.757,26.2,1.765Z"
										transform="translate(-20.885 -1.765)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_896-8" data-name="그룹 896">
								<g
									id="그룹_895-8"
									data-name="그룹 895"
									clip-path="url(#clip-path-62)"
								>
									<path
										id="패스_10319-8"
										data-name="패스 10319"
										d="M34.337,3.784l2.826,7.011L31.85,15.787l-8.14-2.019L20.885,6.757,26.2,1.765Z"
										transform="translate(-18.494 -1.563)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_898-8"
								data-name="그룹 898"
								transform="translate(13.584 2.221)"
							>
								<g
									id="그룹_897-8"
									data-name="그룹 897"
									clip-path="url(#clip-path-65)"
								>
									<path
										id="패스_10320-8"
										data-name="패스 10320"
										d="M120.927,19.4l2.826,7.011-2.259,6.444-2.826-7.011Z"
										transform="translate(-118.668 -19.402)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_900-8" data-name="그룹 900">
								<g
									id="그룹_899-8"
									data-name="그룹 899"
									clip-path="url(#clip-path-62)"
								>
									<path
										id="패스_10322-8"
										data-name="패스 10322"
										d="M120.927,19.4l2.826,7.011-2.259,6.444-2.826-7.011Z"
										transform="translate(-105.083 -17.181)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_902-8"
								data-name="그룹 902"
								transform="translate(11.097 9.232)"
							>
								<g
									id="그룹_901-8"
									data-name="그룹 901"
									clip-path="url(#clip-path-67)"
								>
									<path
										id="패스_10323-8"
										data-name="패스 10323"
										d="M104.511,80.646l-2.259,6.444-5.313,4.992L99.2,85.638Z"
										transform="translate(-96.939 -80.646)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_904-8" data-name="그룹 904">
								<g
									id="그룹_903-8"
									data-name="그룹 903"
									clip-path="url(#clip-path-62)"
								>
									<path
										id="패스_10325-8"
										data-name="패스 10325"
										d="M104.511,80.646l-2.259,6.444-5.313,4.992L99.2,85.638Z"
										transform="translate(-85.842 -71.414)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_906-8"
								data-name="그룹 906"
								transform="translate(2.957 12.205)"
							>
								<g
									id="그룹_905-8"
									data-name="그룹 905"
									clip-path="url(#clip-path-69)"
								>
									<path
										id="패스_10326-8"
										data-name="패스 10326"
										d="M36.233,108.638l-2.259,6.444-8.14-2.019,2.259-6.444Z"
										transform="translate(-25.834 -106.619)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_908-8" data-name="그룹 908">
								<g
									id="그룹_907-8"
									data-name="그룹 907"
									clip-path="url(#clip-path-62)"
								>
									<path
										id="패스_10328-8"
										data-name="패스 10328"
										d="M36.233,108.638l-2.259,6.444-8.14-2.019,2.259-6.444Z"
										transform="translate(-22.877 -94.414)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_910-8"
								data-name="그룹 910"
								transform="translate(0.132 5.194)"
							>
								<g
									id="그룹_909-8"
									data-name="그룹 909"
									clip-path="url(#clip-path-71)"
								>
									<path
										id="패스_10329-8"
										data-name="패스 10329"
										d="M6.234,52.386,3.975,58.829,1.149,51.819l2.259-6.444Z"
										transform="translate(-1.149 -45.375)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_912-8" data-name="그룹 912">
								<g
									id="그룹_911-8"
									data-name="그룹 911"
									clip-path="url(#clip-path-62)"
								>
									<path
										id="패스_10331-8"
										data-name="패스 10331"
										d="M6.234,52.386,3.975,58.829,1.149,51.819l2.259-6.444Z"
										transform="translate(-1.017 -40.181)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_914-8"
								data-name="그룹 914"
								transform="translate(0.132 0.202)"
							>
								<g
									id="그룹_913-8"
									data-name="그룹 913"
									clip-path="url(#clip-path-73)"
								>
									<path
										id="패스_10332-8"
										data-name="패스 10332"
										d="M3.408,6.757,8.721,1.765,6.462,8.209,1.149,13.2Z"
										transform="translate(-1.149 -1.765)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_916-8" data-name="그룹 916">
								<g
									id="그룹_915-8"
									data-name="그룹 915"
									clip-path="url(#clip-path-62)"
								>
									<path
										id="패스_10334-8"
										data-name="패스 10334"
										d="M3.408,6.757,8.721,1.765,6.462,8.209,1.149,13.2Z"
										transform="translate(-1.018 -1.563)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_918-8"
								data-name="그룹 918"
								transform="translate(5.444 0.202)"
							>
								<g
									id="그룹_917-8"
									data-name="그룹 917"
									clip-path="url(#clip-path-75)"
								>
									<path
										id="패스_10335-8"
										data-name="패스 10335"
										d="M49.821,1.765l8.14,2.019L55.7,10.228l-8.14-2.019Z"
										transform="translate(-47.562 -1.765)"
										fill="none"
										stroke="#d8d8ff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<path
								id="패스_10337-8"
								data-name="패스 10337"
								d="M49.821,1.765l8.14,2.019L55.7,10.228l-8.14-2.019Z"
								transform="translate(-42.117 -1.563)"
								fill="none"
								stroke="#d8d8ff"
								stroke-miterlimit="10"
								stroke-width="1"
							/>
						</g>
					</g>
					<g
						id="그룹_926"
						data-name="그룹 926"
						transform="translate(-15 366.967)"
					>
						<g
							id="그룹_919-3"
							data-name="그룹 919"
							transform="translate(1404 3536.065)"
						>
							<g
								id="그룹_890-9"
								data-name="그룹 890"
								transform="translate(0.132 6.646)"
							>
								<g
									id="그룹_889-9"
									data-name="그룹 889"
									clip-path="url(#clip-path-121)"
								>
									<path
										id="패스_10314-9"
										data-name="패스 10314"
										d="M14.6,60.073l2.826,7.011-5.313,4.992-8.14-2.019L1.149,63.046l5.313-4.992Z"
										transform="translate(-1.149 -58.054)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_892-9" data-name="그룹 892">
								<g
									id="그룹_891-9"
									data-name="그룹 891"
									clip-path="url(#clip-path-122)"
								>
									<path
										id="패스_10316-9"
										data-name="패스 10316"
										d="M14.6,60.073l2.826,7.011-5.313,4.992-8.14-2.019L1.149,63.046l5.313-4.992Z"
										transform="translate(-1.018 -51.408)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_894-9"
								data-name="그룹 894"
								transform="translate(2.391 0.202)"
							>
								<g
									id="그룹_893-9"
									data-name="그룹 893"
									clip-path="url(#clip-path-123)"
								>
									<path
										id="패스_10317-9"
										data-name="패스 10317"
										d="M34.337,3.784l2.826,7.011L31.85,15.787l-8.14-2.019L20.885,6.757,26.2,1.765Z"
										transform="translate(-20.885 -1.765)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_896-9" data-name="그룹 896">
								<g
									id="그룹_895-9"
									data-name="그룹 895"
									clip-path="url(#clip-path-122)"
								>
									<path
										id="패스_10319-9"
										data-name="패스 10319"
										d="M34.337,3.784l2.826,7.011L31.85,15.787l-8.14-2.019L20.885,6.757,26.2,1.765Z"
										transform="translate(-18.494 -1.563)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_898-9"
								data-name="그룹 898"
								transform="translate(13.584 2.221)"
							>
								<g
									id="그룹_897-9"
									data-name="그룹 897"
									clip-path="url(#clip-path-125)"
								>
									<path
										id="패스_10320-9"
										data-name="패스 10320"
										d="M120.927,19.4l2.826,7.011-2.259,6.444-2.826-7.011Z"
										transform="translate(-118.668 -19.402)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_900-9" data-name="그룹 900">
								<g
									id="그룹_899-9"
									data-name="그룹 899"
									clip-path="url(#clip-path-122)"
								>
									<path
										id="패스_10322-9"
										data-name="패스 10322"
										d="M120.927,19.4l2.826,7.011-2.259,6.444-2.826-7.011Z"
										transform="translate(-105.083 -17.181)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_902-9"
								data-name="그룹 902"
								transform="translate(11.097 9.232)"
							>
								<g
									id="그룹_901-9"
									data-name="그룹 901"
									clip-path="url(#clip-path-127)"
								>
									<path
										id="패스_10323-9"
										data-name="패스 10323"
										d="M104.511,80.646l-2.259,6.444-5.313,4.992L99.2,85.638Z"
										transform="translate(-96.939 -80.646)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_904-9" data-name="그룹 904">
								<g
									id="그룹_903-9"
									data-name="그룹 903"
									clip-path="url(#clip-path-122)"
								>
									<path
										id="패스_10325-9"
										data-name="패스 10325"
										d="M104.511,80.646l-2.259,6.444-5.313,4.992L99.2,85.638Z"
										transform="translate(-85.842 -71.414)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_906-9"
								data-name="그룹 906"
								transform="translate(2.957 12.205)"
							>
								<g
									id="그룹_905-9"
									data-name="그룹 905"
									clip-path="url(#clip-path-129)"
								>
									<path
										id="패스_10326-9"
										data-name="패스 10326"
										d="M36.233,108.638l-2.259,6.444-8.14-2.019,2.259-6.444Z"
										transform="translate(-25.834 -106.619)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_908-9" data-name="그룹 908">
								<g
									id="그룹_907-9"
									data-name="그룹 907"
									clip-path="url(#clip-path-122)"
								>
									<path
										id="패스_10328-9"
										data-name="패스 10328"
										d="M36.233,108.638l-2.259,6.444-8.14-2.019,2.259-6.444Z"
										transform="translate(-22.877 -94.414)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_910-9"
								data-name="그룹 910"
								transform="translate(0.132 5.194)"
							>
								<g
									id="그룹_909-9"
									data-name="그룹 909"
									clip-path="url(#clip-path-131)"
								>
									<path
										id="패스_10329-9"
										data-name="패스 10329"
										d="M6.234,52.386,3.975,58.829,1.149,51.819l2.259-6.444Z"
										transform="translate(-1.149 -45.375)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_912-9" data-name="그룹 912">
								<g
									id="그룹_911-9"
									data-name="그룹 911"
									clip-path="url(#clip-path-122)"
								>
									<path
										id="패스_10331-9"
										data-name="패스 10331"
										d="M6.234,52.386,3.975,58.829,1.149,51.819l2.259-6.444Z"
										transform="translate(-1.017 -40.181)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_914-9"
								data-name="그룹 914"
								transform="translate(0.132 0.202)"
							>
								<g
									id="그룹_913-9"
									data-name="그룹 913"
									clip-path="url(#clip-path-133)"
								>
									<path
										id="패스_10332-9"
										data-name="패스 10332"
										d="M3.408,6.757,8.721,1.765,6.462,8.209,1.149,13.2Z"
										transform="translate(-1.149 -1.765)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_916-9" data-name="그룹 916">
								<g
									id="그룹_915-9"
									data-name="그룹 915"
									clip-path="url(#clip-path-122)"
								>
									<path
										id="패스_10334-9"
										data-name="패스 10334"
										d="M3.408,6.757,8.721,1.765,6.462,8.209,1.149,13.2Z"
										transform="translate(-1.018 -1.563)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_918-9"
								data-name="그룹 918"
								transform="translate(5.444 0.202)"
							>
								<g
									id="그룹_917-9"
									data-name="그룹 917"
									clip-path="url(#clip-path-135)"
								>
									<path
										id="패스_10335-9"
										data-name="패스 10335"
										d="M49.821,1.765l8.14,2.019L55.7,10.228l-8.14-2.019Z"
										transform="translate(-47.562 -1.765)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<path
								id="패스_10337-9"
								data-name="패스 10337"
								d="M49.821,1.765l8.14,2.019L55.7,10.228l-8.14-2.019Z"
								transform="translate(-42.117 -1.563)"
								fill="none"
								stroke="#d5ebff"
								stroke-miterlimit="10"
								stroke-width="1"
							/>
						</g>
						<g
							id="그룹_920-3"
							data-name="그룹 920"
							transform="translate(1404 3579.065)"
						>
							<g
								id="그룹_890-10"
								data-name="그룹 890"
								transform="translate(0.132 6.646)"
							>
								<g
									id="그룹_889-10"
									data-name="그룹 889"
									clip-path="url(#clip-path-121)"
								>
									<path
										id="패스_10314-10"
										data-name="패스 10314"
										d="M14.6,60.073l2.826,7.011-5.313,4.992-8.14-2.019L1.149,63.046l5.313-4.992Z"
										transform="translate(-1.149 -58.054)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_892-10" data-name="그룹 892">
								<g
									id="그룹_891-10"
									data-name="그룹 891"
									clip-path="url(#clip-path-122)"
								>
									<path
										id="패스_10316-10"
										data-name="패스 10316"
										d="M14.6,60.073l2.826,7.011-5.313,4.992-8.14-2.019L1.149,63.046l5.313-4.992Z"
										transform="translate(-1.018 -51.408)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_894-10"
								data-name="그룹 894"
								transform="translate(2.391 0.202)"
							>
								<g
									id="그룹_893-10"
									data-name="그룹 893"
									clip-path="url(#clip-path-123)"
								>
									<path
										id="패스_10317-10"
										data-name="패스 10317"
										d="M34.337,3.784l2.826,7.011L31.85,15.787l-8.14-2.019L20.885,6.757,26.2,1.765Z"
										transform="translate(-20.885 -1.765)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_896-10" data-name="그룹 896">
								<g
									id="그룹_895-10"
									data-name="그룹 895"
									clip-path="url(#clip-path-122)"
								>
									<path
										id="패스_10319-10"
										data-name="패스 10319"
										d="M34.337,3.784l2.826,7.011L31.85,15.787l-8.14-2.019L20.885,6.757,26.2,1.765Z"
										transform="translate(-18.494 -1.563)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_898-10"
								data-name="그룹 898"
								transform="translate(13.584 2.221)"
							>
								<g
									id="그룹_897-10"
									data-name="그룹 897"
									clip-path="url(#clip-path-125)"
								>
									<path
										id="패스_10320-10"
										data-name="패스 10320"
										d="M120.927,19.4l2.826,7.011-2.259,6.444-2.826-7.011Z"
										transform="translate(-118.668 -19.402)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_900-10" data-name="그룹 900">
								<g
									id="그룹_899-10"
									data-name="그룹 899"
									clip-path="url(#clip-path-122)"
								>
									<path
										id="패스_10322-10"
										data-name="패스 10322"
										d="M120.927,19.4l2.826,7.011-2.259,6.444-2.826-7.011Z"
										transform="translate(-105.083 -17.181)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_902-10"
								data-name="그룹 902"
								transform="translate(11.097 9.232)"
							>
								<g
									id="그룹_901-10"
									data-name="그룹 901"
									clip-path="url(#clip-path-127)"
								>
									<path
										id="패스_10323-10"
										data-name="패스 10323"
										d="M104.511,80.646l-2.259,6.444-5.313,4.992L99.2,85.638Z"
										transform="translate(-96.939 -80.646)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_904-10" data-name="그룹 904">
								<g
									id="그룹_903-10"
									data-name="그룹 903"
									clip-path="url(#clip-path-122)"
								>
									<path
										id="패스_10325-10"
										data-name="패스 10325"
										d="M104.511,80.646l-2.259,6.444-5.313,4.992L99.2,85.638Z"
										transform="translate(-85.842 -71.414)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_906-10"
								data-name="그룹 906"
								transform="translate(2.957 12.205)"
							>
								<g
									id="그룹_905-10"
									data-name="그룹 905"
									clip-path="url(#clip-path-129)"
								>
									<path
										id="패스_10326-10"
										data-name="패스 10326"
										d="M36.233,108.638l-2.259,6.444-8.14-2.019,2.259-6.444Z"
										transform="translate(-25.834 -106.619)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_908-10" data-name="그룹 908">
								<g
									id="그룹_907-10"
									data-name="그룹 907"
									clip-path="url(#clip-path-122)"
								>
									<path
										id="패스_10328-10"
										data-name="패스 10328"
										d="M36.233,108.638l-2.259,6.444-8.14-2.019,2.259-6.444Z"
										transform="translate(-22.877 -94.414)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_910-10"
								data-name="그룹 910"
								transform="translate(0.132 5.194)"
							>
								<g
									id="그룹_909-10"
									data-name="그룹 909"
									clip-path="url(#clip-path-131)"
								>
									<path
										id="패스_10329-10"
										data-name="패스 10329"
										d="M6.234,52.386,3.975,58.829,1.149,51.819l2.259-6.444Z"
										transform="translate(-1.149 -45.375)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_912-10" data-name="그룹 912">
								<g
									id="그룹_911-10"
									data-name="그룹 911"
									clip-path="url(#clip-path-122)"
								>
									<path
										id="패스_10331-10"
										data-name="패스 10331"
										d="M6.234,52.386,3.975,58.829,1.149,51.819l2.259-6.444Z"
										transform="translate(-1.017 -40.181)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_914-10"
								data-name="그룹 914"
								transform="translate(0.132 0.202)"
							>
								<g
									id="그룹_913-10"
									data-name="그룹 913"
									clip-path="url(#clip-path-133)"
								>
									<path
										id="패스_10332-10"
										data-name="패스 10332"
										d="M3.408,6.757,8.721,1.765,6.462,8.209,1.149,13.2Z"
										transform="translate(-1.149 -1.765)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_916-10" data-name="그룹 916">
								<g
									id="그룹_915-10"
									data-name="그룹 915"
									clip-path="url(#clip-path-122)"
								>
									<path
										id="패스_10334-10"
										data-name="패스 10334"
										d="M3.408,6.757,8.721,1.765,6.462,8.209,1.149,13.2Z"
										transform="translate(-1.018 -1.563)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_918-10"
								data-name="그룹 918"
								transform="translate(5.444 0.202)"
							>
								<g
									id="그룹_917-10"
									data-name="그룹 917"
									clip-path="url(#clip-path-135)"
								>
									<path
										id="패스_10335-10"
										data-name="패스 10335"
										d="M49.821,1.765l8.14,2.019L55.7,10.228l-8.14-2.019Z"
										transform="translate(-47.562 -1.765)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<path
								id="패스_10337-10"
								data-name="패스 10337"
								d="M49.821,1.765l8.14,2.019L55.7,10.228l-8.14-2.019Z"
								transform="translate(-42.117 -1.563)"
								fill="none"
								stroke="#d5ebff"
								stroke-miterlimit="10"
								stroke-width="1"
							/>
						</g>
						<g
							id="그룹_921-3"
							data-name="그룹 921"
							transform="translate(1404 3622.065)"
						>
							<g
								id="그룹_890-11"
								data-name="그룹 890"
								transform="translate(0.132 6.646)"
							>
								<g
									id="그룹_889-11"
									data-name="그룹 889"
									clip-path="url(#clip-path-121)"
								>
									<path
										id="패스_10314-11"
										data-name="패스 10314"
										d="M14.6,60.073l2.826,7.011-5.313,4.992-8.14-2.019L1.149,63.046l5.313-4.992Z"
										transform="translate(-1.149 -58.054)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_892-11" data-name="그룹 892">
								<g
									id="그룹_891-11"
									data-name="그룹 891"
									clip-path="url(#clip-path-122)"
								>
									<path
										id="패스_10316-11"
										data-name="패스 10316"
										d="M14.6,60.073l2.826,7.011-5.313,4.992-8.14-2.019L1.149,63.046l5.313-4.992Z"
										transform="translate(-1.018 -51.408)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_894-11"
								data-name="그룹 894"
								transform="translate(2.391 0.202)"
							>
								<g
									id="그룹_893-11"
									data-name="그룹 893"
									clip-path="url(#clip-path-123)"
								>
									<path
										id="패스_10317-11"
										data-name="패스 10317"
										d="M34.337,3.784l2.826,7.011L31.85,15.787l-8.14-2.019L20.885,6.757,26.2,1.765Z"
										transform="translate(-20.885 -1.765)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_896-11" data-name="그룹 896">
								<g
									id="그룹_895-11"
									data-name="그룹 895"
									clip-path="url(#clip-path-122)"
								>
									<path
										id="패스_10319-11"
										data-name="패스 10319"
										d="M34.337,3.784l2.826,7.011L31.85,15.787l-8.14-2.019L20.885,6.757,26.2,1.765Z"
										transform="translate(-18.494 -1.563)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_898-11"
								data-name="그룹 898"
								transform="translate(13.584 2.221)"
							>
								<g
									id="그룹_897-11"
									data-name="그룹 897"
									clip-path="url(#clip-path-125)"
								>
									<path
										id="패스_10320-11"
										data-name="패스 10320"
										d="M120.927,19.4l2.826,7.011-2.259,6.444-2.826-7.011Z"
										transform="translate(-118.668 -19.402)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_900-11" data-name="그룹 900">
								<g
									id="그룹_899-11"
									data-name="그룹 899"
									clip-path="url(#clip-path-122)"
								>
									<path
										id="패스_10322-11"
										data-name="패스 10322"
										d="M120.927,19.4l2.826,7.011-2.259,6.444-2.826-7.011Z"
										transform="translate(-105.083 -17.181)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_902-11"
								data-name="그룹 902"
								transform="translate(11.097 9.232)"
							>
								<g
									id="그룹_901-11"
									data-name="그룹 901"
									clip-path="url(#clip-path-127)"
								>
									<path
										id="패스_10323-11"
										data-name="패스 10323"
										d="M104.511,80.646l-2.259,6.444-5.313,4.992L99.2,85.638Z"
										transform="translate(-96.939 -80.646)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_904-11" data-name="그룹 904">
								<g
									id="그룹_903-11"
									data-name="그룹 903"
									clip-path="url(#clip-path-122)"
								>
									<path
										id="패스_10325-11"
										data-name="패스 10325"
										d="M104.511,80.646l-2.259,6.444-5.313,4.992L99.2,85.638Z"
										transform="translate(-85.842 -71.414)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_906-11"
								data-name="그룹 906"
								transform="translate(2.957 12.205)"
							>
								<g
									id="그룹_905-11"
									data-name="그룹 905"
									clip-path="url(#clip-path-129)"
								>
									<path
										id="패스_10326-11"
										data-name="패스 10326"
										d="M36.233,108.638l-2.259,6.444-8.14-2.019,2.259-6.444Z"
										transform="translate(-25.834 -106.619)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_908-11" data-name="그룹 908">
								<g
									id="그룹_907-11"
									data-name="그룹 907"
									clip-path="url(#clip-path-122)"
								>
									<path
										id="패스_10328-11"
										data-name="패스 10328"
										d="M36.233,108.638l-2.259,6.444-8.14-2.019,2.259-6.444Z"
										transform="translate(-22.877 -94.414)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_910-11"
								data-name="그룹 910"
								transform="translate(0.132 5.194)"
							>
								<g
									id="그룹_909-11"
									data-name="그룹 909"
									clip-path="url(#clip-path-131)"
								>
									<path
										id="패스_10329-11"
										data-name="패스 10329"
										d="M6.234,52.386,3.975,58.829,1.149,51.819l2.259-6.444Z"
										transform="translate(-1.149 -45.375)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_912-11" data-name="그룹 912">
								<g
									id="그룹_911-11"
									data-name="그룹 911"
									clip-path="url(#clip-path-122)"
								>
									<path
										id="패스_10331-11"
										data-name="패스 10331"
										d="M6.234,52.386,3.975,58.829,1.149,51.819l2.259-6.444Z"
										transform="translate(-1.017 -40.181)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_914-11"
								data-name="그룹 914"
								transform="translate(0.132 0.202)"
							>
								<g
									id="그룹_913-11"
									data-name="그룹 913"
									clip-path="url(#clip-path-133)"
								>
									<path
										id="패스_10332-11"
										data-name="패스 10332"
										d="M3.408,6.757,8.721,1.765,6.462,8.209,1.149,13.2Z"
										transform="translate(-1.149 -1.765)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_916-11" data-name="그룹 916">
								<g
									id="그룹_915-11"
									data-name="그룹 915"
									clip-path="url(#clip-path-122)"
								>
									<path
										id="패스_10334-11"
										data-name="패스 10334"
										d="M3.408,6.757,8.721,1.765,6.462,8.209,1.149,13.2Z"
										transform="translate(-1.018 -1.563)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_918-11"
								data-name="그룹 918"
								transform="translate(5.444 0.202)"
							>
								<g
									id="그룹_917-11"
									data-name="그룹 917"
									clip-path="url(#clip-path-135)"
								>
									<path
										id="패스_10335-11"
										data-name="패스 10335"
										d="M49.821,1.765l8.14,2.019L55.7,10.228l-8.14-2.019Z"
										transform="translate(-47.562 -1.765)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<path
								id="패스_10337-11"
								data-name="패스 10337"
								d="M49.821,1.765l8.14,2.019L55.7,10.228l-8.14-2.019Z"
								transform="translate(-42.117 -1.563)"
								fill="none"
								stroke="#d5ebff"
								stroke-miterlimit="10"
								stroke-width="1"
							/>
						</g>
						<g
							id="그룹_922-3"
							data-name="그룹 922"
							transform="translate(1404 3665.065)"
						>
							<g
								id="그룹_890-12"
								data-name="그룹 890"
								transform="translate(0.132 6.646)"
							>
								<g
									id="그룹_889-12"
									data-name="그룹 889"
									clip-path="url(#clip-path-121)"
								>
									<path
										id="패스_10314-12"
										data-name="패스 10314"
										d="M14.6,60.073l2.826,7.011-5.313,4.992-8.14-2.019L1.149,63.046l5.313-4.992Z"
										transform="translate(-1.149 -58.054)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_892-12" data-name="그룹 892">
								<g
									id="그룹_891-12"
									data-name="그룹 891"
									clip-path="url(#clip-path-122)"
								>
									<path
										id="패스_10316-12"
										data-name="패스 10316"
										d="M14.6,60.073l2.826,7.011-5.313,4.992-8.14-2.019L1.149,63.046l5.313-4.992Z"
										transform="translate(-1.018 -51.408)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_894-12"
								data-name="그룹 894"
								transform="translate(2.391 0.202)"
							>
								<g
									id="그룹_893-12"
									data-name="그룹 893"
									clip-path="url(#clip-path-123)"
								>
									<path
										id="패스_10317-12"
										data-name="패스 10317"
										d="M34.337,3.784l2.826,7.011L31.85,15.787l-8.14-2.019L20.885,6.757,26.2,1.765Z"
										transform="translate(-20.885 -1.765)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_896-12" data-name="그룹 896">
								<g
									id="그룹_895-12"
									data-name="그룹 895"
									clip-path="url(#clip-path-122)"
								>
									<path
										id="패스_10319-12"
										data-name="패스 10319"
										d="M34.337,3.784l2.826,7.011L31.85,15.787l-8.14-2.019L20.885,6.757,26.2,1.765Z"
										transform="translate(-18.494 -1.563)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_898-12"
								data-name="그룹 898"
								transform="translate(13.584 2.221)"
							>
								<g
									id="그룹_897-12"
									data-name="그룹 897"
									clip-path="url(#clip-path-125)"
								>
									<path
										id="패스_10320-12"
										data-name="패스 10320"
										d="M120.927,19.4l2.826,7.011-2.259,6.444-2.826-7.011Z"
										transform="translate(-118.668 -19.402)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_900-12" data-name="그룹 900">
								<g
									id="그룹_899-12"
									data-name="그룹 899"
									clip-path="url(#clip-path-122)"
								>
									<path
										id="패스_10322-12"
										data-name="패스 10322"
										d="M120.927,19.4l2.826,7.011-2.259,6.444-2.826-7.011Z"
										transform="translate(-105.083 -17.181)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_902-12"
								data-name="그룹 902"
								transform="translate(11.097 9.232)"
							>
								<g
									id="그룹_901-12"
									data-name="그룹 901"
									clip-path="url(#clip-path-127)"
								>
									<path
										id="패스_10323-12"
										data-name="패스 10323"
										d="M104.511,80.646l-2.259,6.444-5.313,4.992L99.2,85.638Z"
										transform="translate(-96.939 -80.646)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_904-12" data-name="그룹 904">
								<g
									id="그룹_903-12"
									data-name="그룹 903"
									clip-path="url(#clip-path-122)"
								>
									<path
										id="패스_10325-12"
										data-name="패스 10325"
										d="M104.511,80.646l-2.259,6.444-5.313,4.992L99.2,85.638Z"
										transform="translate(-85.842 -71.414)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_906-12"
								data-name="그룹 906"
								transform="translate(2.957 12.205)"
							>
								<g
									id="그룹_905-12"
									data-name="그룹 905"
									clip-path="url(#clip-path-129)"
								>
									<path
										id="패스_10326-12"
										data-name="패스 10326"
										d="M36.233,108.638l-2.259,6.444-8.14-2.019,2.259-6.444Z"
										transform="translate(-25.834 -106.619)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_908-12" data-name="그룹 908">
								<g
									id="그룹_907-12"
									data-name="그룹 907"
									clip-path="url(#clip-path-122)"
								>
									<path
										id="패스_10328-12"
										data-name="패스 10328"
										d="M36.233,108.638l-2.259,6.444-8.14-2.019,2.259-6.444Z"
										transform="translate(-22.877 -94.414)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_910-12"
								data-name="그룹 910"
								transform="translate(0.132 5.194)"
							>
								<g
									id="그룹_909-12"
									data-name="그룹 909"
									clip-path="url(#clip-path-131)"
								>
									<path
										id="패스_10329-12"
										data-name="패스 10329"
										d="M6.234,52.386,3.975,58.829,1.149,51.819l2.259-6.444Z"
										transform="translate(-1.149 -45.375)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_912-12" data-name="그룹 912">
								<g
									id="그룹_911-12"
									data-name="그룹 911"
									clip-path="url(#clip-path-122)"
								>
									<path
										id="패스_10331-12"
										data-name="패스 10331"
										d="M6.234,52.386,3.975,58.829,1.149,51.819l2.259-6.444Z"
										transform="translate(-1.017 -40.181)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_914-12"
								data-name="그룹 914"
								transform="translate(0.132 0.202)"
							>
								<g
									id="그룹_913-12"
									data-name="그룹 913"
									clip-path="url(#clip-path-133)"
								>
									<path
										id="패스_10332-12"
										data-name="패스 10332"
										d="M3.408,6.757,8.721,1.765,6.462,8.209,1.149,13.2Z"
										transform="translate(-1.149 -1.765)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<g id="그룹_916-12" data-name="그룹 916">
								<g
									id="그룹_915-12"
									data-name="그룹 915"
									clip-path="url(#clip-path-122)"
								>
									<path
										id="패스_10334-12"
										data-name="패스 10334"
										d="M3.408,6.757,8.721,1.765,6.462,8.209,1.149,13.2Z"
										transform="translate(-1.018 -1.563)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="1"
									/>
								</g>
							</g>
							<g
								id="그룹_918-12"
								data-name="그룹 918"
								transform="translate(5.444 0.202)"
							>
								<g
									id="그룹_917-12"
									data-name="그룹 917"
									clip-path="url(#clip-path-135)"
								>
									<path
										id="패스_10335-12"
										data-name="패스 10335"
										d="M49.821,1.765l8.14,2.019L55.7,10.228l-8.14-2.019Z"
										transform="translate(-47.562 -1.765)"
										fill="none"
										stroke="#d5ebff"
										stroke-miterlimit="10"
										stroke-width="0.25"
									/>
								</g>
							</g>
							<path
								id="패스_10337-12"
								data-name="패스 10337"
								d="M49.821,1.765l8.14,2.019L55.7,10.228l-8.14-2.019Z"
								transform="translate(-42.117 -1.563)"
								fill="none"
								stroke="#d5ebff"
								stroke-miterlimit="10"
								stroke-width="1"
							/>
						</g>
					</g>

                    {/* <FirstGroupBackground /> */}
                    <FirstGroup />

                    {/* <SecondGroupBackground /> */}
                    <SecondGroup />

                    {/* <ThirdGroupBackground /> */}
                    <ThirdGroup />


					<line
						id="선_79"
						data-name="선 79"
						y2="35"
						transform="translate(1398.5 3635.961)"
						fill="none"
						stroke="#b8b8c6"
						stroke-linecap="round"
						stroke-width="1"
						stroke-dasharray="1 5"
					/>
					<line
						id="선_80"
						data-name="선 80"
						y2="35"
						transform="translate(1398.5 3852.896)"
						fill="none"
						stroke="#b8b8c6"
						stroke-linecap="round"
						stroke-width="1"
						stroke-dasharray="1 5"
					/>
					{/* <rect
						id="사각형_467"
						data-name="사각형 467"
						width="141"
						height="10"
						rx="5"
						transform="translate(1594 3472)"
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
						id="사각형_478"
						data-name="사각형 478"
						width="141"
						height="10"
						rx="5"
						transform="translate(1594 3904)"
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
						id="사각형_473"
						data-name="사각형 473"
						width="141"
						height="10"
						rx="5"
						transform="translate(1594 3732)"
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
						id="사각형_469"
						data-name="사각형 469"
						width="141"
						height="10"
						rx="5"
						transform="translate(1594 3560)"
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
						id="사각형_476"
						data-name="사각형 476"
						width="141"
						height="10"
						rx="5"
						transform="translate(1594 3992)"
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
						id="사각형_471"
						data-name="사각형 471"
						width="141"
						height="10"
						rx="5"
						transform="translate(1594 3820)"
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
					<rect
						id="사각형_479"
						data-name="사각형 479"
						width="58"
						height="10"
						rx="5"
						transform="translate(1594 3472)"
						fill="#b8b8c6"
					/>
					<rect
						id="사각형_480"
						data-name="사각형 480"
						width="125"
						height="10"
						rx="5"
						transform="translate(1594 3688)"
						fill="#e9e8e8"
					/>
					<rect
						id="사각형_481"
						data-name="사각형 481"
						width="16"
						height="10"
						rx="5"
						transform="translate(1594 3904)"
						fill="#b8b8c6"
					/>
					<rect
						id="사각형_482"
						data-name="사각형 482"
						width="31"
						height="10"
						rx="5"
						transform="translate(1594 3516)"
						fill="#b8b8c6"
					/>
					<rect
						id="사각형_483"
						data-name="사각형 483"
						width="31"
						height="10"
						rx="5"
						transform="translate(1594 3732)"
						fill="#b8b8c6"
					/>
					<rect
						id="사각형_484"
						data-name="사각형 484"
						width="31"
						height="10"
						rx="5"
						transform="translate(1594 3948)"
						fill="#b8b8c6"
					/>
					<rect
						id="사각형_485"
						data-name="사각형 485"
						width="136"
						height="10"
						rx="5"
						transform="translate(1594 3560)"
						fill="#e9e8e8"
					/>
					<rect
						id="사각형_486"
						data-name="사각형 486"
						width="54"
						height="10"
						rx="5"
						transform="translate(1594 3776)"
						fill="#b8b8c6"
					/>
					<rect
						id="사각형_487"
						data-name="사각형 487"
						width="22"
						height="10"
						rx="5"
						transform="translate(1594 3992)"
						fill="#b8b8c6"
					/>
					<rect
						id="사각형_488"
						data-name="사각형 488"
						width="74"
						height="10"
						rx="5"
						transform="translate(1594 3604)"
						fill="#b8b8c6"
					/>
					<rect
						id="사각형_489"
						data-name="사각형 489"
						width="74"
						height="10"
						rx="5"
						transform="translate(1594 3820)"
						fill="#b8b8c6"
					/>
					<rect
						id="사각형_490"
						data-name="사각형 490"
						width="110"
						height="10"
						rx="5"
						transform="translate(1594 4036)"
						fill="#e9e8e8"


					/> */}

                    <Rectangles />




					<g
						id="그룹_933"
						data-name="그룹 933"
						transform="translate(-11.843 -104.546)"
					>
						<g
							id="그룹_932"
							data-name="그룹 932"
							transform="translate(1757.288 3646.144)"
						>
							<g
								id="그룹_931"
								data-name="그룹 931"
								transform="translate(0 0)"
							>
								<g
									id="그룹_930"
									data-name="그룹 930"
									transform="translate(0 0)"
								>
									<g id="Medals" transform="translate(0 0)">
										<g
											id="Oval_17-7"
											data-name="Oval 17"
											transform="translate(3.67 12.606)"
										>
											<g id="Mask-7" data-name="Mask">
												<path
													id="Mask-8"
													data-name="Mask"
													d="M0,0H13.4V14.894L6.7,12.4,0,14.894Z"
													fill="#f6694c"
												/>
												<path
													id="Mask-9"
													data-name="Mask"
													d="M0,0H13.4V14.894L6.7,12.4,0,14.894Z"
													fill="url(#linear-gradient)"
													style={{
														mixBlendMode: "overlay",
														isolation: "isolate",
													}}
												/>
												<path
													id="Mask-10"
													data-name="Mask"
													d="M0,0H13.4V14.894L6.7,12.4,0,14.894Z"
													fill="rgba(216,216,216,0.05)"
													style={{
														mixBlendMode: "overlay",
														isolation: "isolate",
													}}
												/>
											</g>
											<g
												id="Oval_17-8"
												data-name="Oval 17"
												clip-path="url(#clip-path-181)"
											>
												<rect
													id="Rectangle_35"
													data-name="Rectangle 35"
													width="18.617"
													height="0.745"
													transform="translate(-1.489 9.681)"
													fill="#fff"
													opacity="0.2"
												/>
												<g
													id="Oval_17-9"
													data-name="Oval 17"
													transform="translate(-3.67 -11.489)"
												>
													<g
														transform="matrix(1, 0, 0, 1, -916.94, -167.21)"
														filter="url(#Oval_17)"
													>
														<ellipse
															id="Oval_17-10"
															data-name="Oval 17"
															cx="10.372"
															cy="10.372"
															rx="10.372"
															ry="10.372"
															transform="translate(916.94 167.21)"
															fill="#fff"
														/>
													</g>
													<ellipse
														id="Oval_17-11"
														data-name="Oval 17"
														cx="10.372"
														cy="10.372"
														rx="10.372"
														ry="10.372"
														fill="none"
														style={{
															mixBlendMode:
																"overlay",
															isolation:
																"isolate",
														}}
													/>
													<g
														transform="matrix(1, 0, 0, 1, -916.94, -167.21)"
														filter="url(#Oval_17-2)"
														style={{
															mixBlendMode:
																"overlay",
															isolation:
																"isolate",
														}}
													>
														<ellipse
															id="Oval_17-12"
															data-name="Oval 17"
															cx="10.372"
															cy="10.372"
															rx="10.372"
															ry="10.372"
															transform="translate(916.94 167.21)"
															fill="#fff"
														/>
													</g>
												</g>
											</g>
										</g>
										<g
											id="Rectangle_37"
											data-name="Rectangle 37"
											transform="translate(0 0)"
										>
											<g
												id="Mask-11"
												data-name="Mask"
												transform="translate(0 0)"
											>
												<circle
													id="Mask-12"
													data-name="Mask"
													cx="10.372"
													cy="10.372"
													r="10.372"
													fill="#ffc240"
												/>
												<circle
													id="Mask-13"
													data-name="Mask"
													cx="10.372"
													cy="10.372"
													r="10.372"
													fill="url(#linear-gradient-2)"
													style={{
														mixBlendMode: "overlay",
														isolation: "isolate",
													}}
												/>
												<circle
													id="Mask-14"
													data-name="Mask"
													cx="10.372"
													cy="10.372"
													r="10.372"
													fill="rgba(216,216,216,0.03)"
													style={{
														mixBlendMode: "overlay",
														isolation: "isolate",
													}}
												/>
											</g>
											<g
												id="Rectangle_37-2"
												data-name="Rectangle 37"
												clip-path="url(#clip-path-182)"
											>
												<path
													id="Path_8"
													data-name="Path 8"
													d="M29.741,8.118,0,39.052,2.727,0Z"
													transform="translate(-5.714 -11.083)"
													opacity="0.3"
													fill="url(#linear-gradient-3)"
												/>
											</g>
										</g>
										<g
											id="Combined_Shape-7"
											data-name="Combined Shape"
											transform="translate(2.074 2.074)"
										>
											<g
												transform="matrix(1, 0, 0, 1, -919.02, -168.17)"
												filter="url(#Combined_Shape)"
												style={{
													mixBlendMode: "overlay",
													isolation: "isolate",
												}}
											>
												<path
													id="Combined_Shape-8"
													data-name="Combined Shape"
													d="M8.3,16.6a8.3,8.3,0,1,1,8.3-8.3A8.307,8.307,0,0,1,8.3,16.6Zm0-15.35A7.053,7.053,0,1,0,15.35,8.3,7.061,7.061,0,0,0,8.3,1.245Z"
													transform="translate(919.02 168.17)"
													fill="rgba(0,0,0,0.2)"
												/>
											</g>
											<g
												transform="matrix(1, 0, 0, 1, -919.02, -168.17)"
												filter="url(#Combined_Shape-2)"
											>
												<path
													id="Combined_Shape-9"
													data-name="Combined Shape"
													d="M8.3,16.6a8.3,8.3,0,1,1,8.3-8.3A8.307,8.307,0,0,1,8.3,16.6Zm0-15.35A7.053,7.053,0,1,0,15.35,8.3,7.061,7.061,0,0,0,8.3,1.245Z"
													transform="translate(919.02 168.17)"
													fill="#fff"
												/>
											</g>
										</g>
										<g
											id="Fill_1-7"
											data-name="Fill 1"
											transform="translate(5.617 5.613)"
										>
											<g
												transform="matrix(1, 0, 0, 1, -922.56, -171.71)"
												filter="url(#Fill_1)"
											>
												<path
													id="Fill_1-8"
													data-name="Fill 1"
													d="M1.737,9.055c.031-.185.059-.353.088-.521l.367-2.152c.02-.117.044-.234.057-.352a.139.139,0,0,0-.034-.1q-.769-.753-1.542-1.5L.112,3.882a.3.3,0,0,1-.1-.322.312.312,0,0,1,.279-.213c.929-.133,1.858-.269,2.789-.4a.277.277,0,0,0,.245-.175c.425-.867.86-1.73,1.29-2.594A.267.267,0,0,1,4.858,0a.235.235,0,0,1,.231.133C5.2.343,5.3.554,5.4.765q.525,1.058,1.051,2.116a.1.1,0,0,0,.063.048q1.028.152,2.057.3l.87.128a.3.3,0,0,1,.26.214.291.291,0,0,1-.091.31L8.323,5.137c-.272.265-.544.53-.818.792a.109.109,0,0,0-.029.113L7.719,7.47q.129.758.259,1.515a.274.274,0,0,1-.4.289l-1.154-.6q-.748-.392-1.5-.785a.115.115,0,0,0-.122,0q-1.31.69-2.622,1.378a.274.274,0,0,1-.4-.084.628.628,0,0,1-.045-.125"
													transform="translate(922.56 171.71)"
													fill="#ffeeb4"
												/>
											</g>
											<g data-type="innerShadowGroup">
												<path
													id="Fill_1-9"
													data-name="Fill 1"
													d="M1.737,9.055c.031-.185.059-.353.088-.521l.367-2.152c.02-.117.044-.234.057-.352a.139.139,0,0,0-.034-.1q-.769-.753-1.542-1.5L.112,3.882a.3.3,0,0,1-.1-.322.312.312,0,0,1,.279-.213c.929-.133,1.858-.269,2.789-.4a.277.277,0,0,0,.245-.175c.425-.867.86-1.73,1.29-2.594A.267.267,0,0,1,4.858,0a.235.235,0,0,1,.231.133C5.2.343,5.3.554,5.4.765q.525,1.058,1.051,2.116a.1.1,0,0,0,.063.048q1.028.152,2.057.3l.87.128a.3.3,0,0,1,.26.214.291.291,0,0,1-.091.31L8.323,5.137c-.272.265-.544.53-.818.792a.109.109,0,0,0-.029.113L7.719,7.47q.129.758.259,1.515a.274.274,0,0,1-.4.289l-1.154-.6q-.748-.392-1.5-.785a.115.115,0,0,0-.122,0q-1.31.69-2.622,1.378a.274.274,0,0,1-.4-.084.628.628,0,0,1-.045-.125"
													transform="translate(0 0)"
													fill="url(#linear-gradient-4)"
													style={{
														mixBlendMode: "overlay",
														isolation: "isolate",
													}}
												/>
												<g
													transform="matrix(1, 0, 0, 1, -922.56, -171.71)"
													filter="url(#Fill_1-2)"
													style={{
														mixBlendMode: "overlay",
														isolation: "isolate",
													}}
												>
													<path
														id="Fill_1-10"
														data-name="Fill 1"
														d="M1.737,9.055c.031-.185.059-.353.088-.521l.367-2.152c.02-.117.044-.234.057-.352a.139.139,0,0,0-.034-.1q-.769-.753-1.542-1.5L.112,3.882a.3.3,0,0,1-.1-.322.312.312,0,0,1,.279-.213c.929-.133,1.858-.269,2.789-.4a.277.277,0,0,0,.245-.175c.425-.867.86-1.73,1.29-2.594A.267.267,0,0,1,4.858,0a.235.235,0,0,1,.231.133C5.2.343,5.3.554,5.4.765q.525,1.058,1.051,2.116a.1.1,0,0,0,.063.048q1.028.152,2.057.3l.87.128a.3.3,0,0,1,.26.214.291.291,0,0,1-.091.31L8.323,5.137c-.272.265-.544.53-.818.792a.109.109,0,0,0-.029.113L7.719,7.47q.129.758.259,1.515a.274.274,0,0,1-.4.289l-1.154-.6q-.748-.392-1.5-.785a.115.115,0,0,0-.122,0q-1.31.69-2.622,1.378a.274.274,0,0,1-.4-.084.628.628,0,0,1-.045-.125"
														transform="translate(922.56 171.71)"
														fill="#fff"
													/>
												</g>
											</g>
										</g>
									</g>
								</g>
							</g>
						</g>
					</g>


					<g
						id="그룹_934"
						data-name="그룹 934"
						transform="translate(-11.843 22.356)"
					>
						<g
							id="그룹_932-2"
							data-name="그룹 932"
							transform="translate(1757.288 3646.144)"
						>
							<g
								id="그룹_931-2"
								data-name="그룹 931"
								transform="translate(0 0)"
							>
								<g
									id="그룹_930-2"
									data-name="그룹 930"
									transform="translate(0 0)"
								>
									<g
										id="Medals-2"
										data-name="Medals"
										transform="translate(0 0)"
									>
										<g
											id="Oval_17-13"
											data-name="Oval 17"
											transform="translate(3.937 13.523)"
										>
											<g id="Mask-15" data-name="Mask">
												<path
													id="Mask-16"
													data-name="Mask"
													d="M0,0H14.379V15.977L7.19,13.3,0,15.977Z"
													fill="#f6694c"
												/>
												<path
													id="Mask-17"
													data-name="Mask"
													d="M0,0H14.379V15.977L7.19,13.3,0,15.977Z"
													fill="url(#linear-gradient)"
													style={{
														mixBlendMode: "overlay",
														isolation: "isolate",
													}}
												/>
												<path
													id="Mask-18"
													data-name="Mask"
													d="M0,0H14.379V15.977L7.19,13.3,0,15.977Z"
													fill="rgba(216,216,216,0.05)"
													style={{
														mixBlendMode: "overlay",
														isolation: "isolate",
													}}
												/>
											</g>
											<g
												id="Oval_17-14"
												data-name="Oval 17"
												clip-path="url(#clip-path-183)"
											>
												<rect
													id="Rectangle_35-2"
													data-name="Rectangle 35"
													width="19.971"
													height="0.799"
													transform="translate(-1.598 10.385)"
													fill="#fff"
													opacity="0.2"
												/>
												<g
													id="Oval_17-15"
													data-name="Oval 17"
													transform="translate(-3.937 -12.325)"
												>
													<g
														transform="matrix(1, 0, 0, 1, -916.94, -294.2)"
														filter="url(#Oval_17-3)"
													>
														<ellipse
															id="Oval_17-16"
															data-name="Oval 17"
															cx="11.126"
															cy="11.126"
															rx="11.126"
															ry="11.126"
															transform="translate(916.94 294.2)"
															fill="#fff"
														/>
													</g>
													<ellipse
														id="Oval_17-17"
														data-name="Oval 17"
														cx="11.126"
														cy="11.126"
														rx="11.126"
														ry="11.126"
														fill="none"
														style={{
															mixBlendMode:
																"overlay",
															isolation:
																"isolate",
														}}
													/>
													<g
														transform="matrix(1, 0, 0, 1, -916.94, -294.2)"
														filter="url(#Oval_17-4)"
														style={{
															mixBlendMode:
																"overlay",
															isolation:
																"isolate",
														}}
													>
														<ellipse
															id="Oval_17-18"
															data-name="Oval 17"
															cx="11.126"
															cy="11.126"
															rx="11.126"
															ry="11.126"
															transform="translate(916.94 294.2)"
															fill="#fff"
														/>
													</g>
												</g>
											</g>
										</g>
										<g
											id="Rectangle_37-3"
											data-name="Rectangle 37"
											transform="translate(0 0)"
										>
											<g
												id="Mask-19"
												data-name="Mask"
												transform="translate(0 0)"
											>
												<circle
													id="Mask-20"
													data-name="Mask"
													cx="11.126"
													cy="11.126"
													r="11.126"
													fill="#ffc240"
												/>
												<circle
													id="Mask-21"
													data-name="Mask"
													cx="11.126"
													cy="11.126"
													r="11.126"
													fill="url(#linear-gradient-2)"
													style={{
														mixBlendMode: "overlay",
														isolation: "isolate",
													}}
												/>
												<circle
													id="Mask-22"
													data-name="Mask"
													cx="11.126"
													cy="11.126"
													r="11.126"
													fill="rgba(216,216,216,0.03)"
													style={{
														mixBlendMode: "overlay",
														isolation: "isolate",
													}}
												/>
											</g>
											<g
												id="Rectangle_37-4"
												data-name="Rectangle 37"
												transform="translate(0 0)"
												clip-path="url(#clip-path-184)"
											>
												<path
													id="Path_8-2"
													data-name="Path 8"
													d="M31.9,8.708,0,41.893,2.926,0Z"
													transform="translate(-6.129 -11.889)"
													opacity="0.3"
													fill="url(#linear-gradient-3)"
												/>
											</g>
										</g>
										<g
											id="Combined_Shape-10"
											data-name="Combined Shape"
											transform="translate(2.225 2.225)"
										>
											<g
												transform="matrix(1, 0, 0, 1, -919.17, -295.23)"
												filter="url(#Combined_Shape-3)"
												style={{
													mixBlendMode: "overlay",
													isolation: "isolate",
												}}
											>
												<path
													id="Combined_Shape-11"
													data-name="Combined Shape"
													d="M8.9,17.8a8.9,8.9,0,1,1,8.9-8.9A8.911,8.911,0,0,1,8.9,17.8Zm0-16.466A7.566,7.566,0,1,0,16.467,8.9,7.574,7.574,0,0,0,8.9,1.336Z"
													transform="translate(919.17 295.23)"
													fill="rgba(0,0,0,0.2)"
												/>
											</g>
											<g
												transform="matrix(1, 0, 0, 1, -919.17, -295.23)"
												filter="url(#Combined_Shape-4)"
											>
												<path
													id="Combined_Shape-12"
													data-name="Combined Shape"
													d="M8.9,17.8a8.9,8.9,0,1,1,8.9-8.9A8.911,8.911,0,0,1,8.9,17.8Zm0-16.466A7.566,7.566,0,1,0,16.467,8.9,7.574,7.574,0,0,0,8.9,1.336Z"
													transform="translate(919.17 295.23)"
													fill="#fff"
												/>
											</g>
										</g>
										<g
											id="Fill_1-11"
											data-name="Fill 1"
											transform="translate(6.025 6.021)"
										>
											<g
												transform="matrix(1, 0, 0, 1, -922.97, -299.02)"
												filter="url(#Fill_1-3)"
											>
												<path
													id="Fill_1-12"
													data-name="Fill 1"
													d="M1.863,9.714c.033-.2.064-.379.094-.559l.393-2.309c.021-.126.047-.251.062-.377a.149.149,0,0,0-.037-.109Q1.551,5.551.722,4.749l-.6-.584a.317.317,0,0,1-.1-.346.334.334,0,0,1,.3-.228c1-.143,1.994-.289,2.991-.425a.3.3,0,0,0,.263-.188c.456-.93.922-1.855,1.384-2.783A.286.286,0,0,1,5.212,0,.252.252,0,0,1,5.46.143c.114.225.226.451.338.677q.563,1.135,1.127,2.27a.107.107,0,0,0,.068.052Q8.1,3.3,9.2,3.463l.933.137a.319.319,0,0,1,.279.229.312.312,0,0,1-.1.333L8.928,5.511c-.292.284-.584.568-.878.85a.117.117,0,0,0-.031.121L8.28,8.013q.139.813.278,1.626a.294.294,0,0,1-.434.31L6.886,9.3q-.8-.42-1.6-.842a.124.124,0,0,0-.131,0Q3.744,9.2,2.337,9.938a.294.294,0,0,1-.425-.09.673.673,0,0,1-.048-.134"
													transform="translate(922.97 299.02)"
													fill="#ffeeb4"
												/>
											</g>
											<g data-type="innerShadowGroup">
												<path
													id="Fill_1-13"
													data-name="Fill 1"
													d="M1.863,9.714c.033-.2.064-.379.094-.559l.393-2.309c.021-.126.047-.251.062-.377a.149.149,0,0,0-.037-.109Q1.551,5.551.722,4.749l-.6-.584a.317.317,0,0,1-.1-.346.334.334,0,0,1,.3-.228c1-.143,1.994-.289,2.991-.425a.3.3,0,0,0,.263-.188c.456-.93.922-1.855,1.384-2.783A.286.286,0,0,1,5.212,0,.252.252,0,0,1,5.46.143c.114.225.226.451.338.677q.563,1.135,1.127,2.27a.107.107,0,0,0,.068.052Q8.1,3.3,9.2,3.463l.933.137a.319.319,0,0,1,.279.229.312.312,0,0,1-.1.333L8.928,5.511c-.292.284-.584.568-.878.85a.117.117,0,0,0-.031.121L8.28,8.013q.139.813.278,1.626a.294.294,0,0,1-.434.31L6.886,9.3q-.8-.42-1.6-.842a.124.124,0,0,0-.131,0Q3.744,9.2,2.337,9.938a.294.294,0,0,1-.425-.09.673.673,0,0,1-.048-.134"
													transform="translate(0 0)"
													fill="url(#linear-gradient-4)"
													style={{
														mixBlendMode: "overlay",
														isolation: "isolate",
													}}
												/>
												<g
													transform="matrix(1, 0, 0, 1, -922.97, -299.02)"
													filter="url(#Fill_1-4)"
													style={{
														mixBlendMode: "overlay",
														isolation: "isolate",
													}}
												>
													<path
														id="Fill_1-14"
														data-name="Fill 1"
														d="M1.863,9.714c.033-.2.064-.379.094-.559l.393-2.309c.021-.126.047-.251.062-.377a.149.149,0,0,0-.037-.109Q1.551,5.551.722,4.749l-.6-.584a.317.317,0,0,1-.1-.346.334.334,0,0,1,.3-.228c1-.143,1.994-.289,2.991-.425a.3.3,0,0,0,.263-.188c.456-.93.922-1.855,1.384-2.783A.286.286,0,0,1,5.212,0,.252.252,0,0,1,5.46.143c.114.225.226.451.338.677q.563,1.135,1.127,2.27a.107.107,0,0,0,.068.052Q8.1,3.3,9.2,3.463l.933.137a.319.319,0,0,1,.279.229.312.312,0,0,1-.1.333L8.928,5.511c-.292.284-.584.568-.878.85a.117.117,0,0,0-.031.121L8.28,8.013q.139.813.278,1.626a.294.294,0,0,1-.434.31L6.886,9.3q-.8-.42-1.6-.842a.124.124,0,0,0-.131,0Q3.744,9.2,2.337,9.938a.294.294,0,0,1-.425-.09.673.673,0,0,1-.048-.134"
														transform="translate(922.97 299.02)"
														fill="#fff"
													/>
												</g>
											</g>
										</g>
									</g>
								</g>
							</g>
						</g>
					</g>


					<g
						id="그룹_935"
						data-name="그룹 935"
						transform="translate(-11.843 370.356)"
					>
						<g
							id="그룹_932-3"
							data-name="그룹 932"
							transform="translate(1757.288 3646.144)"
						>
							<g
								id="그룹_931-3"
								data-name="그룹 931"
								transform="translate(0 0)"
							>
								<g
									id="그룹_930-3"
									data-name="그룹 930"
									transform="translate(0 0)"
								>
									<g
										id="Medals-3"
										data-name="Medals"
										transform="translate(0 0)"
									>
										<g
											id="Oval_17-19"
											data-name="Oval 17"
											transform="translate(3.937 13.523)"
										>
											<g id="Mask-23" data-name="Mask">
												<path
													id="Mask-24"
													data-name="Mask"
													d="M0,0H14.379V15.977L7.19,13.3,0,15.977Z"
													fill="#f6694c"
												/>
												<path
													id="Mask-25"
													data-name="Mask"
													d="M0,0H14.379V15.977L7.19,13.3,0,15.977Z"
													fill="url(#linear-gradient)"
													style={{
														mixBlendMode: "overlay",
														isolation: "isolate",
													}}
												/>
												<path
													id="Mask-26"
													data-name="Mask"
													d="M0,0H14.379V15.977L7.19,13.3,0,15.977Z"
													fill="rgba(216,216,216,0.05)"
													style={{
														mixBlendMode: "overlay",
														isolation: "isolate",
													}}
												/>
											</g>
											<g
												id="Oval_17-20"
												data-name="Oval 17"
												clip-path="url(#clip-path-183)"
											>
												<rect
													id="Rectangle_35-3"
													data-name="Rectangle 35"
													width="19.971"
													height="0.799"
													transform="translate(-1.598 10.385)"
													fill="#fff"
													opacity="0.2"
												/>
												<g
													id="Oval_17-21"
													data-name="Oval 17"
													transform="translate(-3.937 -12.325)"
												>
													<g
														transform="matrix(1, 0, 0, 1, -916.94, -642.2)"
														filter="url(#Oval_17-5)"
													>
														<ellipse
															id="Oval_17-22"
															data-name="Oval 17"
															cx="11.126"
															cy="11.126"
															rx="11.126"
															ry="11.126"
															transform="translate(916.94 642.2)"
															fill="#fff"
														/>
													</g>
													<ellipse
														id="Oval_17-23"
														data-name="Oval 17"
														cx="11.126"
														cy="11.126"
														rx="11.126"
														ry="11.126"
														fill="none"
														style={{
															mixBlendMode:
																"overlay",
															isolation:
																"isolate",
														}}
													/>
													<g
														transform="matrix(1, 0, 0, 1, -916.94, -642.2)"
														filter="url(#Oval_17-6)"
														style={{
															mixBlendMode:
																"overlay",
															isolation:
																"isolate",
														}}
													>
														<ellipse
															id="Oval_17-24"
															data-name="Oval 17"
															cx="11.126"
															cy="11.126"
															rx="11.126"
															ry="11.126"
															transform="translate(916.94 642.2)"
															fill="#fff"
														/>
													</g>
												</g>
											</g>
										</g>
										<g
											id="Rectangle_37-5"
											data-name="Rectangle 37"
											transform="translate(0 0)"
										>
											<g
												id="Mask-27"
												data-name="Mask"
												transform="translate(0 0)"
											>
												<circle
													id="Mask-28"
													data-name="Mask"
													cx="11.126"
													cy="11.126"
													r="11.126"
													fill="#ffc240"
												/>
												<circle
													id="Mask-29"
													data-name="Mask"
													cx="11.126"
													cy="11.126"
													r="11.126"
													fill="url(#linear-gradient-2)"
													// style={{mixBlendMode: 'overlay', isolation: 'isolate'}}
													style={{
														mixBlendMode: "overlay",
														isolation: "isolate",
													}}
												/>
												<circle
													id="Mask-30"
													data-name="Mask"
													cx="11.126"
													cy="11.126"
													r="11.126"
													fill="rgba(216,216,216,0.03)"
													style={{
														mixBlendMode: "overlay",
														isolation: "isolate",
													}}
												/>
											</g>
											<g
												id="Rectangle_37-6"
												data-name="Rectangle 37"
												transform="translate(0 0)"
												clip-path="url(#clip-path-184)"
											>
												<path
													id="Path_8-3"
													data-name="Path 8"
													d="M31.9,8.708,0,41.893,2.926,0Z"
													transform="translate(-6.129 -11.889)"
													opacity="0.3"
													fill="url(#linear-gradient-3)"
												/>
											</g>
										</g>
										<g
											id="Combined_Shape-13"
											data-name="Combined Shape"
											transform="translate(2.225 2.225)"
										>
											<g
												transform="matrix(1, 0, 0, 1, -919.17, -643.23)"
												filter="url(#Combined_Shape-5)"
												style={{
													mixBlendMode: "overlay",
													isolation: "isolate",
												}}
											>
												<path
													id="Combined_Shape-14"
													data-name="Combined Shape"
													d="M8.9,17.8a8.9,8.9,0,1,1,8.9-8.9A8.911,8.911,0,0,1,8.9,17.8Zm0-16.466A7.566,7.566,0,1,0,16.467,8.9,7.574,7.574,0,0,0,8.9,1.336Z"
													transform="translate(919.17 643.23)"
													fill="rgba(0,0,0,0.2)"
												/>
											</g>
											<g
												transform="matrix(1, 0, 0, 1, -919.17, -643.23)"
												filter="url(#Combined_Shape-6)"
											>
												<path
													id="Combined_Shape-15"
													data-name="Combined Shape"
													d="M8.9,17.8a8.9,8.9,0,1,1,8.9-8.9A8.911,8.911,0,0,1,8.9,17.8Zm0-16.466A7.566,7.566,0,1,0,16.467,8.9,7.574,7.574,0,0,0,8.9,1.336Z"
													transform="translate(919.17 643.23)"
													fill="#fff"
												/>
											</g>
										</g>
										<g
											id="Fill_1-15"
											data-name="Fill 1"
											transform="translate(6.025 6.021)"
										>
											<g
												transform="matrix(1, 0, 0, 1, -922.97, -647.02)"
												filter="url(#Fill_1-5)"
											>
												<path
													id="Fill_1-16"
													data-name="Fill 1"
													d="M1.863,9.714c.033-.2.064-.379.094-.559l.393-2.309c.021-.126.047-.251.062-.377a.149.149,0,0,0-.037-.109Q1.551,5.551.722,4.749l-.6-.584a.317.317,0,0,1-.1-.346.334.334,0,0,1,.3-.228c1-.143,1.994-.289,2.991-.425a.3.3,0,0,0,.263-.188c.456-.93.922-1.855,1.384-2.783A.286.286,0,0,1,5.212,0,.252.252,0,0,1,5.46.143c.114.225.226.451.338.677q.563,1.135,1.127,2.27a.107.107,0,0,0,.068.052Q8.1,3.3,9.2,3.463l.933.137a.319.319,0,0,1,.279.229.312.312,0,0,1-.1.333L8.928,5.511c-.292.284-.584.568-.878.85a.117.117,0,0,0-.031.121L8.28,8.013q.139.813.278,1.626a.294.294,0,0,1-.434.31L6.886,9.3q-.8-.42-1.6-.842a.124.124,0,0,0-.131,0Q3.744,9.2,2.337,9.938a.294.294,0,0,1-.425-.09.673.673,0,0,1-.048-.134"
													transform="translate(922.97 647.02)"
													fill="#ffeeb4"
												/>
											</g>
											<g data-type="innerShadowGroup">
												<path
													id="Fill_1-17"
													data-name="Fill 1"
													d="M1.863,9.714c.033-.2.064-.379.094-.559l.393-2.309c.021-.126.047-.251.062-.377a.149.149,0,0,0-.037-.109Q1.551,5.551.722,4.749l-.6-.584a.317.317,0,0,1-.1-.346.334.334,0,0,1,.3-.228c1-.143,1.994-.289,2.991-.425a.3.3,0,0,0,.263-.188c.456-.93.922-1.855,1.384-2.783A.286.286,0,0,1,5.212,0,.252.252,0,0,1,5.46.143c.114.225.226.451.338.677q.563,1.135,1.127,2.27a.107.107,0,0,0,.068.052Q8.1,3.3,9.2,3.463l.933.137a.319.319,0,0,1,.279.229.312.312,0,0,1-.1.333L8.928,5.511c-.292.284-.584.568-.878.85a.117.117,0,0,0-.031.121L8.28,8.013q.139.813.278,1.626a.294.294,0,0,1-.434.31L6.886,9.3q-.8-.42-1.6-.842a.124.124,0,0,0-.131,0Q3.744,9.2,2.337,9.938a.294.294,0,0,1-.425-.09.673.673,0,0,1-.048-.134"
													transform="translate(0 0)"
													fill="url(#linear-gradient-4)"
													style={{
														mixBlendMode: "overlay",
														isolation: "isolate",
													}}
												/>
												<g
													transform="matrix(1, 0, 0, 1, -922.97, -647.02)"
													filter="url(#Fill_1-6)"
													style={{
														mixBlendMode: "overlay",
														isolation: "isolate",
													}}
												>
													<path
														id="Fill_1-18"
														data-name="Fill 1"
														d="M1.863,9.714c.033-.2.064-.379.094-.559l.393-2.309c.021-.126.047-.251.062-.377a.149.149,0,0,0-.037-.109Q1.551,5.551.722,4.749l-.6-.584a.317.317,0,0,1-.1-.346.334.334,0,0,1,.3-.228c1-.143,1.994-.289,2.991-.425a.3.3,0,0,0,.263-.188c.456-.93.922-1.855,1.384-2.783A.286.286,0,0,1,5.212,0,.252.252,0,0,1,5.46.143c.114.225.226.451.338.677q.563,1.135,1.127,2.27a.107.107,0,0,0,.068.052Q8.1,3.3,9.2,3.463l.933.137a.319.319,0,0,1,.279.229.312.312,0,0,1-.1.333L8.928,5.511c-.292.284-.584.568-.878.85a.117.117,0,0,0-.031.121L8.28,8.013q.139.813.278,1.626a.294.294,0,0,1-.434.31L6.886,9.3q-.8-.42-1.6-.842a.124.124,0,0,0-.131,0Q3.744,9.2,2.337,9.938a.294.294,0,0,1-.425-.09.673.673,0,0,1-.048-.134"
														transform="translate(922.97 647.02)"
														fill="#fff"
													/>
												</g>
											</g>
										</g>
									</g>
								</g>
							</g>
						</g>
					</g>
				</g>

				{/* <HoneyComb /> */}
			</svg>
		</>
	);
};

export default Map4;