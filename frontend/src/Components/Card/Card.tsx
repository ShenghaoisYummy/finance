import React from "react";
import "./Card.css";
import { CompanySearch } from "../../company";

interface Props {
  id: string;
  searchResult: CompanySearch;
}

const Card: React.FC<Props> = ({ id, searchResult }: Props): JSX.Element => {
  return (
    <div className="card">
      {" "}
      <img src="" alt="" />
      <div className="details">
        <h2>{searchResult.name}</h2>
        <p>{searchResult.symbol}</p>
      </div>
      <p className="info">${searchResult.currency}</p>
    </div>
  );
};

export default Card;
