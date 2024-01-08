import axios from "axios";
import * as secureStorage from "../utils/storage.utils";

export const saveRecording = async (formData) => {
	const { token } = secureStorage.getUser();
	const fd = new FormData();

	fd.append("game", "rem");

	await axios.post("http://localhost:5100/submit", fd, {
		headers: {
			"Content-Type": "multipart/form-data",
			Authorization: "Bearer " + token,
		},
	});
};
