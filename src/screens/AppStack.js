import {createBottomTabNavigator} from 'react-navigation';
import JobsStack from './Jobs/JobStack';
import HomeStack from './Home/HomeStack';
import SettingStack from './Setting/SettingStack'


export default AppStack = createBottomTabNavigator(
  {
    HomeStack: HomeStack,
    JobsStack: JobsStack,
    SettingStack: SettingStack,
  },
  {
    initialRouteName : "HomeStack"
  }
  
);