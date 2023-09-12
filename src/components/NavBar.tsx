import { HStack, Image, Text } from '@chakra-ui/react'

import logo from '../assets/logo.webp';
import DarkModeSwitch from './DarkModeSwitch';

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Image src={logo} boxSize='20'/>
        <Text>NavBar</Text>
        <DarkModeSwitch />
    </HStack>
  )
}

export default NavBar