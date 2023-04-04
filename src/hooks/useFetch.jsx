import { useEffect, useState } from "react";
import { fetchApiData } from "../utils/api";
const useFetch = (url) => {
    
    // const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(null);
    // const [error, setError] = useState(null);
    
    // instead three state, merge them to one state
    // possible values : 'loading' - 'success' - 'error'
    const [fetchState, setFetchState] = useState(null);

    useEffect(() => {
        setFetchState({status: 'loading', value: 'loading'}); // when pending

        fetchApiData(url)
            .then((res) => {
                setFetchState({status: 'success', value: res}); // when resolved
            })
            .catch((err) => {
                setFetchState({status: 'error', value: `Something went wrong! ${err}`}); // when rejected
            });
    }, [url]);

    return fetchState;
};

export default useFetch;