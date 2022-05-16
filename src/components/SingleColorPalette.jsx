import React, { useState } from "react";
import uuid from "react-uuid";
import { useParams } from "react-router-dom";
import { generatePallete } from "../colorHelpers";
import seedColors from "../seedColors";
import ColorBox from "./Colorbox";

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
  const [_shades, _setShades] = useState(gatherShades(palette, colorId));
  console.log(_shades);

  const colorBoxes = _shades.map((color) => (
    <ColorBox
      key={uuid()}
      name={color.name}
      background={color.hex}
      showLink={false}
    />
  ));
  return (
    <div className="Palette">
      <h1>Single Color Box</h1>
      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  );
};

export default SingleColorPalette;
