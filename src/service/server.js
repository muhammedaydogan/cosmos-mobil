import axios from "axios";

export const server = axios.create({
  baseURL: "http://192.168.0.12:9000",
});
