import React from "react";
import { withStyles } from "@material-ui/styles";
import uuid from "react-uuid";
const styles = {
  root: {
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    border: "1px solid black",
    "&:hover": {
      cursor: "pointer",
    },
  },
  colors: {
    backgroundColor: "#dae1e4",
    height: "150px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative",
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem",
  },
  miniColor: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-3.5px",
  },
};
const MiniPalette = (props) => {
  const { classes, palette, handleClick } = props;

  const miniColorboxes = palette?.colors.map(({ color  }) => (
    <div
      className={classes.miniColor}
      style={{ backgroundColor: color }}
      key={uuid()}
    />
  ));
  return (
    <div className={classes.root} onClick={handleClick}>
      <div className={classes.colors}>{miniColorboxes}</div>
      <h5 className={classes.title}>
        {palette?.paletteName}
        <span className={classes.emoji}>{palette?.emoji}</span>
      </h5>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
