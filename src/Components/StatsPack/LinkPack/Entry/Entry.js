import React from 'react'
import './Entry.css'

const Entry = (props) => {
  return (
    <div className="entry">
    <input type="text" className="tried" defaultValue={props.enteredLink.length > 70 ? props.enteredLink.substring(0,69) + "..."  : props.enteredLink} />
    <hr />
    <div className="actions">
      <span className="link">{props.shortened}</span>
      <div className="parent">
      <a href="" className="btn" style={{backgroundColor:props.currentNumber.includes(props.position) && "hsl(257, 27%, 26%)"}} onClick={props.clicked}>
        {props.currentNumber.includes(props.position)? "Copied" : "Copy"}
      </a>
      </div>
    </div>
  </div>
  )
}

export default Entry