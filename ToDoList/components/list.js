import React, { Component } from 'react';
import { Text,View,FlatList,StyleSheet, Shape ,CheckBox,Button} from 'react-native'
import { Left, Right } from 'native-base';
class list extends Component {
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
    constructor(props) {
        super(props);
        this.state ={
            ToDoNow:[
                {
                  id:1,
                  Title:'Hallo World',
                  Detail:'กินข้าว',
                  status:false,
                  create_Date : this.formatDate(new Date()),
                  update_Date : this.formatDate(new Date()),
                },
                {
                  id:2,
                  Title:'Hallo World2',
                  Detail:'ไปทำงาน',
                  status:false,
                  create_Date : this.formatDate(new Date()),
                  update_Date : this.formatDate(new Date()),
                }
              ]
        }
        let CheckBox = this.state.ToDoNow.map(a=>`CheckBox${a.id}`)
    }
    
    changeNumber(id){
        const ToDoNowFind = this.state.ToDoNow.find(a=>a.id == id)
        this.setState({
            ToDoNow: this.state.ToDoNow.map(a=>{
                if(a.id == ToDoNowFind.id){
                    a.status = !a.status
                    return a
                }else{
                    return a;
                }
            })      
        })
    }

    render() {
        let ToDoList_do = this.state.ToDoNow
        return (
            <View style={styles.container} >
                <FlatList data={ToDoList_do}
                    renderItem={({item})=>
                        <View style={styles.boxList}>
                            <CheckBox value={item.status} checked={item.id} onChange={()=>this.changeNumber(item.id)}/>
                            <View style={styles.titleBox}>
                                <Text style={item.status==false?styles.detail:styles.detailThrough}>{item.Detail}</Text>
                                <View>
                                    <Text style={styles.Date}>{item.create_Date}</Text>
                                    <Text style={styles.span}>{item.Title}</Text>
                                </View>
                            </View>
                        </View>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        padding:10,
    },
    boxList:{
        flex:1,
        height:55,
        backgroundColor:'#fff',
        marginBottom:5,
        borderRadius:8,
        padding:10,
        flexDirection:'row',
    },
    detail:{
        fontSize:16,
        alignSelf:'center',
    },
    detailThrough:{
        fontSize:16,
        alignSelf:'center',
        textDecorationLine:"line-through"
    },
    span:{
        fontSize:12,
        alignSelf:'center',
    },
    titleBox:{
        // backgroundColor:'red',
        flex:1,
        justifyContent:"space-between",
        flexDirection:"row"
        
        
    }

})

export default list;