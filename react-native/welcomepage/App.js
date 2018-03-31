import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation'

import WelcomeScreen from './screens/WelcomeScreen';

export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      welcome: {screen: WelcomeScreen }
    });
    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
