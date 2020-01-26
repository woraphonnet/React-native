/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Header from './components/Header'
class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:'#FFF3EB',
    flex:1
  },
});




export default App;
