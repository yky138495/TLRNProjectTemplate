/**
 * Created by TridonLee on Mon July 22 2016 11:28:33 GMT+0800 (CST).
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  AlertIOS,
} from 'react-native';

import NWDTabBar from './nwdTabBar';

export default class NWDLogin extends Component {
//{source={{uri: 'http://7xr387.com1.z0.glb.clouddn.com/logo2.png'}}}

  _login() {
    this.props.navigator.resetTo({
      component: NWDTabBar,
      title: 'Home',
    })
  }

  _unLogin() {
    AlertIOS.alert(
      '退出',
      '无法登陆',
      [
        {
          text: '确定',
          onPress: () => console.log('你单击了确定按钮！'),
        },
        {
          text: '取消',
          onPress: () => console.log('你单击了取消按钮！'),
        },
      ]
    );
  }

  _register() {
    AlertIOS.alert(
      '注册',
      '注册新用户界面',
      [
        {
          text: '确定',
          onPress: () => console.log('你单击了确定按钮！'),
        },
        {
          text: '取消',
          onPress: () => console.log('你单击了取消按钮！'),
        },
      ]
    );
  }

  render() {
    return (
      <View style={styles.loginContainer}>
        <Image
          style={styles.logoImage}
          source={require('image!login')} />
        <TextInput
          style={styles.accountInput}
          placeholder='请输入手机号码' />
          <View style={{height:1,backgroundColor:'#f4f4f4'}} />

        <TextInput
          style={styles.passowrdInput}
          placeholder='请输入密码'
          password={true} />

        <TouchableOpacity onPress={() => this._login()}>
          <View style={styles.loginButton}>
            <Text style={{color: '#fff'}}>登录</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.viewBottom}>
          <Text style={styles.viewUnlogin} onPress={this._unLogin.bind(this)}>
               无法登录?
          </Text>
          <Text style={styles.viewRegister}  onPress={this._register.bind(this)}>
               新用户
          </Text>
        </View>

      </View>
    )
  }
}

var styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },

  logoImage:{
    borderRadius: 35,
    height: 70,
    width: 70,
    marginTop: 120,
    alignSelf: 'center',
  },

  accountInput:{
    backgroundColor: '#fff',
    marginTop: 20,
    height: 35,
    paddingLeft: 20,
    fontSize: 14,
  },

  passowrdInput:{
    backgroundColor: '#fff',
    height: 35,
    paddingLeft: 20,
    fontSize: 14,
  },

  loginButton:{
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#63B8FF',
    height: 35,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  viewUnlogin:{
    fontSize:12,
    color:'#63B8FF',
    marginLeft:10,
  },

  viewRegister:{
    fontSize:12,
    color:'#63B8FF',
    marginRight:10,
    alignItems:'flex-end',
    flex:1,
    flexDirection:'row',
    textAlign:'right',
  },

  viewBottom:{
    flex:1,
    flexDirection:'row',
    alignItems: 'flex-end',
    bottom:15,
  },
})
