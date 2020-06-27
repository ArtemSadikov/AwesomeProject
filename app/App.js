/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import AppNavigator from './navigation/index';

import * as React from 'react';

class App extends React.Component {
  render() {
    return (
      // <NavigationContainer>
      //   <Stack.Navigator initialRouteName="Home">
      //     <Stack.Screen name="Home" component={TranslationApp} />
      //     <Stack.Screen
      //       name="VkPage"
      //       component={VkPage}
      //       options={{
      //         headerStyle: {
      //           backgroundColor: 'white',
      //           shadowColor: 'none',
      //         },
      //       }}
      //     />
      //   </Stack.Navigator>
      // </NavigationContainer>
      <AppNavigator />
    );
  }
}

export default App;
