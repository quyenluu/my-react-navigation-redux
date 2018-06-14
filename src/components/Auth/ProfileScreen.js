import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';

import AuthAPI from '../../api/AuthAPI';
import { logoutAction } from '../../redux/actions/ActionCreator';

class ProfileScreen extends Component {
    
    btnLogout = async() => {
        try {
            await AuthAPI.logout();
            this.props.dispatch(logoutAction());
            this.props.navigation.navigate('LoginScreen');
        } catch (error) {
            alert('CANNOT LOGOUT');
        }
    }

    render() {
        return (
            <View style={{ backgroundColor: 'pink', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Profile Screen</Text>
                <Text>Hello</Text>
                <Text>{this.props.auth.dataUser.fullName}</Text>
                <Button 
                    title='Logout'
                    onPress={this.btnLogout}
                />
            </View>
        );
    }
}

mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(ProfileScreen);