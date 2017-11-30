import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    ScrollView,
    Dimensions,
    Image,
    TouchableOpacity,
    Platform
} from 'react-native';

import { List, ListItem } from 'react-native-elements';

import HeaderTitle from '../compoment/HeaderTitle';
const contentHeight = Dimensions.get('window').height;


class SettingController extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: null
        // headerTitle: '设置' ,
        // headerStyle:{
        //     backgroundColor: '#3c82f7',
        // },
        // headerTitleStyle: {
        //     color: '#ffffff',
        // },
        // headerBackTitleStyle:{
        //     color: '#ffffff',
        // }
    });

    __rednerTitle() {
        if (Platform.OS === 'ios') {
            return <HeaderTitle title="设置" indent={10}/>;
        }
        return <View/>;
    }

    render() {
        const { dispatch } = this.props;
        return (
            <View>
                <StatusBar barStyle="light-content"/>
                {this.__rednerTitle()}
                <ScrollView style={{ height: contentHeight }}>
                    <View style={{
                        alignItems: 'center',
                        marginTop: 20
                    }}>
                        {/*<Image source={require('../images/logo.png')} resizeMode='contain' style={{*/}
                            {/*width: 128,*/}
                            {/*height: 128*/}

                        {/*}} />*/}
                        <Text style={{
                            fontSize: 20

                        }}>Beef</Text>
                        <Text style={{
                            color: '#666666'
                        }}>Brainfuck解释器</Text>

                    </View>
                    <List>

                        <ListItem
                            switchButton = {true}
                            hideChevron
                            switched
                            onSwitch={() => {}}
                            style ={ styles.list}
                            title= "持久模式"
                            leftIcon={{ name: 'sd-card' }}
                        />
                        <TouchableOpacity>
                            <ListItem
                                hideChevron

                                style ={ styles.list}
                                title= "初始化数据"
                                leftIcon={{ name: 'sd-card' }}
                            />
                        </TouchableOpacity>
                        <ListItem
                            style ={ styles.list}
                            title= "关于"
                            leftIcon={{ name: 'favorite' }}
                        />

                    </List>
                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    list: {
    }

});



export default SettingController;
