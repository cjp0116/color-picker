import React from 'react'
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    backgroundColor : 'blue',
  }
}

const PaletteList = ({ palettes, classes }) => {
  return (
    <div className={classes.root}>
      <MiniPalette />
      <h1>React Colors</h1>
      {palettes.map(palette => (
        <MiniPalette palette={palette} key={palette.id} />
      ))}
    </div>
  )
}

export default withStyles(styles)(PaletteList);