import React, { Component } from 'react';
import { createStackNavigator, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import { initializeListeners } from 'react-navigation-redux-helpers';

import LoadingScreen  from '../components/Loading/LoadingScreen';
import { AuthStack } from '../components/Auth/AuthStack';
import { MainStack } from '../components/Main/MainStack';
import { addListener, navigationPropConstructor } from '../utils/redux';

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
    componentDidMount() {
        initializeListeners('root', this.props.nav);
    }

    render() {
        const { dispatch, nav } = this.props;
        //const navigation = { dispatch, state: nav, addListener };
        const navigation = navigationPropConstructor(dispatch, nav);
        return (
            <AppNavigator 
                navigation={navigation}
            />
        );
    }
}

const mapStateToProps = state => ({
    nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);