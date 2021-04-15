import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native'

class RecipeButton extends Component {
  static propTypes: { onPress: PropTypes.Validator<(...args: any[]) => any>; };
  render() {
    return (
      <TouchableOpacity style={styles.buttonStyle} 
        onPress={() => console.log('we out here')}>
        <Text >Boop</Text>
      </TouchableOpacity>
    );
  }
}

RecipeButton.propTypes = {
  onPress: PropTypes.func.isRequired,
}

const screenSize = Dimensions.get("screen");

const styles = StyleSheet.create({
  buttonStyle: {
    height: 100,
    width: 100,
    margin: 5,
    textAlign: "center",
    backgroundColor: 'grey',
  }
});

export default RecipeButton;