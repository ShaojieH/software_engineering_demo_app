import React from 'react';
import {Text, View, Button, AsyncStorage} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';



const HomeScreen = (props) => (
  <View>
    <Text>
      Home
    </Text>
  </View>
);

const JobsScreen = (props) => (
  <View>
    <Text>
      Jobs
    </Text>
  </View>
);

class SettingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userToken : '',
    };

    this.getCurrentUserToken();
  }

  getCurrentUserToken = async() => {
    const userToken = await AsyncStorage.getItem('userToken');
    this.setState({userToken: userToken});
  }

  render(){
    return (
      <View>
      <Text>
        Logged in as : {this.state.userToken}
      </Text>
      <Button title="登出" onPress={async()=>{
            await AsyncStorage.removeItem('userToken');
            this.props.navigation.navigate('AuthLoadingScreen');
      }}>
      </Button>
    </View>
    );
  }
}



export default AppStack = createBottomTabNavigator(
  {
    HomeScreen: HomeScreen,
    JobsScreen: JobsScreen,
    SettingScreen: SettingScreen,
  },
  {
    initialRouteName : "HomeScreen"
  }
  
);