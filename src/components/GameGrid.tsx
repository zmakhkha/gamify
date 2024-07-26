import React, { useState, useEffect } from 'react';
import apiClient from '../services/api-client';
import { Text } from '@chakra-ui/react'; 

interface Game {
	id: number;
	name: string;
}

interface FecthGamesResponse {
	count: number;
	results: Game [];
}

const GameGrid = () => {
	const  [games, setGames] = useState<Game[]>([]);
	const  [error, setError] = useState([]);

	useEffect(() =>	{
		apiClient.get<FecthGamesResponse>('/games')
		.then(res => setGames(res.data.results))
		.catch(err => setError(err.message));
	})
  return (
	<>
		{error && <Text>{error}</Text>}
		<ul>
		{games.map((game: Game) => (
          <li key={game.id}>{game.name}</li>
        ))}
		</ul>
	</>
  )
}

export default GameGrid
