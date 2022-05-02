import React from 'react'
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: "0.5rem",
    position: 'relative',
    overflow: 'hidden',
    border: '1px solid black',
    "&:hover": {
      cursor : 'pointer'
    }
  },
  colors: {
    backgroundColor : 'grey'
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'black',
    paddingTop: '0.5rem',
    fontSize: '1rem',
    position : 'relative'
  },
  emoji: {
    marginLeft: '0.5rem',
    fontSize : '1.5rem'
  }
}
const MiniPalette = (props) => {
  const { classes, palette } = props;
  return (
    <div className={classes.root}>
      <div className={classes.colors}></div>
      <h5 className={classes.title}>
        {palette?.paletteName} <span className={classes.emoji}>{palette?.emoji}</span>
      </h5>
    </div>
  )
}

export default withStyles(styles)(MiniPalette);