import React from "react";
import elf from "../images/dank-elf.png";

export default function Header() {
  return (
    <header className="header">
      <img className="header--logo" src={elf} alt="dank-elf" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--subject">React Course - Project 2</h4>
    </header>
  );
}
