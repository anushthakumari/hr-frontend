import { useEffect, useState } from "react";
import { useContext } from "react";
import DataContext from "../context/dataContext";

let interval;

const MAX_MINS_MSEC = 1000 * 60 * 1;

const useTimer = () => {
	const [timer, settimer] = useState(MAX_MINS_MSEC);
	const { nextQuestion } = useContext(DataContext);

	function resetTimer() {
		settimer(MAX_MINS_MSEC);
	}

	useEffect(() => {
		interval = setInterval(() => {
			const newState = timer - 1000;

			if (newState < 0) {
				nextQuestion();
				return settimer(MAX_MINS_MSEC);
			}

			settimer(newState);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, [nextQuestion, timer]);

	return {
		timer,
		resetTimer,
	};
};

export default useTimer;
