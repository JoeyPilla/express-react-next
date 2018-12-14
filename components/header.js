import React, { Component } from 'react';
import { Menu, Dropdown, Icon } from 'semantic-ui-react';
import Link from 'next/link';
import Head from 'next/head';

export default class Header extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Devices</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css" />
        </Head>
        <Menu inverted>
          <Menu.Item>
            <Link href="/">Home</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href='/newDevice'>New Device</Link>
          </Menu.Item>
          <Menu.Menu position='right'>
            <div className='ui right aligned category search item'>
              <div className='ui transparent icon input'>
                <input className='prompt' type='text' placeholder='Search Devices...' />
              </div>
              <Icon name='search' />
              <div className='results' />
            </div>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}