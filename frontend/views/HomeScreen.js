import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

class HomeScreen extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        // let eventsList;
        // for (let i = 0; i < this.props.length; i++) {
        //     eventsList += 
        // }
        return (
            <View>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeScreen} />
                    
                </Tab.Navigator>
            </View>
        );
    }
}

export default HomeScreen;