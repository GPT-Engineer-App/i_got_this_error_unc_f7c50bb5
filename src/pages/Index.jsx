import React, { useState, useEffect } from "react";
import Leaf from "./Leaf.jsx";
import Character from "./Character.jsx";
import { Box, Button, Center, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { FaLeaf, FaFan } from "react-icons/fa";

const generateRandomStyle = () => {
  const top = Math.random() * 100;
  const left = Math.random() * 100;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    animation: "blowAway 0.5s ease-in forwards",
  };
};

const Index = () => {
  const [leafCount, setLeafCount] = useState(0);
  const [leaves, setLeaves] = useState([]);
  const [characterPosition, setCharacterPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newLeafStyle = generateRandomStyle();
      setLeaves((prevLeaves) => [...prevLeaves, <Leaf key={`leaf-${prevLeaves.length}`} style={newLeafStyle} />]);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const onMouseMove = (event) => {
    const gameAreaRect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - gameAreaRect.left) / gameAreaRect.width) * 100;
    const y = ((event.clientY - gameAreaRect.top) / gameAreaRect.height) * 100;
    setCharacterPosition({ x, y });
  };

  // Removed duplicate return statement and incorrect code

  return (
    <Container maxW="container.md" py={10} bg="green.500" style={{ minHeight: "100vh", position: "relative" }}>
      <Center flexDirection="column">
        <Heading mb={4}>Leaf Blower Revolution</Heading>
        <Text fontSize="xl" mb={8}>
          Collect as many leaves as you can!
        </Text>
        <Box mb={8}>
          <Text fontSize="3xl">Leaves Collected: {leafCount}</Text>
        </Box>
      </Center>
      {leaves.map((leaf) => leaf)}
    </Container>
  );
};

// Add CSS for leaf animation
document.head.insertAdjacentHTML(
  "beforeend",
  `<style>
    @keyframes blowAway {
      0% { opacity: 1; transform: translate(0, 0); }
      100% { opacity: 0; transform: translate(-50vw, -100vh); }
    }
  </style>`,
);

export default Index;
