import axios from "axios";

const axiosInstance = axios.create({
    baseURL: `http://localhost:9000`
});

export default axiosInstance;


// part one of the API create.