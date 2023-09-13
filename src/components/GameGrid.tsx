import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeletons from "./GameCardSkeletons";
import GameCardContainer from "./GameCardContainer";
import { Genres } from "../hooks/useGenres";

interface Props{
  selectedGenre: Genres | null;
}

const GameGrid = ({selectedGenre}: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre);
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
