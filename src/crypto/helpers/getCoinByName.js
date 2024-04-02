

export const getCoinByName = (name = '', cryptoData) => {
    name = name.toLocaleLowerCase().trim();
    if (name.length === 0 || !cryptoData) return []; // Verifica si cryptoData es undefined
    return cryptoData.filter(
        crypto => crypto.name.toLocaleLowerCase().includes(name)
    );
}