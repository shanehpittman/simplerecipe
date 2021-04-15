import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native'

class NavBar extends Component {
render() {
    return (
        <nav 
            style={{
                width: '100%',
                height: '10%',
                backgroundColor: 'red',
                position: 'absolute',
                top:0,
            }} 
        ></nav>
    );
  }
}

export default NavBar;