import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../types';
import { Text, View } from '../app/components/Themed';
import { LandingText } from '../app/components/StyledText';

export default function LandingPage({ navigation }: StackScreenProps<RootStackParamList, 'Landing'>) {
  return (
      <ImageBackground 
        style={styles.background}
        source={require("../app/assets/images/recipe-book.jpg")}>
        <LandingText>Simple Recipes</LandingText>

        <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
          <Text style={styles.linkText}>Go to home screen!</Text>
        </TouchableOpacity>

      </ImageBackground>
    );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
   link: {
    marginTop: 15,
    paddingVertical: 15,
    backgroundColor: 'tomato',
    borderRadius: 20,
    padding: 20,
    bottom: 25
  },
  linkText: {
    fontSize: 20,
    color: '#eee',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
});
