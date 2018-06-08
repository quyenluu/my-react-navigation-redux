import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class ProductScreen extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'gray', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Product Screen</Text>
                <Button 
                    title='Go to Product Detail'
                    onPress={ () => this.props.navigation.navigate('ProductDetailScreen')}
                />
            </View>
        );
    }
}