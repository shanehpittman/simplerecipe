import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../types';
import { Text, View } from '../app/components/Themed';

export default function LandingPage({ navigation,
}: StackScreenProps<RootStackParamList, 'Landing'>) {
    return (
    <View style={styles.container}>
      <Text style={styles.title}>Landing Page</Text>
      <View style={styles.separator} />
      <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
   link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});