import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Header = props => (
  <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>{props.headerText}</Text>
  </View>
);
const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    position: 'relative',

    // shadow prop for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,

    // shadow prop for Android
    elevation: 8,
  },
  textStyle: {
    fontSize: 20
  }
});

export { Header };
