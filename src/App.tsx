
import {  Grid, GridItem, Show } from '@chakra-ui/react';


function App() {
  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`,
  }}>
    <GridItem bg={"yellow"} area={"nav"}>nav</GridItem>
    <Show above='lg'>
    <GridItem bg={"tomato"} area={"aside"}>aside</GridItem>
    </Show>
    <GridItem bg={"dodgerblue"} area={"main"}>main</GridItem>
  </Grid>
}

export default App
