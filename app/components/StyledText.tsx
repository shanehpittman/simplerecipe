import * as React from 'react';

import { Text, TextProps } from './Themed';

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, 
    { 
      fontFamily: 'space-mono' 
    }]} />;
}

export function SoundButtonText(props: TextProps) {
  return <Text {...props} 
    numberOfLines={3}
    style={[props.style, { 
      fontFamily: 'space-mono' ,
      fontSize: 13,
      marginBottom: 5,
      textAlign: 'left',
      width: 100,
    }]} />;
}
