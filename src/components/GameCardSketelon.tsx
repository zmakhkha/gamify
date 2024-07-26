import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";
import GameCardContainer from "./GameCardContainer";

const GameCardSketelon = () => {
  return (
    <GameCardContainer>
      <Card >
        <Skeleton height="200px" />
        <CardBody>
          <SkeletonText />
          </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default GameCardSketelon;
