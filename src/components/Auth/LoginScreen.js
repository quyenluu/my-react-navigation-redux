import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class LoginScreen extends Component {
    static navigationOptions = {
        header: null
    }

    btnLogin = () => {
        const navigateAction = NavigationActions.navigate({
            routeName: 'HomeScreen',
            action: this.props.navigation.popToTop(),
        });
    
        this.props.navigation.dispatch(navigateAction);
    }

    btnGoToForgotPassword = () => {
        this.props.navigation.navigate('ForgotPasswordScreen');
    }

    render() {
        return (
            <View style={{ backgroundColor: 'gray', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Login Screen</Text>
                <Button 
                    title="Login"
                    onPress={ this.btnLogin }
                />
                <Button 
                    title="Go to ForgotPassword"
                    onPress={ this.btnGoToForgotPassword }
                />
            </View>
        );
    }
}