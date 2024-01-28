"use client";

// Routing
import { usePathname } from "next/navigation";

// NextUI
import { Button, Divider } from "@nextui-org/react";

// Hooks
import { useState, useEffect } from "react";

// Icons
import { FaWandMagicSparkles } from "react-icons/fa6";

// SWR
import useSWR from "swr";
const fetcher = (url: string) => fetch(url).then((res) => res.json());
import fetchNewsData from "@/utils/fetch_news_data";

// Components
import HistoricalChart from "@/components/historical-chart";
import NewsSection from "@/components/news-section";
import RiskScoreGauge from "@/components/risk-gauge";

const StockPage = () => {
  const pathname = usePathname();
  const ticker = pathname.split("/")[2];

  const API_KEY = process.env.NEXT_PUBLIC_TWELVE_DATA_API_KEY;
  // Get current price
  const { data: priceData, error: priceError } = useSWR(
    `https://api.twelvedata.com/price?symbol=${ticker}&apikey=${API_KEY}`,
    fetcher
  );

  // Get percent change
  const { data: percentData, error: percentError } = useSWR(
    `https://api.twelvedata.com/quote?symbol=${ticker}&apikey=${API_KEY}`,
    fetcher
  );

  const { data: newsData, error: newsError } = useSWR(
    `/api/news/${ticker}`,
    () => fetchNewsData(ticker)
  );

  const [financialData, setFinancialData] = useState([]);

  useEffect(() => {
    const fetchFinancialData = async () => {
      try {
        const response = await fetch(
          "https://financialmodelingprep.com/api/v3/key-metrics/AAPL?period=annual&apikey=FXyX0ZqzTosNOLCdac4eImL2jm0gA5RP"
        );
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          setFinancialData(data[0]);
        } else {
          console.error("Invalid financial data:", data);
        }
      } catch (error) {
        console.error("Error fetching financial data:", error);
      }
    };

    fetchFinancialData();
  }, []);

  return (
    <>
      <div className="flex h-[3.2rem] space-x-4 mx-16 mt-8">
        <h1 className="font-bold text-[2.75rem]">{ticker}</h1>
        <div className="pt-3">
          <Divider orientation="vertical" />
        </div>
        <div className="mt-[1.39rem]">
          <div className="flex flex-row gap-4 items-end">
            {priceError && (
              <p className="text-[1.5rem] font-bold">Error fetching price</p>
            )}
            {!priceData && <p className="text-[1.5rem] font-bold">🎈</p>}
            {priceData && (
              <p className="text-[1.5rem] font-bold">
                ${Number(Number(priceData.price).toPrecision(6))}
              </p>
            )}

            <div className="pb-[0.2rem]">
              {percentError && (
                <p className="text-[1.5rem] font-bold">Error fetching price</p>
              )}
              {!percentError && <div></div>}
              {percentData && (
                <p
                  className={`text-base ${
                    percentData.percent_change >= 0
                      ? "text-positive-green"
                      : "text-negative-red"
                  }`}
                >
                  {percentData.percent_change >= 0 ? "+" : "-"}
                  {Math.abs(percentData.percent_change)}%
                </p>
              )}
            </div>

            <Button
              className="bg-[#FCC6D4]"
              startContent={<FaWandMagicSparkles />}
            >
              Predict
            </Button>
          </div>
        </div>
      </div>

      <HistoricalChart stockSymbol={ticker} />

      <div className="mx-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Mews Column */}
          <div>
            <h3 className="font-bold uppercase text-xl mb-4">News</h3>
            {newsError ? (
              <p>Error fetching news</p>
            ) : !newsData ? (
              <p>Loading...</p>
            ) : (
              <NewsSection newsData={newsData} />
            )}
          </div>

          {/* Risk Meter Column */}
          <div>
            <div>
              <h3 className="font-bold uppercase text-xl mb-4">Risk Meter</h3>
              <RiskScoreGauge financialData={financialData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StockPage;
