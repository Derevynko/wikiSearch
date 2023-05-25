import React from "react";
import UserInput from "../features/UserInput.jsx";
import "./App.css";
import ListOfArticles from "../entities/ListOfArticles.jsx";

function App() {
  return (
    <main>
      <UserInput></UserInput>
      <ListOfArticles></ListOfArticles>
    </main>
  );
}

export default App;
