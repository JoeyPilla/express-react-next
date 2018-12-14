import React, { Component } from 'react';
import { Button, Segment, List, Image} from 'semantic-ui-react'
export default class Footer extends Component {
  render () {
    return (
      <Segment inverted horizontal>
      <span>Created and maintained by: Joseph Pilla</span>
      </Segment>
    )
  }
}