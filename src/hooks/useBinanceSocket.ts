import { useEffect, useRef } from "react";
import { type TickerData } from "@/types/binance";

type Callback = (data: TickerData) => void;

export function useBinanceSocket(symbols: string[], onMessage: Callback) {
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (symbols.length === 0) return;

    const streams = symbols.map(s => `${s.toLowerCase()}@ticker`).join('/');
    const url = `wss://stream.binance.com:9443/stream?streams=${streams}`;

    wsRef.current = new WebSocket(url);

    wsRef.current.onmessage = (event) => {
      const { data } = JSON.parse(event.data);
      onMessage(data);
    };

    return () => {
      wsRef.current?.close();
    };
  }, [symbols.join(',')]); // Reconnect only if symbols change
}
