import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlateformIconList from "./PlateformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/getCoppedImages";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justify='space-between' marginBottom={3}>
          <PlateformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name} <Emoji rating={game.rating_top}/></Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
