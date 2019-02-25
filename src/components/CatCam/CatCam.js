import React, { Component } from 'react'
import Iframe from 'react-iframe'

 class CatCam extends Component {
  render() {
    return (
      <div className='cat'>
          <h1>Hi</h1>
        <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
        width="100%"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allowFullScreen/>
      </div>
    )
  }
}
export default CatCam