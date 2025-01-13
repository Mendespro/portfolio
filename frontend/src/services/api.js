import axios from "axios";
export const addProject = (project) => api.post("/projects", project);

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getProjects = () => api.get("/projects");

export default api;
