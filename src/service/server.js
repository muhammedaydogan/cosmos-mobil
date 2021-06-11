import axios from "axios";

export const server = axios.create({
  baseURL: "http://192.168.1.125:9000",
});
