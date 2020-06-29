import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {SCREENS} from './routeNames';
import Translate from '../screens/Translation';
import Profile from '../screens/VkProfile';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name={'Home'} component={Translate} />
        <Tab.Screen name={'VkPage'} component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
