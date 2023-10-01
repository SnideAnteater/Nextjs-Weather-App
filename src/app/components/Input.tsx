"use client";
import { AiOutlineSearch } from "react-icons/ai";

import React from "react";

type InputProp = {
  handleSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
};

const Input = ({ handleSearch, setLocation }: InputProp) => {
  return (
    <form
      className=" flex items-center md:w-2/4
     w-full md:order-1 order-2"
    >
      <input
        className=" w-full bg-transparent
        border-b-2 placeholder-white outline-none 
        text-white"
        type="text"
        placeholder="Search City"
        onKeyDown={handleSearch}
        onChange={(e) => setLocation(e.target.value)}
      ></input>
      <div className=" ml-[-25px] text-white cursor-pointer">
        <AiOutlineSearch></AiOutlineSearch>
      </div>
    </form>
  );
};

export default Input;
