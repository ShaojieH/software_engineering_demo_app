import React from 'react';
import {SectionList, Text, Button, View} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import { getJobs } from '../../utils/NetworkUtils';
import JobDetailScreen from "./JobDetailScreen"
import JobDoingScreen from "./JobDoingScreen"


const JobItem = (props) => (
    <View style={{flex: 1, flexDirection: 'row'}}>
        <Text>{props.item.title}</Text>
        {<Button title="check" onPress = {()=>{props.navigation.push("JobDetailScreen", {
            id: props.item.id
        })}}/>}
        {props.section.title == "doing" && <Button title="continue" onPress = {()=>{}}/>  }
        {props.section.title == "bookmarked" && <Button title="remove" onPress = {()=>{}}/> }
    </View>
);

class JobListScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            jobs: [],
        };
    }
    
    componentDidMount = () => {
        getJobs((jobs)=>{
            this.setState({
                jobs: jobs,
            });
        });
    }

    render(){
        return (
            <SectionList
                renderItem={({item, index, section}) => (
                    <JobItem item={item} index={index} section={section} key={index} navigation={this.props.navigation}/>
        )}
        renderSectionHeader={({section: {title}}) => (
            <Text style={{fontWeight: 'bold'}}>{title}</Text>
        )}
        sections={this.state.jobs}
        keyExtractor={(item, index) => item + index}
    />
        );
    }
}

export default JobsStack = createStackNavigator(
    {
        JobListScreen: JobListScreen,
        JobDetailScreen: JobDetailScreen,
        JobDoingScreen: JobDoingScreen
    },
    {
      initialRouteName : "JobListScreen",
    }
    
);