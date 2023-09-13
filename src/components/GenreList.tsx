import { List, Spinner, HStack, Image , Button, Heading } from '@chakra-ui/react';
import useGenres, { Genres } from '../hooks/useGenres';
import GenreItem from './GenreItem';
import getCropedImageUrl from '../services/image-url';

interface Props{
  onSelectedGenre : (genre: Genres) => void;
  selectedGenre: Genres | null;
}

const GenreList = ({onSelectedGenre, selectedGenre}: Props) => {

    const {data, isLoading, error} = useGenres();
    if(error) return null;

    if(isLoading) return <Spinner> </Spinner>;
  return (
    <>
    <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
    <List>
        {data.map(g => <HStack paddingY='5px'  key={g.id}>
        <Image objectFit='cover' boxSize="32px" borderRadius={8} src={getCropedImageUrl(g.image_background)} />
        <Button whiteSpace='normal' textAlign='left' fontWeight={g.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={()=> onSelectedGenre(g)} variant='link' fontSize='lg' >{g.name}</Button>
      </HStack>)}
    </List>
    </> 
  )
}

export default GenreList