import { useState, useEffect } from "react";
import { fetchApi } from "../services/api.js";

function useFetch(endpoint) {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true);
                const result = await fetchApi(endpoint);
                setData(result.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData()

    }, [endpoint])

    return { data, error, isLoading }

}
export default useFetch