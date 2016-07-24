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
} from 'react-native';

import NWDHomeDetail from './home/nwdHomeDetail';

export default class NWDHome extends Component {
  render(){
    return (
      <View style={styles.tabContent}>
        <TouchableOpacity onPress={this._navigateToSubview.bind(this)}>
          <View style={styles.button}><Text style={styles.buttonText}>Home Content</Text></View>
        </TouchableOpacity>
      </View>
    );
  }

  _navigateToSubview() {
    this.props.navigator.push({
      component: NWDHomeDetail,
      title: "Detail",
      rightButtonTitle: 'New',
      onRightButtonPress: function(){
        alert('On right button press!');
      }
    })
  }
};

var styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
