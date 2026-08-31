const BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

async function fetchApi(endpoint) {

    const response = await fetch(`${BASE_URL}${endpoint}`);

    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }

    return await response.json();

}

export { fetchApi, BASE_URL };