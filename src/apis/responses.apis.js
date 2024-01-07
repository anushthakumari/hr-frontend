import axios from "../libs/axios.lib";

export const saveResponse = async (
	body = { userId: 1, questionId: 0, selectedOptionId: 0 }
) => {
	await axios.post(`/responses`, body);
};
