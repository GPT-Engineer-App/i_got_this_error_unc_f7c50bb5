import { Box } from "@chakra-ui/react";

const Leaf = ({ style }) => {
  return (
    <Box
      position="absolute"
      w="10px"
      h="10px"
      bgColor="green.500"
      style={style}
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: "url(path_to_leaf_image.png)",
        backgroundSize: "cover",
      }}
    />
  );
};

export default Leaf;
