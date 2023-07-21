import {
  Box,
  FormLabel,
  Input,
  Select,
  Button,
  Textarea,
  Container,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const imageTypes = ["image/jpeg", "image/jpg", "image/png"];

export default function Admin() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [released, setReleased] = useState("");
  const [genre, setGenre] = useState("");
  const [publisher, setPublisher] = useState("");
  const [opinion, setOpinion] = useState("");
  const [summary, setSummary] = useState("");
  const [picture, setPicture] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleChangeGenre = (e) => {
    setGenre(e.target.value);
  };

  const handleChangePublisher = (e) => {
    setPublisher(e.target.value);
  };

  const handleChangeOpinion = (e) => {
    setOpinion(e.target.value);
  };

  const handleChangeSummary = (e) => {
    setSummary(e.target.value);
  };

  const handleChangeReleased = (e) => {
    setReleased(e.target.value);
  };

  const handleChangePicture = (e) => {
    const fileSelected = e.target.files[0];
    if (imageTypes.includes(fileSelected.type)) {
      setPicture(e.target.files[0]);
    } else {
      alert("Only jpeg, jpg and png are allowed");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !name ||
      !released ||
      !picture ||
      !genre ||
      !author ||
      !publisher ||
      !opinion ||
      !summary
    ) {
      alert("You must provide a name, a picture and a released date!!!!");
    } else {
      const bookData = new FormData();
      bookData.append("picture", picture);
      bookData.append("name", name);
      bookData.append("released_date", released);
      bookData.append("author", author);
      bookData.append("genre", genre);
      bookData.append("publisher", publisher);
      bookData.append("opinion", opinion);
      bookData.append("summary", summary);
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/books`, {
        method: "POST",
        // credentials: "include",
        body: bookData,
      })
        .then((res) => res.json())
        .then((data) => {
          navigate(`/livre/${data.id}`);
        })
        .catch(() => {
          alert("Error to create the game, please try again!!!");
        });
    }
  };

  return (
    <Box>
      <Container maxW="container.lg" mt="7rem">
        <form onSubmit={handleSubmit}>
          <Box width={{ base: "20rem", md: "30rem" }}>
            <FormLabel fontSize="2xl">Titre du livre</FormLabel>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={handleChangeName}
              bgColor="white"
              border="1px"
            />
            <FormLabel fontSize="2xl">Auteur</FormLabel>
            <Input
              type="text"
              id="author"
              value={author}
              onChange={handleChangeAuthor}
              bgColor="white"
              border="1px"
            />
            <FormLabel fontSize="2xl">Date de parution</FormLabel>
            <Input
              type="date"
              id="released"
              value={released}
              onChange={handleChangeReleased}
              bgColor="white"
              border="1px"
            />
            <FormLabel fontSize="2xl">Genre</FormLabel>
            <Select
              placeholder="Choisir le genre"
              id="name"
              value={genre}
              onChange={handleChangeGenre}
              bgColor="white"
              border="1px"
            >
              <option>Fantasy</option>
              <option>Policier</option>
              <option>Cosy mystery</option>
              <option>Young adult</option>
              <option>Littérature jeunesse</option>
              <option>Aventure</option>
            </Select>
            <FormLabel fontSize="2xl">Editeur</FormLabel>
            <Input
              type="text"
              id="publisher"
              value={publisher}
              onChange={handleChangePublisher}
              bgColor="white"
              border="1px"
            />

            <FormLabel fontSize="2xl">Image</FormLabel>
            <Input
              id="picture"
              type="file"
              onChange={handleChangePicture}
              bgColor="white"
              border="1px"
            />
          </Box>
          <Box width={{ base: "20rem", md: "30rem" }} mt="4rem">
            {" "}
            <FormLabel fontSize="2xl">Avis</FormLabel>
            <Textarea
              type="textarea"
              id="opinion"
              value={opinion}
              onChange={handleChangeOpinion}
              bgColor="white"
              border="1px"
            />
            <FormLabel fontSize="2xl">Résumé</FormLabel>
            <Textarea
              type="textarea"
              id="summary"
              value={summary}
              onChange={handleChangeSummary}
              size="lg"
              bgColor="white"
              border="1px"
            />
          </Box>
          <Button
            type="submit"
            fontSize="xl"
            bgColor="brand.100"
            width="15rem"
            mt="5rem"
          >
            Ajouter le livre
          </Button>
        </form>
      </Container>

      <Box mt="10rem">
        <Text color="black">Camille le Gloanic - 2023</Text>
      </Box>
    </Box>
  );
}
