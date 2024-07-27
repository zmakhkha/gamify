import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Game, Platform } from "./hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

export function App() {
  const [gameQuery,setgameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area="nav"></GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setgameQuery({...gameQuery, genre})} />
        </GridItem>
      </Show>
      <GridItem area="main">
      <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setgameQuery({...gameQuery, platform})}/>
        <GameGrid gameQuery={gameQuery}  />
      </GridItem>
    </Grid>
  );
}

export default App;
