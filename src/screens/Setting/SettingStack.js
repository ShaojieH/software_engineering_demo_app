import React from 'react';
import {Text, View, Button, AsyncStorage} from 'react-native';
import {ToastAndroid} from 'react-native';
import {getRandomAccount} from '../../utils/NetworkUtils';
import {createStackNavigator} from 'react-navigation'



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

          <Button title = "personal info" onPress={()=>{
              this.props.navigation.push('AccountScreen');
          }} />
          
          <Button title="Log out" onPress={async()=>{
                await AsyncStorage.removeItem('userToken');
                this.props.navigation.navigate('AuthLoadingScreen');
          }}>
          </Button>

        
          {/* <Button title="asdf" onPress={(e) => {
            getRandomAccount((response)=> ToastAndroid.show(response.data.username, ToastAndroid.SHORT));
          }}/> */}
      </View>
      );
    }
  }

const AccountScreen = (props) => (
    <View>
        <Text>
            Name
        </Text>
        <Text>
            More info
        </Text>
    </View>
);

export default SettingStack = createStackNavigator(
    {SettingScreen: SettingScreen,AccountScreen: AccountScreen},
    {initialRouteName : "SettingScreen"}
);