import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import "./Colorbox.css";

const Colorbox = ({ name, background }) => {
  return (
    <CopyToClipboard text={background}>
      <div className="ColorBox" style={{ background }}>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <span className="see-more">More</span>
      </div>
    </CopyToClipboard>
  )
}

export default Colorbox;