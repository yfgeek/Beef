import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import MyStackNavigation from "./src/navigation/MyStackNavigation";


export default class BrainfuckTool extends Component {
    render() {
        return (
                    <MyStackNavigation />
        );
    }
}


AppRegistry.registerComponent('BrainfuckTool', () => BrainfuckTool);
