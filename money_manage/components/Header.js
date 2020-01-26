import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
class Header extends Component {
    render() {
        return (
            <View style={styles.Header}>
            </View>
        );
    }
}

export default Header;

const styles = StyleSheet.create({
    Header:{
        backgroundColor:'#662EFF',
        height:'100'
    }
})
