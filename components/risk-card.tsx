import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";

const RiskCard = ({
  title,
  definition,
  value,
}: {
  title: string;
  definition: string;
  value: number;
}) => {
  return (
    <Card>
      <CardHeader>
        <p className="font-bold">{title}</p>
      </CardHeader>
      <Divider />
      <CardBody>{definition}</CardBody>
      <Divider />
      <CardFooter>Current Value: {value}</CardFooter>
    </Card>
  );
};

export default RiskCard;
