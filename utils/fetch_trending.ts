
export const fetchTopPennyStocks = async () => {
  try {
    const API_KEY = process.env.NEXT_PUBLIC_FMP_API_KEY;
    
    const response = await fetch(
      `https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=${API_KEY}`
    );
    const data = await response.json();

    console.log("data:", data)

    // Filter out the top penny stocks (current price is <= $5)
    const filteredStocks = data.filter(
      (stock: { price: string }) => parseFloat(stock.price) <= 5
    );

    return filteredStocks.slice(0, 6);
  } catch (error) {
    console.error("Error fetching top penny stocks:", error);
    return [];
  }
};