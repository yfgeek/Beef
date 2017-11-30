import React, { Component } from 'react';
import {
    View,
    Dimensions,
    StatusBar,
    ScrollView,
    Platform, TextInput, Button, Text
} from 'react-native';
import HeaderTitle from "../compoment/HeaderTitle";
import Interpreter from "../util/brainfuck"

class MainController extends Component {
    static navigationOptions ={
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {
            code:'++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.',
            result: '',
        };
    }
    __rednerTitle() {
        if (Platform.OS === 'ios') {
            return <HeaderTitle title="Beef" indent={1}/>;
        }
        return <View></View>;
    }

    run(){
       let i = new Interpreter(this.state.code,[]);
       this.setState(
           {
               result: i.toString()
           }
       )
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                {this.__rednerTitle()}
                <TextInput
                    minHeight={40}
                    editable = {true}
                    numberOfLines={20}
                    onChangeText={(code) => this.setState({code: code})}
                    value={this.state.code}
                />
                <View>
                    <Button onPress={(e)=>(this.run())} title="Run" />
                </View>

                <Text>{this.state.result}</Text>
            </View>
        );
    }
}


export default MainController;
