import React, { useState } from 'react'
import Colorbox from './Colorbox';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import "./Palette.css";

const Palette = ({ palette: { colors } }) => {
  const [level, setLevel] = useState(500)
  const changeLevel = (level) => { setLevel(level) }
  return (
    <div className="Palette">
      <div className="slider">
      <Slider 
        step={100}
        defaultValue={level}
        min={100}
        max={900}
        onAfterChange={changeLevel}
      />
      </div>
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
