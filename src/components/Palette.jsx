import React, { useState } from 'react'
import Colorbox from './Colorbox';
import Navbar from './Navbar';

import "./Palette.css";

const Palette = ({ palette: { colors, id, emoji } }) => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');

  const changeLevel = (level) => { setLevel(level) };
  const changeFormat = (value) => {
    setFormat(value)
  }
  return (
    <div className="Palette">
      <Navbar level={level} changeLevel={changeLevel} changeFormat={changeFormat} />
      <div className="Palette-colors">
        {colors[level].map(color => (
          <Colorbox background={color[format]} name={color.name} key={color.id} />
        ))}
      </div>
      <footer className="Palette-footer">
        {id}
        <span className="emoji">{emoji}</span>
      </footer>
    </div>
  )
}

export default Palette
