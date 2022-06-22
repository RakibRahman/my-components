import { useState, useEffect } from 'react';


export const useFetch = (url: string) => {

    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {

        try {
            setLoading(true);
            const response = await fetch(url);
            const serverData = await response.json();

            setData(serverData);
        } catch (err) {
            console.log(err)
            setError(JSON.stringify(err))
        } finally {
            setLoading(false);

        }
    };



    useEffect(() => {
        console.log('mounts')
        let ignore = false;
        if (!ignore) {
            fetchData();
        }
        return () => {
            ignore = true;
            console.log('clean up')
        }
    }, [])



    return { data, error, loading }
}