
import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  PickerIOS,
  AlertIOS,
} from 'react-native';

var Util = require('../../CommonComponent/util');
var Service = require('../../service/service');

export default class AddUser extends Component{

  render(){

    return (
      <ScrollView style={{paddingTop:30}}>
        <View style={styles.row}>
          <Text style={styles.label}>用户名</Text>
          <TextInput style={styles.input} onChangeText={this._setUserName.bind(this)}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>密码</Text>
          <TextInput style={styles.input} password={true} placeholder="初始密码" onChangeText={this._setPassword.bind(this)}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>邮箱</Text>
          <TextInput style={styles.input} onChangeText={this._setEmail.bind(this)}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>电话</Text>
          <TextInput style={styles.input} onChangeText={this._setTel.bind(this)}/>
        </View>

        <View style={{marginTop:30, alignItems:'center', justifyContent:'center'}}>
          <TouchableOpacity onPress={this._addUser.bind(this)}>
            <View style={styles.btn}>
              <Text>创建用户</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  _setUserName(val){
    this.setState({
      username: val
    });
  }

  _setPassword(val){
    this.setState({
      password: val
    });
  }

  _setEmail(val){
    this.setState({
      email: val
    });
  }

  _setTel(val){
    this.setState({
      tel: val
    });
  }

  _addUser(){
    var username = this.state.username;
    var email = this.state.email;
    var password = this.state.password;
    var tel = this.state.tel;

    if(!username || !email || !password || !tel){
      return AlertIOS.alert('提示', '用户名、初始密码、邮箱、电话必填，请确认!');
    }
    var obj = {
      username: username,
      email: email,
      password: password,
      tel: tel
    };

    var path =  Service.host + Service.createUser;
    Util.post(path, obj, function(data){
      if(data.status){
        AlertIOS.alert('成功','创建用户成功，请告知用户初始密码');
      }else{
        AlertIOS.alert('失败','创建用户失败');
      }
    });

  }

}


var styles = StyleSheet.create({
  row:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:7,
  },
  label:{
    width:50,
    marginLeft:10,
  },
  input:{
    borderWidth: Util.pixel,
    height:35,
    flex:1,
    marginRight:20,
    borderColor:'#ddd',
    borderRadius: 4,
    paddingLeft:5,
    fontSize:14,
  },
  btn:{
    borderColor:'#268DFF',
    height:35,
    width:200,
    borderRadius:5,
    borderWidth:Util.pixel,
    alignItems:'center',
    justifyContent:'center'
  }
});
