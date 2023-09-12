import { Box } from '@chakra-ui/react'
import {  ReactNode } from 'react'

interface Props{
    children: ReactNode;
}

const CardGameContainer = ({children}:Props) => {
  return (
    <Box width='300px' borderRadius='20px' overflow='hidden' >{children}</Box>
  )
}

export default CardGameContainer