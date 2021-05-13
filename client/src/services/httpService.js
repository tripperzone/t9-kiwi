import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

axios.interceptors.response.use(null, error => {
    const expectedError = 
        error.response && 
        error.response.status >= 400 && 
        error.response.status < 500

    if (!expectedError) {
        console.log(error);
        alert("An unexpected error ocurred.");
    }

    return Promise.reject(error);
});

const httpActions = {
    post: axios.post,
}

export default httpActions;