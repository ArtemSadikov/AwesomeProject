/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AppNavigator from './navigation';
import 'react-native-gesture-handler';
import { View } from 'react-native';
console.disableYellowBox = true; // disable yellow warnings


class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

export default App;
