import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {SCREENS} from './routeNames';
import Translate from '../screens/Translation';
import Profile from '../screens/VkProfile';
import Stab1 from '../screens/Stub1';
import Stab2 from '../screens/Stub2';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;

            switch(route.name) {
              case SCREENS[0]: {
                iconName = 'heart-o';
                break;
              }
              case SCREENS[1]: {
                iconName = 'vk';
                break;
              }
              case SCREENS[2]: {
                iconName = 'paper-plane';
                break;
              }
              case SCREENS[3]: {
                iconName = 'paper-plane-o';
                break;
              }
            }

            return <Icon name={iconName} color={color} size={20} />
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name={SCREENS[0]} component={Translate} />
        <Tab.Screen name={SCREENS[1]} component={Profile} />
        <Tab.Screen name={SCREENS[2]} component={Stab1} />
        <Tab.Screen name={SCREENS[3]} component={Stab2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
