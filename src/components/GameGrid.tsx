import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeletons from "./GameCardSkeletons";
import GameCardContainer from "./GameCardContainer";
import { Genres } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";

interface Props{
  selectedGenre: Genres | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({selectedGenre , selectedPlatform}: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
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
        {isLoading && skeleteons.map((s) => <GameCardContainer key={s}><GameCardSkeletons  /></GameCardContainer>)}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard  game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
