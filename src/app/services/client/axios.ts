import { API_URL } from "@/app/constants/common";
import axios from "axios";

const axiosClient = axios.create({
    baseURL: API_URL,
    timeout: 8000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosClient;
