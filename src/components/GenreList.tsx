import { List } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';

import GenreItem from './GenreItem';

const GenreList = () => {

    const {data} = useGenres();
  return (
    <List>
        {data.map(g => <GenreItem genre={g}></GenreItem>)}
    </List> 
  )
}

export default GenreList