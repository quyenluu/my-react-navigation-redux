import { createStackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';

export const HomeStack = createStackNavigator (
    {
        HomeScreen: { screen: HomeScreen }
    },
    {
        initialRouteName: 'HomeScreen'
    }
)