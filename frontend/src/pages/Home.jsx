import { Flex, Text, Container, Box, Image } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home({ id }) {
  const [books, setBooks] = useState([]);

  const getAllBooks = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/books`)
      .then((resp) => resp.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <Box>
      <Container maxW="container.xl">
        <Flex mt="3rem">
          <Text fontSize="2xl">
            Passionnée de littérature depuis mon plus jeune âge, je souhaite
            partager cet amour du livre, et mes découvertes avec d’autres. Ici
            on parlera fantasy, young adult, littérature jeunesse, policier et
            cosy mystery.
          </Text>
        </Flex>
        <Image
          src="src/assets/logo-book.png"
          alt="logo of a book"
          width="4rem"
          height="4rem"
          m="auto"
          mt="3rem"
        />

        <Box mt="5rem">
          <Flex flexWrap="wrap" gap="3rem" justifyContent="space-evenly">
            {books.map((book) => (
              <Link to={`/livre/${book.id}`} id={id}>
                <Image
                  width="20rem"
                  height="32rem"
                  _hover={{
                    filter: "auto",
                    color: "white",
                    brightness: "115%",
                  }}
                  src={`${
                    import.meta.env.VITE_BACKEND_URL
                  }/public/assets/images/bookPicture/${book.picture}`}
                  alt={book.name}
                  key={`book-${book.id}`}
                />
              </Link>
            ))}
          </Flex>
        </Box>
      </Container>
      <Box mt="10rem">
        <Text color="black">Camille le Gloanic - 2023</Text>
      </Box>
    </Box>
  );
}

Home.propTypes = {
  id: PropTypes.number.isRequired,
};
