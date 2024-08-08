import React, { SyntheticEvent, useState, ChangeEvent } from "react";

type Props = {
  onClick: (e: SyntheticEvent) => void;
  search: string | undefined;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Search: React.FC<Props> = ({ onClick, search, handleChange }: Props) => {
  return (
    <div>
      <input value={search} onChange={(e) => onClick(e)}></input>
    </div>
  );
};

export default Search;
