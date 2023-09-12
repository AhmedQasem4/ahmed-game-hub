import { Card, CardBody, Heading, Image, HStack} from '@chakra-ui/react'
import React from 'react'
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCropedImageUrl from './../services/image-url';
import CardGameContainer from './GameCardContainer';

interface Props{
    game: Game;
}

const GameCard = ({game}: Props) => {
  return (
        <Card >
            <Image src={getCropedImageUrl(game.background_image)} />
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
                <HStack justifyContent='space-between'>
                    <PlatformIconList platforms={game.parent_platforms.map(platform => platform.platform)}/>
                    <CriticScore score={game.metacritic} />
                </HStack>
            </CardBody>
        </Card>
  )
}

export default GameCard