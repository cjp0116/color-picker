import React from "react";
import { useParams } from "react-router-dom";
import { generatePallete } from "../colorHelpers";
import seedColors from "../seedColors";

const SingleColorPalette = () => {
  const { paletteId, colorId } = useParams();
  const findPalette = (id) => seedColors.find((p) => p.id === id);
  const palette = generatePallete(findPalette(paletteId));
  return <div>SingleColorPalette</div>;
};

export default SingleColorPalette;
