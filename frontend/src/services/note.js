import api from "./api";

const noteService = {};

noteService.getNotes = () => api.get(`/api/notes/`);
noteService.getNoteById = (id) => api.get(`/api/notes/${id}`);
noteService.updateNoteById = (id, payload) =>
	api.put(`/api/notes/${id}`, { ...payload });
noteService.deleteNoteById = (id) => api.delete(`/api/notes/${id}`);
noteService.createNote = (payload) => api.post("/api/notes/", { ...payload });

export default noteService;
