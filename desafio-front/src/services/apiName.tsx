import axios from "axios";

const apiName = axios.create({
  baseURL: "/tags-offline.json",
});

export default apiName;
