import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = import.meta.env.EMOVIE_APP_TMDB_TOKEN;
const API_KEY = "a96cfd54cb6d40bf265c26245d158a8a";
const headers = {
    Authorization: 'bearer ' + TMDB_TOKEN,
}

export const fetchApiData = async (url, params) => {
    try {
        const {data} = await axios.get(BASE_URL + url + `?api_key=${API_KEY}`, {
            headers,
            params
        });

        return data;

    } catch (e) {
        console.log(e);
        return e;
    }
}