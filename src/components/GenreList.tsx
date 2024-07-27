import { HStack, List, ListItem, Image, Text, Spinner, Button } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/getCoppedImages";

interface Props {
  onSelectGenre : (genre: Genre)=> void;
  selectedGenre : Genre | null;
}

const GenreList = ({selectedGenre, onSelectGenre}: Props) => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) return <Spinner/>;
  if (error) return null;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
			<Button fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal' } onClick={  ()=>onSelectGenre(genre)} variant='link' fontSize='lg'>{genre.name}</Button>
		  </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
