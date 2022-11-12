import axios from "axios";

const api = axios.create({
  baseURL: "https://treinadev-app.herokuapp.com/v1/",
});

export default api;