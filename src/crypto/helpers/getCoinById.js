


export const getCoinById = (id, cryptoData) => {
  return cryptoData.find(crypto => crypto.id === id);
}