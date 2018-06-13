import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StatusBar, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

class LoadingScreen extends Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        console.log('userToken: ' + userToken);
        this.props.navigation.navigate(userToken ? 'MainStack' : 'AuthStack');
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator />
                <StatusBar hidden={ true } />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    nav: state.nav
});

export default connect(mapStateToProps)(LoadingScreen);