import axios from "axios";

export const saveRecording = async (formData) => {
	const fd = new FormData();

	fd.append("game", "rem");

	await axios.post("http://localhost:5100/submit", fd, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
};
