"use client";

// Hooks
import useSWR from "swr";

// Components
import TrendingCard from "./trending-card";

// Utilities
import { fetchTopPennyStocks } from "@/utils/fetch_trending";

// NextUI
import { Progress } from "@nextui-org/react";

const TrendingSection = () => {
  const { data: topPennyStocks, error } = useSWR(
    "topPennyStocks",
    fetchTopPennyStocks
  );

  if (error || (topPennyStocks && topPennyStocks["Error Message"])) {
    return (
      <div className="mx-16 text-negative-red border-dark-violet border-2 rounded-lg p-4">
        An error occurred while fetching the trending stocks.
      </div>
    );
  }

  if (!topPennyStocks)
    return (
      <div className="flex flex-col gap-6 mx-16 justify-center">
        <Progress
          size="sm"
          isIndeterminate
          aria-label="Loading..."
          className="max-w-full"
          color="danger"
        />
        <p className="text-grey text-center">
          Loading trending penny stocks...
        </p>
      </div>
    );

  return (
    <section className="mx-16 mb-8">
      <h2 className="mb-8 text-black uppercase text-lg font-bold">Trending</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {topPennyStocks.map((stock: any) => (
          <TrendingCard
            key={stock.symbol}
            ticker={stock.symbol}
            currentPrice={parseFloat(stock.price)}
            percentageChange={parseFloat(stock.changesPercentage)}
          />
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;
