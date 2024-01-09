import axios from "../libs/axios.lib";
import * as secureStorage from "../utils/storage.utils";

export const saveRecording = async () => {
	const { token } = secureStorage.getUser();

	const formData = new FormData();
	formData.append("field1", "value1");
	formData.append("field2", "value2");

	await axios.post("/recordings", formData, {
		headers: {
			"Content-Type": "multipart/form-data",
			Authorization: "Bearer " + token,
		},
	});
};
