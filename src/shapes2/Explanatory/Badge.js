import React, { useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";

// +122

const yCoordinate = [
	3472 + 90,
    3516 + 90,
	3560 + 90,
	3604 + 90,

	3688 + 90,
	3732 + 90,
	3776 + 90,
	3820 + 90,

	3904 + 90,
    3948 + 90,
	3992 + 90,
	4036 + 90,
];

const Badge = ({ rankInfo, init, onHandleRest }) => {
	const [transform, setTransform] = useState();

    const styles = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        config: { duration: 1500 },
		delay: 9500,
        reset: init,
        onRest: onHandleRest,
    })

	useEffect(() => {
		if (rankInfo) {
			const transformObj = {};

			transformObj.first = `translate(1757.288 ${
				yCoordinate[rankInfo.first]
			})`;
			transformObj.second = `translate(1757.288 ${
				yCoordinate[rankInfo.second]
			})`;
			transformObj.third = `translate(1757.288 ${
				yCoordinate[rankInfo.third]
			})`;

			setTransform(transformObj);
		}
	}, [rankInfo]);

	return (
		<>
			{transform ? (
				<>
					<animated.g
						id="그룹_933"
						data-name="그룹 933"
						transform="translate(-11.843 -104.546)"
                        style={styles}
					>
						<g
							id="그룹_932"
							data-name="그룹 932"
							transform={transform.first}
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
					</animated.g>

					<animated.g
						id="그룹_933"
						data-name="그룹 933"
						transform="translate(-11.843 -104.546)"
                        style={styles}
					>
						<g
							id="그룹_932"
							data-name="그룹 932"
							transform={transform.second}
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
					</animated.g>

					<animated.g
						id="그룹_933"
						data-name="그룹 933"
						transform="translate(-11.843 -104.546)"
                        style={styles}
					>
						<g
							id="그룹_932"
							data-name="그룹 932"
							transform={transform.third}
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
					</animated.g>
				</>
			) : null}
		</>
	);
};

export default Badge;
