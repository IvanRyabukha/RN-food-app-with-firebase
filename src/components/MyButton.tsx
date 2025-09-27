import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, StyleSheet } from 'react-native';

interface IMyButtonProps {
  title: string;
}

const MyButton: React.FC<IMyButtonProps> = ({ title }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default MyButton;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0036',
    borderRadius: 30,
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'Redressed-Regular'
  }
});