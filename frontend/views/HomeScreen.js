import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddEvent from '../components/AddEvent.js';

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
                <AddEvent visible={true} />
            </View>
        );
    }
}

export default HomeScreen;