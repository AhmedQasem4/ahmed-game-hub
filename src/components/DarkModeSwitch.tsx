import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'

const DarkModeSwitch = () => {

    const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
        <Switch colorScheme='green' isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
        <Text whiteSpace='nowrap'>Dark mode</Text>
    </HStack>
  )
}

export default DarkModeSwitch