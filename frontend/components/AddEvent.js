import React, { Component } from 'react';
import { Text, View, TextInput, Modal, Button } from 'react-native';
import MapPicker from "react-native-map-picker";
import DateTimePicker from '@react-native-community/datetimepicker';

class AddEvent extends React.Component {
    constructor (props) {
        this.state = {
            title: "",
            description: "",
            datetime: "",
            latitude: 0,
            longitude: 0,
            visible: this.props.visible
        };
    }

    changeVisible = (visible) => {
        this.setState({ visible: !visible });
    }

    render() {
        return ( // form stuff goes here
            <View style={styles.centeredView}>
                <Modal animationType="slide"
                  transparent={true}
                  visible={this.state.visible}>
                    <Text>Title:</Text>
                    <TextInput onChangeText={(text) => this.setState({ title: text })} />
                    <Text>Description:</Text>
                    <TextInput onChangeText={(text) => this.setState({ description: text })} />
                    <Text>Date/Time:</Text>
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={this.state.datetime}
                        mode="datetime"
                        is24Hour={true}
                        display="default"
                        onChange={(datetime) => this.setState({ datetime: datetime })} />

                    <MapPicker
                        initialCoordinate={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                        }}
                        onLocationSelect={({latitude, longitude})=>this.setState({ latitude: latitude, longitude: longitude})}
                    />
                </Modal>
            </View>
        );
    }
}

export default AddEvent;