import axios from "axios";

const api = axios.create({
  baseURL: "/cats-offline.json",
});

export default api;
