import React, { Component } from 'react';
import { Menu, Dropdown, Icon } from 'semantic-ui-react';
import Link from 'next/link';

export default class Header extends Component {
  render () {
    return (
      <Menu>
      <Menu.Item>
      <Link prefetch href="/">Home</Link>
      </Menu.Item>
      <Menu.Menu position='right'>
        <div className='ui right aligned category search item'>
          <div className='ui transparent icon input'>
            <input className='prompt' type='text' placeholder='Search Devices...'/>
          </div>
          <Icon name='search' />
          <div className='results' />
        </div>
      </Menu.Menu>
    </Menu>
    )
  }
}