import axios from "../libs/axios.lib";
import * as secureStorage from "../utils/storage.utils";

export const getQuizes = async () => {
	const { token } = secureStorage.getUser();

	const { data } = await axios.get("/quiz", {
		headers: {
			Authorization: "Bearer " + token,
		},
	});
	return data;
};

export const startQuiz = async (quizId) => {
	const { token } = secureStorage.getUser();

	const { data } = await axios.post(
		"/quiz/start",
		{ quizId },
		{
			headers: {
				Authorization: "Bearer " + token,
			},
		}
	);
	return data;
};
export const endQuiz = async (quizId) => {
	const { token } = secureStorage.getUser();

	const { data } = await axios.post(
		"/quiz/end",
		{ quizId },
		{
			headers: {
				Authorization: "Bearer " + token,
			},
		}
	);
	return data;
};

export const getQuestions = async (url) => {
	const { token } = secureStorage.getUser();

	const { data } = await axios.get(url, {
		headers: {
			Authorization: "Bearer " + token,
		},
	});
	return data;
};
