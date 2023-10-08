import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com", //recebe o Endpoint da aplicação
});

export default api;