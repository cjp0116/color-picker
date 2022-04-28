import React, { useState } from 'react';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import 'rc-slider/assets/index.css';
import './Navbar.css';

const Navbar = ({ level, changeLevel, changeFormat }) => {
  const [format, setFormat] = useState('hex');
  const handleChange = e => {
    const { target: { value } } = e;
    setFormat(value)
    changeFormat(value)
  }
  return (
    <header className="Navbar">
      <div className="logo">
        <a href="#">reactcolorpicker</a>
      </div>
      <div className="slider-container">
        <span>Level: {level}</span>
        <div className="slider">
          <Slider
            step={100}
            defaultValue={level}
            min={100}
            max={900}
            onAfterChange={changeLevel}
          />
        </div>
      </div>
      <div className="select-container">
        <Select onChange={handleChange} value={format}>
          <MenuItem value="hex">HEX - #fffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1)</MenuItem>
        </Select>
      </div>
    </header>
  )
}

export default Navbar;