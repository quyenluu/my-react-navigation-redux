import { createStackNavigator } from 'react-navigation';

import LoginScreen from './LoginScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import ProfileScreen from './ProfileScreen';

export const AuthStack = createStackNavigator(
    {
        LoginScreen: { screen: LoginScreen },
        ForgotPasswordScreen: { screen: ForgotPasswordScreen }
    },
    {
        initialRouteName: 'LoginScreen'
    }
)
