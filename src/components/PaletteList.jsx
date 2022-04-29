import React from 'react'
import MiniPalette from './MiniPalette';
import { Link } from 'react-router-dom';

const PaletteList = ({ palettes }) => {
  return (
    <div>
      <MiniPalette />
      <h1>React Colors</h1>
      {palettes.map(palette => (
        <MiniPalette palette={palette} key={palette.id} />
      ))}
    </div>
  )
}

export default PaletteList