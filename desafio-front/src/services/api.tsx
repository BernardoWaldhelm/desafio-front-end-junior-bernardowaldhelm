import axios from "axios";

const api = axios.create({
  baseURL: "https://cataas.com/api/cats",
});

export default api;
