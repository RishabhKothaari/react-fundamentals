// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
// const smallBox = <div>small lightblue box</div>
// const mediumBox = <div>medium pink box</div>
// const largeBox = <div>large orange box</div>
function Box({size, text, color}) {
  const boxClass = size ? `box box--${size}` : 'box'
  const props = {children: text, className: boxClass}
  const styles = {
    fontStyle: 'italic',
    backgroundColor: color,
    className: boxClass,
  }
  return <div style={styles} {...props} />
}
const PropTypes = {
  string(props, propName, componentName) {
    if (typeof props[propName] !== 'string') {
      return new Error(`${componentName} requires ${propName} as a prop`)
    }
  },
}
Box.propTypes = {
  size: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
}
function App() {
  return (
    <div>
      <Box
        id="small-box"
        size="small"
        color="lightblue"
        text="small lightblue box"
      />
      <Box id="medium-box" size="medium" color="pink" text="medium pink box" />
      <Box id="large-box" size="large" color="orange" text="large orange box" />
    </div>
  )
}

export default App
