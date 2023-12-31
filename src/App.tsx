
import {  Grid, GridItem, Show , HStack } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genres } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/usePlatforms';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';


export interface GameQuery{
  genre: Genres | null;
  platform : Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`,
  }}
  templateColumns={{
    base: '1fr',
    lg:'200px 1fr'
  }}>
    <GridItem area={"nav"}>
      <NavBar onSearch={(searchText) => setGameQuery({...gameQuery , searchText})}/>
    </GridItem>
    <Show above='lg'>
    <GridItem  area={"aside"} paddingX={5}>
      <GenreList selectedGenre={gameQuery.genre} onSelectedGenre={(genre)=> setGameQuery({...gameQuery , genre})} />
    </GridItem>
    </Show>
    <GridItem  area={"main"}>
      <GameHeading gameQuery={gameQuery} />
      <HStack spacing={5} marginLeft={5} marginBottom={2}>
        <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform)=> setGameQuery({...gameQuery , platform})} />
        <SortSelector sortOrde={gameQuery.sortOrder} onSelectSortOrder={(sortOrder)=> setGameQuery({...gameQuery , sortOrder})} />
      </HStack>
      <GameGrid gameQuery={gameQuery}/>
    </GridItem>
  </Grid>
}

export default App
