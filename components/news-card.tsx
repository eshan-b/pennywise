import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
} from "@nextui-org/react";

const NewsCard = ({ news }: { news: any }) => {
  return (
    <Card className="bg-white shadow-md">
      <CardHeader>
        <img
          src={news.image_url}
          alt={news.title}
          className="mb-2 w-full h-32 object-cover"
        />
      </CardHeader>
      <Divider />
      <CardBody>
        <h3 className="text-lg font-bold mb-2 line-clamp-1">{news.title}</h3>
        <p className="text-gray-500 text-sm mb-2">{news.publisher.name}</p>
        <p className="text-gray-700 line-clamp-2">{news.description}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href={news.article_url}>
          Read more
        </Link>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
