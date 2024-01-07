import axios from "../libs/axios.lib";

export const getQuizes = async () => {
	const { data } = await axios.get("/quiz");
	return data;
};

export const getQuestions = async (url) => {
	const { data } = await axios.get(url);
	return data;
};
