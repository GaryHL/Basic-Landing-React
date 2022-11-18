import React from 'react'

import {Button} from './BlueButtonStyled'

const BlueButton = (props) => {
  return (
    <Button size={props.size} >{props.text}</Button>
  )
}

export default BlueButton