import React, { Component } from 'react';
import {Text, Button, View, Image} from 'react-native';
import Swiper from 'react-native-swiper'
import {Work} from '../../Components/JobComponents'



class JobDoingScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            detail:props.navigation.getParam("detail", []),
        };
    }
  render() {
    return (
           <Swiper style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {this.state.detail.works.map(
                (work, index) => (
                    <View key={index}>
                        <Work work={work} type={this.state.detail.type}/>
                    </View>
                )
            )}
            </Swiper>

    )
  }
}

export default JobDoingScreen;

// {this.props.navigation.getParam("detail", null).status}