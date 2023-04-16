import React from 'react'

const Title = (props) => {
  return (
    <div className={`${props.addClass} font-dancing`} style={props.style}>{props.children}</div>
  )
}

export default Title