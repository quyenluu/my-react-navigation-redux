import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import AuthAPI from '../../api/AuthAPI';
import { loginAction } from '../../redux/actions/ActionCreator';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtEmail: "",
            txtPassword: ""
        }
    }

    static navigationOptions = {
        header: null
    }

    // btnLogin = () => {
    //     const navigateAction = NavigationActions.navigate({
    //         routeName: 'HomeScreen',
    //         action: this.props.navigation.popToTop(),
    //     });
    
    //     this.props.navigation.dispatch(navigateAction);
    // }
    
    btnLogin = async() => {
        try {
            const { txtEmail, txtPassword } = this.state;
            const data = await AuthAPI.login(txtEmail, txtPassword);
            if(data.success){
                this.props.dispatch(loginAction(data.dataUser));
                const navigateAction = NavigationActions.navigate({
                    routeName: 'HomeScreen',
                    action: this.props.navigation.popToTop(),
                });
            
                this.props.navigation.dispatch(navigateAction);
            }
        } catch (error) {
            alert(error);
            alert ('CANNOT LOGIN');
        }
    }

    btnGoToForgotPassword = () => {
        this.props.navigation.navigate('ForgotPasswordScreen');
    }

    render() {
        return (
            <View style={{ backgroundColor: 'gray', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Login Screen</Text>
                <TextInput 
                    style={{ width: 300, height: 40, backgroundColor: '#E6E4E6', marginBottom: 30 }}
                    placeholder="Enter your email"
                    underlineColorAndroid="transparent"
                    onChangeText={(text) => this.setState({txtEmail: text})}
                    value={this.state.txtEmail}
                />
                <TextInput 
                    style={{ width: 300, height: 40, backgroundColor: '#E6E4E6', marginBottom: 30 }}
                    placeholder="Enter your password"
                    underlineColorAndroid="transparent"
                    onChangeText={(text) => this.setState({txtPassword: text})}
                    value={this.state.txtPassword}
                />
                <Button 
                    title="Login"
                    onPress={ this.btnLogin.bind(this) }
                />
                <Button 
                    title="Go to ForgotPassword"
                    onPress={ this.btnGoToForgotPassword.bind(this) }
                />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    nav: state.nav
});

export default connect(mapStateToProps)(LoginScreen);