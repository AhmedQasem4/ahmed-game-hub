import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";


const GameCardSkeletons = () => {
  return (
    <Card width="300px" borderRadius="20px" overflow="hidden">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeletons;
