import React, { useContext } from "react";

import { toast } from "react-toastify";

import DataContext from "../context/dataContext";

const Start = () => {
	const { startQuiz, showStart } = useContext(DataContext);

	const checkMediaAccess = async () => {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({
				video: true,
				audio: true,
			});

			stream.getTracks().forEach((track) => track.stop());
			return true; // Media access granted
		} catch (error) {
			console.error("Error accessing media devices:", error);
			return false; // Media access denied
		}
	};

	const handleStart = async () => {
		const isAcessGranted = await checkMediaAccess();
		if (!isAcessGranted) {
			toast.error("Please allow access to camera and audio!");
			return;
		}

		startQuiz();
	};

	return (
		<section
			className="text-white text-center bg-dark"
			style={{ display: `${showStart ? "block" : "none"}` }}>
			<div className="container">
				<div className="row vh-100 align-items-center justify-content-center">
					<div className="col-lg-8">
						<h1 className="fw-bold mb-4">Get Started</h1>
						<button
							onClick={handleStart}
							className="btn px-4 py-2 bg-light text-dark fw-bold">
							Start Quiz
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Start;