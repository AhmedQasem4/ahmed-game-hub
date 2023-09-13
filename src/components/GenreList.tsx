import { List, Spinner, HStack, Image , Button } from '@chakra-ui/react';
import useGenres, { Genres } from '../hooks/useGenres';
import GenreItem from './GenreItem';
import getCropedImageUrl from '../services/image-url';

interface Props{
  onSelectedGenre : (genre: Genres) => void;
}

const GenreList = ({onSelectedGenre}: Props) => {

    const {data, isLoading, error} = useGenres();
    if(error) return null;

    if(isLoading) return <Spinner> </Spinner>;
  return (
    <List>
        {data.map(g => <HStack paddingY='5px'  key={g.id}>
        <Image boxSize="32px" borderRadius={8} src={getCropedImageUrl(g.image_background)} />
        <Button onClick={()=> onSelectedGenre(g)} variant='link' fontSize='lg' >{g.name}</Button>
      </HStack>)}
    </List> 
  )
}

export default GenreList