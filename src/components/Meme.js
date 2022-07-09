import React, { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
  const [allMemes] = useState(memesData);
  const memesArr = allMemes.data.memes;

  // current meme showing
  const [currentMeme, setCurrentMeme] = useState({
    topText: "",
    bottomText: "",
    randomMeme: memesArr[0].url,
  });

  // get new meme template from the top 100 memes on ImgFlip
  function generateMemeImage() {
    const randMeme = Math.floor(Math.random() * memesArr.length);
    setCurrentMeme((prevMeme) => ({
      ...prevMeme,
      randomMeme: memesArr[randMeme].url,
    }));
  }

  // change the text on meme image
  function handleChange(event) {
    setCurrentMeme((prevMeme) => {
      const { name, value } = event.target;
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  return (
    <main>
      <div className="form">
        <input
          className="form--input"
          placeholder="Top text"
          type="text"
          name="topText"
          value={currentMeme.topText}
          onChange={handleChange}
        ></input>
        <input
          className="form--input"
          placeholder="Bottom text"
          type="text"
          name="bottomText"
          value={currentMeme.bottomText}
          onChange={handleChange}
        ></input>
        <button onClick={generateMemeImage} className="form--button">
          Get a new meme image 🖼️
        </button>
      </div>
      <div className="meme">
        <img
          className="meme--img"
          src={currentMeme.randomMeme}
          alt={currentMeme.randomMeme}
        />
        <h3 className="meme--text top">{currentMeme.topText}</h3>
        <h3 className="meme--text bottom">{currentMeme.bottomText}</h3>
      </div>
    </main>
  );
}
