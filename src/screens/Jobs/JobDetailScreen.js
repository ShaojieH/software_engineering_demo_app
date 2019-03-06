import { Text, View, Button} from 'react-native';
import React from 'react';
import {createStackNavigator} from 'react-navigation';
import { getJobDetail } from '../../utils/NetworkUtils'

class JobDetailScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            detail: {},
        };
    }



    componentDidMount = () => {
        getJobDetail((detail)=>(this.setState({detail: detail})));
    }
    
    render(){
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                {this.state.detail.title}
            </Text>
            <Text>
                Some other info
            </Text>
            {this.state.detail.status == "doing" && 
              <Button  title="start" onPress={()=>this.props.navigation.replace("JobDoingScreen",{detail: this.state.detail})}/>}
        </View>
        );
    }
}

export default JobDetailScreen;