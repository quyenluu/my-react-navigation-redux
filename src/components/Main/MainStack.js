import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeStack } from './Home/HomeStack';
import { ProductStack } from './Product/ProductStack';
import ProfileScreen from '../Auth/ProfileScreen';

export const MainStack = createBottomTabNavigator (
    {
        HomeStack: { screen: HomeStack },
        ProductStack: { screen: ProductStack },
        ProfileScreen: { screen: ProfileScreen }
    },
    {
        initialRouteName: 'HomeStack',
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                switch(routeName) {
                    case 'HomeStack':
                        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                        break;
                    case 'ProductStack':
                        iconName = `ios-options${focused ? '' : '-outline'}`;
                        break;
                    case 'ProfileScreen':
                        iconName = `ios-body${focused ? '' : '-outline'}`;
                        break;
                }
                // if (routeName === 'HomeStack') {
                //     iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                // } else if (routeName === 'ProductStack') {
                //     iconName = `ios-options${focused ? '' : '-outline'}`;
                // }
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            style: { backgroundColor: 'aqua' }
        }
    }
)