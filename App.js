import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AppStack from './src/screens/AppStack';
import AuthStack from './src/screens/AuthStack';
import AuthLoadingScreen from './src/screens/AuthLoadingScreen';


export default createAppContainer(createSwitchNavigator(
  {
    AppStack: AppStack,
    AuthStack: AuthStack,
    AuthLoadingScreen: AuthLoadingScreen
  },
  {
    initialRouteName: 'AuthLoadingScreen',
  }
));