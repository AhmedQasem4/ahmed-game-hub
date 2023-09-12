import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'c302c1502fa14e229892f54cfcef41ea',
    }
});


export default axiosInstance;