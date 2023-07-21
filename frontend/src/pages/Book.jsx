import {
  Box,
  Image,
  Flex,
  UnorderedList,
  ListItem,
  Text,
  Container,
  Card,
  // FormLabel,
  // Input,
  // Textarea,
  // Button,
  // useToast,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Home() {
  const [book, setBook] = useState();
  // const [email, setEmail] = useState();
  // const [message, setMessage] = useState();

  const { id } = useParams();

  const getOneBook = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/books/${id}`)
      .then((resp) => resp.json())
      .then((data) => setBook(data))
      .catch((err) => console.error(err));
  };

  // const postCommentary = () => {
  //   fetch(`${import.meta.env.VITE_BACKEND_URL}/api/commentary`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       email,
  //       message,
  //     }),
  //   })
  //     .then(() => {
  //       setEmail("");
  //       setMessage("");
  //     })
  //     .catch((err) => console.error(err));
  // };

  // const handleSubmit = (e) => {
  //   console.info(e);
  //   e.preventDefault();
  //   postCommentary();
  // };
  // const toast = useToast();

  useEffect(() => {
    getOneBook();
  }, [id]);

  if (!book) {
    return <p>En attente de l'article...</p>;
  }
  return (
    <Box>
      <Container maxW="container.lg">
        <Box width="20rem" display={{ md: "none" }} mt="5rem">
          <Image
            src={`${
              import.meta.env.VITE_BACKEND_URL
            }/public/assets/images/bookPicture/${book.picture}`}
            alt={book.name}
          />
        </Box>
        <Flex mt={{ base: "3rem", md: "5rem" }} gap="6rem" mb="3rem">
          <Box width="20rem" display={{ base: "none", md: "block" }}>
            <Image
              src={`${
                import.meta.env.VITE_BACKEND_URL
              }/public/assets/images/bookPicture/${book.picture}`}
              alt={book.name}
            />
          </Box>
          <Box width="35rem" mt="3rem">
            <Text fontSize="2xl" fontWeight="bold" mb="3rem">
              Résumé
            </Text>
            <Box>
              {" "}
              <Text fontSize="xl">{book.summary}</Text>
            </Box>
          </Box>
        </Flex>

        <Text fontSize="2xl" mt="4rem" fontWeight="bold" mb="3rem">
          Mon avis
        </Text>
        <Box>
          <Text fontSize="xl">{book.opinion}</Text>
        </Box>
        <Card
          width={{ base: "20rem", md: "30rem" }}
          border="1px"
          mt="5rem"
          bgColor="brand.200"
        >
          <UnorderedList listStyleType="none" mb="1rem" fontSize="xl" mt="1rem">
            <ListItem>Titre : {book.name}</ListItem>
            <ListItem>Auteur : {book.author}</ListItem>
            <ListItem> Date de publication : {book.released_date}</ListItem>
            <ListItem> Genre : {book.genre}</ListItem>
            <ListItem>Edition {book.publisher}</ListItem>
          </UnorderedList>
        </Card>
        {/* 
        <Box mt="3rem">
          <Text
            mb="2rem"
            fontSize="xl"
            color="purple.400"
            ml={{ base: "1.5rem", md: "10rem" }}
          >
            Envoyer un mail
          </Text> */}

        {/* <form onSubmit={handleSubmit}>
            <FormLabel ml={{ base: "1.5rem", md: "10rem" }}>
              Votre email
            </FormLabel>
            <Input
              ml={{ base: "1.5rem", md: "10rem" }}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              width={{ base: "19rem", md: "30rem" }}
              border="1px solid grey"
              type="email"
            />
            <FormLabel ml={{ base: "1.5rem", md: "10rem" }} mt="1rem">
              Votre message
            </FormLabel>
            <Textarea
              ml={{ base: "1.5rem", md: "10rem" }}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              width={{ base: "19rem", md: "40rem" }}
              border="1px solid grey"
              type="text"
            />
            <br />
            <Button
              ml={{ base: "1.5rem", md: "10rem" }}
              mt="1rem"
              width="8rem"
              height="3rem"
              color="white"
              type="submit"
              onClick={() => {
                if (email && message) {
                  toast({
                    title: "Votre message à bien été envoyé.",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                  });
                }
              }}
            >
              Envoyer
            </Button>
          </form> */}
        {/* </Box> */}
      </Container>
      <Box mt="10rem">
        <Text color="black">Camille le Gloanic - 2023</Text>
      </Box>
    </Box>
  );
}
