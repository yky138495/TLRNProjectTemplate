/**
 * Created by TridonLee on Mon July 22 2016 11:28:33 GMT+0800 (CST).
 */
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import NWDLandingGuide from './views/App/nwdLandingGuide';
import NWDTabBar from './views/App/nwdTabBar';

class TLRNProjectTemplate extends Component {
  constructor() {
    super();
    this.state = {
      showLandingPage: false,
    }
  }

  render() {
    if (this.state.showLandingPage) {
      return (
        <NWDLandingGuide />
      );
    } else {
      return (<NWDTabBar />);
    }
  }
}

AppRegistry.registerComponent('TLRNProjectTemplate', () => TLRNProjectTemplate);
