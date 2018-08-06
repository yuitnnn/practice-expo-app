import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Foundation, Feather, Ionicons } from '@expo/vector-icons';

export default class Instagram extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Feather name="camera" size={26} color="#000" />
          <Ionicons name="ios-paper-plane-outline" size={26} color="#000" />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity>
            <Foundation name="home" size={26} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="search" size={26} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="plus-square" size={26} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="heart" size={26} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Foundation name="home" size={26} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
    position: 'relative',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 66,
    paddingTop: 25,
    paddingHorizontal: 20,
    backgroundColor: '#fafafa',
    borderBottomWidth: 1,
    borderBottomColor: '#e4e4e4',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 50,
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fafafa',
    borderTopWidth: 1,
    borderTopColor: '#e4e4e4',
  }
});
