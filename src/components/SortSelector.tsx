import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props{
	onSelectPlatform: (platform: Platform)=>void
	selectedPlatform: Platform | null;
}

const SortSelector = () => {
  const { data, error } = usePlatforms();
  
  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
      Order By: 
        
      </MenuButton>
      <MenuList>
        <MenuItem>1</MenuItem>
        <MenuItem>1</MenuItem>
        <MenuItem>1</MenuItem>
        <MenuItem>1</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
