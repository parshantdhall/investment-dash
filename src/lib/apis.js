export const getSearchEndpoint = (inputValue) => {
    return `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${inputValue}&apikey=${import.meta.env.VITE_ALPHA_API_KEY}`;
}

export const getStockCurrentPrice = (symbol) => {
    return `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${import.meta.env.VITE_ALPHA_API_KEY}`
}