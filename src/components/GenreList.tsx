import { List, Spinner } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';

import GenreItem from './GenreItem';

const GenreList = () => {

    const {data, isLoading, error} = useGenres();
    if(error) return null;

    if(isLoading) return <Spinner> </Spinner>;
  return (
    <List>
        {data.map(g => <GenreItem genre={g}></GenreItem>)}
    </List> 
  )
}

export default GenreList