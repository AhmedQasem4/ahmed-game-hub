
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';

const GameGrid = () => {
   const {games , error} = useGames();

   
  return (
    <>
    <SimpleGrid columns={{
      sm:1 , md: 2, lg: 3,
    }} spacing={10} padding='20px'>
        {error && <Text>{error}</Text>}
        {games.map(game => <GameCard key={game.id} game={game}></GameCard>)}
    </SimpleGrid>
    </>
  )
}

export default GameGrid