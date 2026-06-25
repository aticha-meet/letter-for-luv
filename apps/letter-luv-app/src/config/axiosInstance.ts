import axios from "axios";
import { IMAGE_PATH } from ".";

export const axiosInstance = axios.create({
    baseURL: IMAGE_PATH.BACKEND_URL,
    timeout: 10000,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        'ngrok-skip-browser-warning': '69420'
    }
});