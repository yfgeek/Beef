import React, { Component } from 'react';
import {
    View,
    Dimensions,
    StatusBar,
    ScrollView,
    Platform, TextInput, Text
} from 'react-native';
import {Button, Icon} from 'react-native-elements'
import HeaderTitle from "../compoment/HeaderTitle";
import Label from "../compoment/Label";
import Interpreter from "../util/brainfuck"
const contentHeight = Dimensions.get('window').height;

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
    _rednerTitle() {
        if (Platform.OS === 'ios') {
            return(
                <View>
                    <HeaderTitle color='#1e1e1e' title="BEEF" indent={1} />

                    <View style={{
                        alignItems: 'flex-end',
                        marginTop: -30,
                        marginRight: 10,

                    }}>
                        <Icon
                            name='play'
                            type='font-awesome'
                            color='#3cb55d'
                            size = {18}
                            underlayColor = '#1e1e1e'
                            iconStyle={{
                                backgroundColor: '#1e1e1e'
                            }}
                            onPress={(e)=>(this.run())}
                        />
                    </View>
                </View>

        );
        }
        return (
            <View></View>
        );
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
                {this._rednerTitle()}

                    <View style={{
                        height: contentHeight - 100,
                    }}>
                        <View style={{
                            flex : 2,
                        }}>
                            <TextInput
                                minHeight={40}
                                autoCorrect = {false}
                                multiline = {true}
                                editable = {true}
                                numberOfLines={300}
                                onChangeText={(code) => this.setState({code: code})}
                                style={{
                                    backgroundColor: '#1e1e1e',
                                    color: '#f3f3f3',
                                    padding: 20,
                                    height: '100%',
                                }}
                                value={this.state.code}
                            />
                        </View>
                        <View style={{
                            flex : 1,
                        }}>
                            <Label text="Console" icon="code" backgroundColor="#3d3d3d"/>
                            <Text style={{
                                marginBottom : 10,
                                backgroundColor: '#3d3d3d',
                                color: '#f3f3f3',
                                paddingLeft: 20,
                                paddingRight: 20,
                                paddingBottom: 20,
                                height: '100%'
                            }}>{this.state.result}</Text>
                        </View>
                    </View>
            </View>
        );
    }
}


export default MainController;
