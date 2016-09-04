import React, { Component } from 'react';
import Flexbox from 'flexbox-react';

class GmbGrid extends Component {
  render() {
    const sampleBox = {
      background: 'tomato',
      margin: '5px',
      color: '#fff',
      padding: '35px 0',
      justifyContent: 'center'
    };
    return (
      <Flexbox flexDirection="row" flexWrap="wrap" alignItems="center">
        <Flexbox flexBasis="30%" style={sampleBox}>
          Lorem ipsum
        </Flexbox>
        <Flexbox flexBasis="30%" style={sampleBox}>
          Lorem ipsum
        </Flexbox>
        <Flexbox flexBasis="30%" style={sampleBox}>
          Lorem ipsum
        </Flexbox>
        <Flexbox flexBasis="30%" style={sampleBox}>
          Lorem ipsum
        </Flexbox>
        <Flexbox flexBasis="30%" style={sampleBox}>
          Lorem ipsum
        </Flexbox>
        <Flexbox flexBasis="30%" style={sampleBox}>
          Lorem ipsum
        </Flexbox>
      </Flexbox>
    );
  }
}

export default GmbGrid;