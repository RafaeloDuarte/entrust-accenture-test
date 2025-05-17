import { WatchList } from "@/components/watch-list/WatchList";
import { SymbolList } from "@/components/symbol-list/SymbolList";
import { usePreferences } from "@/context/PreferencesContext";
import { useBinanceSocket } from "@/hooks/useBinanceSocket";
import { type TickerData } from "@/types/binance";
import { useState } from "react";

export default function Dashboard() {
  const { selectedSymbols } = usePreferences();
  const [tickerMap, setTickerMap] = useState<Record<string, TickerData>>({});

  useBinanceSocket(selectedSymbols, (data) => {
    setTickerMap(prev => ({
      ...prev,
      [data.s]: data
    }));
  });

  return (
    <div className="flex h-screen">
      <div className="w-64">
        <SymbolList />
      </div>
      <main className="flex-1 overflow-y-auto p-6 bg-muted/20">
        <h1 className="text-2xl font-bold mb-4">Watched Symbols</h1>
        <WatchList data={tickerMap} />
      </main>
    </div>
  );
}
