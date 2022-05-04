import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import "./Colorbox.css";

const Colorbox = ({ name, background, paletteId, id }) => {
  const [copied, setCopied] = useState(false);

  function changeCopyState() {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  }
  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div className="ColorBox" style={{ background }}>
        <div
          className={`copy-overlay ${copied && "show"}`}
          style={{ background }}
        />
        <div className={`copy-msg ${copied && "show"}`}>
          <h1>Copied</h1>
          <p>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <Link
          to={`/palette/${paletteId}/${id}`}
          onClick={(e) => e.stopPropagation()}
        >
          <span className="see-more">More</span>
        </Link>
      </div>
    </CopyToClipboard>
  );
};

export default Colorbox;
