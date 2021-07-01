import axios from "axios";

const axiosInstance = (token) => {
    const instance = axios.create({
        baseURL: "https://testa2.aisle.co/V1/users",
        headers: {
            "Content-Type": "application/json",
        }
    });
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    return instance;
};

export default axiosInstance;
