import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

class Label extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const text = this.props.text ? this.props.text : '';
        const icon = this.props.icon ? this.props.icon : 'code';
        const color = this.props.color ? this.props.icon : '#777777';
        const backgroundColor = this.props.backgroundColor ? this.props.backgroundColor : '#1e1e1e';
        return (
            <View style={{
                alignItems: 'flex-start',
                backgroundColor: backgroundColor,
                justifyContent: 'flex-start',
                flexDirection: 'row',
                padding: 10,
                borderTopColor: '#2b2b2b',
                borderTopWidth: 1,
                flexWrap: 'nowrap',
            }}>
                <Icon
                    name= {icon}
                    size ={16}
                    color = {color}
                    style={{
                        flexWrap: 'nowrap',

                    }}
                />
                <Text style={{
                    fontSize: 14,
                    color: color,
                }}> {text}</Text>
            </View>

        );
    }
}


export default Label;
