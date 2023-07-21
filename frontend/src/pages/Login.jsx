import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("You must provide an email and a password!!!!");
    } else {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.warn(data);
          setUser(user);
          navigate(`/`);
        })
        .catch(() => {
          alert("Error to login, please try again!!!");
        });
    }
  };

  return (
    <section className="flex flex-1 flex-col justify-evenly items-center text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-violet-900 p-6 rounded-2xl shadow-xl text-white max-w-6xl m-auto flex flex-col justify-evenly items-center"
      >
        <label
          htmlFor="email"
          className="flex text-2xl m-4 w-full items-center"
        >
          Email:
          <input
            className="ml-4 px-4 py-1 text-black flex-1 rounded-full"
            type="email"
            id="email"
            required
            value={email}
            onChange={handleChangeEmail}
          />
        </label>
        <label
          htmlFor="password"
          className="flex text-2xl m-4 w-full items-center"
        >
          Password:
          <input
            className="ml-4 px-4 py-1 text-black flex-1 rounded-full"
            type="password"
            id="password"
            required
            value={password}
            onChange={handleChangePassword}
          />
        </label>
        <button
          className="mx-4 bg-violet-900 inline-block rounded-full shadow-xl px-6 py-2 border-2 border-violet-900 hover:text-white hover:border-2 hover:border-white"
          type="submit"
        >
          Login
        </button>
      </form>

      <Box mt="10rem">
        <Text color="black">Camille le Gloanic - 2023</Text>
      </Box>
    </section>
  );
}
