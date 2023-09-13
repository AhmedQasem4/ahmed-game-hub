import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

const SortSelector = () => {
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>order by: Relevance</MenuButton>
        <MenuList>
            <MenuItem>Relevance</MenuItem>
            <MenuItem>Data added</MenuItem>
            <MenuItem>Name</MenuItem>
            <MenuItem>Relase date</MenuItem>
            <MenuItem>popularity</MenuItem>
            <MenuItem>Average rating</MenuItem>
        </MenuList>
    </Menu>
  )
}

export default SortSelector