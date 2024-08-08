import React, { useState, ChangeEvent, SyntheticEvent } from "react";
import logo from "./logo.svg";
import Card from "./Components/Card/Card";
import CardList from "./Components/CardList/CardList";
import Search from "./Components/Search/Search";
import "./App.css";

function App() {
  const [search, setSearch] = useState<string>("");

  interface Props {}

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };

  const onClick = (e: SyntheticEvent) => {
    console.log(e);
  };

  return (
    <div className="App">
      <Search onClick={onClick} handleChange={handleChange} search={search} />
      <CardList />
    </div>
  );
}

export default App;
