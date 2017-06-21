import React from 'react';
import { Text } from 'react-native';

var Currency = (props) => {
  return(<Text>£{props.value.toLocaleString()}</Text>)
}

export default Currency;
