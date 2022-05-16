import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import { useParams, Link } from "react-router-dom";
import { generatePallete } from "../colorHelpers";
import seedColors from "../seedColors";

import ColorBox from "./Colorbox";
import Navbar from "./Navbar";
import Footer from "./Footer";

const gatherShades = (palette, colorToFilterBy) => {
  let shades = [];
  let allColors = palette.colors;
  for (let key in allColors) {
    shades = shades.concat(
      allColors[key].filter((color) => color.id === colorToFilterBy)
    );
  }
  return shades.slice(1);
};

const SingleColorPalette = () => {
  const { paletteId, colorId } = useParams();
  const findPalette = (id) => seedColors.find((p) => p.id === id);
  const palette = generatePallete(findPalette(paletteId));
  const [shades, setShades] = useState([]);
  const [format, setFormat] = useState("hex");

  const changeFormat = (value) => {
    setFormat(value);
  };
  useEffect(() => {
    setShades(gatherShades(palette, colorId));
  }, [paletteId, colorId]);

  const colorBoxes = shades.map((color) => (
    <ColorBox
      key={uuid()}
      name={color.name}
      background={color[format]}
      showLink={false}
    />
  ));
  console.log(palette);
  return (
    <div className="SingleColorPalette Palette">
      <Navbar changeFormat={changeFormat} showingAllColors={false} />
      <h1>Single Color Box</h1>
      <div className="Palette-colors">{colorBoxes}</div>
      <div className="go-back ColorBox">
        <Link to={`/palette/${paletteId}`} className="back-button">Go Back</Link>
      </div>
      <Footer emoji={palette.emoji} id={palette.id} />
    </div>
  );
};

export default SingleColorPalette;
