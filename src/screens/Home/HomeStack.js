import React from 'react';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {createStackNavigator} from 'react-navigation';
import { Text } from 'react-native';

const HomeScreen = (props) => (
    <Grid>
        <Row>
            <Col>
                <Text>
                    sadf
                </Text>
            </Col>
            <Col>
                <Text>
                    sadf
                </Text>
            </Col>
            <Col>
                <Text>
                    sadf
                </Text>
            </Col>
        </Row>

    </Grid>
)

export default HomeStack = createStackNavigator(
    {HomeScreen: HomeScreen},
    {initialRouteName:"HomeScreen"}
);