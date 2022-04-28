import React, { useState } from 'react'
import Colorbox from './Colorbox';
import Navbar from './Navbar';

import "./Palette.css";

const Palette = ({ palette: { colors } }) => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useSate('hex');

  const changeLevel = (level) => { setLevel(level) };
  const changeFormat = (value) => {
    setFormat(value)
  }
  return (
    <div className="Palette">
      <Navbar level={level} changeLevel={changeLevel} changeFormat={changeFormat} />
      {/* Navbar Goes here */}
      <div className="Palette-colors">
        {colors[level].map(color => (
          <Colorbox background={color[format]} name={color.name} />
        ))}
      </div>
    </div>
  )
}

export default Palette
