import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeletons from "./CardGameSkeleteons";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeleteons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
        }}
        spacing={10}
        padding="20px"
      >
        {error && <Text>{error}</Text>}
        {isLoading && skeleteons.map((s) => <GameCardSkeletons key={s} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
