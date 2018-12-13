import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText }) => {
  return (
    <View>
    <Text>{label}</Text>
    <TextInput
      value={value}
      onChangeText={onChangeText}
      style={{ height: 20, width: 100 }}
    />
    </View>
  );
};

const styles = {
    inputStyle: {
      color: '#000',
      paddingRight: 5,
      paddingLeft: 5,
      fontSize: 18,
      lineHeight: 23,
      flex: 2
    },
    lableStyle: {
      fontSize: 18,
      paddingLeft: 20,
      flex: 1
    },
    containerStyle: {}
};

export { Input };
