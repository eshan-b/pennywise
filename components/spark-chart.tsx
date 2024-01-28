// Hooks
import { useState, useEffect } from "react";

// ReCharts
import { LineChart, Line, ResponsiveContainer } from "recharts";

const SparkChart = ({ stockSymbol }: { stockSymbol: string }) => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const API_KEY = process.env.NEXT_PUBLIC_FMP_API_KEY;
        const response = await fetch(
          `https://financialmodelingprep.com/api/v3/historical-price-full/${stockSymbol}?apikey=${API_KEY}`
        );
        const data = await response.json();

        // Assuming data structure from FMP, adjust accordingly
        const historicalData = data.historical.map(
          (entry: { date: any; close: any }) => ({
            date: entry.date,
            close: entry.close,
          })
        );

        setStockData(historicalData);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    fetchStockData();
  }, [stockSymbol]);

  return (
    <ResponsiveContainer width="100%" height={80}>
      <LineChart
        data={stockData}
        margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
      >
        <Line
          type="monotone"
          dataKey="close"
          stroke="#AD0731"
          dot={false}
          yAxisId={0}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SparkChart;
