import { type TickerData } from "@/types/binance";
import TickerCard from "@/components/ticker-card/TickerCard";

interface Props {
  data: Record<string, TickerData>;
}

export function WatchList({ data }: Props) {
  const tickers = Object.values(data);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tickers.map((ticker) => (
        <TickerCard key={ticker.s} data={ticker} />
      ))}
    </div>
  );
}
