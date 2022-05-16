import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Colorbox from "./Colorbox";
import Navbar from "./Navbar";
import uuid from "react-uuid";
import seedColors from "../seedColors";
import { generatePallete } from "../colorHelpers";
import Footer from "./Footer";
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
        showingAllColors
      />
      <div className="Palette-colors">
        {colors[level].map((color) => (
          <Colorbox
            background={color[format]}
            name={color.name}
            key={uuid()}
            paletteId={color.id}
            id={id}
          />
        ))}
      </div>
      <Footer emoji={emoji} id={id} />
    </div>
  );
};

export default Palette;
