import React from "react";

const Footer = ({ emoji, id }) => {
  return (
    <footer className="Palette-footer">
      {id}
      <span className="emoji">{emoji}</span>
    </footer>
  );
};

export default Footer;
