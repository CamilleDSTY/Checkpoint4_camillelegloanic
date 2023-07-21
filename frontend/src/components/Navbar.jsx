import { Link } from "react-router-dom";
import { Image, Box, Text } from "@chakra-ui/react";
import library from "../assets/library.jpg";

export default function Navbar() {
  return (
    <Box>
      <Box>
        <Image
          width="100%"
          height="25rem"
          objectFit="cover"
          src={library}
          alt="a library"
        />
      </Box>
      <Box
        bgColor="brand.100"
        padding={{ md: "1rem" }}
        boxShadow="dark-lg"
        rounded="md"
      >
        <Link to="/">
          <Text
            fontWeight="bold"
            fontSize="4xl"
            ml={{ base: "2rem", md: "8rem" }}
          >
            La bibliothèque de Thae - Blog littéraire
          </Text>
        </Link>
      </Box>
    </Box>
  );
}
