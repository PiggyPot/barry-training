import React from 'react';
import { Text } from 'react-native';

export default Currency = (props) => {
  return(
    <Text>£{props.value.toLocaleString()}</Text>
  )
}
