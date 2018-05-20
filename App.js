import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import RootNavigator from './navigator/RootNavigator';
import RootTabs from './navigator/RootTabs';
import RootDrawer from './navigator/RootDrawer';

export default class App extends React.Component {
  render() {
    return (
      <RootDrawer />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
