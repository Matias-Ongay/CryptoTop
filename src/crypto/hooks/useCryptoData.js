import { useState, useEffect } from 'react';

export const useCryptoData = () => {
    const [cryptoData, setCryptoData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&x_cg_demo_api_key=CG-ysrS4h1TnnKzccda6QCiaJ2g`;
                const response = await fetch(url);
                const responseData = await response.json();
                console.log('Response from API:', responseData);

                if (responseData) {
                    console.log('true')
                    const formattedData = responseData.map(coin => ({
                        id: coin.id,
                        symbol: coin.symbol,
                        name: coin.name,
                        image: coin.image,
                        price: coin.current_price,
                        market_rank: coin.market_cap_rank,
                        high:coin.high_24h,
                        percentage:coin.
                        market_cap_change_percentage_24h,
                        
                    }));
                    setCryptoData(formattedData);
                    setIsLoading(false);
                } else {
                    throw new Error('No data received from API');
                }
            } catch (error) {
                console.error('Error fetching crypto data:', error);
            }
        };

        fetchData();
    }, []);

    return { cryptoData, isLoading };
};
