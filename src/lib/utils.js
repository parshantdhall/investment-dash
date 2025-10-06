export const getSymbolVal = (symbolObj, symbolName) => {
    if (!symbolObj || !symbolName) return '';
    let k = Object.keys(symbolObj).find(key => key.toLowerCase().includes(symbolName.toLowerCase()));
    return symbolObj[k];
}