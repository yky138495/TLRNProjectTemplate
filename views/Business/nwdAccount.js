/**
 * Created by Bruce on Mon Jan 25 2016 23:28:33 GMT+0800 (CST).
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

export default class NWDAccount extends Component {
  render(){
    return (
      <View style={styles.tabContent}>
        <TouchableOpacity onPress={this._navigateToSubview}>
          <View style={styles.button}><Text style={styles.buttonText}>Account content</Text></View>
        </TouchableOpacity>
      </View>
    );
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
