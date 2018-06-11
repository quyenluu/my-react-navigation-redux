import React, { Component } from 'react';
import { createStackNavigator, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import LoadingScreen  from '../components/Loading/LoadingScreen';
import { AuthStack } from '../components/Auth/AuthStack';
import { MainStack } from '../components/Main/MainStack';
import { addListener } from '../utils/redux';

export const AppNavigator = createStackNavigator (
    {
        LoadingScreen: { screen: LoadingScreen, navigationOptions: { header: null }},
        AuthStack: { screen: AuthStack, navigationOptions: { header: null }},
        MainStack: { screen: MainStack, navigationOptions: { header: null }}
    },
    {
        initialRouteName: 'LoadingScreen'
    }
);


class AppWithNavigationState extends Component {
    render() {
        const { dispatch, nav } = this.props;
        return (
            <AppNavigator 
                navigation={{ dispatch, state: nav, addListener }}
            />
        );
    }
}

const mapStateToProps = state => ({
    nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);