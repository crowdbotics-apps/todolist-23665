import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile190041Navigator from '../features/UserProfile190041/navigator';
import Tutorial190040Navigator from '../features/Tutorial190040/navigator';
import NotificationList190012Navigator from '../features/NotificationList190012/navigator';
import Settings190011Navigator from '../features/Settings190011/navigator';
import Settings190003Navigator from '../features/Settings190003/navigator';
import UserProfile190001Navigator from '../features/UserProfile190001/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile190041: { screen: UserProfile190041Navigator },
Tutorial190040: { screen: Tutorial190040Navigator },
NotificationList190012: { screen: NotificationList190012Navigator },
Settings190011: { screen: Settings190011Navigator },
Settings190003: { screen: Settings190003Navigator },
UserProfile190001: { screen: UserProfile190001Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
