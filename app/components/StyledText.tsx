import * as React from 'react';

import { Text, TextProps } from './Themed';

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, 
    { 
      fontFamily: 'space-mono' 
    }]} />;
}

export function LandingText(props: TextProps) {
  return <Text {...props} 
  numberOfLines={2}
    style={[props.style, { 
      fontFamily: 'sans-serif-light' ,
      fontSize: 50,
      fontWeight: 'bold',
      color: '#eee',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10
    }]} />;
}
