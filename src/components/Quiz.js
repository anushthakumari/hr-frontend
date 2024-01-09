import React, { useContext, useState, useCallback } from "react";
import Alert from "react-bootstrap/Alert";

import DataContext from "../context/dataContext";
import VideoRecorder from "./Recorder";
import useTimer from "./useTimer";
import useSpeechToText from "../hooks/useSpeechToText";

const Quiz = () => {
	const {
		showQuiz,
		question,
		quizs,
		checkAnswer,
		correctAnswer,
		selectedAnswer,
		questionIndex,
		nextQuestion,
		showTheResult,
		isSaving,
	} = useContext(DataContext);

	const [showHelperText, setShowHelperText] = useState(true);

	const { resetTimer, initialTimer } = useTimer();

	const handleTextRecive = useCallback(
		(text) => {
			console.log({ text });

			const foundOption = question?.options?.find(
				(v) => v.text.toLowerCase() === text
			);

			if (foundOption) {
				checkAnswer(foundOption);
			}
		},
		[question?.options, checkAnswer]
	);

	useSpeechToText(handleTextRecive);

	return (
		<section
			className="bg-dark text-white"
			style={{ display: `${showQuiz ? "block" : "none"}` }}>
			<div className="vh-100 d-flex align-items-center justify-content-center">
				<div className="container">
					{showHelperText && (
						<Alert
							variant={"info"}
							onClose={() => setShowHelperText(false)}
							dismissible>
							Your response will be recorded through voice recognition. No
							clicking is required. Just Say Your Answer Out Loud.
						</Alert>
					)}
					<div className="row align-items-center">
						<div className="col-lg-4">
							<div>
								<VideoRecorder />
							</div>
						</div>
						<div className="col-lg-8">
							{isSaving ? (
								<h1>Loading...</h1>
							) : (
								<div
									className="card p-4"
									style={{ background: "#3d3d3d", borderColor: "#646464" }}>
									<p>
										<h2 className="text-danger fw-bold">
											<span id={"timer-span"}>{initialTimer}</span>
											<span className="m-2 lead text-white">
												Minutes is remaining for this question
											</span>
										</h2>
									</p>
									<div className="d-flex justify-content-between gap-md-3">
										<h5 className="mb-2 fs-normal lh-base">
											{question?.question}
										</h5>
										<h5
											style={{
												color: "#60d600",
												width: "100px",
												textAlign: "right",
											}}>
											{quizs.indexOf(question) + 1} / {quizs?.length}
										</h5>
									</div>
									<div>
										{question?.options?.map((item, index) => (
											<button
												key={index}
												id={"opt-btn-" + item.id}
												className={`option w-100 text-start btn text-white py-2 px-3 mt-3 rounded btn-dark ${
													correctAnswer === item && "bg-success"
												}`}
												onClick={(event) => checkAnswer(item)}
												disabled>
												{item.text}
											</button>
										))}
									</div>
									{questionIndex + 1 !== quizs.length ? (
										<button
											className="btn py-2 w-100 mt-3 bg-primary text-light fw-bold"
											onClick={() => {
												resetTimer();
												nextQuestion();
											}}
											disabled={!selectedAnswer}>
											Next Question
										</button>
									) : (
										<button
											className="btn py-2 w-100 mt-3 bg-primary text-light fw-bold"
											onClick={showTheResult}
											disabled={!selectedAnswer}>
											Show Result
										</button>
									)}
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Quiz;

function millisecondsToTime(s) {
	return new Date(s).toISOString().slice(14, -5);
}

function convertSpeechToText() {
	var Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
	const recognition = new Recognition();

	recognition.lang = "en-US";
	recognition.continuous = true;
	recognition.interimResults = true;

	recognition.onresult = (event) => {
		const result = event.results[event.results.length - 1];
		const transcription = result[0].transcript.trim().toLowerCase();

		console.log("User said:", transcription);
	};

	recognition.onerror = (error) => {
		console.error("Speech recognition error:", error.error, error.message);
	};

	recognition.onend = () => {
		// Uncomment the following line for continuous listening
		// recognition.start();
		console.log("Speech recognition ended. Restarting...");
	};

	recognition.start();
}
