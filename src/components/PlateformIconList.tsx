import React from "react";
import { Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";

import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaLinux,
  FaAndroid,
  FaApple,
} from "react-icons/fa";

import { MdPhoneIphone } from 'react-icons/md';  
import { SiNintendo } from 'react-icons/si';  
import { BsGlobe } from 'react-icons/bs';  
import { IconType } from "react-icons";
interface Props {
  platforms: Platform[];
}

const PlateformIconList = ({ platforms }: Props) => {
	const iconMap: { [key: string]: IconType} = {
		pc: FaWindows,
		playstation: FaPlaystation,
		xbox: FaXbox,
		linux: FaLinux,
		android: FaAndroid,
		mac: FaApple,
		nintendo: SiNintendo,
		ios: MdPhoneIphone,
		web: BsGlobe,
	}
  return (
    <HStack marginY={1}> // theme.space
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color='gray.500'/>
      ))}
    </HStack>
  );
};

export default PlateformIconList;
