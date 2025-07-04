import { useEffect, useState } from 'react';

const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/c4c94446ecbebf3b12e0813c/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => {
                setData(res.conversion_rates);
            })
            .catch((err) => {
                console.error("API fetch error:", err);
                setData({});
            });
    }, [currency]);

    return data;
};

export default useCurrencyInfo;