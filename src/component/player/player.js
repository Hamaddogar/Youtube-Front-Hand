import React, { Component } from 'react'
import Youtube  from  'react-youtube'

export default class Player extends Component {
  render() {
    return <div> <center><Youtube videoId={this.props.match.params.vid} /></center></div>
  }
}
