import secureStorage from "react-secure-storage";

export const KEYS = {
	USER: "hr_app@user",
};

export const getUser = () => {
	return secureStorage.getItem(KEYS.USER);
};

export const setUser = (user = {}) => {
	secureStorage.setItem(KEYS.USER, user);
};

export const removeUser = () => {
	secureStorage.removeItem(KEYS.USER);
};
