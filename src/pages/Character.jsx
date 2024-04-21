import { Box, Image } from "@chakra-ui/react";

const Character = ({ characterPosition }) => {
  return (
    <Box position="absolute" style={{ bottom: `${characterPosition.y}%`, left: `${characterPosition.x}%`, transform: "translate(-50%, -50%)" }}>
      <Image src="path_to_character_image.png" alt="Character Blowing Leaves" />
    </Box>
  );
};

export default Character;
