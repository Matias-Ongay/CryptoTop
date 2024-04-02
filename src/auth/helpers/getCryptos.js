export const getCryptos =async() =>{

    const url=`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&x_cg_demo_api_key=CG-ysrS4h1TnnKzccda6QCiaJ2g`;
    const resp=await fetch(url);
    const {data}=await resp.json();
    const crypto =data.map(coin=>({
        id:coin.id,
        symbol:coin.symbol,
        name:coin.name,
        image:coin.image,
        price:coin.current_price,
        market_rank:coin.market_cap_rank
    }));
    return crypto;


}