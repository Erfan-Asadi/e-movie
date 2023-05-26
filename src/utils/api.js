import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2M1MzIyNmNiZmYxNDUwOWI1ZTBkMWI0NTEzYTlmNSIsInN1YiI6IjY0MmMxODcwOGRlMGFlMDExMzUxMGQ3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fFlRAt6oKrQu0CHilcTtO4oZUVADk1LYua_51kW89AY'
    }
  };

// const TMDB_TOKEN = import.meta.env.EMOVIE_APP_TMDB_TOKEN;
// const API_KEY = "37c53226cbff14509b5e0d1b4513a9f5";


export const fetchApiData = async (url) => {
    try {
        const {data} = await axios.get(BASE_URL + url ,options);

        return data;

    } catch (e) {
        console.log(e);
        return e;
    }
}