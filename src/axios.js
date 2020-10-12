import axios from "axios";

// 毎回リクエストを送るたびに、先頭に来る
const instance = axios.create(
    {baseURL: "https://api.themoviedb.org/3",}
);

export default instance;