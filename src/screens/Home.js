import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import axios from 'axios'

import {connect} from 'react-redux'

import {GET_TITTLE} from '../redux/actions/user'

class Home extends Component {

   

  componentDidMount(){
     
  }

    
  // componentDidMount(){
  //   this.props.dispatch(GET_TITTLE())
  // }

  handleGetTittle=()=>{

    //with promise middleware
    // this.props.dispatch(GET_TITTLE())

    //without promise middleware
    axios.get('https://jsonplaceholder.typicode.com/posts/1').then((res)=>(

      this.props.dispatch(GET_TITTLE(res.data))
     ))
  }



  render() {
    // alert(JSON.stringify(this.props.user.isLoading || this.props.user.data))
    return (
      <View style={{justifyContent:'center',alignItems:'center',flex:1}} >
         <Text>tittle: {this.props.user.data.title}</Text>
        <TouchableOpacity style={{ backgroundColor: "green" ,height:50,width:70,justifyContent:'center',alignItems:'center'}} onPress={this.handleGetTittle}>
          <Text style={{color:'white'}}>GET Tittle</Text>
        </TouchableOpacity>

        
      </View>
    );
  }
}


const mapStateToProps=(state)=>({
    user:state.userReducer
})

export default connect(mapStateToProps)(Home);
