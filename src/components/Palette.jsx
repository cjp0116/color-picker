import React, { useState } from 'react'
import Colorbox from './Colorbox';
import Navbar from './Navbar';

import "./Palette.css";

const Palette = ({ palette: { colors } }) => {
  const [level, setLevel] = useState(500)
  const changeLevel = (level) => { setLevel(level) }
  return (
    <div className="Palette">
      <Navbar level={level} changeLevel={changeLevel} />
      {/* Navbar Goes here */}
      <div className="Palette-colors">
        {colors[level].map(({ hex, name }) => (
          <Colorbox background={hex} name={name} />
        ))}
      </div>
    </div>
  )
}

export default Palette
