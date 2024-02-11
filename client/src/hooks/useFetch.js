const { useState, useEffect } = require("react")

const useFetch = (url, method = 'get', body = null) => {
    const [data, setData] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await (method === 'get' ? fetch(url) : fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                }));
                const result = await response.json();
                console.log(result); // Log the result to the console
                setData(result);
            } catch (err) {
                console.error(err); // Log any errors to the console
                setError(err);
            } finally {
                setLoaded(true);
            }
        };

        fetchData();
    }, [url, method, body]);

    return { data, loaded, error };
};


export default useFetch;