import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ProductDetailScreen extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'blue', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Product Detail Screen</Text>
            </View>
        );
    }
}