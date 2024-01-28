// Hooks
import { useState, useEffect } from "react";

// ReCharts
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const HistoricalChart = ({ stockSymbol }: { stockSymbol: string }) => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const fetchStockData = async () => {
      // Define the API endpoint and parameters
      const apiKey = process.env.NEXT_PUBLIC_TWELVE_DATA_API_KEY;
      const apiUrl = `https://api.twelvedata.com/time_series?symbol=${stockSymbol}&interval=1month&apikey=${apiKey}`;

      // Fetch historical prices
      const response = await fetch(apiUrl);
      const data = await response.json();

      // The data is from most recent to least recent, so we reverse it
      data.values.reverse();

      if (data.status === "ok") {
        // Transform the data into the format required by Recharts
        const historicalData = data.values.map(
          (entry: { datetime: string | number | Date; close: string }) => ({
            date: new Date(entry.datetime).toLocaleString("default", {
              month: "short",
              year: "2-digit",
            }),
            close: parseFloat(entry.close),
          })
        );

        console.log(historicalData);

        setStockData(historicalData);
      } else {
        console.error("Error fetching stock data:", data);
      }
    };

    fetchStockData();
  }, [stockSymbol]);

  return (
    <div className="mr-16 ml-8 my-8">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={stockData}
          margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="close"
            stroke="#AD0731"
            dot={false}
            yAxisId={0}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HistoricalChart;
