import { Card, CardContent } from "@/components/ui/card";
import { type TickerData } from "@/types/binance";

interface Props {
  data: TickerData;
}

export default function TickerCard({ data }: Props) {
  return (
    <Card className="w-full max-w-sm rounded-2xl shadow-md p-4">
      <CardContent className="space-y-2">
        <div className="text-xl font-semibold">{data.s}</div>
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Last:</span>
          <span>{data.c}</span>
        </div>
        <div className="flex justify-between text-sm text-green-600">
          <span>Bid:</span>
          <span>{data.b}</span>
        </div>
        <div className="flex justify-between text-sm text-red-600">
          <span>Ask:</span>
          <span>{data.a}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Change %:</span>
          <span className={parseFloat(data.P) >= 0 ? "text-green-500" : "text-red-500"}>
            {data.P}%
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
