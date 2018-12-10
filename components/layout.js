import React, { Component } from 'react';
import Header from './header';
import App from './app';
import Footer from './footer';

export default class Layout extends Component {
  render () {
    return (
        <div>
            <Header/>
            {this.props.children}
            <Footer/>
        </div>
    )
  }
}