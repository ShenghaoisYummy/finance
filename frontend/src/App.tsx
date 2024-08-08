import React, { useState, ChangeEvent, SyntheticEvent } from "react";
import logo from "./logo.svg";
import Card from "./Components/Card/Card";
import CardList from "./Components/CardList/CardList";
import Search from "./Components/Search/Search";
import "./App.css";
import { CompanySearch } from "./company";
import { searchCompanies } from "./api";

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");

  interface Props {}

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };

  const onClick = async (e: SyntheticEvent) => {
    const result: any = await searchCompanies(search);
    console.log(result);

    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result?.data);
    }
  };

  return (
    <div className="App">
      <Search onClick={onClick} handleChange={handleChange} search={search} />
      <CardList />
    </div>
  );
}

export default App;
