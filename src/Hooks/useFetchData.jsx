import React,{ useEffect,useState } from 'react';

const useFetchData = (url) => {
    const [ data,setData ] = useState(null);
    const [ error,setError ] = useState(null);
    const [ isLoading,setIsLoading ] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(url)
            .then(res => {
                if (res.ok) {
                    res.json();
                } else {
                    setError('404 server not Found');
                }
            })
            .then(data => {
                setData(data);
                setIsLoading(false);
            })
            .catch(err => {
                setError(err);
            });
    },[]);

    return () => { data,isLoading,error; };
};

export default useFetchData;