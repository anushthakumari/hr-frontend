import React, { useContext, useEffect } from "react";

import DataContext from "../context/dataContext";

const VideoRecorder = () => {
	const { videoRef, mediaRecorderRef, startRecording } =
		useContext(DataContext);

	useEffect(() => {
		startRecording();

		return () => {
			if (
				mediaRecorderRef.current &&
				mediaRecorderRef.current.state === "recording"
			) {
				mediaRecorderRef.current.stop();
			}
		};
	}, [mediaRecorderRef, startRecording]);

	return (
		<div>
			<video
				ref={videoRef}
				style={{ width: "100%", height: "100%" }}
				autoPlay
				playsInline
				muted
			/>
		</div>
	);
};

export default VideoRecorder;
