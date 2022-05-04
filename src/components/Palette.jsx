import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Colorbox from "./Colorbox";
import Navbar from "./Navbar";
import seedColors from "../seedColors";
import { generatePallete } from "../colorHelpers";
import "./Palette.css";

const Palette = () => {
  const { id } = useParams();
  const findPallete = (id) => seedColors.find((palette) => palette.id === id);
  const palette = generatePallete(findPallete(id));
  const { colors, emoji } = palette;
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");

  const changeLevel = (level) => {
    setLevel(level);
  };
  const changeFormat = (value) => {
    setFormat(value);
  };
  return (
    <div className="Palette">
      <Navbar
        level={level}
        changeLevel={changeLevel}
        changeFormat={changeFormat}
      />a
      <div className="Palette-colors">
        {colors[level].map((color) => (
          <Colorbox
            background={color[format]}
            name={color.name}
            key={color.id}
          />
        ))}
      </div>
      <footer className="Palette-footer">
        {id}
        <span className="emoji">{emoji}</span>
      </footer>
    </div>
  );
};

export default Palette;
