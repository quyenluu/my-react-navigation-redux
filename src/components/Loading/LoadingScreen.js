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

        this.props.nav.navigate(userToken? 'MainStack' : 'AuthStack');
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'content', alignItems: 'content' }}>
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