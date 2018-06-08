import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import { AuthStack } from '../components/Auth/AuthStack';
import { MainStack } from '../components/Main/MainStack';

export const AppNavigator = createStackNavigator (
    {
        AuthStack: { screen: AuthStack, navigationOptions: { header: null }},
        MainStack: { screen: MainStack, navigationOptions: { header: null }}
    },
    {
        initialRouteName: 'AuthStack'
    }
)