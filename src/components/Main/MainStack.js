import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeStack } from './Home/HomeStack';
import { ProductStack } from './Product/ProductStack';

export const MainStack = createBottomTabNavigator (
    {
        HomeStack: { screen: HomeStack },
        ProductStack: { screen: ProductStack }
    },
    {
        initialRouteName: 'HomeStack',
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'HomeStack') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                } else if (routeName === 'ProductStack') {
                    iconName = `ios-options${focused ? '' : '-outline'}`;
                }
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