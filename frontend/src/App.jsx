import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Book from "./pages/Book";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

import "./App.css";

function App() {
  return (
    <main>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/livre/:id" element={<Book />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
