export interface SymbolInfo {
    symbol: string;
    status: string;
    baseAsset: string;
    quoteAsset: string;
}

export interface TickerData {
    s: string;  // Symbol
    c: string;  // Last price
    b: string;  // Best bid
    a: string;  // Best ask
    P: string;  // Price change percent
}
