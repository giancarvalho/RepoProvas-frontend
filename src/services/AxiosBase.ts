import axios from "axios";
import URL from "./URL";

const axiosBase = axios.create({
    baseURL: URL,
});

export default axiosBase;
