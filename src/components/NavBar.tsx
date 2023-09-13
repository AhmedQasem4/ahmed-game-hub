import { HStack, Image, Text } from '@chakra-ui/react'

import logo from '../assets/logo.webp';
import DarkModeSwitch from './DarkModeSwitch';
import SearchInput from './SearchInput';

interface Props{
  onSearch: (searchText : string) => void;
}

const NavBar = ({onSearch}: Props) => {
  return (
    <HStack  padding='10px'>
        <Image src={logo} boxSize='20'/>
        <SearchInput  onSearch={onSearch}/>
        <DarkModeSwitch />
    </HStack>
  )
}

export default NavBar