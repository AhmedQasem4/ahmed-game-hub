import React from "react";
import { Genres } from "../hooks/useGenres";
import { ListItem, HStack, Text, Image } from "@chakra-ui/react";
import getCropedImageUrl from './../services/image-url';

interface Props {
  genre: Genres;
}

const GenreItem = ({ genre }: Props) => {
  return (
    <ListItem paddingY='5px'  key={genre.id}>
      <HStack>
        <Image boxSize="32px" borderRadius={8} src={getCropedImageUrl(genre.image_background)} />
        <Text fontSize='lg'>{genre.name}</Text>
      </HStack>
    </ListItem>
  );
};

export default GenreItem;
