import { Card, CardBody, Heading, Icon, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';

interface Props{
    game: Game;
}

const GameCard = ({game}: Props) => {
  return (
    <Card borderRadius='20px' overflow='hidden'>
        <Image src={game.background_image} />
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>
            <PlatformIconList platforms={game.parent_platforms.map(platform => platform.platform)}/>
        </CardBody>
    </Card>
  )
}

export default GameCard