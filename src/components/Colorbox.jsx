import React from 'react'
import "./Colorbox.css";

const Colorbox = (props) => {
  return (
    <div className="ColorBox" style={{ background: props.background }}>
      <span>{props.name}</span>
      <span>
        MORE
      </span>
    </div>
  )
}

export default Colorbox;