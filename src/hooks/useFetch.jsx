import { useEffect, useState } from "react";
import { fetchApiData } from "../utils/api";
const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() => {
        // when pending
        setLoading('Loading...');
        setError(false);
        setData(false);

        fetchApiData(url)
            .then((res) => {
                // when resolved
                setLoading(false);
                setData(res);
            })
            .catch((err) => {
                // when rejected
                setLoading(false);
                setError("Error caused!" + err);
            });
    }, [url]);

    return { data, error, loading };
};

export default useFetch;