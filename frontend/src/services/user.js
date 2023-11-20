import api from "./api";

const userService = {};

userService.getUsers = () => api.get(`/api/users/`);
userService.getUserById = (id) => api.get(`/api/users/${id}`);
userService.updateUsereById = (id, payload) =>
	api.put(`/api/users/${id}`, { ...payload });
userService.deleteUserById = (id) => api.delete(`/api/users/${id}`);
userService.createUser = (payload) => api.post("/api/users/", { ...payload });

export default userService;
