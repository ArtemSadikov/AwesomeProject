import {
  createAppContainer, NavigationRouteConfig, NavigationComponent, createSwitchNavigator,
} from 'react-navigation';
import {SCREENS} from './routeNames';
import Translate from '../screens/Translation';
import Profile from '../screens/VkProfile';

function withNullHeader(
  screen: NavigationComponent<any, any>,
): NavigationRouteConfig<any, any> {
  return {
    screen,
    navigationOptions: {
      header: null,
    },
  };
}

const Stack = createSwitchNavigator({
  [SCREENS[0]]: withNullHeader(Translate),
  [SCREENS[1]]: withNullHeader(Profile),
}, {
});

export default createAppContainer(Stack);
