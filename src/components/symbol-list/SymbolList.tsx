// src/components/SymbolList.tsx
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { SearchInput } from "@/components/search-input/SearchInput";
import { type SymbolInfo } from "@/types/binance";
import { usePreferences } from "@/context/PreferencesContext";

export function SymbolList() {
  const [symbols, setSymbols] = useState<SymbolInfo[]>([]);
  const [search, setSearch] = useState("");
  const { selectedSymbols, toggleSymbol } = usePreferences();

  useEffect(() => {
    fetch("https://api.binance.com/api/v3/exchangeInfo")
      .then(res => res.json())
      .then(data => {
        setSymbols(data.symbols.filter((s: SymbolInfo) => s.status === "TRADING"));
      });
  }, []);

  const filtered = symbols.filter(s =>
    s.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 space-y-2 overflow-y-auto max-h-screen border-r border-muted">
      <h2 className="text-lg font-semibold">Available Symbols</h2>
      <SearchInput value={search} onChange={setSearch} placeholder="Search symbols..." />
      <div className="space-y-2">
        {filtered.slice(0, 200).map((s) => (
          <Button
            key={s.symbol}
            variant={selectedSymbols.includes(s.symbol) ? "secondary" : "outline"}
            className="w-full justify-start"
            onClick={() => toggleSymbol(s.symbol)}
          >
            {s.symbol}
          </Button>
        ))}
      </div>
    </div>
  );
}
