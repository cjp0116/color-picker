import React from 'react'
import Colorbox from './Colorbox';
import "./Palette.css";

const Palette = (props) => {
  console.log(props);

  return (
    <div className="Palette">
      {/* Navbar Goes here */}
      <div className="Palette-colors">
        {props.palette.colors.map(color => (
          <Colorbox background={color.color} name={color.name} />
        ))}
      </div>
    </div>
  )
}

export default Palette
