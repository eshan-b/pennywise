import SparkChart from "./spark-chart";

interface TrendingCardProps {
  ticker: string;
  currentPrice: number;
  percentageChange: number;
}

const TrendingCard = ({
  ticker,
  currentPrice,
  percentageChange,
}: TrendingCardProps) => {
  return (
    <div className="p-4 border rounded-md shadow-md">
      <h2 className="text-lg font-bold">{ticker}</h2>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2 items-end">
          <p className="text-base">${currentPrice}</p>
          {percentageChange >= 0 ? (
            <p className="text-sm text-positive-green pb-[0.05rem]">
              +{percentageChange}%
            </p>
          ) : (
            <p className="text-sm text-negative-red pb-[0.05rem]">
              {percentageChange}%
            </p>
          )}
        </div>
        <SparkChart stockSymbol={ticker} />
      </div>
    </div>
  );
};

export default TrendingCard;
