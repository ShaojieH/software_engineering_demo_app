import React from 'react';
import {View, AsyncStorage,StatusBar, ActivityIndicator} from 'react-native';

export default class AuthLoadingScreen extends React.Component {
    constructor(props) {
      super(props);
      this.checkIfLoggedIn();
      }
  
      checkIfLoggedIn = async() => {
        const userToken = await AsyncStorage.getItem('userToken');
        this.props.navigation.navigate(userToken ? 'AppStack' : 'AuthStack');
      };
  
      render(){
        return (
          <View>
            <ActivityIndicator/>
            <StatusBar barStyle="default"/>
          </View>
        );
      }
}

