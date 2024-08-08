import React from "react";
import "./Card.css";

interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card: React.FC<Props> = ({
  companyName,
  ticker,
  price,
}: Props): JSX.Element => {
  return (
    <div className="card">
      {" "}
      <img src="" alt="" />
      <div className="details">
        <h2>{companyName}</h2>
        <p>{ticker}</p>
      </div>
      <p className="info">${price}</p>
    </div>
  );
};

export default Card;
