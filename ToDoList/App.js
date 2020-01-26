import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  Button,
} from 'react-native';
import ListToDo from './components/list'

class App extends React.Component {
  formatDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }
  state={
    DateNow: this.formatDate(new Date()),
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{padding:20}}>
          <Text style={styles.title}>My Day</Text>
          <Text style={styles.span}>{this.state.DateNow}</Text>
        </View>
        <View>
          <ListToDo/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#182849',
    },
    title:{
      fontSize:50,
      color:'#fff',
      fontWeight:"bold",
    },
    span:{
      fontSize:25,
      color:'#fff',
      fontWeight:"bold",
    },

});

export default App;
