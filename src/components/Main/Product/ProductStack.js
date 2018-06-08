import { createStackNavigator } from 'react-navigation';

import ProductScreen from './ProductScreen';
import ProductDetailScreen from './ProductDetailScreen';

export const ProductStack = createStackNavigator (
    {
        ProductScreen: { screen: ProductScreen },
        ProductDetailScreen: { screen: ProductDetailScreen }
    },
    {
        initialRouteName: 'ProductScreen'
    }
)