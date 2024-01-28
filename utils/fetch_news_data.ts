// utils/fetchNewsData.ts
const fetchNewsData = async (ticker: string) => {
  const API_KEY = process.env.NEXT_PUBLIC_POLYGON_API_KEY;
  const response = await fetch(
    `https://api.polygon.io/v2/reference/news?ticker=${ticker}&apiKey=${API_KEY}`
  );
  const data = await response.json();

  if (data.status === "OK") {
    // Only show 3 news articles
    const slicedData = data.results.slice(0, 3);
    return slicedData;
  } else {
    throw new Error("Error fetching news data");
  }
};

export default fetchNewsData;
