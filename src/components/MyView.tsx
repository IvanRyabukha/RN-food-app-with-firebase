import React from 'react';
import { StyleSheet, View } from 'react-native';

function MyView({ children, style }) {
  return <View style={[styles.view, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

export default MyView;
