import { Key } from "react";
import NewsCard from "./news-card";

interface NewsSectionProps {
  newsData: any;
}

const NewsSection: React.FC<NewsSectionProps> = ({ newsData }) => {
  return (
    <div className="flex flex-col gap-4 mr-10 mb-8">
      {newsData.map((news: { id: Key | null | undefined }) => (
        <NewsCard key={news.id} news={news} />
      ))}
    </div>
  );
};

export default NewsSection;
