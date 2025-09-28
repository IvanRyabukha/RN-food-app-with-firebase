import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

const MyTextInput = ({ ...props }) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

export default MyTextInput;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    fontSize: 18,
    borderBottomWidth: 0.8,
    borderBottomColor: 'gray',
  },
});
