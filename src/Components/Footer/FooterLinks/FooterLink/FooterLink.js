import React from 'react'

const FooterLink = (props) => {
  return (
    <div className="link-p">
        <h4>{props.heading}</h4>
        <div className="sub-links">
            <p>{props.first}</p>
            <p>{props.second}</p>
            <p>{props.third}</p>
            <p>{props.fourth}</p>
        </div>
    </div>
  )
}

export default FooterLink