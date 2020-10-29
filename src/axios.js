import axios from "axios";

// This baseUrl is the first url every time a request has been sent. 
const instance = axios.create(
    {baseURL: "https://api.themoviedb.org/3",}
);

export default instance;
