import {Text, Button, View, Image} from 'react-native';
import React, { Component } from 'react';


export const Options = (props) => (
    props.options.map((option, index)=>(<Button key={index} title={option} onPress={()=>console.log(index)}/>))
)

export const Work = (props) => {
    switch(props.type){
        case "pic":{
            return (
                <View>
                    <Image source={{uri:props.work.url}} style={{width: 50, height: 50}}/>
                    <Options options={props.work.options}/>
                </View>
            );
        }
        default:{
            console.log(work.type)
            return (
                <View>
                    <Text>
                        default
                    </Text>
                </View>
            );
        }
    }
}