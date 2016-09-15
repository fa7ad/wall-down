import React, { Component } from 'react'
import { Button, View } from 'react-desktop/macOs'
import { FaArrowDown, FaWrench } from 'react-icons/lib/fa'

class SetFrame extends Component {
  render () {
    return (
      <View horizontalAlignment='center' padding='5px 10px'>
        <Button margin='0 25px'>
          <FaArrowDown /> Download
        </Button>
        <Button margin='0 25px' color='blue'>
          <FaWrench /> Set as wallpaper
        </Button>
      </View>
    )
  }
}

export default SetFrame
