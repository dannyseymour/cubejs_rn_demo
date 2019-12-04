/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Platform, StyleSheet, StatusBar, View, SafeAreaView } from 'react-native';
import Dashboard from './screens/Dashboard';

export default class App extends React.Component{
  render(){
    return(
        <SafeAreaView style={{flex:1, backgroundColor: '#fff'}}>
          <View style={styles.container}>
            {Platform.OS ==='ios'&& <StatusBar barStyle="default"/> }
            <Dashboard />
          </View>
        </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
  },
    });
