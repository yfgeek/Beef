import React, { Component } from 'react';
import { StackNavigator  } from 'react-navigation';
import MainController from "../page/MainController";
import TabNavigation from "./TabNavigation";
import SelectCoinController from "../page/SettingController"


const MyStackNavigation  = StackNavigator({
    Main: {screen: TabNavigation},
    SelectCoinController: { screen: SelectCoinController },
    MainController: { screen: MainController },
});


export default MyStackNavigation;