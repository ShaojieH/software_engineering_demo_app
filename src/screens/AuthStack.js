import React from 'react';
import {View, Button,AsyncStorage,} from 'react-native';
import {createStackNavigator} from 'react-navigation'
import { TextInput } from 'react-native';


class SignInScreen extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        username: '',
        password: ''
      };
    }
    static navigationOptions  = {
      title: '登录',
    };
  
    signIn = async() => {
        if(this.state.username !== ""){
            await AsyncStorage.setItem('userToken', this.state.username);
            this.props.navigation.navigate('AppStack')
        }

    }
  
    render(){
      return(
        <View>
        <TextInput value={this.state.username} placeholder={"用户名"} onChangeText = {(text)=>{this.setState({username : text})}}/>
        <TextInput value={this.state.password} placeholder={"密码"} onChangeText = {(text)=>{this.setState({password : text})}}/>
        <Button title = "登录" onPress={this.signIn}/>
      </View>
      );
    }
}

const AuthStack = createStackNavigator({Signin: SignInScreen});

export default AuthStack;