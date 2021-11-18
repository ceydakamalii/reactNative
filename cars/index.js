//import libraries
import React from 'react';
import {Text, AppRegistry} from 'react-native';

import Header from './src/components/Header';

//create component
const App = () => {
  return <Header title={"Cars"}/>;
};

//render component to screen
AppRegistry.registerComponent('cars', () => App);
